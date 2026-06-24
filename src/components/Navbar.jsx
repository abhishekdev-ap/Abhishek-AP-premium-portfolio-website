import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-background/80 backdrop-blur-md border-b border-border' : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-heading font-extrabold tracking-tighter text-foreground hover:text-neon-blue transition-colors">
                    AP<span className="text-neon-purple">.</span>
                </a>

                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted hover:text-foreground hover:text-glow transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <a
                            href="#contact"
                            className="px-5 py-2 text-sm font-semibold rounded-full bg-surface hover:bg-surface-hover text-foreground border border-border hover:border-neon-blue hover:text-neon-blue transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                        >
                            Connect
                        </a>
                    </div>
                </div>

                {/* Mobile menu button (simple) */}
                <div className="flex xl:hidden md:hidden items-center gap-4">
                    <ThemeToggle />
                    <button onClick={() => setIsOpen(!isOpen)} className="text-muted hover:text-foreground">
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border flex flex-col px-6 py-4 space-y-4 shadow-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-base font-medium text-muted hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-2 pb-2">
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="inline-block px-5 py-2 text-sm font-semibold rounded-full bg-surface hover:bg-surface-hover text-foreground border border-border hover:border-neon-blue hover:text-neon-blue transition-all duration-300"
                        >
                            Connect
                        </a>
                    </div>
                </div>
            )}
        </motion.nav>
    );
}
