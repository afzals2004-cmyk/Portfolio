import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative z-50 py-8 mt-auto border-t border-cyan-500/30 bg-gradient-to-t from-[#050510] to-[#050510]/80 backdrop-blur-xl shadow-[0_-5px_20px_rgba(0,243,255,0.05)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-cyan-200/60 text-sm font-mono tracking-wider text-center md:text-left">
                        <span className="text-cyan-500">© {new Date().getFullYear()}</span> SYSTEM_USER: AFZAL_SHAIKH [ALL_RIGHTS_RESERVED]
                    </p>
                    <div className="flex space-x-6">
                        <a href="https://github.com/afzals2004-cmyk" target="_blank" rel="noopener noreferrer" className="text-cyan-400/70 hover:text-cyan-400 transition-all hover:scale-110 hover:shadow-[0_0_15px_cyan]">
                            <span className="sr-only">GitHub</span>
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/afzaldatanalyst" target="_blank" rel="noopener noreferrer" className="text-cyan-400/70 hover:text-cyan-400 transition-all hover:scale-110 hover:shadow-[0_0_15px_cyan]">
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
