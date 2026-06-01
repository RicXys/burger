import { motion } from 'framer-motion'
import StickerBadge from './StickerBadge'

const menuItems = [
  {
    name: 'The O.G. Smash',
    description: 'Double smashed patties, American cheese, pickles, onions, Goody sauce on a toasted brioche.',
    price: '$12.99',
    image: '/images/classic-double.jpeg',
    badge: null,
  },
  {
    name: 'Miami Heat',
    description: 'Jalapeño-crusted patties, pepper jack, habanero aioli, crispy onion strings, lettuce.',
    price: '$14.99',
    image: '/images/sauce-burger.jpeg',
    badge: { text: 'SPICY 🌶️', color: 'red' as const },
  },
  {
    name: 'Truffle Shroom Smash',
    description: 'Sautéed mushrooms, Swiss cheese, truffle aioli, caramelized onions on a branded bun.',
    price: '$15.99',
    image: '/images/branded-mushroom.jpeg',
    badge: { text: 'CHEF\'S PICK', color: 'yellow' as const },
  },
  {
    name: 'The Big Cheese',
    description: 'Triple patty, triple American cheese, pickles, ketchup, mustard. Stupid good.',
    price: '$16.99',
    image: '/images/double-cheese.jpeg',
    badge: { text: 'POPULAR', color: 'orange' as const },
  },
  {
    name: 'Bacon Smash Daddy',
    description: 'Crispy bacon, double smash patties, cheddar, pickles, smoky BBQ Goody sauce.',
    price: '$15.99',
    image: '/images/double-cheese-2.jpeg',
    badge: null,
  },
  {
    name: 'The Goody Classic',
    description: 'Single smashed patty, American cheese, lettuce, tomato, Goody sauce. Simple. Perfect.',
    price: '$9.99',
    image: '/images/sauce-burger-2.jpeg',
    badge: { text: 'NEW', color: 'pink' as const },
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 200, damping: 20 } },
}

export default function Menu() {
  return (
    <section id="menu" className="relative py-20 sm:py-28 bg-brand-darker overflow-hidden">
      {/* Subtle halftone bg */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, #F5B731 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <StickerBadge text="THE MENU" color="dark" rotate={-1} size="lg" />
          </motion.div>
          <motion.h2
            className="font-display text-4xl sm:text-5xl md:text-6xl gradient-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The Smashes
          </motion.h2>
          <motion.p
            className="text-white/60 text-lg max-w-md mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Every burger is smashed to order on a screaming-hot griddle. No shortcuts.
          </motion.p>
        </div>

        {/* Menu grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 15 } }}
              className="group relative bg-brand-dark rounded-2xl overflow-hidden
                border-3 border-black shadow-[4px_4px_0_#000]
                hover:shadow-[6px_6px_0_#000] transition-shadow"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />

                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-3 right-3">
                    <StickerBadge text={item.badge.text} color={item.badge.color} rotate={5} size="sm" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-xl text-white group-hover:text-brand-yellow transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-display text-xl text-brand-yellow whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="h-1 brand-gradient" />
            </motion.div>
          ))}
        </motion.div>

        {/* Sides & Drinks teaser */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white/40 font-display text-sm uppercase tracking-widest mb-4">
            Plus fries, shakes, and drinks
          </p>
          <motion.a
            href="#location"
            className="inline-block font-display text-sm uppercase tracking-wider
              bg-brand-yellow text-brand-dark px-6 py-3 rounded-xl
              border-2 border-black shadow-[3px_3px_0_#000]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            Order Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
