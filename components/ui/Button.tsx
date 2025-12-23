"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
}

export function Button({
    children,
    onClick,
    variant = "primary",
    className = "",
}: ButtonProps) {
    const baseStyles =
        "px-8 py-3 rounded-full font-serif text-lg tracking-wide shadow-md transition-all duration-300 transform active:scale-95 touch-manipulation";

    const variants = {
        primary:
            "bg-monet-500 text-white hover:bg-monet-400 hover:shadow-lg border border-transparent",
        secondary:
            "bg-monet-200 text-monet-text hover:bg-monet-300 border border-transparent",
        outline:
            "bg-transparent text-monet-text border border-monet-text/30 hover:bg-monet-100/50",
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </motion.button>
    );
}
