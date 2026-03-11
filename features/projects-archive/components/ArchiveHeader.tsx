"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/features/portfolio/data"

interface ArchiveHeaderProps {
    activeIdx: number;
}

export function ArchiveHeader({ activeIdx }: ArchiveHeaderProps) {
    return (
        <div className="w-full lg:w-1/3 lg:sticky lg:top-40 z-10">
            <AnimatePresence>
                {activeIdx === 0 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, overflow: "hidden" }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0, overflow: "hidden" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-12"
                    >
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                            Index <br /> <span className="text-zinc-300 dark:text-zinc-700">2022</span> <br /> 2024
                        </h1>
                        <p className="text-lg text-muted-foreground font-medium max-w-sm">
                            An editorial collection of our latest works. Scroll to explore the progression of our architectural concepts.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="hidden lg:flex flex-col gap-4 border-l-2 border-zinc-200 dark:border-zinc-800 pl-6">
                <span className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100">Quick Links</span>
                {projects.map((p, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            document.getElementById(`project-${i}`)?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className={`text-sm uppercase tracking-wider text-left transition-all duration-300 ${activeIdx === i
                            ? "text-black dark:text-white font-bold pl-2 border-l-2 border-black dark:border-white -ml-[2px]"
                            : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
                            }`}
                    >
                        {(i + 1).toString().padStart(2, '0')} - {p.title}
                    </button>
                ))}
            </div>
        </div>
    )
}
