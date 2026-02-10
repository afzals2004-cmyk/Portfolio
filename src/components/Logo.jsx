import { motion } from 'framer-motion';
import { Hexagon, Zap } from 'lucide-react';

const Logo = () => {
    return (
        <motion.div
            className="flex items-center gap-2 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Outer Rotating Ring */}
                <motion.div
                    className="absolute inset-0 border-2 border-cyan-500/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ borderTopColor: '#22d3ee', borderRightColor: 'transparent' }}
                />

                {/* Inner Hexagon */}
                <div className="relative z-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                    <Hexagon size={32} strokeWidth={1.5} className="fill-cyan-950/50" />

                    {/* Central Spark */}
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <Zap size={16} className="fill-cyan-100" />
                    </div>
                </div>

                {/* Glitch/Pulse Effect */}
                <motion.div
                    className="absolute inset-0 bg-cyan-400/20 rounded-full z-0"
                    animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Text Logo */}
            <div className="flex flex-col leading-none">
                <span className="font-bold text-xl tracking-tighter text-white group-hover:text-cyan-300 transition-colors">
                    AFZAL <span className="text-cyan-500">SHAIKH</span>
                </span>
                <span className="text-[0.6rem] font-mono text-cyan-500/80 tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">
                    SYSTEMS
                </span>
            </div>
        </motion.div>
    );
};

export default Logo;
