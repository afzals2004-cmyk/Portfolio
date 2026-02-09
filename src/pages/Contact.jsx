import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send, Terminal } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen pt-32 pb-12 px-6 max-w-7xl mx-auto font-mono text-cyan-50">

            <div className="grid lg:grid-cols-2 gap-16">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-2 flex items-center gap-2 text-cyan-400">
                        <Terminal size={18} />
                        <span className="text-sm font-bold tracking-widest uppercase">Initializing Comm Link...</span>
                    </div>
                    <h1 className="text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-500 holo-text">
                        ESTABLISH<br />CONNECTION
                    </h1>

                    <div className="space-y-8 mt-12">
                        <div className="flex items-start gap-4 group">
                            <div className="p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-lg text-cyan-400 group-hover:shadow-[0_0_15px_cyan] transition-all duration-300">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-cyan-600 uppercase tracking-wider mb-1">Electronic Mail</h3>
                                <a href="mailto:Afzals2004@gmail.com" className="text-xl text-white hover:text-cyan-300 transition-colors">Afzals2004@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-lg text-cyan-400 group-hover:shadow-[0_0_15px_cyan] transition-all duration-300">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-cyan-600 uppercase tracking-wider mb-1">Comms Line</h3>
                                <p className="text-xl text-white">+91 9967007042</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-lg text-cyan-400 group-hover:shadow-[0_0_15px_cyan] transition-all duration-300">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-cyan-600 uppercase tracking-wider mb-1">Professional Network</h3>
                                <a href="https://linkedin.com/in/afzaldatanalyst" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-cyan-300 transition-colors">
                                    linkedin.com/in/afzaldatanalyst
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-lg text-cyan-400 group-hover:shadow-[0_0_15px_cyan] transition-all duration-300">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-cyan-600 uppercase tracking-wider mb-1">Base of Operations</h3>
                                <p className="text-xl text-white">Mumbai, India 400072</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form (Styled) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="holo-card p-8 rounded-2xl border border-cyan-500/20 bg-black/40"
                >
                    <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                        <Send size={20} className="text-cyan-400" /> SEND_TRANSMISSION
                    </h2>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2">Identify Yourself</label>
                            <input type="text" className="w-full bg-cyan-950/30 border border-cyan-900 rounded p-4 text-white focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all placeholder-cyan-800" placeholder="NAME / ORG" />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2">Return Address</label>
                            <input type="email" className="w-full bg-cyan-950/30 border border-cyan-900 rounded p-4 text-white focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all placeholder-cyan-800" placeholder="EMAIL@DOMAIN.COM" />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2">Message Payload</label>
                            <textarea rows="4" className="w-full bg-cyan-950/30 border border-cyan-900 rounded p-4 text-white focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all placeholder-cyan-800" placeholder="ENTER_DATA..."></textarea>
                        </div>

                        <button className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-black font-bold tracking-[0.2em] uppercase rounded transition-all shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)]">
                            Transmit
                        </button>
                    </form>
                </motion.div>

            </div>
        </div>
    );
};

export default Contact;
