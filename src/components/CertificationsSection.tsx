export default function CertificationsSection() {
  const certifications = [
    { icon: '🏅', title: 'ISO 9001:2015', desc: 'Quality Management System' },
    { icon: '🔐', title: 'ISO 27001', desc: 'Information Security Management' },
    { icon: '👥', title: 'PSIRA Accredited', desc: 'Private Security Industry Regulation' },
    { icon: '✅', title: 'SENSA Certified', desc: 'Security & Electronic Surveillance Ass.' },
    { icon: '🛡️', title: 'BEE Level 1', desc: 'Broad-Based Black Economic Empowerment' },
    { icon: '⭐', title: '15+ Years', desc: 'Industry Experience & Excellence' },
  ];

  const capabilities = [
    { feature: '24/7 Monitoring', desc: 'Round-the-clock surveillance and response' },
    { feature: 'AI-Powered Analytics', desc: 'Smart threat detection and prevention' },
    { feature: 'Mobile Integration', desc: 'Real-time alerts and mobile management' },
    { feature: 'Biometric Security', desc: 'Advanced access control systems' },
    { feature: 'Cloud Solutions', desc: 'Secure data storage and backup' },
    { feature: 'Emergency Response', desc: 'Rapid deployment and crisis management' },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Certifications & Capabilities</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Backed by industry certifications and advanced technological capabilities, we deliver world-class security solutions.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-brand-500 mb-8 text-center">Our Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 hover:border-brand-500 p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/20"
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-brand-500 transition-colors">{cert.title}</h4>
                <p className="text-slate-400 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities Grid */}
        <div>
          <h3 className="text-2xl font-bold text-brand-500 mb-8 text-center">Our Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 hover:border-cyan-500 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-cyan-500 group-hover:text-cyan-400 transition-colors">✨</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{cap.feature}</h4>
                    <p className="text-slate-400 text-sm">{cap.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-slate-300 mb-6">
            Choose a security partner with proven credentials and cutting-edge technology.
          </p>
          <button className="btn-primary">
            Get Certified Security Services
          </button>
        </div>
      </div>
    </section>
  );
}
