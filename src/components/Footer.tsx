import { motion } from 'framer-motion'

const socials = [
  { name: 'Instagram', icon: 'IG', href: '#' },
  { name: 'TikTok', icon: 'TK', href: '#' },
  { name: 'Facebook', icon: 'FB', href: '#' },
  { name: 'X / Twitter', icon: 'X', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative bg-brand-darker border-t border-white/10">
      {/* Top CTA band */}
      <div className="brand-gradient py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            className="font-display text-3xl sm:text-4xl text-brand-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Get Smashed?
          </motion.h3>
          <motion.a
            href="#menu"
            className="inline-block font-display text-lg uppercase tracking-wider
              bg-brand-dark text-brand-yellow px-8 py-3 rounded-xl
              border-3 border-black shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            Order Now
          </motion.a>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 items-start">
          {/* Logo */}
          <div>
            <img
              src="/images/logo.jpeg"
              alt="Goody Smash"
              className="h-16 w-auto rounded mb-4"
            />
            <p className="text-white/40 text-sm">
              Miami's favorite smash burger. Crispy. Cheesy. Loud.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-brand-yellow mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#menu" className="text-white/50 hover:text-white text-sm transition-colors">Menu</a>
              <a href="#story" className="text-white/50 hover:text-white text-sm transition-colors">Our Story</a>
              <a href="#gallery" className="text-white/50 hover:text-white text-sm transition-colors">Gallery</a>
              <a href="#location" className="text-white/50 hover:text-white text-sm transition-colors">Find Us</a>
            </nav>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-brand-yellow mb-4">Follow The Smash</h4>
            <div className="flex gap-3">
              {socials.map(s => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-10 h-10 rounded-lg bg-brand-dark border-2 border-black shadow-[2px_2px_0_#000]
                    flex items-center justify-center font-display text-xs text-brand-yellow
                    hover:bg-brand-yellow hover:text-brand-dark transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-white/30 text-xs mt-3 italic">[REPLACE: Real social links]</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; 2026 Goody Smash. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Made with 🔥 in Miami
          </p>
        </div>
      </div>
    </footer>
  )
}
