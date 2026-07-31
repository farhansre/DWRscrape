import os
import re
import csv
from datetime import datetime, timezone
from typing import Iterable

from fileStreams import getFileJsonStream
from utils import FileProgressLog


# -------------------------------------------------------------------
# SETTINGS
# -------------------------------------------------------------------

recursive = False

fileOrFolderPath = (
    r"/Users/sreej/Desktop/arctic_shift/sample_place"
)

posts_output_csv = "PhD_ai_writing_posts.csv"
comments_output_csv = "PhD_ai_writing_comments.csv"


# -------------------------------------------------------------------
# CONCEPT GROUPS
# -------------------------------------------------------------------

AI_TERMS = {
    # General AI terms
    "ai",
    "artificial intelligence",
    "generative ai",
    "gen ai",
    "llm",
    "llms",
    "large language model",
    "large language models",
    "language model",
    "language models",
    "chatbot",
    "chatbots",

    # GPT terms
    "gpt",
    "gpt-3",
    "gpt-3.5",
    "gpt-4",
    "gpt-4o",

    # Popular AI tools
    "chatgpt",
    "claude",
    "gemini",
    "bard",
    "copilot",
    "microsoft copilot",
    "perplexity",
    "perplexity ai",
    "deepseek",
    "grok",
    "llama",
    "mistral",

    # Research-specific AI tools
    "elicit",
    "consensus",
    "consensus ai",
    "scispace",
    "connected papers",
    "research rabbit",
    "semantic scholar",
    "scite",
}


