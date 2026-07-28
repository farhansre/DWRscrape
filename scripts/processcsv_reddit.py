import os
import re
from html import escape

import pandas as pd


# -------------------------------------------------------------------
# INPUT AND OUTPUT PATHS
# -------------------------------------------------------------------

base_folder = "/Users/sreej/Desktop/arctic_shift"

posts_input_csv = os.path.join(
    base_folder,
    "askacademia_ai_writing_posts.csv"
)

comments_input_csv = os.path.join(
    base_folder,
    "askacademia_ai_writing_comments.csv"
)

output_folder = os.path.join(
    base_folder,
    "readable_outputs"
)

os.makedirs(output_folder, exist_ok=True)


# -------------------------------------------------------------------
# OUTPUT FILES
# -------------------------------------------------------------------

posts_clean_csv_path = os.path.join(
    output_folder,
    "askacademia_posts_readable.csv"
)

comments_clean_csv_path = os.path.join(
    output_folder,
    "askacademia_comments_readable.csv"
)

posts_md_path = os.path.join(
    output_folder,
    "askacademia_posts_digest.md"
)

comments_md_path = os.path.join(
    output_folder,
    "askacademia_comments_digest.md"
)

combined_md_path = os.path.join(
    output_folder,
    "askacademia_combined_digest.md"
)

posts_html_path = os.path.join(
    output_folder,
    "askacademia_posts_digest.html"
)

comments_html_path = os.path.join(
    output_folder,
    "askacademia_comments_digest.html"
)

combined_html_path = os.path.join(
    output_folder,
    "askacademia_combined_digest.html"
)


# -------------------------------------------------------------------
# HELPERS
# -------------------------------------------------------------------

def clean_text(text, max_chars=None):
    """
    Cleans Reddit text by removing repeated whitespace.

    If max_chars is supplied, long text is shortened.
    If max_chars is None, the complete text is preserved.
    """

    if pd.isna(text):
        return ""

    text = str(text)

    text = text.replace("\r", " ")
    text = text.replace("\n", " ")
    text = re.sub(r"\s+", " ", text).strip()

    if max_chars is not None and len(text) > max_chars:
        return text[:max_chars].rstrip() + "..."

    return text


def safe_value(value, default=""):
    """
    Returns a printable value without displaying pandas NaN.
    """

    if pd.isna(value):
        return default

    return value


def safe_number(value, default=0):
    """
    Converts numeric CSV values safely.
    """

    if pd.isna(value):
        return default

    try:
        numeric_value = float(value)

        if numeric_value.is_integer():
            return int(numeric_value)

        return numeric_value

    except (TypeError, ValueError):
        return default


def split_concept_groups(value):
    """
    Converts a semicolon-separated concept-group field into a list.
    """

    if pd.isna(value):
        return []

    return [
        group.strip()
        for group in str(value).split(";")
        if group.strip()
    ]


def format_group_name(group_name):
    """
    Makes internal group names easier to read.

    Example:
        finding_papers -> Finding Papers
    """

    return str(group_name).replace("_", " ").title()


def make_group_rows(df):
    """
    Creates one copy of each row for every concept group it matches.

    A post matching both literature_review and academic_writing
    will appear under both sections in the digest.
    """

    expanded_rows = []

    for _, row in df.iterrows():
        groups = split_concept_groups(
            row.get("concept_groups", "")
        )

        if not groups:
            groups = ["uncategorized"]

        for group in groups:
            row_copy = row.copy()
            row_copy["digest_group"] = group
            expanded_rows.append(row_copy)

    if not expanded_rows:
        return pd.DataFrame(columns=list(df.columns) + ["digest_group"])

    return pd.DataFrame(expanded_rows)


def markdown_escape_heading(text):
    """
    Prevents line breaks from interfering with Markdown headings.
    """

    text = clean_text(text)
    return text.replace("#", r"\#")


def html_text(text):
    """
    Escapes text for safe HTML display.
    """

    return escape(str(safe_value(text, "")))


def text_to_html_paragraphs(text):
    """
    Converts cleaned text to HTML paragraphs.
    """

    cleaned = clean_text(text)

    if not cleaned:
        return ""

    return f"<p>{escape(cleaned)}</p>"


# -------------------------------------------------------------------
# LOAD CSV FILES
# -------------------------------------------------------------------

if not os.path.exists(posts_input_csv):
    raise FileNotFoundError(
        f"Posts CSV not found:\n{posts_input_csv}"
    )

