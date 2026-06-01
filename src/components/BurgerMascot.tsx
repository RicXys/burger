import { motion } from 'framer-motion'

interface BurgerMascotProps {
  size?: number
  className?: string
}

export default function BurgerMascot({ size = 120, className = '' }: BurgerMascotProps) {
  return (
    <motion.img
      src="/images/vurger.png"
      alt="Goody Smash burger"
      width={size}
      height={size}
      className={`object-contain drop-shadow-[0_4px_16px_rgba(245,183,49,0.5)] ${className}`}
      animate={{
        y: [0, -6, 0],
        rotate: [0, -2, 0, 2, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
