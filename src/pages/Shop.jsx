import React from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

const products = [
    { id: 1, name: "Strawberry Collection Set", price: "₹1,850", category: "Sets", image: "/products/strawberry-collection.jpg" }, // Updated
    { id: 2, name: "Forever Flower Box", price: "₹2,499", category: "Gift Boxes", image: "/products/flower-bouquet-box.jpg" }, // Updated
    { id: 3, name: "Heart Pouch", price: "₹550", category: "Accessories", image: "/products/heart-pouch.jpg" }, // Updated
    { id: 4, name: "Little Turtle Friend", price: "₹650", category: "Plushies", image: "/products/turtle-plushie.jpg" }, // Updated
    { id: 5, name: "Strawberry Drawstring", price: "₹750", category: "Accessories", image: "/products/strawberry-pouch.jpg" }, // Updated
    { id: 6, name: "Lavender Bow", price: "₹350", category: "Accessories", image: "/products/purple-bow.jpg" },
    { id: 7, name: "Cloud Pouch", price: "₹650", category: "Accessories", image: "/products/cloud-pouch.jpg" },
    { id: 8, name: "White Lily", price: "₹800", category: "Flowers", image: "/products/white-lily.jpg" },
    { id: 9, name: "Red Blossom Clip", price: "₹200", category: "Accessories", image: "/products/red-flower-clip.jpg" },
    { id: 11, name: "Cream Flower & Bow Set", price: "₹450", category: "Accessories", image: "/products/cream-bow-set.jpg" },
    { id: 12, name: "Hanging Turtle Keychain", price: "₹300", category: "Keychains", image: "/products/turtle-keychain.jpg" },
    { id: 13, name: "Red Heart Keychain", price: "₹250", category: "Keychains", image: "/products/heart-keychain.jpg" },
    { id: 14, name: "Sunflower Keychain", price: "₹250", category: "Keychains", image: "/products/sunflower-keychain.jpg" },
    { id: 15, name: "Tulip & Heart Charm", price: "₹350", category: "Keychains", image: "/products/tulip-heart-keychain.jpg" },
    { id: 16, name: "Daisy Crop Top", price: "₹1,500", category: "Clothing", image: "/products/daisy-crop-top.jpg" },
    { id: 17, name: "Sunflower Coaster", price: "₹150", category: "Home Decor", image: "/products/sunflower-coaster.jpg" },
    { id: 18, name: "Sunflower Bookmark", price: "₹200", category: "Accessories", image: "/products/sunflower-bookmark.jpg" },
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
                        <div className="h-64 bg-cream flex items-center justify-center group-hover:bg-lavender/10 transition-colors relative overflow-hidden">
                            {product.image.startsWith('/') ? (
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            ) : (
                                <span className="text-8xl">{product.image}</span>
                            )}
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
