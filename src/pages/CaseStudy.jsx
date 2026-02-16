import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code2, Zap, Target } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';

const CaseStudy = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <h1 className="text-3xl font-bold mb-4 text-white">Project not found</h1>
                    <Link
                        to="/work"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] transition-all duration-300 hover:scale-105"
                    >
                        <ArrowLeft size={20} />
                        Back to Work
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        >
            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
            >
                <Link
                    to="/work"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-all duration-300 group font-medium"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="border-b border-transparent group-hover:border-cyan-300">Back to Work</span>
                </Link>
            </motion.div>

            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-12"
            >
                {/* Category Badge */}
                <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-widest text-cyan-300 uppercase border border-cyan-500/40 bg-gradient-to-r from-cyan-950/50 to-purple-950/50 rounded-lg backdrop-blur-sm mb-6 shadow-[0_0_15px_rgba(0,243,255,0.2)]"
                >
                    <Code2 size={14} />
                    {project.category}
                </motion.span>

                {/* Project Title */}
                <h1 className="text-4xl md:text-6xl font-black mb-6 holo-text leading-tight">
                    {project.title}
                </h1>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, index) => (
                        <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                            className="px-4 py-2 bg-gradient-to-r from-cyan-950/40 to-purple-950/40 backdrop-blur-sm rounded-lg text-sm font-bold text-cyan-400 border border-cyan-800/40 hover:border-cyan-600/60 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300 hover:scale-105"
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>

                {/* Gradient Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            </motion.div>

            {/* Content Sections */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {/* Project Overview - Featured Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="glass-card p-8 rounded-2xl mb-12 relative overflow-hidden group hover:shadow-[0_10px_50px_rgba(0,243,255,0.2)] transition-all duration-500"
                >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none"></div>

                    {/* Background icon */}
                    <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                        <Code2 size={120} className="text-cyan-400" />
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="p-2 bg-gradient-to-br from-cyan-900/40 to-purple-900/40 rounded-lg border border-cyan-500/30">
                                <Target size={24} className="text-cyan-300" />
                            </span>
                            Project Overview
                        </h3>
                        <p className="text-cyan-100/80 text-lg leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                </motion.div>

                {/* Three Column Grid - Challenge, Solution, Impact */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {/* The Challenge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="glass-card p-6 rounded-xl relative overflow-hidden group hover:shadow-[0_8px_40px_rgba(0,243,255,0.15)] transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all duration-500 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-lg border border-orange-500/30 group-hover:shadow-[0_0_20px_rgba(255,100,0,0.3)] transition-all duration-300">
                                    <Zap size={20} className="text-orange-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">The Challenge</h3>
                            </div>
                            <div className="h-px w-full bg-gradient-to-r from-orange-500/30 to-transparent mb-4"></div>
                            <p className="text-cyan-100/70 text-sm leading-relaxed">
                                {project.challenge}
                            </p>
                        </div>
                    </motion.div>

                    {/* The Solution */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="glass-card p-6 rounded-xl relative overflow-hidden group hover:shadow-[0_8px_40px_rgba(0,243,255,0.15)] transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gradient-to-br from-cyan-900/30 to-purple-900/30 rounded-lg border border-cyan-500/30 group-hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all duration-300">
                                    <Code2 size={20} className="text-cyan-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">The Solution</h3>
                            </div>
                            <div className="h-px w-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 mb-4"></div>
                            <p className="text-cyan-100/70 text-sm leading-relaxed">
                                {project.solution}
                            </p>
                        </div>
                    </motion.div>

                    {/* Key Impact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="glass-card p-6 rounded-xl relative overflow-hidden group hover:shadow-[0_8px_40px_rgba(0,243,255,0.15)] transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 transition-all duration-500 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-lg border border-green-500/30 group-hover:shadow-[0_0_20px_rgba(0,255,100,0.3)] transition-all duration-300">
                                    <Target size={20} className="text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Key Impact</h3>
                            </div>
                            <div className="h-px w-full bg-gradient-to-r from-green-500/30 to-transparent mb-4"></div>
                            <p className="text-green-400 font-medium text-sm leading-relaxed">
                                {project.impact}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Button */}
                {project.link !== '#' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-12 text-center"
                    >
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-black font-bold tracking-wider uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.6),0_0_60px_rgba(139,92,246,0.4)] hover:scale-105 rounded-lg"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Visit Live Site
                                <ExternalLink size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                            </span>
                            {/* Animated overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </a>
                    </motion.div>
                )}
            </motion.div>
        </motion.article>
    );
};

export default CaseStudy;
