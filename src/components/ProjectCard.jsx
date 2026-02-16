import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Folder, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = memo(({ title, category, description, tags, id }) => {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="group relative h-full holo-card rounded-xl p-[2px] overflow-hidden"
        >
            {/* Animated gradient border on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient-rotate"></div>

            {/* Background watermark icon */}
            <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-all duration-500 group-hover:scale-110">
                <Folder size={120} className="text-cyan-500" />
            </div>

            <div className="relative bg-[#0a0a15]/90 backdrop-blur-sm h-full p-6 rounded-lg flex flex-col">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 rounded-lg pointer-events-none"></div>

                <div className="relative z-10">
                    {/* Category and Arrow */}
                    <div className="flex justify-between items-start mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold tracking-widest text-cyan-300 uppercase border border-cyan-500/40 bg-gradient-to-r from-cyan-950/50 to-purple-950/50 rounded-md backdrop-blur-sm group-hover:border-cyan-400/60 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all duration-300">
                            <Code size={12} />
                            {category}
                        </div>
                        <Link
                            to={`/work/${id}`}
                            className="text-cyan-700 group-hover:text-cyan-400 transition-all duration-300 bg-gradient-to-br from-cyan-950/30 to-purple-950/30 p-2.5 rounded-full border border-transparent group-hover:border-cyan-500/40 group-hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] group-hover:rotate-45 transform"
                        >
                            <ArrowUpRight size={20} />
                        </Link>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300 flex items-center gap-2">
                        <Link to={`/work/${id}`} className="hover:tracking-wide transition-all duration-300">
                            {title}
                        </Link>
                    </h3>

                    {/* Gradient divider */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-4 group-hover:via-purple-500/50 transition-all duration-500"></div>

                    {/* Description */}
                    <p className="text-cyan-100/70 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow group-hover:text-cyan-100/90 transition-colors">
                        {description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gradient-to-r from-cyan-900/30 via-purple-900/30 to-pink-900/30">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] uppercase font-bold text-cyan-400 bg-gradient-to-r from-cyan-950/40 to-purple-950/40 px-3 py-1.5 rounded-md border border-cyan-800/40 group-hover:border-cyan-600/60 group-hover:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all duration-300 hover:scale-105"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-lg">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>
            </div>
        </motion.div>
    );
});

export default ProjectCard;
