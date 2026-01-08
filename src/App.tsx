import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/home'
import ContactPage from './pages/contact'
import ServicesPage from './pages/services'
import AboutPage from './pages/about'
import Layout from './layout'
import HashScrollHandler from './HashScrollHandler'
import ScrollToTop from './components/ui/ScrollToTop'
import WhatsAppIcon from './components/ui/WhatsAppIcon'

export default function App() {
  const location = useLocation()
  const pathToPageName: Record<string, string> = {
    '/': 'Home',
    '/services': 'Services',
    '/about': 'About',
    '/contact': 'Contact'
  }
  const currentPageName = pathToPageName[location.pathname] || 'Home'

  return (
    <Layout currentPageName={currentPageName}>
      <HashScrollHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <ScrollToTop />
      <WhatsAppIcon />
    </Layout>
  )
}