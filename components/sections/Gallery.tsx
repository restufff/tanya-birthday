"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import Image from "next/image";

const photos = [
    { id: 1, src: "/first-meet.jpeg", caption: "Our First Meet After Great Apart", rotation: -2 },
    { id: 2, src: "/first-flower.jpeg", caption: "Fist Flower", rotation: 3 },
    { id: 3, src: "/first-ngafe.jpeg", caption: "First Occupied Your 'Tidak Puasa'", rotation: -1 },
    { id: 4, src: "/steak.jpeg", caption: "I Know The Best Steak In The Town", rotation: 2 },
    { id: 5, src: "/buka-puasa.jpeg", caption: "Iftar, Ramen Ghilbi", rotation: -2 },
    { id: 6, src: "/lebaran.jpeg", caption: "Sharing Eid together", rotation: 2 },
    { id: 7, src: "/aquarium.jpeg", caption: "Aquarium Date With Dimas (Bro take this picture)", rotation: -2 },
    { id: 8, src: "/skating.jpeg", caption: "Ice Skating Date (First Time Know The Fashion HeHe)", rotation: 2 },
    { id: 9, src: "/kupu.jpeg", caption: "'Banyaknya Kupu-Kupu'", rotation: -2 },
    { id: 10, src: "/gift.jpeg", caption: "Beautiful, Cool, Cute Present From Cutie and Beautiful GF", rotation: 2 },
    { id: 11, src: "/bebe.jpeg", caption: "BEBE LUCU LAHIR DARI BOX!!!", rotation: -2 },
    { id: 12, src: "/ngantuk.jpeg", caption: "Beb, mirip kamu, foto dulu", rotation: 2 },
    { id: 13, src: "/effort.jpeg", caption: "Effort GF In The World Creating Best T Shirt For Me (I like it so much)", rotation: -2 },
    { id: 14, src: "/jaket.jpeg", caption: "Api Cemburu", rotation: 2 },
    { id: 15, src: "/playful.jpeg", caption: "Always Love My Playful GF", rotation: -2 },
    { id: 16, src: "/bibi.jpeg", caption: "Bibi, Bebe, Stich (Always Love When You Being Cute)", rotation: 2 },
    { id: 17, src: "/rf.jpeg", caption: "My Amazing Birthday With You Celebrated", rotation: -2 },
    { id: 18, src: "/flower.jpeg", caption: "I Always Love You", rotation: 2 },
    { id: 19, src: "/studio.jpeg", caption: "Sayang Cantik Banget Sini Foto Yang Banyak", rotation: -2 },
    { id: 20, src: "/nasgor.jpeg", caption: "Bebe Makan Nasgor", rotation: 2 },
    { id: 21, src: "/fam.jpeg", caption: "Bebe Family", rotation: -2 },
    { id: 22, src: "/so.jpeg", caption: "IDK, You Are Just Perfect", rotation: 2 },
    { id: 23, src: "/olah.jpeg", caption: "Olahraga Bersama", rotation: -2 },
];

export function Gallery() {
    return (
        <Section className="bg-monet-200/30 overflow-hidden">
            <div className="text-center mb-12">
                <h2 className="font-serif text-3xl text-monet-text">Moments of Us</h2>
            </div>

            <div className="flex flex-col gap-12 items-center w-full max-w-sm mx-auto">
                {photos.map((photo, index) => (
                    <Polaroid key={photo.id} photo={photo} index={index} />
                ))}
            </div>

            <p className="text-center mt-12 font-serif italic text-monet-400 text-sm">
                More memories waiting to be made...
            </p>
        </Section>
    );
}

function Polaroid({ photo, index }: { photo: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: photo.rotation }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-4 pb-12 shadow-lg w-64 transform hover:scale-105 transition-transform duration-500 ease-out"
            style={{ rotate: `${photo.rotation}deg` }}
        >
            <div className="aspect-[4/5] bg-monet-100 w-full mb-4 relative overflow-hidden">
                {/* Image Component */}
                <div className="relative w-full h-full">
                    {/* Using a simple check to see if it's the default example or a missing file */}
                    <Image
                        src={photo.src}
                        alt={photo.caption}
                        fill
                        className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                    // Fallback implementation would be handled by simple error handling in real app, 
                    // but here we trust user to add files.
                    />

                    {/* Monet Filter Overlay */}
                    <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none"></div>
                    <div className="absolute inset-0 bg-monet-500/10 mix-blend-color pointer-events-none"></div>
                </div>
            </div>
            <p className="font-handwriting text-center text-monet-text/70 font-serif italic">
                {photo.caption}
            </p>
        </motion.div>
    );
}
