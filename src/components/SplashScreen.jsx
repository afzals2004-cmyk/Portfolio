import { motion } from 'framer-motion';
import Logo from './Logo';

const SplashScreen = ({ onComplete }) => {
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 2.5, ease: "easeInOut" }}
            onAnimationComplete={onComplete}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="scale-150 transform">
                    <Logo />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SplashScreen;
