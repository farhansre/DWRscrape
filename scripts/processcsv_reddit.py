import os
import re
import pandas as pd


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

posts_output_md = os.path.join(
    output_folder,
    "askacademia_posts.md"
)

comments_output_md = os.path.join(
    output_folder,
    "askacademia_comments.md"
)


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
        number = float(value)

        if number.is_integer():
            return int(number)

        return number

    except (TypeError, ValueError):
        return 0


def markdown_heading(text):
    text = clean_text(text)
    text = text.replace("#", r"\#")

    return text or "Untitled"


if not os.path.exists(posts_input_csv):
    raise FileNotFoundError(
        f"Posts CSV not found: {posts_input_csv}"
    )

if not os.path.exists(comments_input_csv):
    raise FileNotFoundError(
        f"Comments CSV not found: {comments_input_csv}"
    )


posts_df = pd.read_csv(
    posts_input_csv,
    low_memory=False
)

comments_df = pd.read_csv(
    comments_input_csv,
    low_memory=False
)


posts_df["title"] = posts_df["title"].apply(clean_text)
posts_df["selftext"] = posts_df["selftext"].apply(clean_text)

posts_df["score"] = pd.to_numeric(
    posts_df["score"],
    errors="coerce"
).fillna(0)

posts_df["num_comments"] = pd.to_numeric(
    posts_df["num_comments"],
    errors="coerce"
).fillna(0)

posts_df = posts_df.sort_values(
    by=["score", "num_comments"],
    ascending=[False, False]
).reset_index(drop=True)


comments_df["body"] = comments_df["body"].apply(clean_text)

comments_df["score"] = pd.to_numeric(
    comments_df["score"],
    errors="coerce"
).fillna(0)

comments_df = comments_df.sort_values(
    by=["score"],
    ascending=[False]
).reset_index(drop=True)


with open(posts_output_md, "w", encoding="utf-8") as file:
    file.write("# r/AskAcademia AI Writing Posts\n\n")
    file.write(f"Total posts: {len(posts_df)}\n\n")
    file.write("---\n\n")

    for _, row in posts_df.iterrows():
        title = markdown_heading(row.get("title"))

        file.write(f"## {title}\n\n")
        file.write(
            f"**Score:** {safe_number(row.get('score'))}  \n"
        )
        file.write(
            f"**Comments:** "
            f"{safe_number(row.get('num_comments'))}  \n"
        )
        file.write(
            f"**Date:** "
            f"{safe_value(row.get('created_date'))}  \n"
        )
        file.write(
            f"**Concept groups:** "
            f"{safe_value(row.get('concept_groups'))}  \n"
        )
        file.write(
            f"**AI terms:** "
            f"{safe_value(row.get('matched_ai_terms'))}  \n"
        )
        file.write(
            f"**Matched concepts:** "
            f"{safe_value(row.get('matched_concept_terms'))}  \n"
        )

        permalink = safe_value(row.get("permalink"))

        if permalink:
            file.write(
                f"**Link:** [Open Reddit post]({permalink})\n\n"
            )
        else:
            file.write("\n")

        body = clean_text(row.get("selftext"))

        if body:
            file.write(body + "\n\n")

        file.write("---\n\n")


with open(comments_output_md, "w", encoding="utf-8") as file:
    file.write("# r/AskAcademia AI Writing Comments\n\n")
    file.write(f"Total comments: {len(comments_df)}\n\n")
    file.write("---\n\n")

    for _, row in comments_df.iterrows():
        post_id = safe_value(row.get("post_id"))

        file.write(f"## Comment on post {post_id}\n\n")
        file.write(
            f"**Score:** {safe_number(row.get('score'))}  \n"
        )
        file.write(
            f"**Date:** "
            f"{safe_value(row.get('created_date'))}  \n"
        )
        file.write(
            f"**Concept groups:** "
            f"{safe_value(row.get('concept_groups'))}  \n"
        )
        file.write(
            f"**AI terms:** "
            f"{safe_value(row.get('matched_ai_terms'))}  \n"
        )
        file.write(
            f"**Matched concepts:** "
            f"{safe_value(row.get('matched_concept_terms'))}  \n"
        )

        permalink = safe_value(row.get("permalink"))

        if permalink:
            file.write(
                f"**Link:** "
                f"[Open Reddit comment]({permalink})\n\n"
            )
        else:
            file.write("\n")

        body = clean_text(row.get("body"))

        if body:
            file.write(body + "\n\n")

        file.write("---\n\n")


print("Saved:")
print(posts_output_md)
print(comments_output_md)