import os
import re
import pandas as pd
from html import escape

input_csv = "/Users/sreej/Desktop/arctic_shift/academia_keyword_posts_filtered.csv"

output_folder = "readable_outputs"
os.makedirs(output_folder, exist_ok=True)

df = pd.read_csv(input_csv)

def clean_text(text, max_chars=1200):
    if pd.isna(text):
        return ""

    text = str(text)
    text = re.sub(r"\s+", " ", text).strip()

    if len(text) > max_chars:
        return text[:max_chars].rstrip() + "..."

    return text

df["selftext_clean"] = df["selftext"].apply(clean_text)

df = df.sort_values(
    by=["query", "score", "num_comments"],
    ascending=[True, False, False]
).reset_index(drop=True)

# Cleaner CSV
clean_csv_path = os.path.join(output_folder, "academia_posts_readable.csv")
df[[
    "query",
    "title",
    "selftext_clean",
    "score",
    "num_comments",
    "created_date",
    "permalink"
]].to_csv(clean_csv_path, index=False)

# Markdown digest
md_path = os.path.join(output_folder, "academia_posts_digest.md")

with open(md_path, "w", encoding="utf-8") as f:
    f.write("# r/academia Keyword Post Digest\n\n")
    f.write(f"Total posts: {len(df)}\n\n")

    for query, group in df.groupby("query"):
        f.write(f"## Query: {query}\n\n")

        for _, row in group.iterrows():
            f.write(f"### {row['title']}\n\n")
            f.write(f"- Score: {row['score']}\n")
            f.write(f"- Comments: {row['num_comments']}\n")
            f.write(f"- Date: {row['created_date']}\n")
            f.write(f"- Link: {row['permalink']}\n\n")

            if row["selftext_clean"]:
                f.write(row["selftext_clean"] + "\n\n")

            f.write("---\n\n")

# HTML digest
html_path = os.path.join(output_folder, "academia_posts_digest.html")

with open(html_path, "w", encoding="utf-8") as f:
    f.write("""
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>r/academia Keyword Post Digest</title>
<style>
body {
    font-family: Arial, sans-serif;
    max-width: 1000px;
    margin: 40px auto;
    line-height: 1.5;
    background: #f7f7f7;
}
.post {
    background: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 1px solid #ddd;
}
.meta {
    color: #555;
    font-size: 0.9em;
}
.query {
    background: #eee;
    padding: 6px 10px;
    border-radius: 5px;
    display: inline-block;
}
a {
    color: #0645ad;
}
</style>
</head>
<body>
""")

    f.write("<h1>r/academia Keyword Post Digest</h1>\n")
    f.write(f"<p><strong>Total posts:</strong> {len(df)}</p>\n")

    for query, group in df.groupby("query"):
        f.write(f"<h2>Query: {escape(query)}</h2>\n")

        for _, row in group.iterrows():
            f.write('<div class="post">\n')
            f.write(f"<h3>{escape(str(row['title']))}</h3>\n")
            f.write(
                f"<p class='meta'>"
                f"Score: {row['score']} | "
                f"Comments: {row['num_comments']} | "
                f"Date: {escape(str(row['created_date']))}"
                f"</p>\n"
            )
            f.write(f"<p><span class='query'>{escape(str(row['query']))}</span></p>\n")

            if row["selftext_clean"]:
                f.write(f"<p>{escape(str(row['selftext_clean']))}</p>\n")

            f.write(
                f"<p><a href='{escape(str(row['permalink']))}' target='_blank'>Open Reddit post</a></p>\n"
            )
            f.write("</div>\n")

    f.write("</body></html>")

print("Saved readable files:")
print(clean_csv_path)
print(md_path)
print(html_path)