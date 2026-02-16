import { memo } from 'react';
import { motion } from 'framer-motion';

const StatCard = memo(({ label, value, description, icon: Icon, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                delay: delay,
                duration: 0.6,
                type: "spring",
                stiffness: 100
            }}
            whileHover={{
                y: -8,
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
            }}
            className="holo-card p-4 sm:p-6 flex flex-col justify-between relative group cursor-pointer card-3d perspective-1000"
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
            }}
        >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 blur-xl animate-pulse"></div>
            </div>

            {/* Background Icon with gradient */}
            <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-30 transition-all duration-500">
                <div className="relative">
                    <Icon size={48} className="text-cyan-500 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform duration-500" style={{
                        filter: 'drop-shadow(0 0 20px rgba(0, 243, 255, 0.5))'
                    }} />
                </div>
            </div>

            <div className="relative z-10">
                {/* Label with icon */}
                <div className="flex items-center gap-2 mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <div className="p-1.5 rounded bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                        <Icon size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <span className="text-[10px] tracking-widest uppercase font-bold">{label}</span>
                </div>

                {/* Value with premium gradient text */}
                <h3 className="text-4xl sm:text-5xl font-black mb-2 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 origin-left">
                    {value}
                </h3>

                {/* Description with animated border */}
                <div className="relative pt-3 mt-2 border-t border-gradient-to-r from-cyan-900/50 via-purple-900/50 to-pink-900/50">
                    <p className="text-[10px] text-cyan-300/80 font-mono flex justify-between items-center">
                        <span className="group-hover:text-cyan-200 transition-colors">{description}</span>
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                    </p>
                </div>
            </div>

            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-lg">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
        </motion.div>
    );
});

export default StatCard;
