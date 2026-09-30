import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { NavLink, Link } from 'react-router-dom'
import { SALON } from '../data'

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
]

export function Loader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800)
    return () => clearTimeout(t)
  }, [onDone])
  return (
    <motion.div className="loader" exit={{ opacity: 0, transition: { duration: 0.6 } }}>
      <div>
        <motion.div
          className="loader-text grad-text"
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={{ opacity: 1, letterSpacing: '0.08em' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          PINK &amp; GREY
        </motion.div>
        <div className="loader-bar">
          <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.5 }} />
        </div>
      </div>
    </motion.div>
  )
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return <motion.div className="progress" style={{ scaleX }} />
}

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 })
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return (
    <motion.div
      className="cursor-glow"
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 80, damping: 20, mass: 0.5 }}
    />
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`nav ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container nav-inner">
          <Link to="/" className="logo">
            <span className="grad-text">PINK &amp; GREY</span>
            <small>UNISEX SALON</small>
          </Link>
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.to}><NavLink to={l.to} end>{l.label}</NavLink></li>
            ))}
          </ul>
          <a href={SALON.phoneLink} className="btn btn-primary">Book Now</a>
          <button className="burger" aria-label="Open menu" onClick={() => setOpen(true)}>☰</button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 95% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            transition={{ duration: 0.5 }}
          >
            <button className="burger close" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>
            {LINKS.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.07 }}
              >
                <NavLink to={l.to} end onClick={() => setOpen(false)}>{l.label}</NavLink>
              </motion.div>
            ))}
            <a href={SALON.phoneLink} className="btn btn-primary" onClick={() => setOpen(false)}>Call {SALON.phone}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="container foot">
        <span>© {new Date().getFullYear()} Pink &amp; Grey Unisex Salon. All rights reserved.</span>
        <span>Narendrapur, Kolkata · <a href={SALON.phoneLink}>{SALON.phone}</a></span>
      </div>
    </footer>
  )
}

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={SALON.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="float-call"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2.4, type: 'spring' }}
      whileHover={{ scale: 1.12 }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" />
      </svg>
    </motion.a>
  )
}
