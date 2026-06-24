import { motion } from 'framer-motion';
import { Trophy, ExternalLink } from 'lucide-react';

const achievements = [
    {
        title: "Generative AI Mastermind",
        issuer: "Outskill",
        link: "/generative_ai_mastermind_certificate.pdf"
    },
    {
        title: "Replit AI Agent Hackathon",
        issuer: "Replit",
        link: "/replit_vibeathon_certificate.pdf"
    },
    {
        title: "Pine-Labs Playground hackthon (AWS)",
        issuer: "Pine Labs & AWS",
        link: "/pine_labs_playground_hackathon_certificate.png"
    },
    {
        title: "2nd Academic Rank (Semester VII)",
        issuer: "Srinivas University"
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="relative py-24 px-6 z-10 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                    Honors & <span className="neon-gradient-text">Milestones</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
                {achievements.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="glass-panel p-8 text-center hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full items-center justify-between"
                    >
                        <div className="flex flex-col items-center">
                            <div className="mb-4 inline-flex items-center justify-center p-4 rounded-full bg-neon-purple/10 text-neon-purple group-hover:bg-neon-blue/10 group-hover:text-neon-blue transition-colors duration-300">
                                <Trophy size={32} />
                            </div>
                            <h3 className="text-xl font-heading font-medium text-foreground mb-2">{item.title}</h3>
                            <p className="text-muted text-sm mb-6">{item.issuer}</p>
                        </div>
                        
                        {item.link ? (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-auto inline-flex items-center gap-2 text-xs font-semibold text-neon-blue border border-neon-blue/30 px-4 py-2 rounded-lg bg-neon-blue/5 hover:bg-neon-blue/15 hover:border-neon-blue/50 transition-all duration-300 cursor-pointer shadow-[0_0_10px_rgba(0,240,255,0.05)] hover:shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                            >
                                View Certificate <ExternalLink size={12} />
                            </a>
                        ) : (
                            <span className="mt-auto text-xs text-muted/60 italic border border-dashed border-border/30 px-3.5 py-1.5 rounded-lg bg-surface/5 select-none">
                                Verification Pending
                            </span>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
