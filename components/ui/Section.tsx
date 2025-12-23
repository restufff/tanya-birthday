"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    fullHeight?: boolean;
}

export function Section({
    children,
    className = "",
    id,
    fullHeight = true,
}: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={`relative w-full overflow-hidden flex flex-col items-center justify-center px-6 ${fullHeight ? "min-h-screen py-20" : "py-24"
                } ${className}`}
        >
            {children}
        </motion.section>
    );
}
