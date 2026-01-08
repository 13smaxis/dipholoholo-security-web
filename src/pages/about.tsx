const values = [
  {
    title: 'Vigilance',
    desc: 'Constant awareness, proactive threat detection, and rapid response—every second counts.'
  },
  {
    title: 'Integrity',
    desc: 'We operate with transparency, honesty, and unwavering ethical standards in all dealings.'
  },
  {
    title: 'Excellence',
    desc: 'We invest in training, technology, and talent to deliver measurably superior results.'
  },
  {
    title: 'Partnership',
    desc: 'We view our clients as partners, working closely to understand and solve their unique challenges.'
  },
]

const team = [
  {
    role: 'Chief Security Officer',
    background: '20+ years in tactical operations and risk management.'
  },
  {
    role: 'Technology Director',
    background: '15+ years deploying enterprise security solutions and AI systems.'
  },
  {
    role: 'Operations Manager',
    background: '12+ years managing large-scale 24/7 security operations.'
  },
  {
    role: 'Training & Compliance Lead',
    background: '10+ years ensuring personnel certification and regulatory adherence.'
  },
]

const capabilities = [
  'ISO 27001 Information Security Certified',
  'GDPR & CCPA Compliant Processes',
  'AI & Machine Learning Threat Detection',
  'Multi-jurisdictional Legal Coverage',
  'Vetted & Vetted Security Personnel',
  '99.9% System Uptime Guarantee',
]

export default function AboutPage() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-neutral-900 to-black" />
        <div className="section">
          <h1 className="heading-1 text-center">About Dipholoholo Security</h1>
          <p className="mt-4 lead text-center max-w-2xl mx-auto">
            Trusted by thousands across Africa to protect their most critical assets—people, property, and data.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section py-16">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="section-title">Our Mission</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              To deliver world-class security solutions that empower our clients to operate with confidence, knowing their people, property, and data are protected by the most vigilant, innovative, and ethical team in the industry.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              We believe security is not just a service—it's a foundation. Every client deserves peace of mind.
            </p>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-brand-600/10 to-brand-700/5 border border-brand-500/30 aspect-square flex items-center justify-center p-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-400 mb-2">2010</div>
              <p className="text-slate-300">Founded with a commitment to excellence in security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section py-16">
        <h2 className="section-title text-center mb-12">Our Core Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-lg border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
              <h3 className="text-lg font-bold text-brand-400">{v.title}</h3>
              <p className="mt-2 text-slate-300">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="section py-16">
        <h2 className="section-title text-center mb-12">Leadership Team</h2>
        <p className="text-center lead max-w-2xl mx-auto mb-12">
          Our team is composed of industry veterans with decades of combined experience in security operations, technology, and compliance.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t, i) => (
            <div key={i} className="rounded-lg border border-slate-700 bg-slate-900 p-6">
              <div className="w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold">{t.role}</h3>
              <p className="mt-2 text-slate-300 text-sm">{t.background}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="section py-16">
        <h2 className="section-title text-center mb-12">Certifications & Capabilities</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div key={cap} className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-brand-600/5 to-transparent border border-brand-500/20">
              <span className="text-brand-400 font-bold text-lg">✓</span>
              <span className="text-slate-300">{cap}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Track Record */}
      <section className="section py-16">
        <h2 className="section-title text-center mb-12">By The Numbers</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {[
            { num: '5000+', label: 'Clients Protected' },
            { num: '24/7', label: 'Operations Coverage' },
            { num: '99.9%', label: 'Uptime Guarantee' },
            { num: '15+', label: 'Years of Excellence' },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
              <div className="text-4xl font-bold text-brand-400">{item.num}</div>
              <p className="mt-2 text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section py-16 text-center">
        <h2 className="section-title">Let's Discuss Your Security Needs</h2>
        <p className="mt-4 lead max-w-2xl mx-auto">
          Schedule a consultation with our team to learn how Dipholoholo can protect what matters most to you.
        </p>
        <div className="mt-8">
          <a href="/contact" className="btn-primary">Request a Consultation</a>
        </div>
      </section>
    </div>
  )
}
