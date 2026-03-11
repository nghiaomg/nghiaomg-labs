"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ArrowRight, Code2, Layers, Cpu, Globe, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const projects = [
    {
        title: "EcoPay Platform",
        category: "Fintech / Node.js",
        year: "2024",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Luminous OS",
        category: "System Design / Go",
        year: "2023",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1974&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Quantum Dashboard",
        category: "React / Data Viz",
        year: "2023",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // placeholder
        link: "#"
    }
]

const experience = [
    { role: "Senior Software Engineer", company: "TechNova Inc.", duration: "2022 - Present" },
    { role: "Full Stack Developer", company: "Creative Digital", duration: "2019 - 2022" },
    { role: "Frontend Architect", company: "Pixel Studios", duration: "2017 - 2019" }
]

export default function LandingPage1() {
    const { scrollYProgress } = useScroll()
    const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
            <Navbar />
            <main className="flex-1 w-full flex flex-col items-center pt-16">
                {/* HERO */}
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
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Available for new opportunities
                            </motion.div>
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold tracking-tighter leading-[0.85] uppercase text-zinc-900 dark:text-zinc-50">
                            CREATE. <br /> <span className="text-zinc-400 dark:text-zinc-600">INNOVATE.</span> <br /> SCALE.
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground font-medium mt-12 leading-relaxed">
                            A minimalist showcase of system architecture, robust code, and scalable design. No clutter, just performance.
                        </p>
                        <div className="flex justify-center mt-16 gap-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-full font-bold uppercase tracking-wider text-sm flex items-center gap-3 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                            >
                                View Selected Works <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </div>
                    </motion.div>
                </section>

                {/* SELECTED WORKS (NEW) */}
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
                                <div className="w-full md:col-span-5 flex flex-col justify-center order-2 md:order-1 pt-4 md:pt-0">
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
                                <div className="w-full md:col-span-7 h-[400px] md:h-[600px] overflow-hidden rounded-2xl order-1 md:order-2 bg-zinc-100 dark:bg-zinc-900 relative">
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

                {/* EXPERIENCE & CAPABILITIES (NEW) */}
                <section className="w-full py-32 px-6 max-w-7xl mx-auto bg-zinc-50 dark:bg-zinc-950 rounded-[40px] my-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-12">Experience</h2>
                            <div className="flex flex-col gap-0 border-t border-zinc-200 dark:border-zinc-800">
                                {experience.map((exp, i) => (
                                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-zinc-200 dark:border-zinc-800 group hover:bg-white dark:hover:bg-zinc-900 transition-colors px-6 -mx-6 rounded-xl cursor-crosshair">
                                        <div className="mb-4 md:mb-0">
                                            <h3 className="text-2xl font-bold">{exp.role}</h3>
                                            <p className="text-zinc-500 text-lg mt-2">{exp.company}</p>
                                        </div>
                                        <div className="font-mono text-sm text-zinc-400">
                                            {exp.duration}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-12">Capabilities</h2>
                            <div className="flex flex-wrap gap-4">
                                {["Frontend Architecture", "React / Next.js", "Backend Systems", "Node.js / Go", "Database Design", "Performance Optimization", "UI/UX Implementation", "Framer Motion"].map((skill, i) => (
                                    <span key={i} className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-full text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* BENTO GRID (Original but refined) */}
                <section className="w-full py-24 px-6 max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Core Principles</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl font-medium">The foundational ideas that drive every line of code.</p>
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
                                <h3 className="text-3xl font-bold mb-4">Clean Architecture</h3>
                                <p className="text-muted-foreground text-lg max-w-md">Scalable systems built on solid principles. Separation of concerns and testable modules.</p>
                            </div>
                            <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity translate-x-1/4 translate-y-1/4">
                                <Code2 className="w-64 h-64 text-zinc-900 dark:text-white" />
                            </div>
                        </div>

                        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-10 flex flex-col justify-between group overflow-hidden relative border border-zinc-200 dark:border-zinc-800">
                            <div className="z-10 relative">
                                <Globe className="w-10 h-10 mb-6 text-zinc-900 dark:text-white" />
                                <h3 className="text-2xl font-bold mb-4">Edge Ready</h3>
                                <p className="text-muted-foreground">Deployed globally with ultra-low latency.</p>
                            </div>
                        </div>

                        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-10 flex flex-col justify-between group overflow-hidden relative border border-zinc-200 dark:border-zinc-800">
                            <div className="z-10 relative">
                                <Cpu className="w-10 h-10 mb-6 text-zinc-900 dark:text-white" />
                                <h3 className="text-2xl font-bold mb-4">Performant</h3>
                                <p className="text-muted-foreground">Optimized for speed, efficiency, and scale.</p>
                            </div>
                        </div>

                        <div className="md:col-span-2 bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-10 flex flex-col justify-between group overflow-hidden relative border border-zinc-200 dark:border-zinc-800">
                            <div className="z-10 relative">
                                <Layers className="w-10 h-10 mb-6 text-zinc-900 dark:text-white" />
                                <h3 className="text-3xl font-bold mb-4">Full Stack Expertise</h3>
                                <p className="text-muted-foreground text-lg max-w-md">From React & Next.js to Node, Go, and PostgreSQL. End-to-end product delivery.</p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* BIG TYPOGRAPHY FOOTER CTA */}
                <section className="w-full py-40 flex justify-center items-center bg-zinc-950 text-white mt-20">
                    <Link href="#contact" className="group">
                        <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter flex items-center gap-4 md:gap-8 transition-transform group-hover:scale-105">
                            Let&apos;s Talk <ArrowRight className="w-16 h-16 md:w-32 md:h-32 group-hover:translate-x-8 transition-transform" />
                        </h2>
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    )
}
