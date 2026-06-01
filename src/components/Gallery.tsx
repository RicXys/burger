import { motion } from 'framer-motion'
import StickerBadge from './StickerBadge'

const images = [
  { src: '/images/three-burgers.jpeg', alt: 'Three signature Goody Smash burgers on display', span: 'col-span-2 row-span-2' },
  { src: '/images/burger-lifestyle.jpeg', alt: 'Customer holding a Goody Smash burger in front of signage', span: '' },
  { src: '/images/griddle-action.jpeg', alt: 'Patties being smashed on the flat top griddle', span: '' },
  { src: '/images/classic-double.jpeg', alt: 'Classic double cheeseburger close-up', span: '' },
  { src: '/images/hero-burger.jpeg', alt: 'Stacked burger with cheese cascading over top', span: '' },
  { src: '/images/sauce-burger.jpeg', alt: 'Burger with special sauce and fresh lettuce', span: 'col-span-2' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-brand-darker overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <StickerBadge text="📸 THE GOODS" color="dark" rotate={2} size="lg" />
          </motion.div>
          <motion.h2
            className="font-display text-4xl sm:text-5xl md:text-6xl gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Feed Your Feed
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              className={`relative rounded-2xl overflow-hidden border-3 border-black shadow-[3px_3px_0_#000]
                group cursor-pointer ${img.span}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300 } }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />

              {/* Halftone overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(245,183,49,0.2) 1px, transparent 1px)',
                  backgroundSize: '6px 6px',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white/40 font-display text-sm uppercase tracking-widest">
            Follow @goodysmash on Instagram
          </p>
        </motion.div>
      </div>
    </section>
  )
}
