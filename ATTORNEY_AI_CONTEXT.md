# ATTORNEY.AI — Project Context & Tech Stack Reference
> Feed this file to any AI before asking it to work on this project.

---

## Project Identity

| Field | Value |
|---|---|
| Project Name | ATTORNEY.AI |
| Student | Muhammad Usama |
| Student ID | SP23-BCS-069 |
| University | COMSATS University Islamabad |
| Department | Computer Science |
| Supervisor | Dr. Tehseen Riaz Abbasi |
| Degree | BS Computer Science (2023–2027) |
| Target Market | **Pakistan** (Urdu + English, Pakistani law only) |

---

## What This System Does

ATTORNEY.AI is an **AI-powered Legal Assistance and Dispute Resolution Platform** for Pakistani citizens. It is NOT a general-purpose chatbot. Every AI feature is grounded in Pakistani law specifically.

**Three user roles:**
- **Client** — citizen seeking legal help
- **Lawyer** — licensed Pakistani advocate
- **Admin** — platform administrator

**Core problem it solves:** 2.2 million+ pending cases in Pakistani courts (LJCP 2024). Citizens cannot understand laws, find lawyers, or prepare documents without expensive professional help.

---

## 9 System Modules

| Module | Purpose |
|---|---|
| M1: Client Profiling | Registration, login, KYC for all 3 roles |
| M2: Legal Query Intake & Case Structuring | Multi-step intake → AI converts to structured case |
| M3: AI Legal Guidance & Consultation | RAG-based legal Q&A chatbot (informational only) |
| M4: Lawyer Discovery | Search/filter/match lawyers by case type, location, rating |
| M5: Digital Agreements & E-Signing | Create agreements, 3 signature methods, ETO 2002 compliant |
| M6: Document Automation & Drafting | AI-generated plaints, notices, contracts via docxtpl |
| M7: Case Progress Tracking | Milestones, hearing dates, notifications |
| M8: Lawyer Portal | Lawyer workspace — cases, clients, documents, AI assistant |
| M9: Admin Dashboard | User management, KYC verification, analytics |

---

## Full Tech Stack

### Frontend
```
Framework:     Next.js 15 (App Router)
Language:      TypeScript 5.5.4
Styling:       Tailwind CSS
State:         Zustand (or Redux Toolkit)
HTTP Client:   Axios
WebSocket:     Native WebSocket API (connects to FastAPI backend)
PDF Viewer:    react-pdf (for citation highlighting)
Rich Text:     TipTap or Quill (agreement editor)
Auth:          JWT stored in httpOnly cookie
Deployment:    Docker container
```

### Backend
```
Framework:     FastAPI (Python)
Server:        Uvicorn (ASGI)
Auth:          JWT + bcrypt (python-jose, passlib)
Rate Limiting: slowapi
WebSocket:     FastAPI native WebSocket
Monitoring:    Langfuse (free tier — LLM call tracing)
Deployment:    Docker container
```

### Database
```
Primary DB:    MongoDB 7.0 (via Motor — async driver)
Collections:   users, cases, documents, agreements, lawyers, notifications
Vector DB:     ChromaDB (persistent, local Docker container)
Chroma Collections:
  - civil_collection        (CPC + civil court judgments)
  - criminal_collection     (PPC + CrPC + criminal judgments)
  - constitutional_collection (Constitution of Pakistan + ETO 2002)
  - statutes_collection     (1,030 federal statutes from pakistancode.gov.pk)
  - judgments_collection    (pakistan-legal-dataset court judgments)
```

### AI / RAG Stack
```
LLM (demo day):   Gemini 2.0 Flash (free — aistudio.google.com)
LLM (dev):        Ollama + Llama 3.1 8B (local, no internet needed)
LLM (backup):     Groq + Llama 3.1 70B (fast inference, free tier)
LLM wrapper:      LangChain (one-line swap between all providers)

Embeddings:       sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2
                  (free, runs locally, handles English + Urdu)

Agent Framework:  LangGraph (stateful multi-agent graphs)
Agent Pattern:    Supervisor + Specialist Multi-Agent Architecture

Vector Store:     ChromaDB (persistent Docker volume)
Retrieval:        Hybrid BM25 + dense semantic search + RRF reranking
PDF Parsing:      Unstructured (pre-process) → llmsherpa (structure-aware chunking)
Urdu OCR:         UTRNet (only for scanned PDFs — run pdftotext first to check)

Document Gen:     docxtpl (fills .docx templates) + LibreOffice headless (→ PDF)
```

