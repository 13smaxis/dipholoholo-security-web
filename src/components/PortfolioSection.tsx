const portfolioItems = [
  {
    title: 'Corporate HQ Protection',
    sector: 'Corporate',
    desc: 'Multi-level access control and 24/7 surveillance for Fortune 500 headquarters.',
    image: '🏢'
  },
  {
    title: 'Retail Loss Prevention',
    sector: 'Retail',
    desc: 'Real-time inventory tracking and crowd management for high-value retail chains.',
    image: '🛍️'
  },
  {
    title: 'Industrial Logistics Hub',
    sector: 'Industrial',
    desc: 'Perimeter security and equipment protection for major distribution centers.',
    image: '🏭'
  },
  {
    title: 'Gated Community Security',
    sector: 'Residential',
    desc: 'Integrated access control and resident-friendly patrol systems.',
    image: '🏡'
  },
]

export default function PortfolioSection() {
  return (
    <section className="section py-16">
      <div className="text-center mb-12">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="mt-3 muted">Trusted by leading organizations across multiple sectors.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {portfolioItems.map((item) => (
          <div
            key={item.title}
            className="group rounded-lg border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden hover:border-brand-500 hover:shadow-lg hover:shadow-brand-500/20 transition"
          >
            <div className="aspect-square bg-slate-800 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
              {item.image}
            </div>
            <div className="p-4">
              <p className="text-xs text-brand-400 font-semibold uppercase">{item.sector}</p>
              <h3 className="text-lg font-bold text-white mt-2">{item.title}</h3>
              <p className="mt-2 text-slate-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
