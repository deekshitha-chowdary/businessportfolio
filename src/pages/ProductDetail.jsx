import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShoppingBag, X, MessageCircle } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    const [showQR, setShowQR] = useState(false);

    // Mock Data
    const product = {
        name: "Lavender Bouquet",
        price: "₹1,200",
        description: "A beautiful, everlasting bouquet of hand-crocheted lavender flowers. Perfect for home decor or as a thoughtful gift that never withers.",
        material: "100% Cotton Yarn",
        size: "Approx 25cm tall",
        care: "Gentle spot clean only.",
        images: ["💐"]
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 relative">
            <Link to="/shop" className="text-softBrown hover:text-blush inline-flex items-center gap-2 mb-8 transition-colors">
                <ArrowLeft size={20} /> Back to Shop
            </Link>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-cream rounded-3xl h-[500px] flex items-center justify-center text-9xl shadow-inner"
                >
                    {product.images[0]}
                </motion.div>

                {/* Product Info */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div>
                        <h1 className="text-4xl font-heading font-bold text-softBrown mb-2">{product.name}</h1>
                        <span className="text-2xl font-bold text-blush">{product.price}</span>
                    </div>

                    <p className="text-charcoal/80 leading-relaxed text-lg">
                        {product.description}
                    </p>

                    <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-warmBeige/30">
                        <div>
                            <h4 className="font-semibold text-softBrown text-sm uppercase tracking-wide mb-1">Material</h4>
                            <p className="text-gray-600">{product.material}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-softBrown text-sm uppercase tracking-wide mb-1">Size</h4>
                            <p className="text-gray-600">{product.size}</p>
                        </div>
                    </div>

                    <div className="pt-4 flex flex-col gap-4">
                        <button
                            onClick={() => window.open(`https://wa.me/919876543210?text=Hi! I am interested in buying ${product.name}`, '_blank')}
                            className="w-full bg-green-500 text-white text-lg font-bold py-4 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1"
                        >
                            <MessageCircle size={24} /> Order via WhatsApp
                        </button>

                        <button
                            onClick={() => setShowQR(true)}
                            className="w-full bg-blush text-white text-lg font-bold py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1"
                        >
                            <ShoppingBag size={24} /> Pay with UPI
                        </button>
                        <p className="text-center text-sm text-gray-500 mt-2">Safe & Secure Payment via UPI / Card</p>
                    </div>
                </motion.div>
            </div>

            {/* QR Code Modal */}
            <AnimatePresence>
                {showQR && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white p-8 rounded-3xl max-w-sm w-full text-center relative shadow-2xl"
                        >
                            <button onClick={() => setShowQR(false)} className="absolute top-4 right-4 text-gray-400 hover:text-softBrown"><X size={24} /></button>
                            <h3 className="text-2xl font-heading font-bold text-softBrown mb-4">Scan to Pay</h3>
                            <div className="bg-gray-100 w-56 h-56 mx-auto rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-gray-300">
                                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=crothiralooms@upi&pn=CrothiraLooms&am=${product.price.replace('₹', '').replace(',', '')}&cu=INR`} alt="QR Code" className="w-48 h-48 mix-blend-multiply opacity-90" />
                            </div>
                            <p className="font-bold text-xl text-softBrown mb-1">{product.price}</p>
                            <p className="text-sm text-gray-500 mb-6 font-mono">upi: crothiralooms@upi</p>
                            <button onClick={() => setShowQR(false)} className="w-full py-3 rounded-full bg-sage/30 text-softBrown font-bold hover:bg-sage/50 transition-colors">
                                I've Paid
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ProductDetail;
