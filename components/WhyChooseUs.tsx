import React from 'react';
import { CheckCircle, Award, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Award,
        title: "Licensed & Certified",
        description: "All our security personnel are fully licensed, trained, and certified professionals."
    },
    {
        icon: Clock,
        title: "24/7 Availability",
        description: "Round-the-clock protection and support whenever you need it, day or night."
    },
    {
        icon: Shield,
        title: "Proven Track Record",
        description: "Years of experience protecting businesses and individuals with zero security breaches."
    },
    {
        icon: CheckCircle,
        title: "Custom Solutions",
        description: "Tailored security plans designed specifically for your unique requirements."
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Why Choose Dipholoholo?
                        </h2>
                        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                            We are committed to providing the highest level of security services with professionalism, 
                            integrity, and advanced technology. Your safety is our priority.
                        </p>
                        
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                                            <feature.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-400">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl transform -rotate-6" />
                        <img 
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                            alt="Security Team"
                            className="relative rounded-3xl shadow-2xl object-cover w-full h-[600px]"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}