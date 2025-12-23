"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface PromiseProps {
    isOpen: boolean;
    onClose: () => void;
}

export function PromiseSection({ isOpen, onClose }: PromiseProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-monet-text/95 backdrop-blur-sm p-6"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-monet-paper w-full max-w-sm rounded overflow-hidden shadow-2xl relative"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-monet-400 hover:text-monet-500 z-10"
                        >
                            <X size={20} />
                        </button>

                        {/* Image placeholder Area */}
                        <div className="h-64 bg-monet-300 relative">
                            <Image
                                src="/yes.jpeg"
                                alt="She Said Yes"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-noise opacity-30 mix-blend-multiply"></div>
                        </div>

                        <div className="p-8 text-center space-y-6">
                            <h3 className="font-serif text-3xl text-monet-text">She said yes.</h3>

                            <div className="space-y-2 font-sans text-monet-text/80 text-sm tracking-wide border-t border-b border-monet-200 py-6">
                                <p><span className="font-bold text-monet-500">Date:</span> Wednesday, December 24th 2025</p>
                                <p><span className="font-bold text-monet-500">Time:</span> After Maghrib</p>
                                <p><span className="font-bold text-monet-500">Location:</span> Bidan Eka House</p>
                            </div>

                            <p className="text-xs text-monet-400 uppercase tracking-widest">
                                A new chapter begins
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
