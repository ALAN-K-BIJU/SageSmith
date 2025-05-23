import os
from pathlib import Path

def load_chunks_from_folder(folder_path: str):
    chunks = []
    for file in Path(folder_path).rglob("*.txt"):
        with open(file, "r", encoding="utf-8") as f:
            text = f.read()
            # Naive split, replace with langchain TextSplitter if needed
            parts = [text[i:i+500] for i in range(0, len(text), 500)]
            chunks.extend(parts)
    return chunks