if not os.path.exists(comments_input_csv):
    raise FileNotFoundError(
        f"Comments CSV not found:\n{comments_input_csv}"
    )

posts_df = pd.read_csv(
    posts_input_csv,
    low_memory=False
)

comments_df = pd.read_csv(
    comments_input_csv,
    low_memory=False
)


# -------------------------------------------------------------------
# VALIDATE REQUIRED COLUMNS
# -------------------------------------------------------------------

required_post_columns = {
    "concept_groups",
    "matched_ai_terms",
    "matched_concept_terms",
    "id",
    "title",
    "selftext",
    "score",
    "num_comments",
    "created_date",
    "permalink",
}

required_comment_columns = {
    "concept_groups",
    "matched_ai_terms",
    "matched_concept_terms",
    "id",
    "post_id",
    "body",
    "score",
    "created_date",
    "permalink",
}

missing_post_columns = (
    required_post_columns - set(posts_df.columns)
)

missing_comment_columns = (
    required_comment_columns - set(comments_df.columns)
)

if missing_post_columns:
    raise ValueError(
        "Posts CSV is missing these columns: "
        + ", ".join(sorted(missing_post_columns))
    )

if missing_comment_columns:
    raise ValueError(
        "Comments CSV is missing these columns: "
        + ", ".join(sorted(missing_comment_columns))
    )


# -------------------------------------------------------------------
# CLEAN POST DATA
# -------------------------------------------------------------------

posts_df["title_clean"] = posts_df["title"].apply(
    lambda value: clean_text(value)
)

# Preserve the complete post text in the readable outputs.
posts_df["selftext_clean"] = posts_df["selftext"].apply(
    lambda value: clean_text(value)
)

posts_df["score"] = pd.to_numeric(
    posts_df["score"],
    errors="coerce"
).fillna(0)

posts_df["num_comments"] = pd.to_numeric(
    posts_df["num_comments"],
    errors="coerce"
).fillna(0)

posts_df = posts_df.sort_values(
    by=[
        "concept_groups",
        "score",
        "num_comments",
        "created_date",
    ],
    ascending=[
        True,
        False,
        False,
        False,
    ],
).reset_index(drop=True)


# -------------------------------------------------------------------
# CLEAN COMMENT DATA
# -------------------------------------------------------------------

comments_df["body_clean"] = comments_df["body"].apply(
    lambda value: clean_text(value)
)

comments_df["score"] = pd.to_numeric(
    comments_df["score"],
    errors="coerce"
).fillna(0)

comments_df = comments_df.sort_values(
    by=[
        "concept_groups",
        "score",
        "created_date",
    ],
    ascending=[
        True,
        False,
        False,
    ],
).reset_index(drop=True)


# -------------------------------------------------------------------
# ADD PARENT POST INFORMATION TO COMMENTS
# -------------------------------------------------------------------

post_title_lookup = dict(
    zip(
        posts_df["id"].astype(str),
        posts_df["title_clean"]
    )
)

post_permalink_lookup = dict(
    zip(
        posts_df["id"].astype(str),
        posts_df["permalink"]
    )
)

comments_df["post_id"] = comments_df["post_id"].astype(str)

comments_df["matched_parent_title"] = (
    comments_df["post_id"]
    .map(post_title_lookup)
    .fillna("")
)

comments_df["matched_parent_permalink"] = (
    comments_df["post_id"]
    .map(post_permalink_lookup)
    .fillna("")
)


# -------------------------------------------------------------------
# WRITE CLEANER CSV FILES
# -------------------------------------------------------------------

post_output_columns = [
    "concept_groups",
    "matched_ai_terms",
    "matched_concept_terms",
    "id",
    "subreddit",
    "title_clean",
    "selftext_clean",
    "author",
    "score",
    "num_comments",
    "created_date",
    "permalink",
]

post_output_columns = [
    column
    for column in post_output_columns
    if column in posts_df.columns
]

posts_df[post_output_columns].to_csv(
    posts_clean_csv_path,
    index=False,
    encoding="utf-8"
)


comment_output_columns = [
    "concept_groups",
    "matched_ai_terms",
    "matched_concept_terms",
    "id",
    "post_id",
    "matched_parent_title",
    "matched_parent_permalink",
    "parent_id",
    "subreddit",
    "author",
    "body_clean",
    "score",
    "created_date",
    "permalink",
]

comment_output_columns = [
    column
    for column in comment_output_columns
    if column in comments_df.columns
]

