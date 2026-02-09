import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
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
                <h1 className="text-2xl font-bold mb-4">Project not found</h1>
                <Link to="/work" className="text-blue-600 hover:underline">Back to Work</Link>
            </div>
        );
    }

    return (
        <article className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <Link to="/work" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
                <ArrowLeft size={20} className="mr-2" />
                Back to Work
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-6">
                    <span className="inline-block px-3 py-1 text-sm font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full dark:bg-blue-900/30 dark:text-blue-400 mb-4">
                        {project.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm text-gray-600 dark:text-gray-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 mb-10">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Project Overview</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {project.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">The Challenge</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {project.challenge}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">The Solution</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {project.solution}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Key Impact</h3>
                            <p className="text-green-600 dark:text-green-400 font-medium text-sm leading-relaxed">
                                {project.impact}
                            </p>
                        </div>
                    </div>
                </div>

                {project.link !== '#' && (
                    <div className="mt-8">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                        >
                            Visit Live Site <ExternalLink size={18} className="ml-2" />
                        </a>
                    </div>
                )}
            </motion.div>
        </article>
    );
};

export default CaseStudy;
