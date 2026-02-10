import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { FolderGit2 } from 'lucide-react';
import SEO from '../components/SEO';

const Work = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-28 pb-12 px-6 max-w-7xl mx-auto font-mono text-cyan-50"
        >
            <SEO
                title="Work"
                description="Portfolio of projects by Afzal Shaikh. Includes AI bots, data dashboards, and full-stack applications."
            />

            {/* Header - Aligned with About Page */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 border-b border-cyan-900/50 pb-8"
            >
                <div className="flex items-center gap-2 text-cyan-500 mb-2">
                    <FolderGit2 size={24} />
                    <span className="text-sm font-bold tracking-widest uppercase">/root/projects/all</span>
                </div>
                <h1 className="text-5xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 holo-text">
                    PROJECT_ARCHIVE
                </h1>
                <p className="text-xl text-cyan-200/70 max-w-3xl leading-relaxed">
                    A collection of <span className="text-cyan-400">automated systems</span>, <span className="text-cyan-400">dashboards</span>, and engineering solutions highlighting my expertise in full-stack development and data science.
                </p>
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Work;
