import os
from langchain_community.chat_models import ChatOpenAI
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import OpenAIEmbeddings
from langchain.chains import RetrievalQA
from dotenv import load_dotenv

# Load API key
load_dotenv()
OPENAI_API_KEY = ''

# Setup OpenAI model
llm = ChatOpenAI(
    model_name="gpt-4o",
    temperature=0.7,
    openai_api_key=OPENAI_API_KEY
)

# Load vectorstore
DB_FAISS_PATH = "vectorstore/db_faiss"
embedding = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)

# Load or create FAISS index
try:
    vectorstore = FAISS.load_local(DB_FAISS_PATH, embeddings=embedding)
except:
    raise ValueError("FAISS index not found. Run embedding first to build it.")

# Setup QA chain with retriever
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever(),
    return_source_documents=True
)

# Main function for use in FastAPI
def generate_response(query: str):
    result = qa_chain(query)
    return result
