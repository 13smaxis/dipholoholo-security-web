const services = [
	{
		title: 'Manned Guarding',
		desc: 'Professional on-site security officers to deter threats and respond rapidly.',
	},
	{
		title: 'Surveillance & Monitoring',
		desc: '24/7 CCTV monitoring and incident reporting to keep your premises secure.',
	},
	{
		title: 'Access Control',
		desc: 'Visitor management, ID verification, and secure entry solutions.',
	},
	{
		title: 'Risk Assessment',
		desc: 'Tailored security audits and risk mitigation plans for your operations.',
	},
]

export default function ServiceSection() {
	return (
		<section id="services" className="section py-16">
			<div className="text-center mb-10">
				<h2 className="section-title">Our Services</h2>
				<p className="mt-3 muted">Comprehensive solutions for business, industrial, and residential security.</p>
			</div>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{services.map((s) => (
					<div key={s.title} className="card">
						<div className="h-10 w-10 rounded bg-brand-100 text-brand-700 grid place-items-center font-bold mb-4">{s.title[0]}</div>
						<h3 className="text-lg font-semibold">{s.title}</h3>
						<p className="mt-2 text-slate-700">{s.desc}</p>
					</div>
				))}
			</div>
		</section>
	)
}
