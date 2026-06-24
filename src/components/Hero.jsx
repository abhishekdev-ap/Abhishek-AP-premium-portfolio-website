import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { useHyperText } from '../hooks/useHyperText';

export default function Hero() {
    const { scrollY } = useScroll();
    const { theme } = useTheme();

    // As you scroll down (0 to 500px), fade out the hero content
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    // As you scroll down, push the hero content up slightly for a parallax effect
    const y = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section className="relative flex items-center justify-center min-h-screen px-6 pt-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 pointer-events-none" />

            <motion.div
                style={{ opacity, y }}
                className="relative z-10 max-w-4xl mx-auto text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6 inline-block"
                >
                    <span className="px-4 py-2 text-sm md:text-base rounded-full glass-panel text-neon-blue border-neon-blue/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                        Full Stack Engineer <span className="mx-2">→</span> AI Engineer
                    </span>
                </motion.div>

                <h1 className="mb-4 font-heading text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground flex flex-col items-center justify-center">
                    <div key={`first-${theme}`} className="flex flex-wrap justify-center overflow-hidden min-h-[40px] sm:min-h-[48px] md:min-h-[72px]">
                        {useHyperText("Abhishek", 800, 100, theme)}
                    </div>
                    <div key={`last-${theme}`} className="flex flex-wrap justify-center overflow-hidden mt-2 neon-gradient-text pb-2 min-h-[50px] sm:min-h-[58px] md:min-h-[82px]">
                        {useHyperText("Pattanashetti", 1000, 400, theme)}
                    </div>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mb-10 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
                >
                    Building intelligent systems using <span className="text-foreground font-medium">LLMs</span>, <span className="text-foreground font-medium">Agentic AI</span>, and smart automation pipelines.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-4 text-dark-bg font-semibold rounded-full bg-neon-blue hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] w-full sm:w-auto"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 text-foreground font-semibold rounded-full glass-panel hover:bg-surface-hover transition-colors duration-300 w-full sm:w-auto border border-border hover:border-neon-blue/50"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>
        </section >
    );
}
