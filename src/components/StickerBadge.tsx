import { motion } from 'framer-motion'

interface StickerBadgeProps {
  text: string
  color?: 'yellow' | 'orange' | 'red' | 'pink' | 'dark'
  rotate?: number
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const colorMap = {
  yellow: 'bg-brand-yellow text-brand-dark',
  orange: 'bg-brand-orange text-white',
  red: 'bg-brand-red text-white',
  pink: 'bg-accent-pink text-white',
  dark: 'bg-brand-dark text-brand-yellow',
}

const sizeMap = {
  sm: 'text-xs px-2 py-1',
  md: 'text-sm px-3 py-1.5',
  lg: 'text-base px-4 py-2',
}

export default function StickerBadge({ text, color = 'yellow', rotate = 0, className = '', size = 'md' }: StickerBadgeProps) {
  return (
    <motion.span
      className={`
        inline-block font-display uppercase tracking-wider
        border-2 border-black shadow-[3px_3px_0_#000] rounded-lg
        select-none whitespace-nowrap
        ${colorMap[color]} ${sizeMap[size]} ${className}
      `}
      style={{ rotate: `${rotate}deg` }}
      whileHover={{ scale: 1.1, rotate: rotate + 5 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      {text}
    </motion.span>
  )
}
