import React from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

const products = [
    { id: 1, name: "Lavender Bouquet", price: "₹1,200", category: "Flowers", image: "💐" },
    { id: 2, name: "Chunky Bee Plushie", price: "₹850", category: "Plushies", image: "🐝" },
    { id: 3, name: "Sunflower Keychain", price: "₹250", category: "Keychains", image: "🌻" },
    { id: 4, name: "Tulip Pot", price: "₹1,500", category: "Flowers", image: "🌷" },
    { id: 5, name: "Custom Doll", price: "₹2,000", category: "Custom", image: "🎎" },
    { id: 6, name: "Avocado Plush", price: "₹650", category: "Plushies", image: "🥑" },
];

const Shop = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h1 className="text-4xl md:text-5xl font-heading text-softBrown mb-4">Shop Collections</h1>
                    <p className="text-charcoal/60">Find something special for you.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-warmBeige rounded-full text-softBrown hover:bg-white transition-colors mt-4 md:mt-0">
                    <Filter size={18} /> Filter
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-transparent hover:border-warmBeige/50"
                    >
                        <div className="h-64 bg-cream flex items-center justify-center text-8xl group-hover:bg-lavender/10 transition-colors relative">
                            {product.image}
                            {product.category === "Custom" && (
                                <span className="absolute top-4 right-4 bg-white/80 backdrop-blur px-2 py-1 rounded-md text-xs font-bold text-softBrown uppercase tracking-wider">
                                    Custom
                                </span>
                            )}
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-heading font-bold text-softBrown">{product.name}</h3>
                                <span className="font-semibold text-blush">{product.price}</span>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">{product.category}</p>
                            <button className="w-full py-3 rounded-xl bg-warmBeige/20 text-softBrown font-medium hover:bg-blush hover:text-white transition-all">
                                View Details
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Shop;
