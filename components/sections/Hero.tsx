"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Section } from "../ui/Section";

export function Hero() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Initialize audio but don't play automatically
        audioRef.current = new Audio("/bgm.mp3"); // Ensure this file exists in public/
        audioRef.current.loop = true;

        return () => {
            audioRef.current?.pause();
        };
    }, []);

    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <Section className="relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-b from-monet-100 via-monet-200 to-monet-100 opacity-60 z-0" />

            {/* Painterly Blobs - CSS only for performance */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-monet-300 rounded-full blur-[80px] opacity-40 mix-blend-multiply animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-monet-400 rounded-full blur-[100px] opacity-30 mix-blend-multiply delay-1000" />

            <div className="relative z-10 text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <span className="block text-monet-500 text-sm tracking-[0.2em] font-sans uppercase mb-4">
                        A Special Celebration
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl text-monet-text leading-tight mb-2">
                        Happy Birthday,
                        <span className="block mt-2 italic text-monet-500">
                            Tanya Apriska Putri
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="font-sans text-monet-text/70 text-lg md:text-xl font-light tracking-wide"
                >
                    This page holds our journey.
                </motion.p>
            </div>

            {/* Audio Toggle */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                onClick={toggleAudio}
                className="absolute bottom-10 right-6 z-20 p-3 rounded-full bg-white/30 backdrop-blur-sm text-monet-text hover:bg-white/50 transition-colors"
                aria-label="Toggle music"
            >
                {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </motion.button>

            {!isPlaying && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 2, type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute bottom-[2.8rem] right-[5.5rem] z-20"
                >
                    <div className="relative bg-white text-monet-800 px-4 py-2 rounded-xl shadow-xl drop-shadow-md">
                        <span className="font-sans text-xs font-bold tracking-wide whitespace-nowrap">
                            Click me to listen the music
                        </span>
                        {/* Triangle pointer pointing right */}
                        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent" />
                    </div>
                </motion.div>
            )}

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-monet-400"
            >
                <span className="text-sm font-light tracking-widest uppercase">Scroll</span>
            </motion.div>
        </Section>
    );
}
