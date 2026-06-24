import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 px-6 z-10 w-full glass-panel border-x-0 border-b-0 rounded-none bg-background/80 mt-20">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                        Let's <span className="neon-gradient-text">Connect</span>
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-10">
                        Currently seeking a full-time role in AI engineering, agentic systems, or intelligent automation. Let's build the future together.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    className="flex justify-center flex-wrap gap-6 mb-12"
                >
                    <a href="https://www.linkedin.com/in/abhishek-ashok-pattanashetti-a71265225/" target="_blank" rel="noreferrer"
                        className="w-16 h-16 flex items-center justify-center rounded-full glass-panel hover:bg-neon-blue hover:text-white dark:hover:text-dark-bg transition-all duration-300 hover:-translate-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_20px_rgba(0,240,255,0.4)] hover:border-neon-blue text-2xl">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/abhishekdev-ap" target="_blank" rel="noreferrer"
                        className="w-16 h-16 flex items-center justify-center rounded-full glass-panel hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-dark-bg transition-all duration-300 hover:-translate-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_20px_rgba(255,255,255,0.4)] hover:border-slate-900 dark:hover:border-white text-2xl">
                        <FaGithub />
                    </a>
                    <a href="https://x.com/Abhishe04944325" target="_blank" rel="noreferrer"
                        className="w-16 h-16 flex items-center justify-center rounded-full glass-panel hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-dark-bg transition-all duration-300 hover:-translate-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_20px_rgba(255,255,255,0.4)] hover:border-slate-900 dark:hover:border-white text-2xl">
                        <FaXTwitter />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-6"
                >
                    <a href="mailto:abhishekpattanashetti198@gmail.com" className="flex items-center gap-3 px-6 py-3 rounded-full glass-panel bg-surface hover:bg-surface-hover transition-colors text-muted hover:text-foreground border border-border hover:border-border-hover">
                        <Mail className="text-neon-blue" size={20} />
                        <span>abhishekpattanashetti198@gmail.com</span>
                    </a>
                    <a href="tel:+919731559148" className="flex items-center gap-3 px-6 py-3 rounded-full glass-panel bg-surface hover:bg-surface-hover transition-colors text-muted hover:text-foreground border border-border hover:border-border-hover">
                        <Phone className="text-neon-purple" size={20} />
                        <span>+91 9731559148</span>
                    </a>
                </motion.div>
            </div>

            <div className="mt-20 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Abhishek Pattanashetti. All Rights Reserved.</p>
            </div>
        </section>
    );
}
