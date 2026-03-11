"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { projects } from "@/features/portfolio/data"

export function ArchiveList() {
    const { scrollYProgress } = useScroll()
    const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

    return (
        <div className="w-full lg:w-2/3 flex flex-col gap-32 border-t border-zinc-200 dark:border-zinc-800 pt-10 lg:pt-0 lg:border-t-0">
            {projects.map((project, idx) => (
                <motion.div
                    key={idx}
                    id={`project-${idx}`}
                    data-index={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="group cursor-pointer flex flex-col project-section"
                >
                    <div className="flex justify-between items-end mb-6">
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight group-hover:text-zinc-500 transition-colors">
                            {project.title}
                        </h2>
                        <span className="text-5xl font-black text-transparent text-stroke text-stroke-zinc-300 dark:text-stroke-zinc-700">
                            {(idx + 1).toString().padStart(2, '0')}
                        </span>
                    </div>

                    <div className="w-full aspect-[16/9] md:aspect-[3/2] overflow-hidden bg-zinc-100 dark:bg-zinc-900 relative">
                        <motion.img
                            style={{ y: yTransform }}
                            src={project.image}
                            alt={project.title}
                            className="w-full h-[120%] object-cover absolute top-[-10%] left-0 transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-zinc-200 dark:border-zinc-800 pb-6">
                        <p className="font-mono text-sm uppercase tracking-widest text-zinc-500 mb-2 sm:mb-0">
                            Domain: {project.category}
                        </p>
                        <a href={project.link} className="text-sm font-bold uppercase underline underline-offset-4 hover:text-zinc-500 transition-colors">
                            Explore Framework
                        </a>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
