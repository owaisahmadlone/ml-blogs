export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming Languages",
    items: ["Python", "C++", "C", "JavaScript/TypeScript", "SQL", "Neo4j Cypher", "Bash"],
  },
  {
    label: "Frameworks & Agents",
    items: [
      "PyTorch",
      "HuggingFace",
      "Google ADK",
      "LangGraph",
      "LangChain",
      "LlamaIndex",
      "DSPy",
      "PydanticAI",
      "Temporal",
      "vLLM",
      "LLaMA-Factory",
    ],
  },
  {
    label: "AI/ML",
    items: [
      "Deep Learning",
      "NLP",
      "Vision-Language Models",
      "LoRA Fine-tuning",
      "Set-of-Mark Grounding",
      "Speculative Decoding (EAGLE-3)",
      "Retrieval-Augmented Generation",
      "Reciprocal Rank Fusion",
      "Graph ML",
      "Knowledge Graphs",
    ],
  },
  {
    label: "Infra & Data",
    items: [
      "AWS (EKS/S3/KMS)",
      "Azure",
      "GCP",
      "Kubernetes",
      "Docker",
      "Flux (GitOps)",
      "SOPS",
      "Neo4j",
      "Turbopuffer",
      "OpenSearch",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "Git",
    ],
  },
];

export const accolades: string[] = [
  "Awarded the India-AI Fellowship by the Govt. of India as part of its IndiaAI Mission to foster AI research.",
];

export type ExperienceSubsection = {
  title: string;
  bullets: string[];
};

export type Experience = {
  company: string;
  companyUrl?: string;
  location: string;
  role: string;
  period: string;
  bullets?: string[];
  subsections?: ExperienceSubsection[];
};

