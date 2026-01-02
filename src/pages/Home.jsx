import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Home = () => {
    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-cream via-lavender/20 to-cream overflow-hidden px-4">

                {/* Animated Blobs Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-10 left-10 w-72 h-72 bg-blush/20 rounded-full mix-blend-multiply blur-3xl opacity-60"
                    />
                    <motion.div
                        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-20 right-10 w-80 h-80 bg-lavender/30 rounded-full mix-blend-multiply blur-3xl opacity-60"
                    />
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white border border-warmBeige text-softBrown text-sm mb-6 shadow-sm">
                            ✨ Handcrafted with warmth
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-softBrown mb-6 leading-tight">
                            Crochet that feels <br /> <span className="text-blush italic">like a hug.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-charcoal/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Discover our collection of handmade plushies, everlasting bouquets, and custom accessories designed to brighten your day.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link to="/shop" className="group bg-blush text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-blush/40 hover:-translate-y-1 transition-all flex items-center gap-2">
                                Browse Shop <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/contact" className="px-8 py-4 rounded-full text-lg font-medium text-softBrown hover:bg-white/50 transition-all border border-transparent hover:border-warmBeige">
                                Custom Order
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Categories Snippet */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-softBrown mb-4">Cute Creations</h2>
                    <p className="text-charcoal/60">Find the perfect handmade gift for yourself or a loved one.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Plushies", color: "bg-sage/20", img: "🧸" },
                        { title: "Flower Bouquets", color: "bg-blush/20", img: "💐" },
                        { title: "Accessories", color: "bg-lavender/20", img: "👛" }
                    ].map((cat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="group bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-warmBeige/30"
                        >
                            <div className={`h-64 ${cat.color} rounded-2xl mb-6 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform`}>
                                {cat.img}
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-softBrown mb-2">{cat.title}</h3>
                            <Link to="/shop" className="text-blush font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                View Collection <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-heading text-center mb-12 text-softBrown">Kind Words</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-cream/30 p-8 rounded-2xl border border-warmBeige/20">
                                <div className="flex gap-1 text-gold mb-4">
                                    <Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} />
                                </div>
                                <p className="text-charcoal/80 mb-6 italic">"Absolutely loved the bouquet! It crafted so beautifully and the packaging was adorable."</p>
                                <div className="font-semibold text-softBrown">- Happy Customer</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
