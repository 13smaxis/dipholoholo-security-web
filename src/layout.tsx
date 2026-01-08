import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavDropdown, { NavDropdownItem } from './components/ui/NavDropdown';

type LayoutProps = {
    children: React.ReactNode
    currentPageName: string
}

export default function Layout({ children, currentPageName }: LayoutProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];
    return (
        <div className="min-h-screen bg-black">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-slate-800">
                <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center group-hover:bg-brand-600 transition-colors">
                                <span className="text-white font-bold">DS</span>
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-white font-bold text-xl">Dipholoholo</div>
                                <div className="text-amber-500 text-xs tracking-wider">SECURITY SERVICES</div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="text-sm font-medium transition-colors text-slate-300 hover:text-white relative pb-1 group"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                            <NavDropdown label="Technology">
                                <NavDropdownItem label="AI Analytics" href="/services" />
                                <NavDropdownItem label="Cloud Solutions" href="/services" />
                                <NavDropdownItem label="Biometrics" href="/services" />
                                <NavDropdownItem label="Mobile Integration" href="/services" />
                            </NavDropdown>
                            <NavDropdown label="Services">
                                <NavDropdownItem label="Manned Guarding" href="/services" />
                                <NavDropdownItem label="CCTV & Surveillance" href="/services" />
                                <NavDropdownItem label="Access Control" href="/services" />
                                <NavDropdownItem label="Risk Assessment" href="/services" />
                            </NavDropdown>
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:flex items-center gap-4">
                            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 text-sm transition">
                                Join Our Team
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-white p-2"
                        >
                            <span className="text-2xl leading-none">{mobileMenuOpen ? '×' : '☰'}</span>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-slate-800">
                            <div className="flex flex-col gap-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block text-sm font-medium py-2 text-slate-300 hover:text-brand-500 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <hr className="my-2 border-slate-700" />
                                <a href="/services" className="block text-sm font-medium py-2 text-slate-300 hover:text-brand-500 transition-colors">Technology</a>
                                <a href="/services" className="block text-sm font-medium py-2 text-slate-300 hover:text-brand-500 transition-colors">Services</a>
                                <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-brand-500 hover:bg-brand-600 text-white w-full px-4 py-2 text-sm transition">
                                    Join Our Team
                                </a>
                            </div>
                        </div>
                    )}
                </nav>
            </header>

            {/* Main Content */}
            <main className="pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">DS</span>
                                </div>
                                <div>
                                    <div className="font-bold text-lg">Dipholoholo</div>
                                    <div className="text-brand-500 text-xs">SECURITY SERVICES</div>
                                </div>
                            </div>
                            <p className="text-slate-400 text-sm">
                                Professional security solutions you can trust, available 24/7 to protect what matters most.
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="font-bold mb-4">Quick Links</h3>
                            <div className="flex flex-col gap-2">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.path}
                                        className="text-slate-400 hover:text-brand-500 text-sm transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-bold mb-4">Contact Us</h3>
                            <div className="flex flex-col gap-2 text-sm text-slate-400">
                                <p>Phone: 0860 123 4567</p>
                                <p>Email: info@dipholoholo.co.za</p>
                                <p>24/7 Emergency: 0860-EMERGENCY</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
                        <p>&copy; {new Date().getFullYear()} Dipholoholo Security Services. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}