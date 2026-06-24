import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "AI & LLM",
        skills: ["Python", "Prompt Engineering", "Generative AI", "LLMs", "RAG Pipeline"]
    },
    {
        title: "AI Frameworks",
        skills: ["LangChain", "CrewAI", "LangGraph", "AI Refinery", "n8n"]
    },
    {
        title: "Web Core",
        skills: ["React", "JavaScript", "HTML/CSS", "Bootstrap", "Tailwind"]
    },
    {
        title: "Databases & Cloud",
        skills: ["SQL", "MongoDB", "PostgreSQL", "Pinecone Vector DB", "AWS", "Azure"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 px-6 z-10 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                    Technical <span className="neon-gradient-text">Arsenal</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                        className="glass-panel p-6 hover:-translate-y-2 transition-transform duration-300"
                    >
                        <h3 className="text-xl font-heading font-semibold text-neon-blue mb-4">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIdx) => (
                                <span
                                    key={skillIdx}
                                    className="px-3 py-1 text-sm bg-surface border border-border rounded-full text-muted hover:text-foreground hover:border-neon-purple/50 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section >
    );
}