comments_df[comment_output_columns].to_csv(
    comments_clean_csv_path,
    index=False,
    encoding="utf-8"
)


# -------------------------------------------------------------------
# EXPAND ROWS BY CONCEPT GROUP
# -------------------------------------------------------------------

expanded_posts_df = make_group_rows(posts_df)
expanded_comments_df = make_group_rows(comments_df)


# -------------------------------------------------------------------
# POST MARKDOWN DIGEST
# -------------------------------------------------------------------

with open(posts_md_path, "w", encoding="utf-8") as file:
    file.write("# r/AskAcademia AI-Writing Post Digest\n\n")
    file.write(f"Total unique posts: {len(posts_df)}\n\n")

    for group_name, group in expanded_posts_df.groupby(
        "digest_group",
        sort=True
    ):
        readable_group = format_group_name(group_name)

        file.write(f"## {readable_group}\n\n")
        file.write(
            f"Posts in this category: {len(group)}\n\n"
        )

        group = group.sort_values(
            by=["score", "num_comments"],
            ascending=[False, False]
        )

        for _, row in group.iterrows():
            title = markdown_escape_heading(
                row.get("title_clean", "Untitled post")
            )

            file.write(f"### {title}\n\n")

            file.write(
                f"- **Score:** "
                f"{safe_number(row.get('score'))}\n"
            )

            file.write(
                f"- **Comments:** "
                f"{safe_number(row.get('num_comments'))}\n"
            )

            file.write(
                f"- **Date:** "
                f"{safe_value(row.get('created_date'))}\n"
            )

            file.write(
                f"- **AI terms:** "
                f"{safe_value(row.get('matched_ai_terms'))}\n"
            )

            file.write(
                f"- **Matched concepts:** "
                f"{safe_value(row.get('matched_concept_terms'))}\n"
            )

            permalink = safe_value(
                row.get("permalink")
            )

            if permalink:
                file.write(
                    f"- **Link:** {permalink}\n"
                )

            file.write("\n")

            body = safe_value(
                row.get("selftext_clean")
            )

            if body:
                file.write(body + "\n\n")

            file.write("---\n\n")


# -------------------------------------------------------------------
# COMMENT MARKDOWN DIGEST
# -------------------------------------------------------------------

with open(comments_md_path, "w", encoding="utf-8") as file:
    file.write("# r/AskAcademia AI-Writing Comment Digest\n\n")
    file.write(
        f"Total unique comments: {len(comments_df)}\n\n"
    )

    for group_name, group in expanded_comments_df.groupby(
        "digest_group",
        sort=True
    ):
        readable_group = format_group_name(group_name)

        file.write(f"## {readable_group}\n\n")
        file.write(
            f"Comments in this category: {len(group)}\n\n"
        )

        group = group.sort_values(
            by=["score", "created_date"],
            ascending=[False, False]
        )

        for _, row in group.iterrows():
            parent_title = safe_value(
                row.get("matched_parent_title")
            )

            if parent_title:
                heading = (
                    "Comment on: "
                    + markdown_escape_heading(parent_title)
                )
            else:
                heading = (
                    "Comment on post "
                    + str(safe_value(row.get("post_id")))
                )

            file.write(f"### {heading}\n\n")

            file.write(
                f"- **Comment score:** "
                f"{safe_number(row.get('score'))}\n"
            )

            file.write(
                f"- **Date:** "
                f"{safe_value(row.get('created_date'))}\n"
            )

            file.write(
                f"- **AI terms:** "
                f"{safe_value(row.get('matched_ai_terms'))}\n"
            )

            file.write(
                f"- **Matched concepts:** "
                f"{safe_value(row.get('matched_concept_terms'))}\n"
            )

            comment_permalink = safe_value(
                row.get("permalink")
            )

            if comment_permalink:
                file.write(
                    f"- **Comment link:** "
                    f"{comment_permalink}\n"
                )

            parent_permalink = safe_value(
                row.get("matched_parent_permalink")
            )

            if parent_permalink:
                file.write(
                    f"- **Parent-post link:** "
                    f"{parent_permalink}\n"
                )

            file.write("\n")

            body = safe_value(
                row.get("body_clean")
            )

            if body:
                file.write(body + "\n\n")

            file.write("---\n\n")


# -------------------------------------------------------------------
# COMBINED MARKDOWN DIGEST
# -------------------------------------------------------------------

