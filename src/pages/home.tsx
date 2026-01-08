import HeroSection from '../components/HeroSection'
import ServiceSection from '../components/ServiceSection'
import WhyChooseUs from '../components/WhyChooseUs'
import PortfolioSection from '../components/PortfolioSection'
import CertificationsSection from '../components/CertificationsSection'

export default function HomePage() 
{
	return (
		<>
			<HeroSection />
			<ServiceSection />
			<PortfolioSection />
			<WhyChooseUs />
			<CertificationsSection />
		</>
	)
}
