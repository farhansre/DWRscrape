import os
from typing import Iterable

from fileStreams import getFileJsonStream
from utils import FileProgressLog
import csv
from datetime import datetime
recursive = False
fileOrFolderPath = r"/Users/sreej/Desktop/arctic_shift/sample_place"
keywords = [
    "llm literature review",
    "ai literature review",
    "related works LLM",
    "related works AI",
    "lit review ai",
    "lit review llm",
]

output_csv = "academia_keyword_posts_filtered.csv"
seen_ids = set()
rows = []

import re

def matches_keyword(title: str, body: str):
    text = f"{title or ''} {body or ''}".lower()

    for kw in keywords:
        terms = kw.lower().split()

        if all(
            re.search(rf"\b{re.escape(term)}\b", text)
            for term in terms
        ):
            return kw

    return None


def processFile(path: str):
    print(f"Processing file {path}")

    with open(path, "rb") as f:
        jsonStream = getFileJsonStream(path, f)

        if jsonStream is None:
            print(f"Skipping unknown file {path}")
            return

        progressLog = FileProgressLog(path, f)

        for row in jsonStream:
            progressLog.onRow()

            # Skip comments file / comments rows
            if "title" not in row:
                continue

            subreddit = row.get("subreddit", "")
            if subreddit.lower() != "academia":
                continue

            post_id = row.get("id")
            if post_id in seen_ids:
                continue

            score = row.get("score", 0) or 0
            num_comments = row.get("num_comments", 0) or 0

           ## if score > 10 or num_comments > 10:
               ## continue 

            title = row.get("title", "")
            selftext = row.get("selftext", "")

            matched_query = matches_keyword(title, selftext)
            if matched_query is None:
                continue

            created_utc = row.get("created_utc")

            rows.append({
                "query": matched_query,
                "id": post_id,
                "title": title,
                "selftext": selftext,
                "score": score,
                "num_comments": num_comments,
                "created_utc": created_utc,
                "created_date": datetime.utcfromtimestamp(created_utc).strftime("%Y-%m-%d %H:%M:%S") if created_utc else "",
                "url": row.get("url", ""),
                "permalink": f"https://www.reddit.com{row.get('permalink', '')}",
            })

            seen_ids.add(post_id)

        progressLog.logProgress("\n")
def processFolder(path: str):
    fileIterator: Iterable[str]

    if recursive:
        def recursiveFileIterator():
            for root, dirs, files in os.walk(path):
                for file in files:
                    yield os.path.join(root, file)

        fileIterator = recursiveFileIterator()

    else:
        fileIterator = os.listdir(path)
        fileIterator = (
            os.path.join(path, file)
            for file in fileIterator
        )

    for i, file in enumerate(fileIterator):
        print(f"Processing file {i + 1:3} {file}")
        processFile(file)
def main():
    if os.path.isdir(fileOrFolderPath):
        processFolder(fileOrFolderPath)
    else:
        processFile(fileOrFolderPath)

    with open(output_csv, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=[
            "query",
            "id",
            "title",
            "selftext",
            "score",
            "num_comments",
            "created_utc",
            "created_date",
            "url",
            "permalink",
        ])
        writer.writeheader()
        writer.writerows(rows)

    print(f"Saved {len(rows)} unique posts")
    print("Done :>")
if __name__ == "__main__":
    main()