with open(combined_md_path, "w", encoding="utf-8") as file:
    file.write(
        "# r/AskAcademia AI-Writing Combined Digest\n\n"
    )

    file.write(
        f"- Unique posts: {len(posts_df)}\n"
    )

    file.write(
        f"- Unique comments: {len(comments_df)}\n\n"
    )

    all_groups = sorted(
        set(expanded_posts_df["digest_group"].dropna())
        | set(expanded_comments_df["digest_group"].dropna())
    )

    for group_name in all_groups:
        readable_group = format_group_name(group_name)

        file.write(f"## {readable_group}\n\n")

        post_group = expanded_posts_df[
            expanded_posts_df["digest_group"] == group_name
        ].sort_values(
            by=["score", "num_comments"],
            ascending=[False, False]
        )

        comment_group = expanded_comments_df[
            expanded_comments_df["digest_group"] == group_name
        ].sort_values(
            by=["score", "created_date"],
            ascending=[False, False]
        )

        file.write(
            f"Posts: {len(post_group)} | "
            f"Comments: {len(comment_group)}\n\n"
        )

        if not post_group.empty:
            file.write("### Posts\n\n")

            for _, row in post_group.iterrows():
                title = markdown_escape_heading(
                    row.get("title_clean", "Untitled")
                )

                file.write(f"#### {title}\n\n")

                file.write(
                    f"Score: {safe_number(row.get('score'))} | "
                    f"Comments: "
                    f"{safe_number(row.get('num_comments'))} | "
                    f"Date: "
                    f"{safe_value(row.get('created_date'))}\n\n"
                )

                body = safe_value(
                    row.get("selftext_clean")
                )

                if body:
                    file.write(body + "\n\n")

                permalink = safe_value(
                    row.get("permalink")
                )

                if permalink:
                    file.write(
                        f"[Open Reddit post]({permalink})\n\n"
                    )

        if not comment_group.empty:
            file.write("### Comments\n\n")

            for _, row in comment_group.iterrows():
                parent_title = safe_value(
                    row.get("matched_parent_title")
                )

                file.write(
                    f"#### Comment on: "
                    f"{markdown_escape_heading(parent_title or row.get('post_id'))}\n\n"
                )

                file.write(
                    f"Score: {safe_number(row.get('score'))} | "
                    f"Date: "
                    f"{safe_value(row.get('created_date'))}\n\n"
                )

                body = safe_value(
                    row.get("body_clean")
                )

                if body:
                    file.write(body + "\n\n")

                permalink = safe_value(
                    row.get("permalink")
                )

                if permalink:
                    file.write(
                        f"[Open Reddit comment]({permalink})\n\n"
                    )

        file.write("---\n\n")


# -------------------------------------------------------------------
# SHARED HTML STYLING
# -------------------------------------------------------------------

html_header = """
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<style>
body {{
    font-family: Arial, Helvetica, sans-serif;
    max-width: 1100px;
    margin: 40px auto;
    padding: 0 20px;
    line-height: 1.6;
    background: #f5f5f5;
    color: #222;
}}

h1 {{
    margin-bottom: 5px;
}}

h2 {{
    margin-top: 50px;
    padding-bottom: 8px;
    border-bottom: 2px solid #ccc;
}}

.entry {{
    background: white;
    padding: 22px;
    margin-bottom: 22px;
    border-radius: 10px;
    border: 1px solid #ddd;
}}

.meta {{
    color: #555;
    font-size: 0.92em;
}}

.tag {{
    background: #e8e8e8;
    padding: 5px 9px;
    border-radius: 5px;
    display: inline-block;
    margin: 2px;
    font-size: 0.9em;
}}

.ai-tag {{
    background: #dceeff;
}}

.concept-tag {{
    background: #e8f5df;
}}

a {{
    color: #0645ad;
}}

.text {{
    white-space: normal;
    margin-top: 15px;
}}

.summary {{
    background: white;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 30px;
}}
</style>
</head>
<body>
"""


# -------------------------------------------------------------------
# POST HTML DIGEST
# -------------------------------------------------------------------