CONCEPT_GROUPS = {
    # ---------------------------------------------------------------
    # STAGE 1: FINDING PAPERS
    # ---------------------------------------------------------------
    "finding_papers": {
        "find paper",
        "find papers",
        "finding paper",
        "finding papers",
        "found papers",
        "search paper",
        "search papers",
        "searching papers",
        "searched papers",
        "paper search",
        "paper searches",
        "article search",
        "article searches",
        "find article",
        "find articles",
        "finding article",
        "finding articles",
        "search article",
        "search articles",
        "research article",
        "research articles",
        "academic article",
        "academic articles",
        "scholarly article",
        "scholarly articles",
        "find source",
        "find sources",
        "finding source",
        "finding sources",
        "source discovery",
        "discover sources",
        "paper discovery",
        "discover paper",
        "discover papers",
        "discover article",
        "discover articles",
        "recommend paper",
        "recommend papers",
        "paper recommendation",
        "paper recommendations",
        "article recommendation",
        "article recommendations",
        "database search",
        "database searching",
        "keyword search",
        "search strategy",
        "bibliographic search",
        "citation search",
        "reference search",
        "google scholar",
        "academic database",
        "academic databases",
    },

    # ---------------------------------------------------------------
    # STAGE 1: LITERATURE REVIEWS
    # ---------------------------------------------------------------
    "literature_review": {
        "literature review",
        "literature reviews",
        "lit review",
        "lit reviews",
        "review literature",
        "reviewing literature",
        "reviewed literature",
        "related work",
        "related works",
        "related literature",
        "background section",
        "state of the art",
        "prior work",
        "previous research",
        "existing research",
        "review article",
        "review articles",
        "review paper",
        "review papers",
        "systematic review",
        "systematic reviews",
        "systematic literature review",
        "scoping review",
        "scoping reviews",
        "meta analysis",
        "meta-analysis",
        "narrative review",
        "evidence review",
        "research synthesis",
        "literature synthesis",
        "synthesize literature",
        "synthesizing literature",
        "synthesized literature",
        "research gap",
        "research gaps",
    },

    # ---------------------------------------------------------------
    # STAGE 2: READING AND UNDERSTANDING
    # ---------------------------------------------------------------
    "understanding_papers": {
        "read paper",
        "read papers",
        "reading paper",
        "reading papers",
        "understand paper",
        "understand papers",
        "understanding paper",
        "understanding papers",
        "understood paper",
        "explain paper",
        "explain papers",
        "explaining paper",
        "paper explanation",
        "article explanation",
        "interpret paper",
        "interpret papers",
        "interpret article",
        "interpret research",
        "summarize paper",
        "summarize papers",
        "summarized paper",
        "summarized papers",
        "summarizing paper",
        "summarizing papers",
        "paper summary",
        "paper summaries",
        "article summary",
        "article summaries",
        "summarize article",
        "summarize articles",
        "summarized article",
        "summarized articles",
        "research summary",
        "research summaries",
        "simplify paper",
        "simplify papers",
        "simplify research",
        "technical paper",
        "technical papers",
        "dense paper",
        "dense papers",
        "difficult paper",
        "difficult papers",
        "academic reading",
        "reading research",
        "key findings",
        "main findings",
        "research findings",
        "paper findings",
        "methodology explanation",
        "methods section",
        "results section",
    },

    # ---------------------------------------------------------------
    # STAGE 2: NOTES AND INFORMATION EXTRACTION
    # ---------------------------------------------------------------
    "note_taking": {
        "take notes",
        "takes notes",
        "taking notes",
        "took notes",
        "note taking",
        "note-taking",
        "research notes",
        "paper notes",
        "article notes",
        "literature notes",
        "annotate paper",
        "annotate papers",
        "annotating paper",
        "annotating papers",
        "paper annotation",
        "article annotation",
        "extract information",
        "extracting information",
        "information extraction",
        "extract findings",
        "extracting findings",
        "extract data",
        "extracting data",
        "extract quotes",
        "extracting quotes",
        "extract evidence",
        "extracting evidence",
        "key points",
        "main points",
        "important points",
        "highlight paper",
        "highlight papers",
        "highlighting paper",
        "highlighting papers",
        "reading notes",
        "study notes",
        "summary notes",
    },

    # ---------------------------------------------------------------
    # STAGE 3: ORGANIZING RESEARCH
    # ---------------------------------------------------------------
    "organizing_research": {
        "organize research",
        "organizing research",
        "organized research",
        "organize paper",
        "organize papers",
        "organizing paper",
        "organizing papers",
        "organize article",
        "organize articles",
        "organizing article",
        "organizing articles",
        "organize source",
        "organize sources",
        "organizing source",
        "organizing sources",
        "manage paper",
        "manage papers",
        "managing paper",
        "managing papers",
        "manage source",
        "manage sources",
        "managing source",
        "managing sources",
        "reference manager",
        "reference managers",
        "reference management",
        "citation manager",
        "citation managers",
        "citation management",
        "research organization",
        "literature organization",
        "paper organization",
        "source organization",
        "research workflow",
        "academic workflow",
        "writing workflow",
        "research process",
        "literature matrix",
        "synthesis matrix",
        "evidence table",
        "research database",
        "knowledge management",
        "zotero",
        "mendeley",
        "endnote",
        "obsidian",
        "notion",
    },

    # ---------------------------------------------------------------
    # STAGE 3: OUTLINING AND PLANNING
    # ---------------------------------------------------------------
    "outlining": {
        "create outline",
        "creates outline",
        "creating outline",
        "created outline",
        "make outline",
        "making outline",
        "made outline",
        "paper outline",
        "research outline",
        "essay outline",
        "article outline",
        "thesis outline",
        "dissertation outline",
        "outline paper",
        "outline papers",
        "outline essay",
        "outline article",
        "outline thesis",
        "outline dissertation",
        "structure paper",
        "structure papers",
        "structuring paper",
        "structuring papers",
        "paper structure",
        "essay structure",
        "article structure",
        "thesis structure",
        "dissertation structure",
        "plan paper",
        "planning paper",
        "planned paper",
        "writing plan",
        "research plan",
        "section organization",
        "organize sections",
        "organizing sections",
        "argument structure",
        "chapter outline",
        "chapter structure",
    },

    # ---------------------------------------------------------------
    # STAGE 4: ACADEMIC WRITING
    # ---------------------------------------------------------------
    "academic_writing": {
        "academic writing",
        "research writing",
        "scholarly writing",
        "scientific writing",
        "write paper",
        "write papers",
        "writes paper",
        "writing paper",
        "writing papers",
        "wrote paper",
        "write article",
        "write articles",
        "writing article",
        "writing articles",
        "write essay",
        "write essays",
        "writing essay",
        "writing essays",
        "write thesis",
        "writing thesis",
        "write dissertation",
        "writing dissertation",
        "research paper",
        "research papers",
        "academic paper",
        "academic papers",
        "term paper",
        "term papers",
        "conference paper",
        "conference papers",
        "journal article",
        "journal articles",
        "manuscript writing",
        "write manuscript",
        "writing manuscript",
        "draft paper",
        "draft papers",
        "drafting paper",
        "drafting papers",
        "draft essay",
        "drafting essay",
        "generate text",
        "generated text",
        "text generation",
        "write paragraph",
        "write paragraphs",
        "writing paragraph",
        "writing paragraphs",
        "write section",
        "write sections",
        "writing section",
        "writing sections",
    },

    # ---------------------------------------------------------------
    # STAGE 4: EDITING AND REVISION
    # ---------------------------------------------------------------
    "editing_revision": {
        "edit paper",
        "editing paper",
        "edited paper",
        "revise paper",
        "revising paper",
        "revised paper",
        "paper revision",
        "edit essay",
        "editing essay",
        "edited essay",
        "revise essay",
        "revising essay",
        "essay revision",
        "edit thesis",
        "editing thesis",
        "revise thesis",
        "revising thesis",
        "edit manuscript",
        "editing manuscript",
        "revise manuscript",
        "revising manuscript",
        "manuscript revision",
        "proofread paper",
        "proofreading paper",
        "proofread essay",
        "proofreading essay",
        "grammar correction",
        "correct grammar",
        "correcting grammar",
        "improve grammar",
        "improving grammar",
        "improve writing",
        "improving writing",
        "improve clarity",
        "improving clarity",
        "clarity editing",
        "rewrite paragraph",
        "rewriting paragraph",
        "rewrote paragraph",
        "rephrase paragraph",
        "rephrasing paragraph",
        "paraphrase text",
        "paraphrasing text",
        "paraphrasing",
        "academic tone",
        "formal tone",
        "sentence structure",
        "writing feedback",
        "editing feedback",
    },

    # ---------------------------------------------------------------
    # CITATIONS AND REFERENCES
    # ---------------------------------------------------------------
    "citations_references": {
        "citation",
        "citations",
        "cite source",
        "cite sources",
        "citing source",
        "citing sources",
        "find citation",
        "find citations",
        "finding citation",
        "finding citations",
        "generate citation",
        "generate citations",
        "generated citation",
        "generated citations",
        "citation generation",
        "reference list",
        "reference lists",
        "bibliography",
        "bibliographies",
        "works cited",
        "citation style",
        "citation styles",
        "apa citation",
        "apa citations",
        "mla citation",
        "mla citations",
        "chicago citation",
        "chicago citations",
        "harvard citation",
        "harvard citations",
        "asa citation",
        "asa citations",
        "in text citation",
        "in text citations",
        "in-text citation",
        "in-text citations",
        "citation formatting",
        "format citation",
        "format citations",
        "format references",
        "citation verification",
        "verify citation",
        "verify citations",
        "fake citation",
        "fake citations",
        "fabricated citation",
        "fabricated citations",
        "hallucinated citation",
        "hallucinated citations",
        "citation hallucination",
        "source attribution",
    },

    # ---------------------------------------------------------------
    # RESEARCH IDEAS AND QUESTIONS
    # ---------------------------------------------------------------
    "research_ideas": {
        "research question",
        "research questions",
        "generate research question",
        "generate research questions",
        "research idea",
        "research ideas",
        "topic idea",
        "topic ideas",
        "paper topic",
        "paper topics",
        "thesis topic",
        "thesis topics",
        "dissertation topic",
        "dissertation topics",
        "brainstorm research",
        "brainstorm ideas",
        "brainstorm topic",
        "brainstorm topics",
        "develop topic",
        "developing topic",
        "narrow topic",
        "narrowing topic",
        "research gap",
        "research gaps",
        "identify gap",
        "identify gaps",
        "hypothesis",
        "hypotheses",
        "generate hypothesis",
        "generate hypotheses",
        "problem statement",
        "research objective",
        "research objectives",
    },

    # ---------------------------------------------------------------
    # ARGUMENTS AND ANALYSIS
    # ---------------------------------------------------------------
    "argument_analysis": {
        "develop argument",
        "developing argument",
        "developed argument",
        "academic argument",
        "research argument",
        "thesis statement",
        "create thesis statement",
        "write thesis statement",
        "argument development",
        "support argument",
        "supporting argument",
        "counterargument",
        "counterarguments",
        "counter argument",
        "counter arguments",
        "critical analysis",
        "analyze evidence",
        "analyzing evidence",
        "analyzed evidence",
        "analyze findings",
        "analyzing findings",
        "interpret findings",
        "interpreting findings",
        "interpret results",
        "interpreting results",
        "discussion section",
        "analysis section",
        "connect ideas",
        "connecting ideas",
        "compare studies",
        "comparing studies",
        "compare papers",
        "comparing papers",
        "contrast studies",
        "contrasting studies",
        "synthesize sources",
        "synthesizing sources",
        "synthesize evidence",
        "synthesizing evidence",
    },

    # ---------------------------------------------------------------
    # RESEARCH METHODS AND DATA ANALYSIS
    # ---------------------------------------------------------------
    "methods_analysis": {
        "research method",
        "research methods",
        "methodology",
        "methodology section",
        "methods section",
        "study design",
        "research design",
        "qualitative analysis",
        "quantitative analysis",
        "data analysis",
        "analyze data",
        "analyzing data",
        "analyzed data",
        "statistical analysis",
        "coding qualitative data",
        "thematic analysis",
        "content analysis",
        "survey design",
        "interview questions",
        "experiment design",
        "interpret results",
        "interpreting results",
        "results interpretation",
        "write methods",
        "writing methods",
        "write methodology",
        "writing methodology",
        "write results",
        "writing results",
    },

    # ---------------------------------------------------------------
    # ETHICS, POLICY, AND ACCEPTABILITY
    # ---------------------------------------------------------------
    "ethics_policy": {
        "academic integrity",
        "academic misconduct",
        "plagiarism",
        "plagiarize",
        "plagiarized",
        "cheating",
        "ai policy",
        "ai policies",
        "chatgpt policy",
        "chatgpt policies",
        "university policy",
        "university policies",
        "journal policy",
        "journal policies",
        "publisher policy",
        "publisher policies",
        "acceptable use",
        "responsible use",
        "ethical use",
        "ethics of ai",
        "disclose ai",
        "disclosing ai",
        "ai disclosure",
        "ai disclosures",
        "declare ai",
        "declaring ai",
        "ai declaration",
        "authorship",
        "ai authorship",
        "coauthor",
        "coauthors",
        "co-author",
        "co-authors",
        "research ethics",
        "student misconduct",
        "detect ai",
        "detecting ai",
        "ai detection",
        "ai detector",
        "ai detectors",
        "turnitin",
    },

    # ---------------------------------------------------------------
    # ACCURACY AND TRUST
    # ---------------------------------------------------------------
    "accuracy_trust": {
        "hallucination",
        "hallucinations",
        "hallucinate",
        "hallucinated",
        "made up source",
        "made up sources",
        "fake source",
        "fake sources",
        "fake citation",
        "fake citations",
        "fabricated source",
        "fabricated sources",
        "fabricated citation",
        "fabricated citations",
        "incorrect citation",
        "incorrect citations",
        "wrong citation",
        "wrong citations",
        "unreliable",
        "accuracy",
        "accurate",
        "verify output",
        "verifying output",
        "verify information",
        "verifying information",
        "fact check",
        "fact-check",
        "fact checking",
        "source verification",
        "citation verification",
        "trust chatgpt",
        "trust ai",
        "reliable source",
        "reliable sources",
        "bias",
        "biased output",
    },

    # ---------------------------------------------------------------
    # PRODUCTIVITY AND WORKFLOW
    # ---------------------------------------------------------------
    "productivity_workflow": {
        "save time",
        "saves time",
        "saving time",
        "saved time",
        "time saving",
        "time-saving",
        "speed up research",
        "speeding up research",
        "speed up writing",
        "speeding up writing",
        "research productivity",
        "writing productivity",
        "research assistant",
        "writing assistant",
        "academic assistant",
        "research workflow",
        "writing workflow",
        "automate research",
        "automating research",
        "automate writing",
        "automating writing",
        "automation",
        "efficient research",
        "efficient writing",
        "productivity tool",
        "productivity tools",
        "research tool",
        "research tools",
        "writing tool",
        "writing tools",
        "use ai for research",
        "using ai for research",
        "used ai for research",
        "use chatgpt for research",
        "using chatgpt for research",
        "used chatgpt for research",
        "use ai for writing",
        "using ai for writing",
        "used ai for writing",
        "use chatgpt for writing",
        "using chatgpt for writing",
        "used chatgpt for writing",
    },
}


