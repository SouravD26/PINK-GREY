import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, animate, motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { GALLERY, SALON, SERVICES, STATS, TESTIMONIALS, WHY } from '../data'

const heading = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}
const word = {
  hidden: { opacity: 0, y: 60, rotateX: -80 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 160])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero-grid" />
      <motion.div className="orb" style={{ width: 480, height: 480, background: '#ff4fa3', top: '-10%', left: '-10%' }}
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="orb" style={{ width: 420, height: 420, background: '#6b7384', bottom: '-15%', right: '-5%' }}
        animate={{ x: [0, -70, 0], y: [0, -50, 0] }} transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }} />

      <motion.div className="container hero-content" style={{ opacity: fade }}>
        <div>
          <motion.span className="eyebrow" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.8 }}>
            ● Unisex Salon · Narendrapur
          </motion.span>
          <motion.h1 variants={heading} initial="hidden" animate="show" style={{ perspective: 800 }}>
            {['Style', 'Beyond'].map((w) => (
              <motion.span key={w} variants={word} style={{ display: 'inline-block', marginRight: '0.25em' }}>{w}</motion.span>
            ))}
            <br />
            <motion.span variants={word} className="grad-text" style={{ display: 'inline-block' }}>Tomorrow.</motion.span>
          </motion.h1>
          <Reveal delay={0.7}>
            <p className="lead">
              Pink &amp; Grey is where precision meets artistry. Premium hair, skin, grooming and bridal
              services for men and women, crafted by experts in a modern, hygienic studio.
            </p>
          </Reveal>
          <Reveal delay={0.9} className="hero-actions">
            <a href={SALON.phoneLink} className="btn btn-primary">📞 Book Appointment</a>
            <Link to="/services" className="btn btn-ghost">Explore Services →</Link>
          </Reveal>
        </div>

        <motion.div className="hero-visual" style={{ y: yVisual }}
          initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
          <motion.div className="ring" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="ring r2" animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="ring r3" animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="core" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}>P&amp;G</motion.div>
          {[
            { t: '✂️ Hair Studio', s: { top: '8%', left: '-4%' } },
            { t: '✨ Skin Lab', s: { top: '46%', right: '-8%' } },
            { t: '👰 Bridal', s: { bottom: '6%', left: '6%' } },
          ].map((c, i) => (
            <motion.div key={c.t} className="chip glass" style={c.s}
              animate={{ y: [0, -14, 0] }} transition={{ duration: 4, delay: i * 0.8, repeat: Infinity, ease: 'easeInOut' }}>
              {c.t}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="scroll-hint">
        <motion.span animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
      </div>
    </section>
  )
}

export function Marquee() {
  const items = ['HAIRCUTS', 'COLOUR', 'KERATIN', 'FACIALS', 'GROOMING', 'NAIL ART', 'BRIDAL', 'HAIR SPA']
  const row = items.map((t) => <span key={t}>{t}<b>✦</b></span>)
  return (
    <div className="marquee">
      <motion.div className="marquee-track" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}>
        {row}{row.map((r, i) => <span key={i}>{r.props.children}</span>)}
      </motion.div>
    </div>
  )
}

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, value, { duration: 2, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, value])
  return <span ref={ref}>{n.toLocaleString('en-IN')}{suffix}</span>
}