with open(posts_html_path, "w", encoding="utf-8") as file:
    file.write(
        html_header.format(
            title="r/AskAcademia AI-Writing Post Digest"
        )
    )

    file.write(
        "<h1>r/AskAcademia AI-Writing Post Digest</h1>"
    )

    file.write(
        f"<div class='summary'>"
        f"<strong>Total unique posts:</strong> "
        f"{len(posts_df)}"
        f"</div>"
    )

    for group_name, group in expanded_posts_df.groupby(
        "digest_group",
        sort=True
    ):
        readable_group = format_group_name(group_name)

        file.write(
            f"<h2>{escape(readable_group)}</h2>"
        )

        group = group.sort_values(
            by=["score", "num_comments"],
            ascending=[False, False]
        )

        for _, row in group.iterrows():
            file.write("<div class='entry'>")

            file.write(
                f"<h3>{html_text(row.get('title_clean'))}</h3>"
            )

            file.write(
                "<p class='meta'>"
                f"Score: {safe_number(row.get('score'))} | "
                f"Comments: "
                f"{safe_number(row.get('num_comments'))} | "
                f"Date: "
                f"{html_text(row.get('created_date'))}"
                "</p>"
            )

            file.write(
                f"<p>"
                f"<span class='tag ai-tag'>"
                f"AI: {html_text(row.get('matched_ai_terms'))}"
                f"</span>"
                f"</p>"
            )

            file.write(
                f"<p>"
                f"<span class='tag concept-tag'>"
                f"Concepts: "
                f"{html_text(row.get('matched_concept_terms'))}"
                f"</span>"
                f"</p>"
            )

            body = safe_value(
                row.get("selftext_clean")
            )

            if body:
                file.write(
                    f"<div class='text'>"
                    f"{text_to_html_paragraphs(body)}"
                    f"</div>"
                )

            permalink = safe_value(
                row.get("permalink")
            )

            if permalink:
                file.write(
                    f"<p><a href='{escape(str(permalink))}' "
                    f"target='_blank'>Open Reddit post</a></p>"
                )

            file.write("</div>")

    file.write("</body></html>")


# -------------------------------------------------------------------
# COMMENT HTML DIGEST
# -------------------------------------------------------------------

with open(comments_html_path, "w", encoding="utf-8") as file:
    file.write(
        html_header.format(
            title="r/AskAcademia AI-Writing Comment Digest"
        )
    )

    file.write(
        "<h1>r/AskAcademia AI-Writing Comment Digest</h1>"
    )

    file.write(
        f"<div class='summary'>"
        f"<strong>Total unique comments:</strong> "
        f"{len(comments_df)}"
        f"</div>"
    )

    for group_name, group in expanded_comments_df.groupby(
        "digest_group",
        sort=True
    ):
        readable_group = format_group_name(group_name)

        file.write(
            f"<h2>{escape(readable_group)}</h2>"
        )

        group = group.sort_values(
            by=["score", "created_date"],
            ascending=[False, False]
        )

        for _, row in group.iterrows():
            file.write("<div class='entry'>")

            parent_title = safe_value(
                row.get("matched_parent_title")
            )

            if parent_title:
                heading = f"Comment on: {parent_title}"
            else:
                heading = (
                    f"Comment on post "
                    f"{safe_value(row.get('post_id'))}"
                )

            file.write(
                f"<h3>{escape(str(heading))}</h3>"
            )

            file.write(
                "<p class='meta'>"
                f"Score: {safe_number(row.get('score'))} | "
                f"Date: "
                f"{html_text(row.get('created_date'))}"
                "</p>"
            )

            file.write(
                f"<p>"
                f"<span class='tag ai-tag'>"
                f"AI: {html_text(row.get('matched_ai_terms'))}"
                f"</span>"
                f"</p>"
            )

            file.write(
                f"<p>"
                f"<span class='tag concept-tag'>"
                f"Concepts: "
                f"{html_text(row.get('matched_concept_terms'))}"
                f"</span>"
                f"</p>"
            )

            body = safe_value(
                row.get("body_clean")
            )

            if body:
                file.write(
                    f"<div class='text'>"
                    f"{text_to_html_paragraphs(body)}"
                    f"</div>"
                )

            comment_permalink = safe_value(
                row.get("permalink")
            )

            if comment_permalink:
                file.write(
                    f"<p><a href='"
                    f"{escape(str(comment_permalink))}' "
                    f"target='_blank'>"
                    f"Open Reddit comment"
                    f"</a></p>"
                )

            parent_permalink = safe_value(
                row.get("matched_parent_permalink")
            )

            if parent_permalink:
                file.write(
                    f"<p><a href='"
                    f"{escape(str(parent_permalink))}' "
                    f"target='_blank'>"
                    f"Open matching parent post"
                    f"</a></p>"
                )

            file.write("</div>")

    file.write("</body></html>")


