export const SALON = {
  name: 'Pink & Grey',
  tagline: 'Unisex Salon',
  phone: '090077 33170',
  phoneLink: 'tel:+919007733170',
  whatsapp: 'https://wa.me/919007733170',
  address:
    '752, North Kumrakhali, Nivedita Park, behind BDMI School, Pratapgarh, Narendrapur, Rajpur Sonarpur, West Bengal 700103',
  mapsLink: 'https://share.google/ATsrINiJt02QcYGOd',
  mapEmbed:
    'https://www.google.com/maps?q=Pink+%26+Grey+Unisex+Salon+Nivedita+Park+Narendrapur+700103&output=embed',
}

export const SERVICES = [
  { icon: '✂️', title: 'Precision Haircuts', desc: 'Signature cuts for men & women, styled to your face shape and lifestyle.', tag: 'Hair' },
  { icon: '🎨', title: 'Colour & Highlights', desc: 'Global colour, balayage, ombré and fashion shades with premium products.', tag: 'Colour' },
  { icon: '💆', title: 'Hair Spa & Treatments', desc: 'Keratin, smoothening, rebonding and deep-nourish spa rituals.', tag: 'Care' },
  { icon: '✨', title: 'Facials & Skin Care', desc: 'Cleanups, glow facials, de-tan and advanced skin rejuvenation.', tag: 'Skin' },
  { icon: '🧔', title: 'Beard & Grooming', desc: 'Beard sculpting, hot-towel shaves and complete grooming for men.', tag: 'Men' },
  { icon: '💅', title: 'Nails & Hands', desc: 'Manicure, pedicure, nail art and gel extensions.', tag: 'Nails' },
  { icon: '👰', title: 'Bridal & Party Makeup', desc: 'HD & airbrush makeup, hairdos and pre-bridal packages.', tag: 'Bridal' },
  { icon: '🌿', title: 'Waxing & Threading', desc: 'Gentle, hygienic hair-removal services with quality wax.', tag: 'Beauty' },
]

export const STATS = [
  { value: 5000, suffix: '+', label: 'Happy Clients' },
  { value: 30, suffix: '+', label: 'Services' },
  { value: 100, suffix: '%', label: 'Hygiene Protocol' },
  { value: 7, suffix: ' Days', label: 'Open Weekly' },
]

export const WHY = [
  { title: 'Expert Stylists', desc: 'Trained professionals who stay on top of the latest trends.' },
  { title: 'Premium Products', desc: 'Only trusted, salon-grade brands touch your hair and skin.' },
  { title: 'Sanitised Studio', desc: 'Sterilised tools and fresh disposables for every client.' },
  { title: 'Unisex Comfort', desc: 'A welcoming space for everyone: men, women and kids.' },
]

export const TESTIMONIALS = [
  { name: 'Happy Client', text: 'Loved my haircut and the ambience! Staff is super friendly and professional.' },
  { name: 'Regular Customer', text: 'Best salon near Narendrapur. The hair spa was so relaxing, highly recommend.' },
  { name: 'Bridal Client', text: 'They did my pre-bridal and makeup and I looked flawless all day. Thank you Pink & Grey!' },
]

// Placeholder stock photos: swap `src` for real salon photos (e.g. files in /public/gallery -> '/gallery/xyz.jpg').
const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=75`
export const GALLERY = [
  { src: u('photo-1560066984-138dadb4c035'), cat: 'Studio', title: 'Our Studio', tall: true },
  { src: u('photo-1522337360788-8b13dee7a37e'), cat: 'Hair', title: 'Styling Session' },
  { src: u('photo-1487412947147-5cebf100ffc2'), cat: 'Bridal', title: 'Bridal Makeup', tall: true },
  { src: u('photo-1503951914875-452162b0f3f1'), cat: 'Men', title: 'Beard & Grooming' },
  { src: u('photo-1604654894610-df63bc536371'), cat: 'Nails', title: 'Nail Art' },
  { src: u('photo-1570172619644-dfd03ed5d881'), cat: 'Skin', title: 'Glow Facial', tall: true },
  { src: u('photo-1562322140-8baeececf3df'), cat: 'Hair', title: 'Colour & Cut' },
  { src: u('photo-1595476108010-b4d1f102b1b1'), cat: 'Hair', title: 'Colour Work' },
]
