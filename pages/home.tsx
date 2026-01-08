import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';

export default function Home() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <ServicesSection />
            <WhyChooseUs />
        </div>
    );
}