"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

interface ProposalProps {
    onYes: () => void;
}

export function Proposal({ onYes }: ProposalProps) {
    const [noCount, setNoCount] = useState(0);

    const handleNo = () => {
        setNoCount(prev => prev + 1);
    };

    return (
        <Section className="bg-monet-paper py-32" id="proposal">
            <div className="text-center space-y-12 w-full max-w-md px-6">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="font-serif text-4xl md:text-5xl text-monet-text leading-tight"
                >
                    Will you marry me?
                </motion.h2>

                <div className="flex flex-col gap-4 items-center justify-center pt-8">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button onClick={onYes} className="w-full min-w-[200px] text-xl py-4 bg-monet-500 hover:bg-monet-400">
                            YES
                        </Button>
                    </motion.div>

                    {noCount < 3 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <button
                                onClick={handleNo}
                                className="text-monet-400 text-sm font-sans tracking-wide hover:text-monet-500 transition-colors py-2"
                            >
                                NO
                            </button>
                        </motion.div>
                    )}

                    <AnimatePresence>
                        {noCount > 0 && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-monet-500/80 italic font-serif text-sm mt-4"
                            >
                                I think your heart already knows...
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </Section>
    );
}
