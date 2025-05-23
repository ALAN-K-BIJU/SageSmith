# SageSmith 🧠

**An Interactive Philosophy Simulator**

---

Welcome to **SageSmith**, a unique and ambitious project designed to make philosophy engaging and accessible by simulating debates between iconic historical philosophers. Users can explore moral, political, and societal dilemmas through reasoned, multi-perspective dialogues that bring to life the voices of Aristotle, Kant, Nietzsche, Confucius, Simone de Beauvoir, and more.

---

## 🌟 Key Features (Planned & Ongoing)

- Simulated multi-philosopher panel or debate-style responses  
- Support for uploading dilemmas, articles, or real case studies  
- GPT-4 powered AI grounded in real philosophical texts using Retrieval-Augmented Generation (RAG) with citation-backed responses  
- Response modes tailored for learners: *“Teach me like I’m 15”* vs. *“Graduate-level”* explanations  
- Timeline visualization showing the evolution of philosophical ideas over time  
- Dialectical mode allowing philosophers to critique and engage with each other's views  

---

## 🚀 Tech Stack

### Backend

- **FastAPI** (Python) for building a performant, asynchronous REST API  
- **OpenAI GPT-4 API** via LangChain for powerful AI-driven dialogue simulation  
- **Pinecone** (or FAISS) as a vector database for Retrieval-Augmented Generation (RAG)  
- Embedding and knowledge chunking for grounding responses in real philosophical texts  
- Environment & secrets management via `.env`  
- Vector index persistence and efficient retrieval  

### Frontend

- **Next.js** (React) for a modern, SEO-friendly web app  
- **TypeScript** for robust type safety  
- **Tailwind CSS & shadcn/ui** for sleek, responsive, and accessible UI components  
- Interactive dialogue panels and timeline visualization components  
- Modular and extensible design for future AI integration  

---

## 📸 Screenshots

<div align="center">
  <img src="https://github.com/ALAN-K-BIJU/SageSmith/blob/main/screenshots/home.jpg" alt="Home Screen" width="600" style="border-radius: 8px; margin-bottom: 20px;" />
  <br />
  <img src="https://github.com/ALAN-K-BIJU/SageSmith/blob/main/screenshots/dilemma.jpg" alt="Dilemma Input & Philosophers Selection" width="600" style="border-radius: 8px;" />
</div>

---

## ⚠️ Status: Ongoing Development

SageSmith is currently **under active development**. The backend AI simulation, vector search pipeline, and frontend UI are continuously evolving. Stay tuned for updates, new features, and integrations!

---

## 🔧 Getting Started

To run SageSmith locally, please check the backend and frontend folders for setup instructions. You will need:

- Python 3.10+ and Node.js 18+ installed  
- OpenAI API key with access to GPT-4 models  
- Pinecone or FAISS configured for vector search  

---

## 💬 Contributions & Feedback

Contributions are welcome! Feel free to open issues, submit pull requests, or share ideas to help make SageSmith a powerful educational tool.

---

## 📜 License

This project is open source under the MIT License.

---

Thank you for exploring SageSmith — where the wisdom of the ages meets the power of AI!