# storage
post_rows = []
comment_rows = []

seen_post_ids = set()
seen_comment_ids = set()

# IDs of posts that matched our concepts.
matched_post_ids = set()

all_rows = []


#text processing 

def normalize_text(text: str) -> str:
    """
    Lowercases text and normalizes punctuation and whitespace.

    Hyphens are replaced with spaces so forms such as:
        "AI-assisted"
    can match:
        "ai assisted"
    """

    if text is None:
        return ""

    text = str(text).lower()

    text = text.replace("’", "'")
    text = text.replace("–", "-")
    text = text.replace("—", "-")
    text = text.replace("-", " ")

    text = re.sub(r"\s+", " ", text)

    return text.strip()


def phrase_is_present(phrase: str, text: str) -> bool:
    """
    Returns True when a word or multi-word phrase occurs in the text.
    """

    normalized_phrase = normalize_text(phrase)

    if not normalized_phrase:
        return False

    pattern = (
        r"(?<!\w)"
        + re.escape(normalized_phrase)
        + r"(?!\w)"
    )

    return re.search(pattern, text) is not None


def find_matching_terms(terms: set[str], text: str) -> list[str]:
    """
    Returns all terms from a concept group that appear in the text.
    """

    matches = {
        term
        for term in terms
        if phrase_is_present(term, text)
    }

    return sorted(matches)


