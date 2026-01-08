import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, ChevronRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80" />
            
            {/* Accent Light */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
                            <Shield className="w-4 h-4 text-amber-500" />
                            <span className="text-amber-500 text-sm font-medium tracking-wide">Dipholoholo Security Services</span>
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                            Security That
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                                Never Sleeps
                            </span>
                        </h1>
                        
                        <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                            Comprehensive security solutions tailored to protect what matters most. 
                            From physical guards to cutting-edge technology, we've got you covered 24/7.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to={createPageUrl('Contact')}>
                                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-8 py-6 text-lg rounded-xl group">
                                    Get Free Consultation
                                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 px-8 py-6 text-lg rounded-xl">
                                <Phone className="w-5 h-5 mr-2" />
                                1-800-SECURE
                            </Button>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:block"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-3xl transform rotate-6" />
                            <img 
                                src="https://images.unsplash.com/photo-1541458318771-3be4325d5cbc?w=800&q=80"
                                alt="Professional Security Guard"
                                className="relative rounded-3xl shadow-2xl shadow-black/50 object-cover w-full h-[500px]"
                            />
                            
                            {/* Floating Stats Card */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="absolute -left-8 bottom-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
                            >
                                <div className="text-4xl font-bold text-white mb-1">500+</div>
                                <div className="text-slate-400 text-sm">Active Clients Protected</div>
                            </motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -right-4 top-20 bg-amber-500 rounded-2xl p-6"
                            >
                                <div className="text-4xl font-bold text-slate-950 mb-1">24/7</div>
                                <div className="text-slate-800 text-sm font-medium">Round-the-Clock Service</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}