# -------------------------------------------------------------------
# COMBINED HTML DIGEST
# -------------------------------------------------------------------

with open(combined_html_path, "w", encoding="utf-8") as file:
    file.write(
        html_header.format(
            title="r/AskAcademia AI-Writing Combined Digest"
        )
    )

    file.write(
        "<h1>r/AskAcademia AI-Writing Combined Digest</h1>"
    )

    file.write(
        f"<div class='summary'>"
        f"<strong>Unique posts:</strong> {len(posts_df)}"
        f"<br>"
        f"<strong>Unique comments:</strong> "
        f"{len(comments_df)}"
        f"</div>"
    )

    all_groups = sorted(
        set(expanded_posts_df["digest_group"].dropna())
        | set(expanded_comments_df["digest_group"].dropna())
    )

    for group_name in all_groups:
        readable_group = format_group_name(group_name)

        post_group = expanded_posts_df[
            expanded_posts_df["digest_group"] == group_name
        ].sort_values(
            by=["score", "num_comments"],
            ascending=[False, False]
        )

        comment_group = expanded_comments_df[
            expanded_comments_df["digest_group"] == group_name
        ].sort_values(
            by=["score", "created_date"],
            ascending=[False, False]
        )

        file.write(
            f"<h2>{escape(readable_group)}</h2>"
        )

        file.write(
            f"<p class='meta'>"
            f"Posts: {len(post_group)} | "
            f"Comments: {len(comment_group)}"
            f"</p>"
        )

        if not post_group.empty:
            file.write("<h3>Posts</h3>")

            for _, row in post_group.iterrows():
                file.write("<div class='entry'>")

                file.write(
                    f"<h4>{html_text(row.get('title_clean'))}</h4>"
                )

                file.write(
                    "<p class='meta'>"
                    f"Score: {safe_number(row.get('score'))} | "
                    f"Comments: "
                    f"{safe_number(row.get('num_comments'))} | "
                    f"Date: "
                    f"{html_text(row.get('created_date'))}"
                    "</p>"
                )

                body = safe_value(
                    row.get("selftext_clean")
                )

                if body:
                    file.write(
                        f"<div class='text'>"
                        f"{text_to_html_paragraphs(body)}"
                        f"</div>"
                    )

                permalink = safe_value(
                    row.get("permalink")
                )

                if permalink:
                    file.write(
                        f"<p><a href='"
                        f"{escape(str(permalink))}' "
                        f"target='_blank'>"
                        f"Open Reddit post"
                        f"</a></p>"
                    )

                file.write("</div>")

        if not comment_group.empty:
            file.write("<h3>Comments</h3>")

            for _, row in comment_group.iterrows():
                file.write("<div class='entry'>")

                parent_title = safe_value(
                    row.get("matched_parent_title")
                )

                heading = (
                    parent_title
                    if parent_title
                    else f"Post {safe_value(row.get('post_id'))}"
                )

                file.write(
                    f"<h4>Comment on: "
                    f"{escape(str(heading))}</h4>"
                )

                file.write(
                    "<p class='meta'>"
                    f"Score: {safe_number(row.get('score'))} | "
                    f"Date: "
                    f"{html_text(row.get('created_date'))}"
                    "</p>"
                )

                body = safe_value(
                    row.get("body_clean")
                )

                if body:
                    file.write(
                        f"<div class='text'>"
                        f"{text_to_html_paragraphs(body)}"
                        f"</div>"
                    )

                permalink = safe_value(
                    row.get("permalink")
                )

                if permalink:
                    file.write(
                        f"<p><a href='"
                        f"{escape(str(permalink))}' "
                        f"target='_blank'>"
                        f"Open Reddit comment"
                        f"</a></p>"
                    )

                file.write("</div>")

    file.write("</body></html>")


# -------------------------------------------------------------------
# FINISHED
# -------------------------------------------------------------------

print()
print("=" * 70)
print("SAVED READABLE FILES")
print("=" * 70)

print()
print("Readable CSV files:")
print(posts_clean_csv_path)
print(comments_clean_csv_path)

print()
print("Markdown digests:")
print(posts_md_path)
print(comments_md_path)
print(combined_md_path)

print()
print("HTML digests:")
print(posts_html_path)
print(comments_html_path)
print(combined_html_path)

print()
print(f"Posts processed: {len(posts_df)}")
print(f"Comments processed: {len(comments_df)}")
print("=" * 70)