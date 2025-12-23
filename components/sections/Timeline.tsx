"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section } from "../ui/Section";

const timelineEvents = [
    { year: "1998", text: "The year you came into this world —\nquietly beginning a life that would one day mean everything to me." },
    { year: "2010", text: "Growing up, learning the world, forming dreams —\neven then, you carried a strength you didn’t yet realize." },
    { year: "2016", text: "You began shaping your own path.\nLearning who you are, standing for yourself,\nbecoming a woman with depth and heart." },
    { year: "2018", text: "Adrian introduced us —\nwhat started as a joke, with no serious intention,\nquietly became something neither of us expected." },
    { year: "2020", text: "A year that tested everyone.\nYou endured, adapted, and kept moving forward —\nstronger than circumstances tried to make you." },
    { year: "2021", text: "The first time we met.\nTwo eyes meeting for the first time —\na moment simple, quiet, and unforgettable." },
    { year: "2022", text: "You continued your journey alone, without me even knowing.\nAnd still, you stood strong." },
    { year: "2023", text: "You kept fighting, even when life wasn’t gentle.\nYet you remained beautiful." },
    { year: "2024", text: "I lost you once.\nI didn’t know where you were or what you were going through.\nBut every day, I prayed quietly —\nthat one day our paths would meet again.", special: true },
    { year: "2025", text: "And here we are.\nAfter time and distance, we meet again — not by chance, but by grace." },
];

export function Timeline() {
    const containerRef = useRef(null);

    return (
        <div ref={containerRef} className="bg-gradient-to-b from-monet-paper via-monet-100 to-monet-paper py-20">
            <div className="max-w-md mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="font-serif text-3xl text-center text-monet-text mb-16"
                >
                    Our Journey
                </motion.h2>

                <div className="relative border-l border-monet-300 ml-4 md:ml-8 space-y-24 pb-20">
                    {timelineEvents.map((event, index) => (
                        <TimelineItem key={index} event={event} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function TimelineItem({ event, index }: { event: any, index: number }) {
    const isSpecial = event.special;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`relative pl-8 md:pl-12 ${isSpecial ? "py-12" : ""}`}
        >
            {/* Dot */}
            <span className={`absolute -left-[5px] top-2 rounded-full border-4 border-white shadow-sm ${isSpecial ? "w-6 h-6 -left-[11px] bg-monet-500 animate-pulse" : "w-3 h-3 bg-monet-400"
                }`}></span>

            <div className="flex flex-col gap-2">
                <span className={`font-serif text-monet-500 font-bold ${isSpecial ? "text-4xl" : "text-2xl"}`}>
                    {event.year}
                </span>
                <p className={`font-sans text-monet-text/80 whitespace-pre-line leading-relaxed ${isSpecial ? "text-lg italic font-medium" : "text-base"
                    }`}>
                    {event.text}
                </p>
            </div>
        </motion.div>
    );
}
