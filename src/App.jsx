import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { CursorGlow, FloatingWhatsApp, Footer, Loader, Navbar, ScrollProgress } from './components/Layout'
import { About, CTA, Contact, Gallery, Hero, Marquee, PageHeader, Services, Testimonials, Why } from './components/Sections'

const HomePage = () => (<><Hero /><Marquee /><Why /><CTA /></>)
const AboutPage = () => (<><PageHeader eyebrow="About Us" title="Our" accent="Story" /><About /><Why /><CTA /></>)
const ServicesPage = () => (<><PageHeader eyebrow="Services" title="What We" accent="Offer" /><Services /><CTA /></>)
const GalleryPage = () => (<><PageHeader eyebrow="Gallery" title="Our" accent="Work" /><Gallery /><CTA /></>)
const ReviewsPage = () => (<><PageHeader eyebrow="Reviews" title="Client" accent="Love" /><Testimonials /><CTA /></>)
const ContactPage = () => (<><PageHeader eyebrow="Contact" title="Let's" accent="Connect" /><Contact /></>)

function AnimatedRoutes() {
  const location = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -30, filter: 'blur(6px)' }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const done = useCallback(() => setLoading(false), [])

  return (
    <BrowserRouter>
      <AnimatePresence>{loading && <Loader key="loader" onDone={done} />}</AnimatePresence>
      {!loading && (
        <>
          <ScrollProgress />
          <CursorGlow />
          <Navbar />
          <AnimatedRoutes />
          <Footer />
          <FloatingWhatsApp />
        </>
      )}
    </BrowserRouter>
  )
}
