"use client";

import { Section } from "../ui/Section";

export function Closing() {
    return (
        <Section className="py-20 min-h-[40vh] bg-monet-100">
            <div className="text-center space-y-2 opacity-70">
                <p className="font-serif text-monet-text text-xl italic">
                    Thank you for being you.
                </p>
                <p className="font-serif text-monet-text text-xl italic">
                    once again, Happy Birthday My Capricorn girl
                </p>
                <p className="font-serif text-monet-text text-xl italic">
                    I Love You So Much My Soon To Be Wife
                </p>
                <div className="w-8 h-[1px] bg-monet-400 mx-auto my-4"></div>
                <p className="font-sans text-xs text-monet-400 uppercase tracking-widest">
                    Made with {'<3'} by Restu Fauzi
                </p>
                <p className="font-sans text-xs text-monet-400 uppercase tracking-widest">
                    2025
                </p>
            </div>
        </Section>
    );
}