export const experience: Experience[] = [
  {
    company: "Landeed",
    companyUrl: "https://www.landeed.com",
    location: "Hyderabad, India",
    role: "Foundational Software and AI Engineer",
    period: "June 2025 – Present",
    subsections: [
      {
        title: "AITSR — AI Title Search Report",
        bullets: [
          "Architected a hybrid LangGraph + Google ADK multi-agent pipeline that automates lawyer-grade land-title risk reports for Indian real estate, replacing manual attorney diligence for B2B lenders (banks and housing-finance NBFCs).",
          "Designed a layered default → state → client analysis-profile framework with composable markdown \u201cskill-packs\u201d (99 skill-packs, 17 report formats, 32 deed types, 78 document types) behind a ContextProvider seam for drop-in RAG — replacing a hardcoded per-client prompt monolith.",
          "Built a deterministic citation verifier gating ≥98% first-pass citation accuracy (every claim traceable to a source page, no LLM-as-judge) over a ∼50-report eval set, plus a 49-card statute-cited legal knowledge base (41 subjects, 38 critical) with a lawyer-review feedback loop.",
          "Productionized an end-to-end deed → EC → report flow as a durable Temporal workflow with an autonomous agent fetching Encumbrance Certificates from state government portals (TS/AP/TN/KA), SHA-256 EC-reuse caching and per-stage metrics — eliminating orphaned-report failures from prior in-process background tasks.",
        ],
      },
      {
        title: "Terra — Conversational land-records assistant",
        bullets: [
          "Built Terra on Google ADK over AWS EKS: a root agent plus 4 specialized human-in-the-loop sub-agents orchestrating ∼100 tools across 9 Indian states, unifying fragmented government land records behind one chat interface (AG-UI/CopilotKit streaming).",
          "Shipped a Gemini + PydanticAI structured-extraction microservice hitting 100% success and field completeness on benchmark and ∼5× faster than free-form (9.6s vs 49s/doc); load-tested to 100 concurrent users with HPA autoscaling and Redis-Streams SSE resilient to 20–40s portal fetches, shipped via Flux GitOps (SOPS/KMS).",
        ],
      },
      {
        title: "Knowledge Graph",
        bullets: [
          "Engineered a Neo4j Encumbrance-Certificate transaction knowledge graph with hybrid vector + full-text retrieval fused via Reciprocal Rank Fusion, plus a Turbopuffer batch index (Voyage voyage-4-large embeddings) with multilingual-safe FTS for Kannada/Telugu names.",
        ],
      },
      {
        title: "Deed Intelligence — Grounded VLM fine-tuning",
        bullets: [
          "Fine-tuned dots.mocr (3B document VLM) with a Set-of-Mark grounding protocol (LoRA over both vision and language towers, LLaMA-Factory) for verifiable key-information extraction from registered Indian deeds — lifting grounded field F1 from 0.04 to 0.73 and evidence-to-party linking from 0% to 91.8% with zero JSON parse failures, beating zero-shot Gemini 3.5 Flash on every metric.",
          "Trained an EAGLE-3 speculative-decoding draft delivering a 2.27× wall-clock speedup at token-exact parity (1.19s vs 2.71s/page), keeping a local 3B model competitive with frontier APIs at zero per-call cost and on-premise data residency.",
        ],
      },
    ],
  },
  {
    company: "ABB Ability Innovation Centre",
    location: "Hyderabad, India",
    role: "Data Science Research Intern",
    period: "May – Aug 2024",
    subsections: [
      {
        title: "AI-based Question Answering",
        bullets: [
          "Developed a novel state-of-the-art Retrieval-Augmented Generation (RAG) pipeline answering single- and multi-hop queries over an unstructured knowledge base, integrating Vector RAG and Graph RAG with a PDF-parsing and information-processing suite.",
        ],
      },
      {
        title: "Ontology Creation",
        bullets: [
          "Developed a standardized ontology-creation methodology from the pipeline\u2019s knowledge graph, enabling interoperability across correlated domains and consolidation of the Q&A system.",
        ],
      },
    ],
  },
  {
    company: "Mindcase Technologies",
    location: "New Delhi, India",
    role: "Machine Learning Engineer/Researcher",
    period: "Mar – May 2024",
    subsections: [
      {
        title: "Cloud ChatBot System",
        bullets: [
          "Built a cloud-based Q&A chat application ensuring secure data flow between LLM deployment, SQL database and vector index; strengthened the Q&A pipeline with novel RAG methods robust across query types and benchmarks.",
        ],
      },
      {
        title: "Speech Recognition/Transcription",
        bullets: [
          "Integrated AWS speech recognition, transcription and Textract via WebSocket APIs to enable live language recognition and OCR use cases within applications.",
        ],
      },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "ML/DL Security",
    description:
      "Investigated secure memory management, cryptographic protocols and access-control mechanisms to safeguard ML workloads on GPUs using hardware-based security features like TEEs; reproduced covert and side-channel attacks on multi-GPUs.",
  },
  {
    title: "LLM-Generated Text Detection",
    description:
      "Built an LLM pipeline to detect AI-generated text: a SentencePiece + Byte-Pair-Encoding and TF-IDF ensemble (CatBoost, LightGBM, Naive Bayes) alongside a LoRA-finetuned DistilBERT; the ensemble scored 0.96 on the leaderboard, outperforming the standalone DistilBERT (0.86).",
  },
];

export type Publication = {
  title: string;
  authors: string;
  year: string;
  note: string;
};

export const publications: Publication[] = [
  {
    title: "OntoRAG: An Automated RAG Pipeline to derive Ontology for an Unstructured Knowledge Base",
    authors: "Yash Tiwari, Owais Ahmad Lone",
    year: "2024",
    note: "Unpublished manuscript (prepared; not submitted for publication).",
  },
];

export type EducationEntry = {
  institution: string;
  location: string;
  degree: string;
  gpa: string;
  period: string;
  courses: string[];
};

export const education: EducationEntry[] = [
  {
    institution: "Indian Institute of Technology",
    location: "Kharagpur, India",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    gpa: "8.55/10",
    period: "Nov. 2021 – Apr. 2025",
    courses: [
      "Cryptography and Network Security",
      "Usable Security and Privacy",
      "Machine Learning",
      "Deep Learning",
      "Interpretable Machine Learning",
    ],
  },
];
