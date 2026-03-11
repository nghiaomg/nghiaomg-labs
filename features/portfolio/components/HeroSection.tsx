"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { HERO_TEXT } from "../data"

export function HeroSection() {
    return (
        <section className="w-full min-h-[90vh] flex flex-col items-center justify-center py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center space-y-6 w-full"
            >
                <div className="overflow-hidden mb-6 flex justify-center">
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-3 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm font-medium uppercase tracking-widest text-zinc-500"
                    >
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> {HERO_TEXT.badge}
                    </motion.div>
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold tracking-tighter leading-[0.85] uppercase text-zinc-900 dark:text-zinc-50">
                    {HERO_TEXT.title1} <br /> <span className="text-zinc-400 dark:text-zinc-600">{HERO_TEXT.title2}</span> <br /> {HERO_TEXT.title3}
                </h1>
                <p className="max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground font-medium mt-12 leading-relaxed">
                    {HERO_TEXT.description}
                </p>
                <div className="flex justify-center mt-16 gap-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-full font-bold uppercase tracking-wider text-sm flex items-center gap-3 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                    >
                        {HERO_TEXT.ctaButton} <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </div>
            </motion.div>
        </section>
    )
}