def matches_concepts(*text_parts: str):
    """
    A post or comment qualifies when it contains:

    1. At least one AI-related term
    2. At least one academic research or writing concept

    It may match more than one concept group.
    """

    combined_text = " ".join(
        str(part)
        for part in text_parts
        if part
    )

    normalized_text = normalize_text(combined_text)

    if not normalized_text:
        return None

    matched_ai_terms = find_matching_terms(
        AI_TERMS,
        normalized_text
    )

    if not matched_ai_terms:
        return None

    matched_groups = {}

    for group_name, group_terms in CONCEPT_GROUPS.items():
        matched_terms = find_matching_terms(
            group_terms,
            normalized_text
        )

        if matched_terms:
            matched_groups[group_name] = matched_terms

    if not matched_groups:
        return None

    return {
        "ai_terms": matched_ai_terms,
        "concept_groups": matched_groups,
    }


def flatten_concept_terms(match: dict) -> list[str]:
    """
    Combines terms from all matching concept groups into one list.
    """

    return sorted({
        term
        for terms in match["concept_groups"].values()
        for term in terms
    })


def format_date(created_utc) -> str:
    """
    Converts a Reddit Unix timestamp to a readable UTC timestamp.
    """

    if created_utc in (None, ""):
        return ""

    try:
        timestamp = float(created_utc)

        return datetime.fromtimestamp(
            timestamp,
            tz=timezone.utc
        ).strftime("%Y-%m-%d %H:%M:%S UTC")

    except (TypeError, ValueError, OSError, OverflowError):
        return ""


