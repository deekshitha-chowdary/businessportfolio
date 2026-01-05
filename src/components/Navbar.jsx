import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md shadow-sm border-b border-warmBeige/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-2xl font-heading font-bold text-softBrown flex items-center gap-2">
                        <img src="/logo.jpg" alt="Crothira Looms" className="h-12 w-auto object-contain rounded-full" />
                        <span>Crothira Looms 🧶</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link to="/" className="hover:text-blush transition-colors">Home</Link>
                        <Link to="/shop" className="hover:text-blush transition-colors">Shop</Link>
                        <Link to="/about" className="hover:text-blush transition-colors">About</Link>
                        <Link to="/contact" className="hover:text-blush transition-colors">Contact</Link>
                        <button className="bg-blush text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-sm">
                            Order Now <ShoppingBag size={18} />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-softBrown">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-white w-full border-t border-gray-100"
                >
                    <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col items-center">
                        <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 w-full text-center hover:text-blush hover:bg-gray-50 rounded">Home</Link>
                        <Link to="/shop" onClick={() => setIsOpen(false)} className="block py-2 w-full text-center hover:text-blush hover:bg-gray-50 rounded">Shop</Link>
                        <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 w-full text-center hover:text-blush hover:bg-gray-50 rounded">About</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 w-full text-center hover:text-blush hover:bg-gray-50 rounded">Contact</Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
