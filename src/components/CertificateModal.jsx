import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink, Download } from 'lucide-react';

const CertificateModal = ({ isOpen, onClose, certificate }) => {
    if (!certificate) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-4xl bg-[#0a0a15] border border-cyan-500/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,243,255,0.1)] holo-card"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-cyan-500/20 bg-cyan-950/20">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-cyan-900/30 rounded text-cyan-400">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">{certificate.title}</h3>
                                    <p className="text-sm text-cyan-500 font-mono">{certificate.issuer} // {certificate.date}</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded-full transition-colors text-gray-400"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content Viewer (Image or PDF) */}
                        <div className="bg-black/50 relative min-h-[400px] h-[70vh] flex items-center justify-center overflow-hidden">
                            {/* Tech Overlay Grid */}
                            <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none z-10"></div>

                            {certificate.image ? (
                                certificate.image.endsWith('.pdf') ? (
                                    <iframe
                                        src={`${certificate.image}#toolbar=0`}
                                        className="w-full h-full border-0"
                                        title={certificate.title}
                                    />
                                ) : (
                                    <img
                                        src={certificate.image}
                                        alt={certificate.title}
                                        className="max-h-full max-w-full object-contain rounded shadow-2xl relative z-20"
                                    />
                                )
                            ) : (
                                <div className="text-center p-12 border-2 border-dashed border-cyan-900/50 rounded-lg">
                                    <Award size={64} className="mx-auto text-cyan-900 mb-4" />
                                    <p className="text-cyan-600 font-mono">CERTIFICATE_DATA_NOT_FOUND</p>
                                </div>
                            )}
                        </div>

                        {/* Footer Actions */}
                        <div className="p-6 border-t border-cyan-500/20 bg-cyan-950/20 flex justify-end gap-4">
                            <button className="flex items-center gap-2 px-4 py-2 border border-cyan-500/30 text-cyan-400 text-sm font-bold uppercase tracking-wider rounded hover:bg-cyan-500/10 transition-colors">
                                <Download size={16} /> Download
                            </button>
                            {certificate.verifyLink && (
                                <a
                                    href={certificate.verifyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-black text-sm font-bold uppercase tracking-wider rounded transition-colors shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                                >
                                    Verify Credential <ExternalLink size={16} />
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CertificateModal;