def make_reddit_permalink(permalink: str) -> str:
    """
    Converts a relative Reddit permalink into a complete URL.
    """

    permalink = str(permalink or "").strip()

    if not permalink:
        return ""

    if permalink.startswith("http://") or permalink.startswith("https://"):
        return permalink

    if not permalink.startswith("/"):
        permalink = "/" + permalink

    return f"https://www.reddit.com{permalink}"


def clean_reddit_id(value) -> str:
    """
    Removes Reddit prefixes such as t1_ and t3_.
    """

    value = str(value or "").strip()

    if value.startswith("t1_") or value.startswith("t3_"):
        return value[3:]

    return value


#process

def process_post(row: dict):
    post_id = clean_reddit_id(row.get("id"))

    if not post_id:
        return

    if post_id in seen_post_ids:
        return

    title = row.get("title", "") or ""
    selftext = row.get("selftext", "") or ""

    match = matches_concepts(title, selftext)

    if match is None:
        return

    matched_group_names = sorted(
        match["concept_groups"].keys()
    )

    matched_concept_terms = flatten_concept_terms(match)

    created_utc = row.get("created_utc", "")

    post_rows.append({
        "concept_groups": "; ".join(matched_group_names),
        "matched_ai_terms": "; ".join(match["ai_terms"]),
        "matched_concept_terms": "; ".join(matched_concept_terms),
        "id": post_id,
        "subreddit": row.get("subreddit", ""),
        "title": title,
        "selftext": selftext,
        "author": row.get("author", ""),
        "score": row.get("score", 0) or 0,
        "num_comments": row.get("num_comments", 0) or 0,
        "created_utc": created_utc,
        "created_date": format_date(created_utc),
        "url": row.get("url", ""),
        "permalink": make_reddit_permalink(
            row.get("permalink", "")
        ),
    })

    matched_post_ids.add(post_id)
    seen_post_ids.add(post_id)


