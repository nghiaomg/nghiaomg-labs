"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Code2 } from "lucide-react"

export function Hero() {
    return (
        <section className="w-full py-24 lg:py-40 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 opacity-20 dark:opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent blur-3xl rounded-full mix-blend-screen" />
            </div>

            <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4"
                >
                    <Code2 className="mr-1 h-3 w-3" /> System Thinking First
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                >
                    Nghia<span className="text-primary">OMG</span> Labs
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl lg:text-2xl font-medium"
                >
                    A curated engineering portfolio showcasing production-grade projects, architecture decisions, and system design thinking.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 mt-8"
                >
                    <Button size="lg" className="rounded-full font-semibold" asChild>
                        <Link href="#projects">
                            Explore Projects
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full font-semibold" asChild>
                        <Link href="#philosophy">Core Philosophy</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
