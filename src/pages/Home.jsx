import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Database, Terminal, Cpu, Network, Activity, Layers, Code, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen font-mono text-cyan-50 overflow-hidden w-full overflow-x-hidden"
        >
            <SEO
                title="Home"
                description="Afzal Shaikh - Data Scientist & Automation Engineer. Transforming raw data into strategic dominance."
            />

            {/* Dark Gradient Overlay for readability */}
            <div className="fixed inset-0 z-0 bg-gradient-to-t from-[#050510] via-transparent to-[#050510]/80 pointer-events-none"></div>

            {/* Scanline & Grid Effects */}
            <div className="absolute inset-0 z-0 tech-grid opacity-20 pointer-events-none"></div>
            <div className="scanline"></div>

            {/* Main Content */}
            <div className="relative z-10 pt-20 md:pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

                {/* Top System Status Bar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0 mb-10 md:mb-16 border-b border-cyan-500/30 pb-2 text-[10px] md:text-xs text-cyan-400 tracking-widest uppercase opacity-80">
                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
                        <span className="flex items-center gap-2">
                            <Activity size={12} className="animate-pulse" /> SYSTEM: ONLINE
                        </span>
                        <span>// SECURE CONNECTION</span>
                    </div>
                    <div className="flex items-center gap-4 hidden sm:flex">
                        <span>LAT: 19.0760 N</span>
                        <span>LON: 72.8777 E</span>
                        <span>[MUMBAI_NODE]</span>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-4 leading-none holo-text">
                            AFZAL<br />SHAIKH
                        </h1>

                        {/* Animated Typewriter-style subtext */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-500/50 bg-cyan-950/40 rounded-sm mb-8 backdrop-blur-md max-w-full overflow-hidden">
                            <Terminal size={14} className="text-cyan-400 flex-shrink-0" />
                            <span className="text-cyan-300 font-bold tracking-wider text-xs sm:text-sm truncate">DATA_SCIENTIST_&_WEB_DEVELOPER</span>
                        </div>

                        <p className="text-base sm:text-lg text-cyan-100/80 mb-8 leading-relaxed max-w-lg border-l-2 border-cyan-500 pl-4 bg-gradient-to-r from-cyan-900/20 to-transparent p-2">
                            Deploying advanced <span className="text-cyan-400 font-bold">neural architectures</span> and extracting actionable intelligence from chaos. Turning raw metrics into strategic dominance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/work"
                                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-black font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.6),0_0_60px_rgba(139,92,246,0.4)] hover:scale-105 text-center rounded-sm"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Initialize Projects
                                    <motion.span
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        →
                                    </motion.span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </Link>

                            <Link
                                to="/contact"
                                className="group relative px-8 py-4 border-2 border-cyan-500 text-cyan-300 font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:scale-105 text-center rounded-sm"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Transmit Signal
                                    <motion.span
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        ●
                                    </motion.span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Premium Stats Module - Real Resume Data */}
                    <motion.div
                        className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <StatCard label="LIVE PROJECTS" value="04" icon={Database} delay={0.2} description="ENTERPRISE DEPLOYED" />
                        <StatCard label="CERTIFICATIONS" value="06" icon={Award} delay={0.3} description="PROFESSIONAL" />
                        <StatCard label="TECH STACK" value="10+" icon={Cpu} delay={0.4} description="LANGUAGES & TOOLS" />
                        <StatCard label="DOMAINS" value="03" icon={Layers} delay={0.5} description="WEB • DATA • AUTO" />
                    </motion.div>
                </div>


                {/* Featured Data Nodes */}
                <div className="relative mt-16 md:mt-24">
                    <div className="absolute -top-8 md:-top-12 left-0 flex items-center gap-2 text-cyan-500 font-bold text-2xl md:text-4xl select-none opacity-50 z-0">
                        <Network size={24} className="md:w-10 md:h-10" /> PROTOCOL://PROJECTS
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 md:pt-0">
                        {projects.slice(0, 3).map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link to={`/work/${project.id}`} className="block h-full group">
                                    <div className="holo-card h-full p-6 relative overflow-hidden lift-3d">
                                        {/* Gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none"></div>

                                        <div className="relative z-10">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="p-2.5 bg-gradient-to-br from-cyan-900/40 to-purple-900/40 rounded-lg border border-cyan-500/40 text-cyan-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all duration-300">
                                                    <Layers size={20} className="group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                                                </div>
                                                <span className="text-[10px] font-bold text-cyan-400 uppercase border border-cyan-700/50 px-2 py-0.5 rounded bg-cyan-950/50 backdrop-blur-sm">{project.id.substring(0, 6)}</span>
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">
                                                {project.title}
                                            </h3>

                                            <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-3"></div>

                                            <p className="text-sm text-cyan-200/70 mb-4 line-clamp-3 font-light leading-relaxed">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {project.tags.slice(0, 3).map(tag => (
                                                    <span key={tag} className="text-[10px] uppercase font-bold text-cyan-400 bg-gradient-to-r from-cyan-950/60 to-purple-950/60 px-2.5 py-1 rounded border border-cyan-800/50 group-hover:border-cyan-600/50 group-hover:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all duration-300">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default Home;
