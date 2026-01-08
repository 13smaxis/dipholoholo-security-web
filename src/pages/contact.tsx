import { useState } from 'react'

export default function ContactPage() {
	const [status, setStatus] = useState<string | null>(null)

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const form = new FormData(e.currentTarget)
		const name = String(form.get('name') || '')
		const email = String(form.get('email') || '')
		const message = String(form.get('message') || '')
		if (!name || !email || !message) {
			setStatus('Please complete all fields.')
			return
		}
		// Here you could POST to an API endpoint
		setStatus('Thanks! We will get back to you shortly.')
		e.currentTarget.reset()
	}

	return (
		<section className="section py-16">
			<div className="grid gap-10 lg:grid-cols-2">
				<div>
					<h2 className="section-title">Contact Us</h2>
					<p className="mt-3 text-gray-700">
						Tell us about your security needs and we will prepare a tailored proposal.
					</p>
					<form onSubmit={handleSubmit} className="mt-8 card space-y-4">
						<div>
							<label className="block text-sm font-medium text-gray-700">Name</label>
							<input name="name" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-brand-600 focus:ring-brand-600" />
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">Email</label>
							<input name="email" type="email" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-brand-600 focus:ring-brand-600" />
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">Message</label>
							<textarea name="message" rows={5} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-brand-600 focus:ring-brand-600" />
						</div>
						<button className="btn-primary" type="submit">Send Message</button>
						{status && <p className="text-sm text-gray-700">{status}</p>}
					</form>
				</div>
				<div>
					<div className="card">
						<h3 className="text-lg font-semibold">Company Details</h3>
						<ul className="mt-3 space-y-2 text-gray-700">
							<li><span className="font-medium">Address:</span> 123 Secure Way, Johannesburg</li>
							<li><span className="font-medium">Phone:</span> +27 10 000 0000</li>
							<li><span className="font-medium">Email:</span> info@dipholoholo-security.co.za</li>
							<li><span className="font-medium">Hours:</span> 24/7 Operations</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
