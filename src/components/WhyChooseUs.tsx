const points = [
	{
		title: 'Experienced Team',
		desc: 'Our personnel are vetted, trained, and supported by rigorous supervision.',
	},
	{
		title: 'Rapid Response',
		desc: 'We prioritise fast incident handling and clear communication at all times.',
	},
	{
		title: 'Tailored Solutions',
		desc: 'We assess your risks and design a plan to fit your operations.',
	},
	{
		title: 'Compliance & Ethics',
		desc: 'We uphold industry standards and act with integrity and professionalism.',
	},
]

import img2 from '../images/img2.jpg'


export default function WhyChooseUs() 
{
	return (
		<section id="about" className="section py-16 relative overflow-hidden"> 
			<div className="absolute inset-0 -z-10 bg-black/40" /> {/* Dark overlay for readability */}
			<div className="grid gap-8 lg:grid-cols-2 items-start">
				<div>
					<h2 className="section-title">Why Choose Dipholoholo</h2>
					<p className="mt-3 muted">
						We combine skilled personnel, reliable processes, and modern technology to deliver
						consistent protection for your organisation.
					</p>
					<div className="mt-8 grid gap-6 sm:grid-cols-2">
						{points.map((p) => (
							<div key={p.title} className="rounded-lg border border-slate-700/60 bg-slate-900/50 backdrop-blur-sm p-6 shadow-sm text-slate-200">
								<h3 className="text-lg font-semibold text-white">{p.title}</h3>
								<p className="mt-2 text-slate-300">{p.desc}</p>
							</div>
						))}
					</div>
				</div>
				<div className="relative">
					<div className="
									aspect-square 
									rounded-xl 
									border border-cyan-500/30 
									bg-gradient-to-br 
									from-blue-900/20 to-cyan-900/20 
									grid 
									place-items-center
									relative 
									overflow-hidden
							"
						>
							<img
								src={img2}
								alt="Security team on duty"
								className="
											absolute 
											inset-0 
											h-full w-full 
											object-cover object-left 
											opacity-80
										 "
							/>
					</div>
				</div>
			</div>
		</section>
	)
}
