import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <h1 className="text-4xl font-heading font-bold text-softBrown">Get in Touch</h1>
                    <p className="text-lg text-charcoal/70">
                        Want a custom order? Have a question? Or just want to say hi? We'd love to hear from you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-softBrown">
                            <div className="p-3 bg-white rounded-full shadow-sm"><Mail size={24} /></div>
                            <span>hello@crothiralooms.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-softBrown">
                            <div className="p-3 bg-white rounded-full shadow-sm"><Phone size={24} /></div>
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center gap-4 text-softBrown">
                            <div className="p-3 bg-white rounded-full shadow-sm"><Instagram size={24} /></div>
                            <span>@crothira__looms</span>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-warmBeige/30 space-y-6"
                >
                    <div>
                        <label className="block text-sm font-medium text-softBrown mb-2">Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl bg-cream/30 border border-warmBeige focus:ring-2 focus:ring-blush focus:outline-none transition-all" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-softBrown mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-3 rounded-xl bg-cream/30 border border-warmBeige focus:ring-2 focus:ring-blush focus:outline-none transition-all" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-softBrown mb-2">Message</label>
                        <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-cream/30 border border-warmBeige focus:ring-2 focus:ring-blush focus:outline-none transition-all" placeholder="Tell us about the custom piece you'd like..."></textarea>
                    </div>
                    <button className="w-full py-4 rounded-xl bg-blush text-white font-bold hover:bg-opacity-90 shadow-md transform hover:-translate-y-1 transition-all">
                        Send Message
                    </button>
                </motion.form>
            </div>
        </div>
    );
}

export default Contact;
