from rag.embedder import get_embedding
from rag.vectorstore import SimpleFAISS
from rag.load_chunks import load_chunks_from_folder

# Init once
vector_db = SimpleFAISS(dim=1536)
_loaded = False

def load_knowledge_base():
    global _loaded
    if _loaded:
        return
    chunks = load_chunks_from_folder("data/philosophy_works/")
    embeddings = [get_embedding(chunk) for chunk in chunks]
    vector_db.add(embeddings, chunks)
    _loaded = True

def retrieve_relevant_chunks(query: str, top_k: int = 3):
    load_knowledge_base()
    query_embedding = get_embedding(query)
    return vector_db.search(query_embedding, top_k)
