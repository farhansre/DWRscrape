import os
import re
from collections import defaultdict

import pandas as pd




base_folder = "/Users/sreej/Desktop/arctic_shift"

posts_input_csv = os.path.join(
    base_folder,
    "professors_ai_writing_posts.csv",
)

comments_input_csv = os.path.join(
    base_folder,
    "professors_ai_writing_comments.csv",
)

output_folder = os.path.join(
    base_folder,
    "readable_outputs",
)

os.makedirs(output_folder, exist_ok=True)

threads_output_md = os.path.join(
    output_folder,
    "professors_ai_writing_threads.md",
)


# ------------------------------------------------------------------
# HELPERS
# ------------------------------------------------------------------

def clean_text(value):
    if pd.isna(value):
        return ""

    text = str(value)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def safe_value(value):
    if pd.isna(value):
        return ""
    return str(value)


def safe_number(value):
    if pd.isna(value):
        return 0

    try:
        value = float(value)

        if value.is_integer():
            return int(value)

        return value

    except Exception:
        return 0


def markdown_heading(text):
    text = clean_text(text)
    text = text.replace("#", r"\#")

    return text or "Untitled"


# ------------------------------------------------------------------
# VALIDATE FILES
# ------------------------------------------------------------------

if not os.path.exists(posts_input_csv):
    raise FileNotFoundError(posts_input_csv)

if not os.path.exists(comments_input_csv):
    raise FileNotFoundError(comments_input_csv)


# ------------------------------------------------------------------
# LOAD
# ------------------------------------------------------------------

posts_df = pd.read_csv(
    posts_input_csv,
    low_memory=False,
)

comments_df = pd.read_csv(
    comments_input_csv,
    low_memory=False,
)


# ------------------------------------------------------------------
# CLEAN POSTS
# ------------------------------------------------------------------

posts_df["title"] = posts_df["title"].apply(clean_text)
posts_df["selftext"] = posts_df["selftext"].apply(clean_text)

posts_df["score"] = (
    pd.to_numeric(posts_df["score"], errors="coerce")
    .fillna(0)
)

posts_df["num_comments"] = (
    pd.to_numeric(
        posts_df["num_comments"],
        errors="coerce",
    ).fillna(0)
)

posts_df = posts_df.sort_values(
    by=["score", "num_comments"],
    ascending=[False, False],
).reset_index(drop=True)


# ------------------------------------------------------------------
# CLEAN COMMENTS
# ------------------------------------------------------------------

comments_df["body"] = comments_df["body"].apply(clean_text)

comments_df["score"] = (
    pd.to_numeric(
        comments_df["score"],
        errors="coerce",
    ).fillna(0)
)

comments_df["post_id"] = (
    comments_df["post_id"]
    .astype(str)
    .str.strip()
)

comments_df = comments_df.sort_values(
    by=["post_id", "score"],
    ascending=[True, False],
).reset_index(drop=True)


# ------------------------------------------------------------------
# GROUP COMMENTS BY THREAD
# ------------------------------------------------------------------

comments_by_post = defaultdict(list)

for _, row in comments_df.iterrows():
    comments_by_post[
        str(row["post_id"])
    ].append(row)


# ------------------------------------------------------------------
# WRITE THREAD MARKDOWN
# ------------------------------------------------------------------

with open(
    threads_output_md,
    "w",
    encoding="utf-8",
) as file:

    file.write("# r/AskAcademia AI Writing Threads\n\n")

    file.write(
        f"Matched posts: {len(posts_df)}\n"
    )

    file.write(
        f"Collected comments: {len(comments_df)}\n\n"
    )

    file.write("=" * 80)
    file.write("\n\n")

    for _, post in posts_df.iterrows():

        post_id = str(post["id"])

        title = markdown_heading(
            post["title"]
        )

        file.write(f"## {title}\n\n")

        file.write(
            f"**Subreddit:** r/{safe_value(post['subreddit'])}  \n"
        )

        file.write(
            f"**Author:** {safe_value(post['author'])}  \n"
        )

        file.write(
            f"**Score:** {safe_number(post['score'])}  \n"
        )

        file.write(
            f"**Comments:** {safe_number(post['num_comments'])}  \n"
        )

        file.write(
            f"**Date:** {safe_value(post['created_date'])}  \n"
        )

        file.write(
            f"**Concept Groups:** {safe_value(post['concept_groups'])}  \n"
        )

        file.write(
            f"**AI Terms:** {safe_value(post['matched_ai_terms'])}  \n"
        )

        file.write(
            f"**Matched Concepts:** {safe_value(post['matched_concept_terms'])}  \n"
        )

        permalink = safe_value(
            post["permalink"]
        )

        if permalink:
            file.write(
                f"**Link:** {permalink}\n\n"
            )

        body = clean_text(
            post["selftext"]
        )

        if body:
            file.write(body)
            file.write("\n\n")

        file.write("-" * 80)
        file.write("\n\n")

        thread_comments = comments_by_post.get(
            post_id,
            [],
        )

        file.write(
            f"## Comments ({len(thread_comments)})\n\n"
        )

        if not thread_comments:

            file.write(
                "*No comments collected.*\n\n"
            )

        else:

            for comment in thread_comments:

                file.write(
                    f"### Score {safe_number(comment['score'])}"
                )

                author = safe_value(
                    comment["author"]
                )

                if author:
                    file.write(
                        f" | u/{author}"
                    )

                file.write("\n\n")

                created = safe_value(
                    comment["created_date"]
                )

                if created:
                    file.write(
                        f"**Date:** {created}\n\n"
                    )

                permalink = safe_value(
                    comment["permalink"]
                )

                if permalink:
                    file.write(
                        f"**Link:** {permalink}\n\n"
                    )

                body = clean_text(
                    comment["body"]
                )

                if body:
                    file.write(body)
                    file.write("\n\n")

                file.write("." * 70)
                file.write("\n\n")

        file.write("=" * 80)
        file.write("\n\n")


print("Saved:")
print(threads_output_md)