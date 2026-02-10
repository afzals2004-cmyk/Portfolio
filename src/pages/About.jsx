import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Briefcase, GraduationCap, Award } from 'lucide-react';
import CertificateModal from '../components/CertificateModal';
import SEO from '../components/SEO';
import { experiences, education, skills, certifications } from '../data/profile';

const About = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    // Memoize the list items to prevent re-rendering when modal opens
    const ExperienceSection = useMemo(() => (
        <div className="grid md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-4">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-cyan-400 mb-6">
                    <Briefcase size={24} /> EXPERIENCE_LOG
                </h2>
            </div>
            <div className="md:col-span-8 space-y-8">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="holo-card p-6 rounded-lg relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Briefcase size={80} />
                        </div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                <span className="text-xs font-mono py-1 px-2 border border-cyan-500/30 rounded text-cyan-300 bg-cyan-950/30">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-cyan-500 font-medium mb-4">{exp.company}</p>
                            <ul className="space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-cyan-100/70">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_5px_cyan]"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    ), []);

    const SkillsSection = useMemo(() => (
        <div className="mb-20">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-cyan-400 mb-8">
                <Cpu size={24} /> SKILL_MATRIX
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-cyan-950/20 border border-cyan-900/50 p-4 rounded hover:border-cyan-500/50 transition-colors flex items-center gap-4 group"
                    >
                        <div className="p-2 bg-cyan-900/30 rounded text-cyan-400 group-hover:text-cyan-200 group-hover:shadow-[0_0_10px_cyan]">
                            <skill.icon size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-white">{skill.name}</h4>
                            <div className="w-full bg-cyan-950 h-1.5 mt-2 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1 }}
                                    className="h-full bg-cyan-500 shadow-[0_0_8px_cyan]"
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    ), []);

    const EducationSection = useMemo(() => (
        <div className="holo-card p-8 rounded-xl">
            <h2 className="text-xl font-bold flex items-center gap-3 text-cyan-400 mb-6">
                <GraduationCap size={24} /> ACADEMIC_HISTORY
            </h2>
            <div className="space-y-6">
                {education.map((edu, idx) => (
                    <div key={idx} className="relative pl-6 border-l border-cyan-800">
                        <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-cyan-950 border border-cyan-500 rounded-full"></div>
                        <h3 className="font-bold text-white">{edu.degree}</h3>
                        <p className="text-sm text-cyan-300">{edu.school}</p>
                        <div className="flex justify-between mt-1 text-xs text-cyan-500/60 font-mono">
                            <span>{edu.period}</span>
                            {edu.details && <span>{edu.details}</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ), []);

    // Certification section depends on interaction, so we extract the list but keep the click handler
    // We can't fully memoize the list if it depends on setSelectedCert, unless we pass it as a prop to a memoized component.
    // For simplicity in this file, we'll keep it here but the data is now external.

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-28 pb-12 px-6 max-w-7xl mx-auto font-mono text-cyan-50"
        >
            <SEO
                title="About"
                description="Experience, skills, and certifications of Afzal Shaikh. Expert in Python, Automation, and Data Analytics."
            />

            {/* Interactive Modal */}
            <CertificateModal
                isOpen={!!selectedCert}
                onClose={() => setSelectedCert(null)}
                certificate={selectedCert}
            />

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 border-b border-cyan-900/50 pb-8"
            >
                <h1 className="text-5xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 holo-text">
                    PROFILE_DATA
                </h1>
                <p className="text-xl text-cyan-200/70 max-w-3xl leading-relaxed">
                    Detail-oriented <span className="text-cyan-400">Data Analytics & Automation Intern</span> with hands-on experience in process automation, system monitoring, and dashboard creation. Turning raw data into scalable solutions.
                </p>
            </motion.div>

            {ExperienceSection}

            {SkillsSection}

            {/* Education & Certs */}
            <div className="grid md:grid-cols-2 gap-8">

                {EducationSection}

                {/* Certifications - Clicking opens modal */}
                <div className="holo-card p-8 rounded-xl">
                    <h2 className="text-xl font-bold flex items-center gap-3 text-cyan-400 mb-6">
                        <Award size={24} /> CREDENTIALS_&_CERTS
                    </h2>
                    <ul className="space-y-3">
                        {certifications.map((cert, idx) => (
                            <li
                                key={idx}
                                onClick={() => setSelectedCert(cert)}
                                className="flex items-center gap-3 text-sm p-3 bg-cyan-900/10 border border-transparent hover:border-cyan-500/30 hover:bg-cyan-950/50 rounded transition-all cursor-pointer group"
                            >
                                <Award size={16} className="text-cyan-500 min-w-[16px] group-hover:text-white transition-colors" />
                                <div className="flex-1">
                                    <span className="text-cyan-100/90 font-medium group-hover:text-cyan-400 transition-colors">{cert.title}</span>
                                    <span className="block text-xs text-cyan-600/60 mt-0.5">{cert.issuer}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </motion.div>
    );
};

export default About;
