export default function WhatsAppIcon() {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 px-6 py-4 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 text-white flex items-center justify-center gap-2 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 border-2 border-cyan-300 hover:border-blue-300 font-bold text-lg"
      aria-label="Contact via WhatsApp"
      title="Chat on WhatsApp"
    >
      <span className="text-2xl">💬</span>
      <span>CHAT</span>
    </a>
  )
}
