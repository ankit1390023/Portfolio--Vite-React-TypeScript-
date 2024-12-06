import { motion } from 'framer-motion';

interface GradientOrbProps {
  className?: string;
}

export default function GradientOrb({ className = '' }: GradientOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.2, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}