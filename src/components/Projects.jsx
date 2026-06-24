import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, Github, X, Award, Sparkles, CheckCircle2 } from 'lucide-react';

const projects = [
    {
        title: "Multi-Agent Research Assistant & Offline RAG Engine",
        description: "Built a production-grade AI research platform using LangGraph, FastAPI, Streamlit, ChromaDB, and Ollama, capable of generating citation-aware research reports and performing private document analysis.",
        tech: ["Python", "LangGraph", "FastAPI", "Streamlit", "ChromaDB", "Ollama", "Llama 3.2", "Google Gemini", "Tavily Search", "HuggingFace Embeddings", "Tesseract OCR"],
        github: "https://github.com/abhishekdev-ap/Reserch-AI-Agent.git",
        live: "#",
        features: [
            "Designed a dual-mode architecture supporting both cloud-based web research and 100% offline RAG-powered document Q&A.",
            "Implemented a multi-agent workflow for search, fact-checking, critique, and report generation using LangGraph.",
            "Developed an advanced offline RAG pipeline with OCR fallback, parent-child chunking, multi-query retrieval, hybrid re-ranking, and self-fact-checking loops.",
            "Integrated ChromaDB vector search, local Llama 3.2 (Ollama) inference, and document confidence scoring for reliable answers.",
            "Built a modern FastAPI backend and Streamlit dashboard with debugging tools, privacy controls, and dynamic mode switching.",
            "Ensured strict offline privacy, preventing external API calls during local document processing."
        ],
        achievement: "Created an autonomous AI system that combines multi-agent web research with enterprise-grade offline document intelligence in a single platform."
    },
    {
        title: "AI-Powered RAG Chatbot Pipeline",
        description: "Built an intelligent RAG pipeline using n8n, vector databases, and LLM APIs to automate knowledge retrieval and generate accurate, hallucination-resistant responses.",
        tech: ["n8n", "Pinecone", "Gemini/OpenAI", "Webhooks"],
        github: "#",
        live: "#",
        features: [
            "Orchestrated end-to-end automation workflows using n8n to integrate vector databases and LLM APIs.",
            "Configured Pinecone vector database for high-performance semantic search and document retrieval.",
            "Integrated Gemini and OpenAI APIs with custom prompt engineering to generate context-aware, precise answers.",
            "Established robust webhook endpoints to handle real-time queries and updates asynchronously.",
            "Implemented system guardrails and verification steps to minimize LLM hallucinations."
        ],
        achievement: "Successfully automated knowledge retrieval processes, reducing response times by over 60% with high retrieval precision."
    },
    {
        title: "Parlor Appointment Platform",
        description: "Full-stack booking platform with secure Gmail authentication, dynamic service pricing, advanced appointment scheduling, UPI payments, and feedback collection.",
        tech: ["React", "Node.js", "MongoDB", "Auth"],
        github: "https://github.com/abhishekdev-ap/Akshata-beauty-herbal-project.git",
        live: "https://akshata-beauty-world.vercel.app/",
        features: [
            "Developed a responsive frontend with React and a secure Node.js backend using Express and MongoDB.",
            "Integrated OAuth2 Gmail authentication for secure, seamless user login and email confirmations.",
            "Built dynamic pricing engines and an interactive appointment scheduling calendar.",
            "Integrated secure UPI payment links for smooth, cardless transactional checkout.",
            "Created an automated feedback collection system with sentiment scoring."
        ],
        achievement: "Delivered a fully automated scheduling platform that reduced appointment booking friction and double-bookings to zero."
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="relative py-24 px-6 z-10 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                    Featured <span className="neon-gradient-text">Deployments</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                    >
                        <Tilt
                            className="glass-panel h-full p-1 border-transparent hover:border-neon-blue/40 transition-colors duration-500 overflow-hidden relative group"
                            glareEnable={true}
                            glareMaxOpacity={0.15}
                            glareColor="#00F0FF"
                            glarePosition="all"
                            glareBorderRadius="16px"
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-8 h-full flex flex-col z-10 bg-background/80 rounded-[14px]">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-neon-blue transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        {project.github !== "#" && (
                                            <a href={project.github} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors z-20">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.live !== "#" && (
                                            <a href={project.live} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors z-20">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-muted mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                                    {project.tech.slice(0, 4).map(tech => (
                                        <span key={tech} className="px-3 py-1 text-xs font-semibold bg-neon-purple/10 text-neon-purple border border-neon-purple/20 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 4 && (
                                        <span className="px-3 py-1 text-xs font-semibold bg-surface text-muted rounded-full">
                                            +{project.tech.length - 4} more
                                        </span>
                                    )}
                                </div>

                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="w-full py-2.5 px-4 rounded-xl border border-neon-blue/30 text-neon-blue font-semibold bg-neon-blue/5 hover:bg-neon-blue/15 hover:border-neon-blue/50 transition-all duration-300 text-center text-sm cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.05)] hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] z-20"
                                >
                                    Explore Architecture & Features
                                </button>
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md cursor-default"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 20, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-panel bg-dark-bg/95 border-neon-blue/30 p-6 md:p-8 shadow-2xl rounded-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-muted hover:text-neon-blue transition-colors duration-200 p-2 rounded-full hover:bg-white/5 cursor-pointer"
                            >
                                <X size={24} />
                            </button>

                            {/* Header */}
                            <div className="pr-10 mb-6">
                                <h3 className="text-3xl font-heading font-bold neon-gradient-text mb-2">
                                    {selectedProject.title}
                                </h3>
                                <div className="flex gap-4 mt-3">
                                    {selectedProject.github !== "#" && (
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 text-sm text-muted hover:text-neon-blue transition-colors font-medium border border-border hover:border-neon-blue/30 px-3.5 py-1.5 rounded-lg bg-surface/20 cursor-pointer"
                                        >
                                            <Github size={16} /> Codebase
                                        </a>
                                    )}
                                    {selectedProject.live !== "#" && (
                                        <a
                                            href={selectedProject.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 text-sm text-muted hover:text-neon-blue transition-colors font-medium border border-border hover:border-neon-blue/30 px-3.5 py-1.5 rounded-lg bg-surface/20 cursor-pointer"
                                        >
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Main Description */}
                            <p className="text-muted leading-relaxed mb-6 text-base md:text-lg border-b border-border/50 pb-6">
                                {selectedProject.description}
                            </p>

                            {/* Key Achievement */}
                            {selectedProject.achievement && (
                                <div className="mb-6 p-4 rounded-xl bg-neon-blue/5 border border-neon-blue/20 flex gap-3 items-start">
                                    <Award className="text-neon-blue shrink-0 mt-0.5" size={20} />
                                    <div>
                                        <h4 className="text-sm font-semibold text-neon-blue uppercase tracking-wider mb-1">Key Achievement</h4>
                                        <p className="text-foreground text-sm leading-relaxed">{selectedProject.achievement}</p>
                                    </div>
                                </div>
                            )}

                            {/* Features */}
                            {selectedProject.features && (
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-neon-purple uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <Sparkles size={16} /> Architecture & Core Features
                                    </h4>
                                    <ul className="space-y-3">
                                        {selectedProject.features.map((feature, idx) => (
                                            <li key={idx} className="flex gap-2.5 items-start text-muted text-sm leading-relaxed">
                                                <CheckCircle2 className="text-neon-purple shrink-0 mt-0.5 font-bold" size={16} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Full Tech Stack */}
                            <div>
                                <h4 className="text-sm font-semibold text-muted uppercase tracking-wider mb-3">Technologies Utilized</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map(tech => (
                                        <span key={tech} className="px-3 py-1.5 text-xs font-semibold bg-neon-purple/10 text-neon-purple border border-neon-purple/20 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
