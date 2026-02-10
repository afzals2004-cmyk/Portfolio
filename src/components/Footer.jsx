import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        © {new Date().getFullYear()} Developer Portfolio. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="https://github.com/afzals2004-cmyk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
                            <span className="sr-only">GitHub</span>
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/afzaldatanalyst" className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
