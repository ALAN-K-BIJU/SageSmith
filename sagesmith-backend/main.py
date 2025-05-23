from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from rag.generator import generate_response
from rag.philosopher_profiles import get_profile
from rag.retriever import retrieve_relevant_chunks
from dotenv import load_dotenv
load_dotenv()


app = FastAPI()

class Query(BaseModel):
    question: str
    philosophers: List[str]
    mode: str  # "simple" or "advanced"

@app.post("/ask")
async def ask(query: Query):
    responses = []
    for pid in query.philosophers:
        retrieved_docs = [{"text": chunk} for chunk in retrieve_relevant_chunks(query.question)]
        result = generate_response(pid, query.question, retrieved_docs)
        profile = get_profile(pid)
        responses.append({
            "philosopher": profile["name"],
            "response": result
        })
    return {"responses": responses}
