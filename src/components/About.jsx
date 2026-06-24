import { motion } from 'framer-motion';
import { Target, Zap, Bot, Layers } from 'lucide-react';

const focusAreas = [
    {
        icon: <Bot className="w-8 h-8 text-neon-blue" />,
        title: "Agentic AI Systems",
        description: "Building autonomous agents that reason, plan, and execute complex workflows without human intervention."
    },
    {
        icon: <Layers className="w-8 h-8 text-neon-purple" />,
        title: "RAG Architectures",
        description: "Designing scalable Retrieval-Augmented Generation pipelines using vector databases and LLMs to eliminate hallucinations."
    },
    {
        icon: <Zap className="w-8 h-8 text-neon-blue" />,
        title: "AI Workflow Automation",
        description: "Creating zero-friction automation pipelines using n8n and webhooks to streamline business operations."
    },
    {
        icon: <Target className="w-8 h-8 text-neon-purple" />,
        title: "Full Stack AI Apps",
        description: "Bridging the gap between intelligent backends and beautiful, responsive frontends using React and modern WebGL."
    }
];

export default function About() {
    return (
        <section id="about" className="relative py-24 px-6 z-10 w-full max-w-7xl mx-auto overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                    Beyond <span className="neon-gradient-text">Full Stack</span>
                </h2>
                <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
                    I'm an AI Engineer transitioning from traditional full-stack development. I have hands-on experience building LLM-powered agents, end-to-end automation pipelines, and robust intelligent systems that solve real-world problems.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {focusAreas.map((area, index) => (
                    <motion.div
                        key={area.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                        className="glass-panel p-8 hover:border-neon-blue/50 transition-colors duration-300 group"
                    >
                        <div className="mb-6 p-4 rounded-xl bg-surface inline-block group-hover:scale-110 transition-transform duration-300">
                            {area.icon}
                        </div>
                        <h3 className="text-2xl font-heading font-semibold mb-3 text-foreground">
                            {area.title}
                        </h3>
                        <p className="text-muted leading-relaxed">
                            {area.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section >
    );
}
