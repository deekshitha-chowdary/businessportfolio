import React from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-warmBeige/30 pt-12 pb-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-xl font-heading font-bold text-softBrown mb-4">Crothira Looms 🧶</h3>
                    <p className="text-sm text-charcoal/80">
                        Handcrafted with love and care.<br />Bringing warmth to your life, one stitch at a time.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-start space-y-2">
                    <h4 className="font-semibold text-softBrown mb-2">Quick Links</h4>
                    <a href="/shop" className="text-sm hover:text-blush transition-colors">Shop All</a>
                    <a href="/about" className="text-sm hover:text-blush transition-colors">Our Story</a>
                    <a href="/contact" className="text-sm hover:text-blush transition-colors">Custom Orders</a>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h4 className="font-semibold text-softBrown mb-4">Stay Connected</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:bg-blush hover:text-white transition-all"><Instagram size={20} /></a>
                        <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:bg-blush hover:text-white transition-all"><MessageCircle size={20} /></a>
                        <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:bg-blush hover:text-white transition-all"><Mail size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 mt-10 pt-6 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Crothira Looms. All rights reserved.
            </div>
        </footer>
    );
}
