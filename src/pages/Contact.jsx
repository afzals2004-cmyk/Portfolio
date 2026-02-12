import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send, Terminal, Github } from 'lucide-react';
import SEO from '../components/SEO';

// Memoized static component to prevent re-renders on form input
const ContactInfo = memo(() => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 lg:mb-0"
    >
        <div className="mb-2 flex items-center gap-2 text-cyan-400">
            <Terminal size={18} />
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase">Initializing Comm Link...</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-500 holo-text leading-tight">
            ESTABLISH<br />CONNECTION
        </h1>

        <div className="space-y-6 md:space-y-8 mt-8 md:mt-12">
            <div className="flex items-start gap-4 group">
                <div className="p-3 md:p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-lg text-cyan-400 group-hover:shadow-[0_0_15px_cyan] transition-all duration-300 shrink-0">
                    <Mail size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="overflow-hidden">
                    <h3 className="text-xs md:text-sm font-bold text-cyan-600 uppercase tracking-wider mb-1">Electronic Mail</h3>
                    <a href="mailto:Afzals2004@gmail.com" className="text-lg md:text-xl text-white hover:text-cyan-300 transition-colors break-words">Afzals2004@gmail.com</a>
                </div>
            </div>

            <div className="flex items-start gap-4 group">
                <div className="p-3 md:p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-lg text-cyan-400 group-hover:shadow-[0_0_15px_cyan] transition-all duration-300 shrink-0">
                    <Phone size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                    <h3 className="text-xs md:text-sm font-bold text-cyan-600 uppercase tracking-wider mb-1">Comms Line</h3>
                    <p className="text-lg md:text-xl text-white">+91 9967007042</p>
                </div>
            </div>

            <div className="flex items-start gap-4 group">
                <div className="p-3 md:p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-lg text-cyan-400 group-hover:shadow-[0_0_15px_cyan] transition-all duration-300 shrink-0">
                    <Linkedin size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="overflow-hidden">
                    <h3 className="text-xs md:text-sm font-bold text-cyan-600 uppercase tracking-wider mb-1">Professional Network</h3>
                    <a href="https://linkedin.com/in/afzaldatanalyst" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-white hover:text-cyan-300 transition-colors break-words block">
                        linkedin.com/in/afzaldatanalyst
                    </a>
                </div>
            </div>

            <div className="flex items-start gap-4 group">
                <div className="p-3 md:p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-lg text-cyan-400 group-hover:shadow-[0_0_15px_cyan] transition-all duration-300 shrink-0">
                    <MapPin size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                    <h3 className="text-xs md:text-sm font-bold text-cyan-600 uppercase tracking-wider mb-1">Base of Operations</h3>
                    <p className="text-lg md:text-xl text-white">Mumbai, India 400072</p>
                </div>
            </div>

            <div className="flex items-start gap-4 group">
                <div className="p-3 md:p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-lg text-cyan-400 group-hover:shadow-[0_0_15px_cyan] transition-all duration-300 shrink-0">
                    <Github size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="overflow-hidden">
                    <h3 className="text-xs md:text-sm font-bold text-cyan-600 uppercase tracking-wider mb-1">Code Repository</h3>
                    <a href="https://github.com/afzals2004-cmyk" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-white hover:text-cyan-300 transition-colors break-words">
                        github.com/afzals2004-cmyk
                    </a>
                </div>
            </div>
        </div>
    </motion.div>
));

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000); // Reset status after 5 seconds
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-24 md:pt-32 pb-12 px-4 sm:px-6 max-w-7xl mx-auto font-mono text-cyan-50"
        >
            <SEO
                title="Contact"
                description="Get in touch with Afzal Shaikh for data science, automation, and web development collaborations."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pb-8">

                {/* Contact Info */}
                <ContactInfo />

                {/* Contact Form (Styled) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="holo-card p-6 md:p-8 rounded-2xl border border-cyan-500/20 bg-black/40"
                >
                    <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                        <Send size={20} className="text-cyan-400" /> SEND_TRANSMISSION
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2">Identify Yourself</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-cyan-950/30 border border-cyan-900 rounded p-4 text-white focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all placeholder-cyan-800"
                                placeholder="NAME / ORG"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2">Return Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-cyan-950/30 border border-cyan-900 rounded p-4 text-white focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all placeholder-cyan-800"
                                placeholder="EMAIL@DOMAIN.COM"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2">Message Payload</label>
                            <textarea
                                rows="4"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-cyan-950/30 border border-cyan-900 rounded p-4 text-white focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all placeholder-cyan-800"
                                placeholder="ENTER_DATA..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className={`w-full py-4 font-bold tracking-[0.2em] uppercase rounded transition-all shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)] ${status === 'sending' ? 'bg-cyan-800 cursor-not-allowed text-gray-400' : 'bg-cyan-600 hover:bg-cyan-500 text-black'
                                }`}
                        >
                            {status === 'sending' ? 'Transmitting...' : 'Transmit'}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-400 text-center font-bold mt-4">Transmission Successful. Data Sent.</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-400 text-center font-bold mt-4">Transmission Failed. Check Signal.</p>
                        )}
                    </form>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Contact;
