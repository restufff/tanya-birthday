"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";

export function Letter() {
    return (
        <Section className="bg-monet-paper py-32">
            <div className="max-w-md mx-auto space-y-8 px-8 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="font-serif text-3xl text-monet-text mb-12 text-center"
                >
                    My Heart to Yours
                </motion.div>

                <motion.div
                    className="font-sans text-monet-text/80 text-lg leading-loose space-y-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                >
                    <p>
                        Writing this feels different than anything I’ve written before.
                        Because this isn’t just for a moment — it’s for a lifetime.
                    </p>
                    <p>
                        When I look back at the years, at the distance, at the silence we endured...
                        I see now that every step was leading us back here. To this quiet certainty.
                    </p>
                    <p>
                        You are the peace heavily prayed for. You are the gentle strength
                        I didn’t know I needed until I found it in your eyes.
                    </p>
                    <p>
                        Today, I don’t just celebrate your birth.
                        I celebrate the day the world was given the gift of you.
                        And I celebrate the hope that maybe, just maybe,
                        I get to be the one who cherishes that gift forever.
                    </p>
                </motion.div>
            </div>
        </Section>
    );
}
