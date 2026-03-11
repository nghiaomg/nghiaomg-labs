"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Code2, Globe, Cpu, Layers } from "lucide-react"
import { CORE_PRINCIPLES_TEXT } from "../data"

export function CorePrinciplesSection() {
    return (
        <section id="philosophy" className="w-full py-24 px-6 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">{CORE_PRINCIPLES_TEXT.header}</h2>
                <p className="text-xl text-muted-foreground max-w-2xl font-medium">{CORE_PRINCIPLES_TEXT.subHeader}</p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
            >
                <div className="md:col-span-2 bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-10 flex flex-col justify-between group overflow-hidden relative border border-zinc-200 dark:border-zinc-800">
                    <div className="z-10 relative">
                        <Code2 className="w-10 h-10 mb-6 text-zinc-900 dark:text-white" />
                        <h3 className="text-3xl font-bold mb-4">{CORE_PRINCIPLES_TEXT.principles[0].title}</h3>
                        <p className="text-muted-foreground text-lg max-w-md">{CORE_PRINCIPLES_TEXT.principles[0].description}</p>
                    </div>
                    <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity translate-x-1/4 translate-y-1/4">
                        <Code2 className="w-64 h-64 text-zinc-900 dark:text-white" />
                    </div>
                </div>

                <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-10 flex flex-col justify-between group overflow-hidden relative border border-zinc-200 dark:border-zinc-800">
                    <div className="z-10 relative">
                        <Globe className="w-10 h-10 mb-6 text-zinc-900 dark:text-white" />
                        <h3 className="text-2xl font-bold mb-4">{CORE_PRINCIPLES_TEXT.principles[1].title}</h3>
                        <p className="text-muted-foreground">{CORE_PRINCIPLES_TEXT.principles[1].description}</p>
                    </div>
                </div>

                <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-10 flex flex-col justify-between group overflow-hidden relative border border-zinc-200 dark:border-zinc-800">
                    <div className="z-10 relative">
                        <Cpu className="w-10 h-10 mb-6 text-zinc-900 dark:text-white" />
                        <h3 className="text-2xl font-bold mb-4">{CORE_PRINCIPLES_TEXT.principles[2].title}</h3>
                        <p className="text-muted-foreground">{CORE_PRINCIPLES_TEXT.principles[2].description}</p>
                    </div>
                </div>

                <div className="md:col-span-2 bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-10 flex flex-col justify-between group overflow-hidden relative border border-zinc-200 dark:border-zinc-800">
                    <div className="z-10 relative">
                        <Layers className="w-10 h-10 mb-6 text-zinc-900 dark:text-white" />
                        <h3 className="text-3xl font-bold mb-4">{CORE_PRINCIPLES_TEXT.principles[3].title}</h3>
                        <p className="text-muted-foreground text-lg max-w-md">{CORE_PRINCIPLES_TEXT.principles[3].description}</p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