export function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <Reveal>
          <span className="eyebrow">About Us</span>
          <h2 className="section-title">A new era of <span className="grad-text">beauty &amp; grooming</span></h2>
          <p className="section-sub">
            Nestled in Nivedita Park, Narendrapur, Pink &amp; Grey Unisex Salon blends the elegance of pink with the
            sophistication of grey. Our stylists combine modern techniques with a personal touch, so every visit
            leaves you looking sharp and feeling confident.
          </p>
          <div className="hero-actions" style={{ marginTop: 30 }}>
            <Link to="/contact" className="btn btn-ghost">Visit the Studio →</Link>
          </div>
        </Reveal>
        <div className="stats">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.12}>
              <motion.div className="stat glass" whileHover={{ y: -8, borderColor: 'rgba(255,79,163,.5)' }}>
                <div className="num grad-text"><Counter value={s.value} suffix={s.suffix} /></div>
                <div className="lbl">{s.label}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function TiltCard({ s }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    ref.current.style.setProperty('--mx', `${px * 100}%`)
    ref.current.style.setProperty('--my', `${py * 100}%`)
    setTilt({ x: (py - 0.5) * -12, y: (px - 0.5) * 12 })
  }
  return (
    <motion.div
      ref={ref}
      className="card glass"
      onPointerMove={onMove}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      style={{ transformPerspective: 900 }}
    >
      <span className="tag">{s.tag}</span>
      <div className="ic">{s.icon}</div>
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="services" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title">Signature <span className="grad-text">Services</span></h2>
          <p className="section-sub">From everyday grooming to your biggest day, a complete menu of hair, skin and beauty services for everyone.</p>
        </Reveal>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.1}><TiltCard s={s} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Why() {
  return (
    <section>
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-title">The Pink &amp; Grey <span className="grad-text">Difference</span></h2>
        </Reveal>
        <div className="why-grid">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.12}>
              <motion.div className="why glass" whileHover={{ y: -10 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div className="n grad-text">0{i + 1}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 5000)
    return () => clearInterval(t)
  }, [])
  const t = TESTIMONIALS[i]
  return (
    <section id="reviews" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Client Love</span>
          <h2 className="section-title">What People <span className="grad-text">Say</span></h2>
        </Reveal>
        <Reveal>
          <div className="testi-wrap glass">
            <div className="stars">★★★★★</div>
            <AnimatePresence mode="wait">
              <motion.div key={i} initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }} animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -40, filter: 'blur(8px)' }} transition={{ duration: 0.5 }}>
                <p className="quote">“{t.text}”</p>
                <p className="who">— {t.name}</p>
              </motion.div>
            </AnimatePresence>
            <div className="dots">
              {TESTIMONIALS.map((_, k) => (
                <button key={k} className={k === i ? 'on' : ''} aria-label={`Review ${k + 1}`} onClick={() => setI(k)} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="section-title">Visit <span className="grad-text">Our Studio</span></h2>
          <p className="section-sub">Walk in or call ahead to reserve your slot. We would love to see you.</p>
        </Reveal>
        <div className="contact-grid">
          <Reveal className="info glass">
            <div className="info-row">
              <div className="ic">📍</div>
              <div><h5>Address</h5><p>{SALON.address}</p></div>
            </div>
            <div className="info-row">
              <div className="ic">📞</div>
              <div><h5>Phone</h5><a href={SALON.phoneLink}>{SALON.phone}</a></div>
            </div>
            <div className="info-row">
              <div className="ic">🧭</div>
              <div><h5>Landmark</h5><p>Behind BDMI School, Nivedita Park</p></div>
            </div>
            <div className="hero-actions">
              <a href={SALON.phoneLink} className="btn btn-primary">Call Now</a>
              <a href={SALON.mapsLink} target="_blank" rel="noreferrer" className="btn btn-ghost">Get Directions</a>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="map glass">
            <iframe title="Pink & Grey location" src={SALON.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </Reveal>
        </div>

      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal delay={0.1}>
          <div className="cta glass">
            <h2 className="section-title">Ready for your <span className="grad-text">next look?</span></h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Book your appointment today and experience the future of salon care.</p>
            <div className="hero-actions">
              <a href={SALON.phoneLink} className="btn btn-primary">📞 {SALON.phone}</a>
              <a href={SALON.whatsapp} target="_blank" rel="noreferrer" className="btn btn-ghost">WhatsApp Us</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function PageHeader({ eyebrow, title, accent }) {
  return (
    <section className="page-header">
      <div className="hero-grid" />
      <motion.div className="orb" style={{ width: 380, height: 380, background: '#ff4fa3', top: '-30%', left: '10%' }}
        animate={{ x: [0, 60, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
      <div className="container center">
        <motion.span className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>{eyebrow}</motion.span>
        <motion.h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.2rem)' }}
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
          {title} <span className="grad-text">{accent}</span>
        </motion.h1>
        <motion.div className="crumb" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <Link to="/">Home</Link> / <span>{eyebrow}</span>
        </motion.div>
      </div>
    </section>
  )
}

export function Gallery() {
  const cats = ['All', ...new Set(GALLERY.map((g) => g.cat))]
  const [filter, setFilter] = useState('All')
  const [open, setOpen] = useState(null)
  const items = filter === 'All' ? GALLERY : GALLERY.filter((g) => g.cat === filter)

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((o) => (o + 1) % items.length)
      if (e.key === 'ArrowLeft') setOpen((o) => (o - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, items.length])

  const step = (d) => (e) => { e.stopPropagation(); setOpen((open + d + items.length) % items.length) }

  return (
    <section id="gallery">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Our Work</span>
          <h2 className="section-title">Style <span className="grad-text">Gallery</span></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>A glimpse of the looks, transformations and moments created at Pink &amp; Grey.</p>
        </Reveal>
        <div className="gallery-filters">
          {cats.map((c) => (
            <button key={c} className={c === filter ? 'on' : ''} onClick={() => setFilter(c)}>{c}</button>
          ))}
        </div>
        <motion.div layout className="gallery-grid">
          <AnimatePresence>
            {items.map((g, i) => (
              <motion.button layout key={g.src} className={`gallery-item glass${g.tall ? ' tall' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }} onClick={() => setOpen(i)}>
                <img src={g.src} alt={g.title} loading="lazy" onError={(e) => { e.currentTarget.style.visibility = 'hidden' }} />
                <span className="gallery-cap"><small>{g.cat}</small>{g.title}</span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {open !== null && items[open] && (
          <motion.div className="lightbox" onClick={() => setOpen(null)}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.img key={items[open].src} src={items[open].src.replace('w=800', 'w=1600')} alt={items[open].title}
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={(e) => e.stopPropagation()} />
            <button className="lb-close" aria-label="Close" onClick={() => setOpen(null)}>✕</button>
            <button className="lb-nav prev" aria-label="Previous" onClick={step(-1)}>‹</button>
            <button className="lb-nav next" aria-label="Next" onClick={step(1)}>›</button>
            <p className="lb-cap">{items[open].title}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
