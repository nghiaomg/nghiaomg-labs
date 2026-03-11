"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { projects } from "../data"

export function SelectedWorksSection() {
    const { scrollYProgress } = useScroll()
    const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

    return (
        <section className="w-full py-32 px-4 md:px-8 max-w-[1400px] mx-auto border-t border-zinc-200 dark:border-zinc-800 mt-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">Selected <br /> Works</h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-md font-medium">A curated selection of projects focusing on high-performance web applications and system design.</p>
            </div>

            <div className="flex flex-col gap-32">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="group cursor-pointer flex flex-col md:grid md:grid-cols-12 gap-8 items-center"
                    >
                        {/* Text Info */}
                        <div className={`w-full md:col-span-5 flex flex-col justify-center pt-4 md:pt-0 ${index % 2 === 0 ? "order-2 md:order-1" : "order-2 md:order-2"
                            }`}>
                            <div className="flex gap-4 items-center mb-6 text-zinc-500 font-mono text-sm uppercase tracking-widest">
                                <span>{String(index + 1).padStart(2, '0')}</span>
                                <span className="w-12 h-px bg-zinc-300 dark:bg-zinc-700" />
                                <span>{project.category}</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-8 group-hover:text-zinc-500 transition-colors flex items-center gap-4">
                                {project.title}
                                <ArrowUpRight className="w-10 h-10 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out" />
                            </h3>
                            <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 my-8" />
                            <div className="flex justify-between items-center text-zinc-500 text-lg">
                                <span>Year: {project.year}</span>
                                <span className="uppercase text-sm tracking-widest underline underline-offset-4 pointer-events-none group-hover:text-black dark:group-hover:text-white transition-colors">View Case Study</span>
                            </div>
                        </div>
                        {/* Image Parallax */}
                        <div className={`w-full md:col-span-7 h-[400px] md:h-[600px] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 relative ${index % 2 === 0 ? "order-1 md:order-2" : "order-1 md:order-1"
                            }`}>
                            <motion.img
                                style={{ y: yImage }}
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[120%] object-cover absolute top-[-10%] left-0 transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
