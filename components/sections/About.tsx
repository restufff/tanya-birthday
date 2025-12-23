"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import Image from "next/image";

export function About() {
    return (
        <Section className="bg-monet-paper/50">
            <div className="w-full max-w-md mx-auto space-y-12">
                {/* Portrait Frame */}
                <div className="relative w-64 h-80 mx-auto transform rotate-2">
                    <div className="absolute inset-0 border-8 border-white shadow-xl bg-monet-100 overflow-hidden">
                        {/* Abstract/Watercolor Placeholder for Portrait */}
                        <div className="relative w-full h-full bg-monet-200">
                            <Image
                                src="/tanya1.jpeg"
                                alt="Tanya Apriska Putri"
                                fill
                                className="object-cover opacity-90 sepia-[0.3]"
                            />
                        </div>
                        {/* Texture overlay on image */}
                        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-multiply"></div>
                    </div>
                    {/* Tape effect */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm rotate-1 shadow-sm"></div>
                </div>

                {/* Text Content */}
                <div className="text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-serif text-3xl text-monet-text mb-2">The One I Admire</h2>
                        <div className="w-16 h-1 bg-monet-300 mx-auto rounded-full opacity-50"></div>
                    </motion.div>

                    <motion.div
                        className="space-y-4 font-sans text-monet-text/80 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <p className="text-lg">
                            Born on <span className="font-semibold text-monet-500">December 24, 1998</span>
                        </p>

                        <div className="flex flex-col gap-3 py-4">
                            {["Gentle Strength", "Quiet Wisdom", "Radiant Heart", "Graceful Intellect"].map((trait, i) => (
                                < span key={i} className="text-monet-600 font-serif active:scale-95 transition-transform italic text-xl" >
                                    {trait}
                                </span>
                            ))}
                        </div>

                        <p className="text-sm border-t border-monet-200 pt-6 mt-6 max-w-xs mx-auto">
                            Every year, you grow more into the woman
                            <br />you were meant to be.
                        </p>
                    </motion.div>
                </div>
            </div >
        </Section >
    );
}
