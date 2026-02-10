import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Folder, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = memo(({ title, category, description, tags, id }) => {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.01 }}
            className="group relative h-full holo-card rounded-xl p-1"
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Folder size={100} className="text-cyan-500" />
            </div>

            <div className="relative z-10 bg-[#0a0a15]/80 h-full p-6 rounded-lg flex flex-col backdrop-blur-sm">
                <div className="flex justify-between items-start mb-6">
                    <div className="inline-block px-2 py-1 text-[10px] font-bold tracking-widest text-cyan-400 uppercase border border-cyan-500/30 bg-cyan-950/30 rounded">
                        {category}
                    </div>
                    <Link to={`/work/${id}`} className="text-cyan-700 group-hover:text-cyan-400 transition-colors bg-cyan-950/50 p-2 rounded-full border border-transparent group-hover:border-cyan-500/30">
                        <ArrowUpRight size={20} />
                    </Link>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    <Code size={18} className="text-cyan-600" />
                    <Link to={`/work/${id}`}>
                        {title}
                    </Link>
                </h3>

                <p className="text-cyan-100/60 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-cyan-900/30">
                    {tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase font-bold text-cyan-600 bg-cyan-950/30 px-2 py-1 rounded border border-cyan-900/30">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
});

export default ProjectCard;
