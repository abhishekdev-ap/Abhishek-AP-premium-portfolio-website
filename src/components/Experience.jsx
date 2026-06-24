import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Full-Stack Development Intern",
        company: "InlighnX Global Private Limited",
        location: "Bengaluru",
        date: "July 2025 – Oct 2025",
        details: [
            "Developed responsive web interfaces using React.js and Tailwind CSS, improving page load speeds and user engagement.",
            "Integrated RESTful APIs with a Node.js backend to streamline data flow, ensuring seamless communication."
        ]
    },
    {
        role: "Quality Control Engineer",
        company: "Micropack Pvt. Ltd (Client of ISRO)",
        location: "Bengaluru",
        date: "Dec 2020 – June 2022",
        details: [
            "Conducted rigorous PCB inspections ensuring strict compliance with ISRO safety standards.",
            "Optimized testing workflows to reduce defects and improve reporting efficiency."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="relative py-24 px-6 z-10 w-full max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                    Career <span className="neon-gradient-text">Trajectory</span>
                </h2>
            </motion.div>

            <div className="relative border-l border-border ml-4 md:ml-0">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
                        className="mb-12 ml-8 relative"
                    >
                        <span className="absolute -left-[41px] top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-background border border-neon-blue shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                            <span className="w-1.5 h-1.5 bg-neon-blue rounded-full"></span>
                        </span>

                        <div className="glass-panel p-6 hover:border-neon-purple/30 transition-colors duration-300">
                            <span className="inline-block px-3 py-1 text-xs font-semibold bg-surface text-muted rounded-full mb-4 border border-border">
                                {exp.date}
                            </span>
                            <h3 className="text-2xl font-heading font-bold text-foreground mb-1">{exp.role}</h3>
                            <h4 className="text-neon-purple font-medium mb-4">{exp.company} • {exp.location}</h4>
                            <ul className="space-y-2 text-muted">
                                {exp.details.map((detail, dIdx) => (
                                    <li key={dIdx} className="relative pl-5">
                                        <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-neon-blue rounded-full opacity-50"></span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