#process

def process_comment(row: dict):
    comment_id = clean_reddit_id(row.get("id"))

    if not comment_id:
        return

    if comment_id in seen_comment_ids:
        return

    body = row.get("body", "") or ""

    if body.strip().lower() in {"[deleted]", "[removed]"}:
        return

    link_id = str(row.get("link_id", "") or "").strip()
    post_id = clean_reddit_id(link_id)

    if post_id not in matched_post_ids:
        return

    created_utc = row.get("created_utc", "")

    parent_id = str(
        row.get("parent_id", "") or ""
    ).strip()

    comment_rows.append({
        "id": comment_id,
        "post_id": post_id,
        "link_id": link_id,
        "parent_id": parent_id,
        "subreddit": row.get("subreddit", ""),
        "author": row.get("author", ""),
        "body": body,
        "score": row.get("score", 0) or 0,
        "created_utc": created_utc,
        "created_date": format_date(created_utc),
        "permalink": make_reddit_permalink(
            row.get("permalink", "")
        ),
    })

    seen_comment_ids.add(comment_id)


# process

def processFile(path: str):
    if not os.path.isfile(path):
        print(f"Skipping non-file path: {path}")
        return

    print(f"Processing file {path}")

    with open(path, "rb") as file:

        jsonStream = getFileJsonStream(path, file)

        if jsonStream is None:
            print(f"Skipping unknown file type: {path}")
            return

        progressLog = FileProgressLog(path, file)

        for row in jsonStream:

            progressLog.onRow()

            if not isinstance(row, dict):
                continue

            subreddit = str(
                row.get("subreddit", "")
            ).strip().lower()

            if subreddit not in {
                "askacademia",
                "academia",
                "phd",
                "gradschool",}:
                continue

            all_rows.append(row)

        progressLog.logProgress("\n")

