import { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import Logo from './Logo';

const Navbar = memo(() => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={clsx(
            "fixed top-0 w-full z-50 transition-all duration-500",
            scrolled
                ? "glass-card border-b border-cyan-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_60px_rgba(0,243,255,0.1)]"
                : "bg-transparent border-b border-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center group">
                        <Logo />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={clsx(
                                    "text-sm font-medium transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(0,243,255,0.5)] relative group",
                                    location.pathname === link.path ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(0,243,255,0.6)]" : "text-gray-300"
                                )}
                            >
                                {link.name}
                                <span className={clsx(
                                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full",
                                    location.pathname === link.path ? "w-full" : ""
                                )}></span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300 p-2">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-card border-t border-cyan-500/20 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-1 bg-gradient-to-b from-cyan-950/20 to-purple-950/10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={clsx(
                                        "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300",
                                        location.pathname === link.path
                                            ? "bg-gradient-to-r from-cyan-600/30 to-purple-600/30 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,243,255,0.2)]"
                                            : "text-gray-300 hover:bg-cyan-900/20 hover:text-cyan-400 border border-transparent hover:border-cyan-700/30"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
});

export default Navbar;