### Infrastructure
```
Containerization: Docker + docker-compose
Services:
  - frontend    (Next.js, port 3000)
  - backend     (FastAPI, port 8000)
  - mongodb     (port 27017, persistent volume)
  - chroma      (port 8001, persistent volume ./chroma_data)
```

---

## Folder Structure

```
attorney-ai/
├── frontend/
│   ├── Dockerfile.frontend
│   ├── .env.local
│   ├── next.config.ts
│   └── src/
│       ├── app/
│       │   ├── (auth)/           # login, register, reset-password
│       │   └── (dashboard)/
│       │       ├── client/       # intake, chat, tracking, lawyers, documents, agreements, cases
│       │       ├── lawyer/       # cases, earnings, profile
│       │       └── admin/        # users, kyc, analytics
│       ├── components/
│       │   ├── ai/               # ChatWindow, PromptBox, TypingIndicator
│       │   ├── domain/           # case, lawyer, document, agreement components
│       │   ├── ui/
│       │   └── layout/
│       ├── hooks/
│       ├── services/             # API call functions
│       ├── store/                # Zustand stores
│       ├── lib/
│       └── types/
│
├── backend/
│   ├── Dockerfile.backend
│   ├── .env
│   ├── requirements.txt
│   └── app/
│       ├── main.py
│       ├── dependencies.py       # auth guards, role guards
│       ├── api/v1/routes/
│       │   ├── auth.py
│       │   ├── users.py
│       │   ├── cases.py
│       │   ├── intake.py         # M2 multi-step legal intake
│       │   ├── lawyers.py
│       │   ├── documents.py
│       │   ├── agreements.py
│       │   ├── chat.py           # WebSocket endpoint
│       │   └── admin.py
│       ├── core/
│       │   ├── config/
│       │   ├── security.py
│       │   ├── constants.py
│       │   ├── logging.py
│       │   └── exceptions.py
│       ├── db/
│       │   ├── mongodb.py
│       │   ├── indexes.py
│       │   └── collections.py
│       ├── models/               # MongoDB document models (Pydantic)
│       ├── schemas/              # Request/Response schemas
│       ├── repositories/         # DB access layer
│       ├── services/             # Business logic layer
│       │
│       ├── ai/                   # ← ALL AI LOGIC LIVES HERE
│       │   ├── graph/
│       │   │   ├── supervisor.py         # LangGraph supervisor — routes to specialist agents
│       │   │   ├── state.py              # AgentState TypedDict shared across all nodes
│       │   │   └── edges.py              # Conditional routing logic
│       │   │
│       │   ├── agents/
│       │   │   ├── civil_agent.py        # Retrieves from civil_collection (CPC)
│       │   │   ├── criminal_agent.py     # Retrieves from criminal_collection (PPC + CrPC)
│       │   │   ├── constitutional_agent.py # Retrieves from constitutional_collection
│       │   │   └── document_agent.py     # Generates legal documents via docxtpl
│       │   │
│       │   ├── nodes/
│       │   │   ├── intake_node.py        # Parses case_type, province, role from M2 intake
│       │   │   ├── gatekeeper_node.py    # Validates query completeness before retrieval
│       │   │   ├── clarification_node.py # Asks follow-up questions if intake is incomplete
│       │   │   ├── retrieval_node.py     # Hybrid BM25 + Chroma with province metadata filter
│       │   │   ├── reranker_node.py      # RRF reranking of retrieved chunks
│       │   │   ├── grader_node.py        # Relevance grader — score < 0.75 → clarification
│       │   │   ├── hallucination_node.py # Answer grader — fails → refuse + suggest lawyer
│       │   │   └── generation_node.py    # LLM generates final answer with citations
│       │   │
│       │   ├── pipelines/
│       │   │   ├── retriever.py          # Hybrid BM25 + dense retriever implementation
│       │   │   └── reranker.py           # RRF (Reciprocal Rank Fusion) implementation
│       │   │
│       │   ├── memory/
│       │   │   ├── session_memory.py     # Per-user session isolation
│       │   │   └── conversation_store.py # Chat history persistence in MongoDB
│       │   │
│       │   ├── tools/
│       │   │   ├── legal_search.py       # Wraps retrieval_node as a LangGraph tool
│       │   │   ├── case_builder.py       # Structures intake data into case format
│       │   │   └── doc_tool.py           # Triggers document generation pipeline
│       │   │
│       │   ├── generators/
│       │   │   └── doc_generator.py      # docxtpl + LibreOffice headless → PDF
│       │   │
│       │   └── matchers/
│       │       └── lawyer_matcher.py     # Cosine similarity: case embedding vs lawyer profiles
│       │
│       ├── websockets/
│       │   ├── chat_socket.py            # Streams LangGraph agent responses token-by-token
│       │   └── notification_socket.py
│       │
│       └── utils/
│           ├── file_handler.py
│           ├── email.py
│           └── validators.py
│
├── knowledge_base/
│   ├── raw/
│   │   ├── constitution/         # Constitution of Pakistan 1973
│   │   ├── criminal/             # PPC 1860 + CrPC 1898 PDFs
│   │   ├── civil/                # CPC 1908 PDFs
│   │   ├── family/               # Family laws PDFs
│   │   ├── statutes/             # ETO 2002, PECA 2016, PDPA + 1,030 federal statutes
│   │   └── court_judgments/      # pakistan-legal-dataset (6 courts, province-tagged)
│   │
│   ├── processed/                # Post-chunking, post-embedding artifacts
│   │
│   └── pipeline/
│       ├── ingest.py             # Loads PDFs, runs pdftotext check (text vs scanned)
│       ├── chunk.py              # Unstructured → llmsherpa → section-type detection
│       ├── partition.py          # Assigns chunks to correct Chroma collection
│       ├── embed.py              # multilingual-MiniLM-L12-v2 embeddings
│       └── store.py              # Persists to ChromaDB with metadata
│
├── infra/
│   └── docker-compose.yml        # frontend + backend + mongodb + chroma
│
└── README.md
```

