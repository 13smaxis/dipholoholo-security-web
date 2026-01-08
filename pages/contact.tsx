import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Thank you! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-black py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Contact Dipholoholo Security Services today for a free consultation
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card className="p-8 border border-slate-800 bg-slate-900 shadow-lg">
                            <h2 className="text-2xl font-bold text-white mb-6">
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Your Name
                                    </label>
                                    <Input
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        placeholder="John Doe"
                                        className="h-12"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Email Address
                                    </label>
                                    <Input
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        placeholder="john@example.com"
                                        className="h-12"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Phone Number
                                    </label>
                                    <Input
                                        required
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        placeholder="+1 (555) 123-4567"
                                        className="h-12"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Your Message
                                    </label>
                                    <Textarea
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        placeholder="Tell us about your security needs..."
                                        className="min-h-32"
                                    />
                                </div>
                                <Button type="submit" size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                                    <Send className="w-5 h-5 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-8"
                    >
                        <Card className="p-8 border-0 shadow-lg bg-slate-950 text-white">
                            <h2 className="text-2xl font-bold mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Phone</h3>
                                        <p className="text-slate-300">0860 123 4567</p>
                                        <p className="text-slate-300">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Email</h3>
                                        <p className="text-slate-300">info@dipholoholo.co.za</p>
                                        <p className="text-slate-300">support@dipholoholo.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Office Location</h3>
                                        <p className="text-slate-300">
                                            123 Security Boulevard<br />
                                            Business District<br />
                                            City, State 12345
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-amber-500 to-amber-600 text-white">
                            <h3 className="text-2xl font-bold mb-4">
                                Emergency? Call Now!
                            </h3>
                            <p className="text-amber-50 mb-6">
                                24/7 Emergency response team ready to assist you anytime.
                            </p>
                            <Button size="lg" variant="secondary" className="w-full bg-white text-amber-600 hover:bg-slate-100">
                                <Phone className="w-5 h-5 mr-2" />
                                0860-EMERGENCY
                            </Button>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}