# rag/embedder.py
import os
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import OpenAIEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import TextLoader
from dotenv import load_dotenv

load_dotenv()
OPENAI_API_KEY = ''
embedding = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)

# Load your source texts (modify this as needed)
docs = TextLoader("data/philosophy_sample.txt").load()
splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
chunks = splitter.split_documents(docs)

# Build FAISS index
vectorstore = FAISS.from_documents(chunks, embedding)
vectorstore.save_local("vectorstore/db_faiss")

print("✅ FAISS index built and saved.")
