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
                <div className="p-3 md:p-4 bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border border-cyan-500/40 rounded-xl text-cyan-300 group-hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] group-hover:border-cyan-400 transition-all duration-300 shrink-0">
                    <Mail size={20} className="md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden">
                    <h3 className="text-xs md:text-sm font-bold text-cyan-500 uppercase tracking-wider mb-1">Electronic Mail</h3>
                    <a href="mailto:Afzals2004@gmail.com" className="text-lg md:text-xl text-white hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-300 hover:to-purple-300 hover:bg-clip-text transition-all duration-300 break-words">Afzals2004@gmail.com</a>
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
            // For local development, simulate a successful response
            const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

            if (isDevelopment) {
                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Simulate successful response
                console.log('📧 Demo Mode: Form submission received', formData);
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);

                // Log to console for demonstration
                console.log('✅ In production, this would send emails to:');
                console.log('   • Admin: Afzals2004@gmail.com');
                console.log(`   • User: ${formData.email}`);
                return;
            }

            // Production: Actual API call
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                console.error('API Error:', data);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
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
                                className="w-full bg-gradient-to-r from-cyan-950/40 to-purple-950/40 border border-cyan-800 rounded-lg p-4 text-white focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_20px_rgba(0,243,255,0.3),0_0_40px_rgba(139,92,246,0.2)] transition-all placeholder-cyan-700 backdrop-blur-sm"
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
                            className={`group relative w-full py-4 font-bold tracking-[0.2em] uppercase rounded-lg transition-all duration-300 overflow-hidden ${status === 'sending'
                                ? 'bg-gradient-to-r from-cyan-800 to-purple-800 cursor-not-allowed text-gray-400'
                                : 'bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-black shadow-[0_0_25px_rgba(0,243,255,0.4),0_0_50px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(0,243,255,0.6),0_0_80px_rgba(139,92,246,0.5)] hover:scale-[1.02]'
                                }`}
                        >
                            <span className="relative z-10">{status === 'sending' ? 'Transmitting...' : 'Transmit'}</span>
                            {status !== 'sending' && (
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            )}
                        </button>

                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center mt-4 p-4 rounded-lg bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30"
                            >
                                <p className="text-green-400 font-bold flex items-center justify-center gap-2">
                                    <span className="text-2xl">✓</span>
                                    Transmission Successful
                                </p>
                                <p className="text-green-300 text-sm mt-1">
                                    {window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
                                        ? '(Demo Mode: Check console for details)'
                                        : 'Message sent successfully. Check your email for confirmation.'}
                                </p>
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center mt-4 p-4 rounded-lg bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30"
                            >
                                <p className="text-red-400 font-bold flex items-center justify-center gap-2">
                                    <span className="text-2xl">✗</span>
                                    Transmission Failed
                                </p>
                                <p className="text-red-300 text-sm mt-1">
                                    Unable to send message. Please try again or contact directly via email.
                                </p>
                            </motion.div>
                        )}
                    </form>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Contact;
