"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

interface ReflectionProps {
    onReady: () => void;
}

export function Reflection({ onReady }: ReflectionProps) {
    return (
        <Section className="bg-monet-100/50 min-h-[70vh]">
            <div className="max-w-md mx-auto text-center space-y-10 px-6">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="font-serif text-2xl md:text-3xl text-monet-text leading-normal"
                >
                    After everything we’ve been through,<br />
                    after distance, time, and unanswered days —<br />
                    would you choose this journey with me again?
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <Button onClick={onReady} variant="outline" className="border-monet-400 text-monet-500">
                        I'm ready
                    </Button>
                </motion.div>
            </div>
        </Section>
    );
}
