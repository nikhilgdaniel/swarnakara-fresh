'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ArrowRight, Shield, Award, Banknote, Gem, CheckCircle, Users, TrendingUp } from 'lucide-react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  const links = ['Home', 'Services', 'How It Works', 'Rates', 'Contact']
  return (
    <nav className={'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' + (scrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-xl border-b border-white/10' : '')}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f5a623] to-[#d4840f] flex items-center justify-center">
            <Gem className="w-5 h-5 text-[#0a0e1a]" />
          </div>
          <span className="font-bold text-xl"><span className="text-white">SWARNA</span><span className="text-[#f5a623]">KARA</span></span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => <a key={l} href={'#' + l.toLowerCase().replace(/ /g, '-')} className="text-gray-300 hover:text-[#f5a623] transition-colors text-sm font-medium">{l}</a>)}
          <button className="bg-gradient-to-r from-[#f5a623] to-[#d4840f] text-[#0a0e1a] font-bold px-6 py-2.5 rounded-xl text-sm shadow-lg shadow-[#f5a623]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">Apply Now</button>
        </div>
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
      </div>
      <AnimatePresence>{menuOpen && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#111827] border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map(l => <a key={l} href={'#' + l.toLowerCase().replace(/ /g, '-')} className="text-gray-300 hover:text-[#f5a623] transition-colors py-2" onClick={() => setMenuOpen(false)}>{l}</a>)}
            <button className="bg-gradient-to-r from-[#f5a623] to-[#d4840f] text-[#0a0e1a] font-bold px-6 py-2.5 rounded-xl text-sm w-full">Apply Now</button>
          </div>
        </motion.div>
      )}</AnimatePresence>
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f5a623]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
        {[0,1,2,3,4,5].map(i => <motion.div key={i} className="absolute w-2 h-2 bg-[#f5a623] rounded-full opacity-40" style={{ left: (15+i*15)+'%', top: (20+(i%3)*25)+'%' }} animate={{ y: [-20,20,-20], opacity: [0.2,0.6,0.2] }} transition={{ duration: 4+i, repeat: Infinity, ease: 'easeInOut' }} />)}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-[#f5a623] text-lg md:text-xl mb-4 opacity-90" style={{ fontFamily: "'Noto Sans Malayalam', sans-serif" }}>സ്വർണ വിശ്വാസം... സ്വർണകാരാ</p>
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight text-white">Your Gold.<br /><span className="text-[#f5a623]">Your Trust.</span><br />Your SWARNAKARA.</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">Instant gold loans in Kollam with lowest interest rates, transparent process, and 5000+ satisfied families.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-[#f5a623] to-[#d4840f] text-[#0a0e1a] font-bold px-8 py-4 rounded-xl text-lg shadow-lg shadow-[#f5a623]/20 flex items-center gap-2 hover:shadow-xl hover:-translate-y-0.5 transition-all">Apply Now <ArrowRight className="w-5 h-5" /></button>
            <a href="tel:+919876543210" className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-xl text-gray-300 hover:border-[#f5a623] hover:text-[#f5a623] transition-all"><Phone className="w-5 h-5" /> Call Us</a>
          </div>
        </motion.div>
        <motion.div className="mt-16" animate={{ y: [0,-15,0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-br from-[#f5a623] to-[#d4840f] p-1 shadow-2xl shadow-[#f5a623]/30">
            <div className="w-full h-full rounded-full bg-[#0a0e1a] flex items-center justify-center"><Gem className="w-16 h-16 md:w-24 md:h-24 text-[#f5a623]" /></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TrustBar() {
  const stats = [
    { icon: Users, value: '5000+', label: 'Happy Families' },
    { icon: Shield, value: '10+', label: 'Years Trust' },
    { icon: Award, value: 'RBI', label: 'Registered' },
    { icon: Banknote, value: '15min', label: 'Quick Disbursal' },
  ]
  return (
    <section className="py-16 bg-[#111827] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.1 }} viewport={{ once: true }} className="text-center">
              <s.icon className="w-8 h-8 text-[#f5a623] mx-auto mb-2" />
              <div className="font-bold text-3xl text-white mb-1">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    { icon: Gem, title: 'Gold Loan', desc: 'Get up to 90% of your gold value. Lowest interest rates starting at 9% p.a.', tag: 'Up to 90% Value' },
    { icon: Banknote, title: 'Loan Against Ornament', desc: 'Flexible tenure from 1 month to 36 months. No foreclosure charges.', tag: 'Flexible Tenure' },
    { icon: TrendingUp, title: 'Quick Cash', desc: '15-minute approval and instant disbursal. Your gold works for you.', tag: '15 Min Approval' },
  ]
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-[#f5a623] text-sm font-semibold uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="font-bold text-3xl md:text-5xl text-white">What We Offer</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.15 }} viewport={{ once: true }} className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden hover:border-[#f5a623]/30 hover:-translate-y-1 transition-all">
              <div className="absolute top-0 right-0 bg-[#f5a623]/10 text-[#f5a623] text-xs font-bold px-3 py-1 rounded-bl-xl">{s.tag}</div>
              <s.icon className="w-12 h-12 text-[#f5a623] mb-4" />
              <h3 className="font-bold text-xl text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GoldRateTicker() {
  const rates = ['22K Gold: Rs.7,425/gm *', '24K Gold: Rs.8,150/gm *', '18K Gold: Rs.6,120/gm *']
  const repeated = [...rates, ...rates, ...rates, ...rates]
  return (
    <div className="py-4 bg-gradient-to-r from-[#f5a623] to-[#d4840f] overflow-hidden">
      <div className="flex whitespace-nowrap" style={{ animation: 'ticker 20s linear infinite' }}>
        {repeated.map((r, i) => <span key={i} className="mx-8 font-semibold text-[#0a0e1a]">{r}</span>)}
      </div>
    </div>
  )
}

function HowItWorks() {
  const steps = [
    { num: '01', title: 'Visit or Upload', desc: 'Come to our branch or send photos of your gold ornaments' },
    { num: '02', title: 'Gold Valuation', desc: 'Our certified appraiser checks purity and weight' },
    { num: '03', title: 'Loan Approval', desc: 'Get instant approval with transparent terms' },
    { num: '04', title: 'Cash Transfer', desc: 'Receive money instantly in your account or cash' },
  ]
  return (
    <section id="how-it-works" className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-[#f5a623] text-sm font-semibold uppercase tracking-wider mb-2">Simple Process</p>
          <h2 className="font-bold text-3xl md:text-5xl text-white">How It Works</h2>
        </motion.div>
        <div className="relative">
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#f5a623]/50 via-[#f5a623] to-[#f5a623]/50" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.15 }} viewport={{ once: true }} className="text-center relative">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#f5a623] to-[#d4840f] flex items-center justify-center font-bold text-2xl text-[#0a0e1a] relative z-10 shadow-lg shadow-[#f5a623]/20">
                  {s.num}
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function InterestRates() {
  const rows = [
    { amount: 'Up to Rs.1 Lakh', rate: '9% p.a.', best: false },
    { amount: 'Rs.1 Lakh - Rs.5 Lakhs', rate: '11% p.a.', best: true },
    { amount: 'Rs.5 Lakhs - Rs.10 Lakhs', rate: '13% p.a.', best: false },
    { amount: 'Above Rs.10 Lakhs', rate: 'Contact Us', best: false },
  ]
  return (
    <section id="rates" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-[#f5a623] text-sm font-semibold uppercase tracking-wider mb-2">Transparent Rates</p>
          <h2 className="font-bold text-3xl md:text-5xl text-white">Interest Rates</h2>
        </motion.div>
        <div className="space-y-4">
          {rows.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i*0.1 }} viewport={{ once: true }}
              className={'flex items-center justify-between p-6 rounded-2xl border ' + (r.best ? 'bg-[#f5a623]/10 border-[#f5a623]/30' : 'bg-white/5 border-white/10')}>
              <span className="text-white font-medium">{r.amount}</span>
              <span className={'font-bold text-lg ' + (r.best ? 'text-[#f5a623]' : 'text-white')}>{r.rate}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-gray-500 text-sm text-center mt-6">* Rates subject to change. Visit branch for exact rates.</p>
      </div>
    </section>
  )
}

function WhyUs() {
  const features = [
    { icon: Shield, title: 'Secure', desc: 'Your gold is insured and stored safely in our vault' },
    { icon: CheckCircle, title: 'Transparent', desc: 'No hidden charges or surprise fees' },
    { icon: Award, title: 'Certified', desc: 'Purity testing done by certified appraisers' },
    { icon: Banknote, title: 'Lowest Rates', desc: 'Interest rates starting at just 9% p.a.' },
  ]
  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-[#f5a623] text-sm font-semibold uppercase tracking-wider mb-2">Why Choose Us</p>
          <h2 className="font-bold text-3xl md:text-5xl text-white">Why SWARNAKARA</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.1 }} viewport={{ once: true }} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#f5a623]/30 transition-all">
              <f.icon className="w-12 h-12 text-[#f5a623] mx-auto mb-4" />
              <h3 className="font-bold text-xl text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const reviews = [
    { name: 'Thank you Swarnakara!', text: 'Got my loan approved in just 20 minutes. Best gold loan experience ever.', rating: 5 },
    { name: 'Excellent Service', text: 'Very transparent process. The staff explained everything clearly.', rating: 5 },
    { name: 'Recommended', text: 'My family has been banking with them for 8 years. Trustworthy and reliable.', rating: 5 },
  ]
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-[#f5a623] text-sm font-semibold uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="font-bold text-3xl md:text-5xl text-white">What Our Customers Say</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.15 }} viewport={{ once: true }} className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, j) => <span key={j} className="text-[#f5a623]">&#9733;</span>)}
              </div>
              <p className="text-gray-300 mb-4 italic">&#34;{r.text}&#34;</p>
              <p className="font-semibold text-white">{r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-[#f5a623] text-sm font-semibold uppercase tracking-wider mb-2">Contact Us</p>
          <h2 className="font-bold text-3xl md:text-5xl text-white">Get In Touch</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">&#128205; Address</h3>
              <p className="text-gray-400">SWARNAKARA Gold Loans, Main Road, Kollam, Kerala 691001</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">&#128222; Phone</h3>
              <p className="text-gray-400">+91 98765 43210</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">&#9201; Working Hours</h3>
              <p className="text-gray-400">Mon - Sat: 9:00 AM - 6:00 PM<br/>Sunday: Closed</p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
            <p className="text-gray-500">Map placeholder</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 text-center">
      <p className="text-gray-500 text-sm">&#169; 2024 SWARNAKARA Gold Loans. All rights reserved.</p>
    </footer>
  )
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <GoldRateTicker />
      <HowItWorks />
      <InterestRates />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
