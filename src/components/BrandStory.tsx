import { motion } from 'framer-motion'
import BurgerMascot from './BurgerMascot'
import StickerBadge from './StickerBadge'

const features = [
  {
    icon: '🔥',
    title: 'Smashed Fresh',
    text: 'Every patty is ball-to-flat on a screaming griddle. Maximum crust. Maximum flavor.',
  },
  {
    icon: '🧀',
    title: 'Real Cheese, Always',
    text: 'No processed nonsense. Melted American, aged cheddar, Swiss — the good stuff.',
  },
  {
    icon: '🏖️',
    title: 'Born in Miami',
    text: 'Started from a food truck in Wynwood. Now feeding the whole city, one smash at a time.',
  },
]

export default function BrandStory() {
  return (
    <section id="story" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-darker via-brand-dark to-brand-darker" />

      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 brand-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="rounded-2xl overflow-hidden border-3 border-black shadow-[4px_4px_0_#000]"
                whileHover={{ rotate: -2 }}
              >
                <img
                  src="/images/griddle-action.jpeg"
                  alt="Smash burgers being prepared on the griddle"
                  className="w-full aspect-square object-cover"
                />
              </motion.div>
              <motion.div
                className="rounded-2xl overflow-hidden border-3 border-black shadow-[4px_4px_0_#000] mt-8"
                whileHover={{ rotate: 2 }}
              >
                <img
                  src="/images/food-truck.jpeg"
                  alt="Goody Smash food truck serving customers"
                  className="w-full aspect-square object-cover"
                />
              </motion.div>
            </div>

            {/* Floating sticker */}
            <motion.div
              className="absolute -top-3 right-8 z-10"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <StickerBadge text="EST. MIAMI" color="orange" rotate={8} />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.4 }}
            >
              <BurgerMascot size={70} />
            </motion.div>
          </motion.div>

          {/* Right — Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StickerBadge text="OUR STORY" color="dark" rotate={-2} size="sm" className="mb-6" />

            <h2 className="font-display text-4xl sm:text-5xl leading-[1] mb-6">
              <span className="text-white">We Don't</span>{' '}
              <span className="gradient-text">Cook Burgers.</span>
              <br />
              <span className="text-brand-yellow">We Smash</span>{' '}
              <span className="text-white">'Em.</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Goody Smash started with one mission: make the crispiest, cheesiest,
              most craveable smash burger in Miami. We ball it up, press it down, and
              let the griddle do its thing. No fancy tricks — just fire, beef, and
              good vibes.
            </p>

            <div className="space-y-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <span className="text-3xl flex-shrink-0 mt-0.5">{f.icon}</span>
                  <div>
                    <h3 className="font-display text-lg text-brand-yellow mb-1">{f.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{f.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
