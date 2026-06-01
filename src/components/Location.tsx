import { motion } from 'framer-motion'
import StickerBadge from './StickerBadge'
import BurgerMascot from './BurgerMascot'

const hours = [
  { day: 'Monday – Thursday', time: '11 AM – 10 PM' },
  { day: 'Friday – Saturday', time: '11 AM – 12 AM' },
  { day: 'Sunday', time: '12 PM – 9 PM' },
]

export default function Location() {
  return (
    <section id="location" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-darker via-brand-dark to-brand-darker" />
      <div className="absolute top-0 left-0 right-0 h-1 brand-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <StickerBadge text="📍 FIND US" color="dark" rotate={-2} size="lg" />
          </motion.div>
          <motion.h2
            className="font-display text-4xl sm:text-5xl md:text-6xl gradient-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Come Get Smashed
          </motion.h2>
          <motion.p
            className="text-white/60 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Rolling through Miami — catch us at our truck or pop-up!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map placeholder */}
          <motion.div
            className="relative rounded-2xl overflow-hidden border-3 border-black shadow-[4px_4px_0_#000] bg-brand-dark min-h-[300px] flex items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="font-display text-xl text-brand-yellow mb-2">Map Coming Soon</p>
              <p className="text-white/50 text-sm">
                Miami, FL — Wynwood / Brickell / Events
              </p>
              <p className="text-white/30 text-xs mt-2 italic">
                [REPLACE: Embed Google Maps here]
              </p>
            </div>

            <motion.div
              className="absolute bottom-4 right-4"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <BurgerMascot size={60} />
            </motion.div>
          </motion.div>

          {/* Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Address */}
            <div className="bg-brand-dark rounded-2xl p-6 border-3 border-black shadow-[3px_3px_0_#000]">
              <h3 className="font-display text-lg text-brand-yellow mb-3">Location</h3>
              <p className="text-white/70">
                Goody Smash Food Truck<br />
                Wynwood Art District<br />
                Miami, FL 33127
              </p>
              <p className="text-white/40 text-sm mt-2 italic">
                [REPLACE: Confirm exact address]
              </p>
            </div>

            {/* Hours */}
            <div className="bg-brand-dark rounded-2xl p-6 border-3 border-black shadow-[3px_3px_0_#000]">
              <h3 className="font-display text-lg text-brand-yellow mb-3">Hours</h3>
              <div className="space-y-2">
                {hours.map(h => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-white/70">{h.day}</span>
                    <span className="text-white font-bold">{h.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-sm mt-3 italic">
                [REPLACE: Confirm actual hours]
              </p>
            </div>

            {/* Contact */}
            <div className="bg-brand-dark rounded-2xl p-6 border-3 border-black shadow-[3px_3px_0_#000]">
              <h3 className="font-display text-lg text-brand-yellow mb-3">Get In Touch</h3>
              <div className="space-y-1 text-sm text-white/70">
                <p>📞 (305) 555-SMSH</p>
                <p>📧 eat@goodysmash.com</p>
                <p>📱 @goodysmash</p>
              </div>
              <p className="text-white/40 text-sm mt-2 italic">
                [REPLACE: Real phone, email, social handle]
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
