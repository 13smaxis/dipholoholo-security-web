import React from 'react';
import { Card } from "@/components/ui/card";
import { Shield, Video, Users, Home, Camera, Lock, UserCheck, Building, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: Shield,
        title: "Security Guards",
        description: "Armed or unarmed personnel for access control, patrols, and on-site monitoring for retail, construction, and corporate environments.",
        color: "bg-blue-500"
    },
    {
        icon: Users,
        title: "Mobile Patrols",
        description: "Guards in vehicles moving around your property to deter crime and ensure comprehensive security coverage.",
        color: "bg-purple-500"
    },
    {
        icon: Lock,
        title: "Access Control",
        description: "Advanced keycard and biometric systems combined with professional guards managing entry and exit points.",
        color: "bg-green-500"
    },
    {
        icon: Camera,
        title: "Surveillance Systems",
        description: "State-of-the-art CCTV, motion detectors, and 24/7 monitoring systems to keep your premises secure.",
        color: "bg-red-500"
    },
    {
        icon: Video,
        title: "Alarm Systems",
        description: "Advanced intrusion detection systems that immediately alert authorities when unauthorized access is detected.",
        color: "bg-orange-500"
    },
    {
        icon: UserCheck,
        title: "Biometric Security",
        description: "Fingerprint and facial recognition technology for secure authentication and access management.",
        color: "bg-cyan-500"
    },
    {
        icon: Users,
        title: "Event Security",
        description: "Professional crowd control and safety management for events of all sizes, ensuring smooth operations.",
        color: "bg-pink-500"
    },
    {
        icon: Building,
        title: "Retail Security",
        description: "Specialized shoplifting prevention and loss prevention services to protect your business assets.",
        color: "bg-indigo-500"
    },
    {
        icon: Shield,
        title: "Executive Protection",
        description: "Highly trained bodyguards providing personal protection for high-profile individuals and executives.",
        color: "bg-amber-500"
    },
    {
        icon: Home,
        title: "Residential Security",
        description: "Comprehensive security solutions for homes, apartments, and gated communities with 24/7 monitoring.",
        color: "bg-emerald-500"
    },
    {
        icon: AlertCircle,
        title: "Panic Button Systems",
        description: "Emergency panic button installations with instant response for immediate assistance during critical situations.",
        color: "bg-rose-500"
    }
];

export default function ServicesSection() {
    return (
        <section className="py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Our Security Services
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Comprehensive protection solutions tailored to meet your specific security needs
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300 border border-slate-800 bg-slate-900">
                                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}