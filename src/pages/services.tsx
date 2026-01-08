import { Link } from 'react-router-dom'

const mainServices = [
  {
    icon: '🛡️',
    title: 'Manned Guarding',
    desc: 'Uniformed security personnel trained in threat detection, access control, and emergency response. Available for events, facilities, or mobile patrols.',
    features: ['24/7 Availability', 'Rapid Response', 'Armed & Unarmed', 'Plainclothes Options']
  },
  {
    icon: '📹',
    title: 'Advanced CCTV & Surveillance',
    desc: 'Real-time monitoring with AI-powered analytics, facial recognition, and motion detection. Cloud-based storage and remote viewing.',
    features: ['AI Analytics', '4K HD Cameras', 'Cloud Storage', 'Mobile Alerts']
  },
  {
    icon: '🔐',
    title: 'Access Control Systems',
    desc: 'Biometric, keycard, and mobile app-based entry systems. Visitor management, audit trails, and integration with security operations.',
    features: ['Biometric Auth', 'Real-time Logs', 'Visitor Portal', 'Mobile Integration']
  },
  {
    icon: '📊',
    title: 'Security Assessment & Planning',
    desc: 'Vulnerability audits, risk analysis, and custom security strategy development. Compliance with industry standards and regulations.',
    features: ['Threat Analysis', 'Compliance Audit', 'Custom Plans', 'Gap Assessment']
  },
]

const sectors = [
  {
    name: 'Corporate',
    desc: 'Office buildings, data centres, and headquarters protection with seamless employee integration.',
    items: ['Perimeter Security', 'IT Infrastructure Protection', 'Executive Protection']
  },
  {
    name: 'Retail & Commercial',
    desc: 'Loss prevention, crowd management, and asset protection for retail environments.',
    items: ['Loss Prevention', 'Inventory Control', 'Crowd Management']
  },
  {
    name: 'Industrial & Logistics',
    desc: 'Heavy machinery, warehouses, and supply chain security with 24/7 monitoring.',
    items: ['Facility Patrol', 'Equipment Protection', 'Perimeter Surveillance']
  },
  {
    name: 'Residential & Gated Communities',
    desc: 'Family and property protection with discreet, professional security presence.',
    items: ['Gate Security', 'Perimeter Patrols', 'Emergency Response']
  },
]

const tech = [
  { name: 'AI-Powered Analytics', desc: 'Real-time threat detection and anomaly recognition.' },
  { name: 'Cloud Integration', desc: 'Secure, scalable storage and remote access.' },
  { name: 'Mobile-First Platforms', desc: 'Instant alerts and command-center dashboards on any device.' },
  { name: 'Biometric Authentication', desc: 'Fingerprint, facial, and iris recognition for foolproof access.' },
]

export default function ServicesPage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-neutral-900 to-black" />
        <div className="section">
          <h1 className="heading-1 text-center">Advanced Security Solutions</h1>
          <p className="mt-4 lead text-center max-w-2xl mx-auto">
            From AI-powered surveillance to tactical threat response, we deliver cutting-edge security that evolves with your threats.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section">
        <h2 className="section-title text-center mb-12">Our Core Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mainServices.map((s) => (
            <div key={s.title} className="group rounded-lg border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 p-6 hover:border-brand-500 hover:shadow-lg hover:shadow-brand-500/20 transition">
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
              <ul className="mt-4 space-y-1">
                {s.features.map((f) => (
                  <li key={f} className="text-xs text-brand-400">✓ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Sectors */}
      <section className="section py-16">
        <h2 className="section-title text-center mb-12">By Industry</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s) => (
            <div key={s.name} className="rounded-lg border border-slate-700 bg-slate-900 p-6">
              <h3 className="text-xl font-bold text-brand-400">{s.name}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="text-xs text-slate-300">→ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section py-16">
        <h2 className="section-title text-center mb-12">Technology & Innovation</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tech.map((t) => (
            <div key={t.name} className="rounded-lg bg-gradient-to-br from-brand-600/10 to-brand-700/5 border border-brand-500/30 p-6">
              <h3 className="text-lg font-semibold text-brand-400">{t.name}</h3>
              <p className="mt-2 text-slate-300">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="section py-16">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="section-title">Why Our Services Stand Out</h2>
            <ul className="mt-6 space-y-3">
              {[
                'Integrated platform combining physical and digital security.',
                '24/7 monitoring with instant alert escalation to your team.',
                'Compliance with GDPR, CCPA, ISO 27001, and local regulations.',
                'Custom solutions tailored to your unique risk profile.',
                'Transparent pricing with no hidden fees.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-brand-400 font-bold mt-1">✓</span>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-brand-500/10 to-brand-700/5 border border-brand-500/30 aspect-square flex items-center justify-center">
            <span className="text-slate-400 font-semibold text-center">🔬 Multi-Layer Security Architecture</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section py-16 text-center">
        <h2 className="section-title">Ready to Secure Your Tomorrow?</h2>
        <p className="mt-4 lead max-w-2xl mx-auto">
          Schedule a consultation with our security architects to build your custom protection strategy.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-primary">Get a Free Assessment</Link>
          <a href="tel:1800732873" className="inline-flex items-center text-brand-400 hover:text-brand-300 font-medium">
            ☎ 1-800-SECURE
          </a>
        </div>
      </section>
    </div>
  )
}
