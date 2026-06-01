import { motion } from 'framer-motion'
import BurgerMascot from './BurgerMascot'
import StickerBadge from './StickerBadge'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-brand-darker" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-orange/20 blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-yellow/10 blur-[80px]" />

      {/* Action lines background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-conic-gradient(transparent 0deg 8deg, rgba(245, 183, 49, 0.5) 8deg 10deg)`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left — Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <StickerBadge text="Miami's #1 Smash Spot" color="pink" rotate={-2} size="sm" />
            </motion.div>

            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-white">Get</span>{' '}
              <span className="gradient-text">Smashed</span>
              <br />
              <span className="text-brand-yellow">The</span>{' '}
              <span className="text-white">Goody</span>{' '}
              <span className="text-brand-orange">Way</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-white/70 max-w-md mx-auto lg:mx-0 mb-8 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Crispy edges. Melted cheese. Bold flavor. Our smash burgers hit different —
              made fresh, served fast, eaten loud.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.a
                href="#menu"
                className="font-display text-lg uppercase tracking-wider
                  brand-gradient text-brand-dark px-8 py-4 rounded-2xl
                  border-3 border-black shadow-[4px_4px_0_#000]
                  inline-block text-center brand-glow"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                See The Menu
              </motion.a>
              <motion.a
                href="#location"
                className="font-display text-lg uppercase tracking-wider
                  bg-transparent text-brand-yellow px-8 py-4 rounded-2xl
                  border-3 border-brand-yellow/50
                  inline-block text-center hover:bg-brand-yellow/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Find Us
              </motion.a>
            </motion.div>

            {/* Mascot (mobile) */}
            <motion.div
              className="lg:hidden flex justify-center mt-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.8 }}
            >
              <BurgerMascot size={80} />
            </motion.div>
          </div>

          {/* Right — Hero image */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 0.4 }}
          >
            {/* Glow ring behind image */}
            <div className="absolute w-[90%] aspect-square rounded-full brand-gradient opacity-20 blur-xl" />

            {/* Image with sticker treatment */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border-4 border-black shadow-[6px_6px_0_#000] max-w-md w-full">
                <img
                  src="/images/hero-burger.jpeg"
                  alt="Goody Smash signature stacked burger with melted cheese and bacon"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating stickers */}
              <motion.div
                className="absolute -top-4 -right-4 z-20"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <StickerBadge text="HOT 🔥" color="red" rotate={12} size="lg" />
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 z-20"
                animate={{ rotate: [0, -3, 3, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <StickerBadge text="EXTRA CHEESE" color="yellow" rotate={-8} size="md" />
              </motion.div>

              {/* Desktop mascot */}
              <motion.div
                className="hidden lg:block absolute -bottom-8 -right-8 z-20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 1 }}
              >
                <BurgerMascot size={100} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-3 rounded-full bg-brand-yellow"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
