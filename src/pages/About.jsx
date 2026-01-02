import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-softBrown mb-6">Our Story</h1>
                <div className="w-24 h-1 bg-blush mx-auto rounded-full mb-8"></div>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                    It all started with a ball of yarn and a crochet hook. Crothira Looms was born out of a love for creating handmade, tangible warmth in a digital world. Every stitch is made with intention, care, and a little bit of magic.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-sage/20 h-80 rounded-3xl flex items-center justify-center text-6xl">🧶</div>
                <div>
                    <h2 className="text-2xl font-heading font-bold text-softBrown mb-4">Values</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                            <span className="w-8 h-8 rounded-full bg-peach/30 flex items-center justify-center text-sm">🌿</span>
                            <div>
                                <h3 className="font-semibold text-softBrown">Sustainable</h3>
                                <p className="text-sm text-gray-600">We use eco-friendly materials whenever possible.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="w-8 h-8 rounded-full bg-lavender/30 flex items-center justify-center text-sm">👐</span>
                            <div>
                                <h3 className="font-semibold text-softBrown">Handmade</h3>
                                <p className="text-sm text-gray-600">No mass production. Everything is made by hand.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="w-8 h-8 rounded-full bg-blush/30 flex items-center justify-center text-sm">💖</span>
                            <div>
                                <h3 className="font-semibold text-softBrown">Made with Love</h3>
                                <p className="text-sm text-gray-600">We pour our heart into every creation.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