---

## Agentic RAG Architecture

ATTORNEY.AI uses a **Supervisor + Specialist Multi-Agent** pattern built on LangGraph.

### Agent Flow
```
User Message (via WebSocket)
        ↓
   INTAKE NODE
   (reads case_type, province, role from M2 session data)
        ↓
   GATEKEEPER NODE
   (is the query specific enough to retrieve?)
        ↓ NO → CLARIFICATION NODE → back to user
        ↓ YES
   SUPERVISOR AGENT
   (routes based on case_type)
        ├── civil_agent     → civil_collection  (CPC, civil judgments)
        ├── criminal_agent  → criminal_collection (PPC, CrPC, criminal judgments)
        └── constitutional_agent → constitutional_collection
        ↓
   RETRIEVAL NODE
   (BM25 keyword + Chroma dense search, filtered by province metadata)
        ↓
   RERANKER NODE
   (RRF — Reciprocal Rank Fusion across BM25 and dense results)
        ↓
   GRADER NODE
   (relevance score — if < 0.75 → loop back to clarification)
        ↓
   GENERATION NODE
   (LLM generates answer grounded in retrieved chunks)
        ↓
   HALLUCINATION NODE
   (is the answer grounded in retrieved docs? NO → refuse + suggest lawyer)
        ↓
   Response streamed to Next.js via WebSocket
   (with source citations: court name + case number + section)
```

### Key LangGraph Concepts Used
- `interrupt()` — pauses graph to wait for user clarification input
- `Send()` — parallel agent subgraph spawning for multi-domain queries
- `checkpointer` — persists graph state across WebSocket messages (session continuity)
- `supervisor` pattern via `langgraph-supervisor-py` library

---

## Pakistani Legal Knowledge Base

### Statute Sources (for Chroma KB)
| Source | Content | How to get |
|---|---|---|
| pakistancode.gov.pk | PPC, CrPC, CPC, Constitution, ETO 2002 | Direct PDF download |
| Ansvar-Systems/Pakistani-law-mcp | 1,030 federal statutes, 28,249 sections, SQLite FTS5 | GitHub — download SQLite |
| pakistan-legal-dataset (own repo) | Court judgments — 6 courts (IHC, LHC, SHC, PHC, BHC, SC) | Own GitHub repo |
| LEGAL-UQA (HuggingFace) | 619 EN+UR constitutional Q&A pairs | huggingface.co datasets |

### Key Pakistani Laws Referenced
| Law | Relevance to ATTORNEY.AI |
|---|---|
| Pakistan Penal Code 1860 (PPC) | Criminal module — offences and punishments |
| Code of Criminal Procedure 1898 (CrPC) | Criminal module — FIR, arrest, bail procedures |
| Code of Civil Procedure 1908 (CPC) | Civil module — plaint filing, written statements |
| Constitution of Pakistan 1973 | Constitutional module — fundamental rights |
| Electronic Transactions Ordinance 2002 (ETO 2002) | Legal basis for Module 5 e-signatures |
| Legal Practitioners & Bar Councils Act 1973 | Lawyer KYC — enrollment verification |