def process_cached_rows():

    print()

    print("Pass 1/2 : Matching posts...")

    for row in all_rows:

        if "title" in row:
            process_post(row)

    print(
        f"Matched {len(post_rows)} posts."
    )

    print()

    print("Pass 2/2 : Collecting comments...")

    for row in all_rows:

        if "body" in row and "link_id" in row:
            process_comment(row)

    print(
        f"Collected {len(comment_rows)} comments."
    )

def processFolder(path: str):
    fileIterator: Iterable[str]

    if recursive:

        def recursiveFileIterator():
            for root, _, files in os.walk(path):
                for filename in sorted(files):
                    yield os.path.join(root, filename)

        fileIterator = recursiveFileIterator()

    else:
        fileIterator = (
            os.path.join(path, filename)
            for filename in sorted(os.listdir(path))
        )

    for index, file_path in enumerate(fileIterator, start=1):
        if not os.path.isfile(file_path):
            continue

        print(
            f"Processing file {index:3}: {file_path}"
        )

        processFile(file_path)


# csv converter 

def write_posts_csv():
    fieldnames = [
        "concept_groups",
        "matched_ai_terms",
        "matched_concept_terms",
        "id",
        "subreddit",
        "title",
        "selftext",
        "author",
        "score",
        "num_comments",
        "created_utc",
        "created_date",
        "url",
        "permalink",
    ]

    with open(
        posts_output_csv,
        "w",
        newline="",
        encoding="utf-8"
    ) as file:
        writer = csv.DictWriter(
            file,
            fieldnames=fieldnames
        )

        writer.writeheader()
        writer.writerows(post_rows)


def write_comments_csv():

    fieldnames = [
        "id",
        "post_id",
        "link_id",
        "parent_id",
        "subreddit",
        "author",
        "body",
        "score",
        "created_utc",
        "created_date",
        "permalink",
    ]

    with open(
        comments_output_csv,
        "w",
        newline="",
        encoding="utf-8",
    ) as file:

        writer = csv.DictWriter(
            file,
            fieldnames=fieldnames,
        )

        writer.writeheader()
        writer.writerows(comment_rows)

    with open(
        comments_output_csv,
        "w",
        newline="",
        encoding="utf-8"
    ) as file:
        writer = csv.DictWriter(
            file,
            fieldnames=fieldnames
        )

        writer.writeheader()
        writer.writerows(comment_rows)


# -------------------------------------------------------------------
# SUMMARY
# -------------------------------------------------------------------

def print_summary():

    post_group_counts = {}

    for row in post_rows:

        groups = row["concept_groups"].split("; ")

        for group in groups:

            if group:

                post_group_counts[group] = (
                    post_group_counts.get(group, 0) + 1
                )

    print()

    print("=" * 60)
    print("RESULTS")
    print("=" * 60)

    print(f"Matched posts     : {len(post_rows)}")
    print(f"Collected comments: {len(comment_rows)}")

    print()

    print(f"Posts CSV    : {os.path.abspath(posts_output_csv)}")
    print(f"Comments CSV : {os.path.abspath(comments_output_csv)}")

    if post_group_counts:

        print()

        print("Post matches by concept group:")

        for group, count in sorted(
            post_group_counts.items(),
            key=lambda item: (-item[1], item[0]),
        ):

            print(f"  {group}: {count}")

    print("=" * 60)


def main():
    if not os.path.exists(fileOrFolderPath):
        raise FileNotFoundError(
            f"Input path does not exist: {fileOrFolderPath}"
        )

    if os.path.isdir(fileOrFolderPath):
        processFolder(fileOrFolderPath)
    else:
        processFile(fileOrFolderPath)

    process_cached_rows()

    # Sort results to make the CSV files easier to inspect.
    post_rows.sort(
        key=lambda row: (
            row["concept_groups"],
            -(row["score"] or 0),
            row["created_utc"] or 0,
        )
    )

    comment_rows.sort(
    key=lambda row: (
        row["post_id"],
        -(row["score"] or 0),
        row["created_utc"] or 0,
    )
)

    write_posts_csv()
    write_comments_csv()
    print_summary()

    print("Done")


if __name__ == "__main__":
    main()