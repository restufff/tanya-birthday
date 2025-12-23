"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { X } from "lucide-react";

export function PresentReveal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Section className="bg-gradient-to-t from-monet-200 to-monet-paper">
                <div className="text-center space-y-8">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="font-serif text-3xl text-monet-text"
                    >
                        A Small Moment for You
                    </motion.h2>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Button onClick={() => setIsOpen(true)}>
                            Open Your Present
                        </Button>
                    </motion.div>
                </div>
            </Section>

            {/* Video Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-monet-text/90 backdrop-blur-md"
                    >
                        <div className="relative w-full max-w-lg aspect-video bg-black rounded-lg shadow-2xl overflow-hidden">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 z-10 text-white/70 hover:text-white"
                            >
                                <X size={24} />
                            </button>

                            <div className="w-full h-full flex items-center justify-center text-white/50">
                                {/* Video Placeholder */}
                                <span className="font-serif italic">Video Message Placeholder</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