### Metadata Tags on Every Chroma Chunk
```python
{
  "court": "Lahore High Court",          # or Supreme Court, IHC, SHC, PHC, BHC
  "province": "Punjab",                   # Punjab | Sindh | KPK | Balochistan | Federal
  "law_type": "criminal",                 # civil | criminal | constitutional | statute
  "section_type": "Statutes",            # Facts | Issues | Statutes | Ratio | Ruling
  "statute": "PPC",                       # PPC | CrPC | CPC | Constitution | ETO2002 | etc.
  "section_number": "302",               # for statute chunks
  "source_file": "lahore_hc_2023.pdf",
  "chunk_id": "uuid"
}
```

### Province Filter Logic
When user selects province during M2 intake:
```python
# Punjab query → filter Chroma to only Punjab + Federal scope
where_filter = {
    "$or": [
        {"province": {"$eq": "Punjab"}},
        {"province": {"$eq": "Federal"}}
    ]
}
```

---

## LLM Swap Code (One Line Change)

```python
# Option 1 — Gemini Flash (demo day — best quality, free)
from langchain_google_genai import ChatGoogleGenerativeAI
llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash", google_api_key=GEMINI_KEY)

# Option 2 — Ollama local (development — no internet, no limits)
from langchain_ollama import ChatOllama
llm = ChatOllama(model="llama3.1")  # first run: ollama pull llama3.1

# Option 3 — Groq (fast inference backup)
from langchain_groq import ChatGroq
llm = ChatGroq(model="llama-3.1-70b-versatile", groq_api_key=GROQ_KEY)

# Embeddings — same for ALL options above (local, handles Urdu + English)
from langchain_community.embeddings import HuggingFaceEmbeddings
embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
)
```

---

## Key Packages (requirements.txt)

```
# Core
fastapi
uvicorn[standard]
motor                        # async MongoDB driver
pydantic
python-jose[cryptography]    # JWT
passlib[bcrypt]
slowapi                      # rate limiting

# LangChain / LangGraph
langchain
langgraph
langgraph-supervisor         # pip install langgraph-supervisor
langchain-community
langchain-google-genai       # Gemini
langchain-ollama             # Ollama
langchain-groq               # Groq

# Vector DB
chromadb

# Embeddings
sentence-transformers

# PDF parsing
unstructured[pdf]
llmsherpa

# Document generation
docxtpl                      # fills .docx templates
# LibreOffice headless installed at OS level for .docx → PDF conversion

# Retrieval
rank-bm25                    # BM25 keyword retrieval

# Monitoring
langfuse

# Utilities
python-multipart
aiofiles
httpx
```

---

## Environment Variables (.env)

```bash
# MongoDB
MONGODB_URL=mongodb://mongodb:27017
DB_NAME=attorney_ai

# JWT
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60

# LLM (use only one at a time)
GEMINI_API_KEY=your-gemini-key
GROQ_API_KEY=your-groq-key
# For Ollama: no key needed — runs locally

# ChromaDB
CHROMA_HOST=chroma
CHROMA_PORT=8001

# Langfuse (monitoring)
LANGFUSE_PUBLIC_KEY=your-key
LANGFUSE_SECRET_KEY=your-key
LANGFUSE_HOST=https://cloud.langfuse.com

# Active LLM provider (civil | criminal | constitutional)
LLM_PROVIDER=gemini   # gemini | ollama | groq
```

---

## WebSocket Chat Protocol

Frontend connects to: `ws://localhost:8000/ws/chat/{session_id}`

```typescript
// Frontend sends
{
  "type": "message",
  "content": "مجھے اپنے مکان مالک سے تنازعہ ہے",  // Urdu supported
  "case_id": "uuid",
  "province": "Punjab",
  "case_type": "civil"
}

// Backend streams back (token by token)
{
  "type": "token",
  "content": "آپ کے مسئلے"
}

// Final message with citations
{
  "type": "final",
  "content": "Full answer text...",
  "citations": [
    {
      "court": "Lahore High Court",
      "case_number": "2023/LHC/1234",
      "section": "CPC Order VII Rule 1",
      "chunk_text": "relevant excerpt..."
    }
  ],
  "confidence": 0.87
}

// Clarification request
{
  "type": "clarification",
  "question": "کیا یہ کرایہ داری کا تنازعہ ہے یا ملکیت کا؟"
}
```

---

## Document Generation Pipeline (Module 6)

