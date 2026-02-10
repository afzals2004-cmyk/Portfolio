import { memo } from 'react';
import { motion } from 'framer-motion';

const StatCard = memo(({ label, value, description, icon: Icon, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay, duration: 0.4 }}
            className="holo-card p-6 flex flex-col justify-between hover:bg-cyan-900/20 transition-all group"
        >
            <div className="absolute top-0 right-0 p-2 opacity-50">
                <Icon size={40} className="text-cyan-900 group-hover:text-cyan-500/20 transition-colors" />
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2 text-cyan-500">
                    <Icon size={16} />
                    <span className="text-[10px] tracking-widest uppercase font-bold">{label}</span>
                </div>
                <h3 className="text-3xl font-black text-white tracking-tight text-shadow-glow">{value}</h3>
                <p className="text-[10px] text-cyan-300/60 font-mono mt-1 border-t border-cyan-900/50 pt-1 flex justify-between">
                    <span>{description}</span>
                    <span className="animate-pulse">●</span>
                </p>
            </div>
        </motion.div>
    );
});

export default StatCard;