```python
# Flow: User input → LLM fills data → docxtpl renders → LibreOffice → PDF
1. User selects template (Plaint / Legal Notice / Written Statement / NDA)
2. LLM extracts structured fields from case data
3. docxtpl fills the .docx template with extracted fields
4. LibreOffice headless converts .docx → .pdf
5. PDF returned to client for download / forwarded to lawyer

# Template location
knowledge_base/templates/
├── plaint_civil.docx
├── written_statement.docx
├── legal_notice.docx
├── nda.docx
└── rental_agreement.docx
```

---

## Lawyer Matching Algorithm (Module 4)

```python
# No external ML model needed — pure embedding cosine similarity
1. At onboarding: embed lawyer's specialization text → store in MongoDB
2. At matching: embed user's case summary → cosine_similarity(case_emb, lawyer_emb)
3. Rank by: similarity_score * 0.5 + rating * 0.3 + availability * 0.2
4. Filter by: province (mandatory) + case_type (mandatory)
```

---

## Bar Council KYC (Module 1 / Admin M24)

**Reality:** No public API exists for Pakistani bar councils.

**Implementation approach:**
- Admin manually verifies via `portal.pbbarcouncil.com` (Punjab) or `ibc.org.pk` (Islamabad)
- Admin enters verification result in Admin Dashboard (M24)
- System flips `lawyer.kyc_verified = True` in MongoDB
- Lawyer account unlocks full features

**For demo day:** Mock KYC verification flow is acceptable. State clearly in SRS that production will use a web-scraping microservice against provincial bar council portals using CNIC + enrollment number.

---

## E-Signature Legal Basis (Module 5)

All digital agreements are governed by:
> **Electronic Transactions Ordinance 2002 (ETO 2002), Act No. 51 of 2002**
> Section 3: Electronic documents have full legal recognition
> Section 33: ETO 2002 has overriding effect over conflicting laws

Three signature methods and their ETO 2002 classification:
| Method | ETO 2002 Type |
|---|---|
| Canvas draw pad | Advanced Electronic Signature (Section 2(d)(i)) |
| Typed name | Basic Electronic Signature |
| Image upload (PNG/JPG/SVG) | Basic Electronic Signature |

---

## Evaluation Strategy

| Dataset | Purpose | Target Metric |
|---|---|---|
| LEGAL-UQA (619 pairs) | Generation accuracy on Pakistani constitutional law | Report % match vs ground truth |
| LegalBench-RAG-mini (776 pairs) | Retrieval accuracy — can the system find the right chunk? | Retrieval precision@k |

Run both evals after Step 6 of the build order. Report both scores to supervisor separately.

---

## Academic References to Cite in SRS

| Paper | arXiv | Use |
|---|---|---|
| LEGAL-UQA | arXiv:2410.13013 | Justifies LLM choice, provides eval dataset |
| Agentic RAG Survey | arXiv:2501.09136 | Justifies multi-agent architecture pattern |
| LegalBench-RAG | arXiv:2408.10343 | Second retrieval eval benchmark |
| NyayaRAG | arXiv:2508.00709 | South Asian legal RAG prior work |
| Domain-Partitioned Hybrid RAG | arXiv:2602.23371 | Justifies Chroma partition-per-law-type |

---

## What the System Does NOT Do

- Does NOT give legal advice (informational only — always disclaimer)
- Does NOT replace a lawyer for complex cases
- Does NOT cover provincial legislation (Sindh, Punjab acts) — federal statutes only in v1
- Does NOT support voice input in v1 (text only)
- Does NOT integrate real bar council API (mocked in v1)
- Does NOT support blockchain e-signature validation in v1

---

## Important Constraints for AI Assistants

1. **Always use Pakistani law** — do not reference Indian, UK, or US law
2. **PPC** = Pakistan Penal Code (not Indian Penal Code)
3. **CrPC** = Code of Criminal Procedure 1898 (Pakistan version)
4. **Province metadata** must always be attached to every Chroma chunk
5. **Bilingual** — system must handle both English and Urdu queries
6. **No paid APIs in core pipeline** — Gemini Flash free tier or Ollama only
7. **LangGraph** is the agent framework — do not suggest CrewAI or AutoGen
8. **ChromaDB** is the vector store — do not suggest Pinecone or Weaviate
9. **MongoDB** is the primary DB — do not suggest PostgreSQL or MySQL
10. **FastAPI** is the backend — do not suggest Django or Flask
11. **Next.js 15** is the frontend — do not suggest React SPA or Vue

---

*Last updated: 25 April 2026 | ATTORNEY.AI SP23-BCS-069*
