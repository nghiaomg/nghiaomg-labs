"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ArrowRight, Sparkles, Box, ChevronRight, CheckCircle2, Star, Zap, Shield, Globe } from "lucide-react"

const testimonials = [
    {
        quote: "This platform completely transformed how we ship digital products. The developer experience is unmatched.",
        author: "Sarah Jenkins",
        role: "CTO at TechFlow",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
    },
    {
        quote: "We scaled from 10k to 1M monthly active users without changing a single line of backend architecture.",
        author: "Michael Chen",
        role: "Founding Engineer, ScaleUp",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    {
        quote: "The ui components alone saved us months of development time. It's truly enterprise ready out of the box.",
        author: "Alex Rivera",
        role: "VP Product, Nexus",
        avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d"
    }
]

export default function LandingPage3() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-[#0B0C10] overflow-hidden font-sans selection:bg-purple-500/30">
            <Navbar />

            <main className="flex-1 w-full flex flex-col items-center relative pt-16">
                {/* Animated Gradient Background */}
                <div className="absolute top-0 left-0 w-full min-h-[120vh] overflow-hidden pointer-events-none z-0">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            x: [0, 50, 0],
                            y: [0, 30, 0],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] rounded-full bg-purple-400/20 dark:bg-purple-900/20 mix-blend-multiply dark:mix-blend-screen blur-[120px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            x: [0, -60, 0],
                            y: [0, 50, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-[10%] -right-[15%] w-[70vw] h-[70vw] rounded-full bg-blue-400/20 dark:bg-blue-900/20 mix-blend-multiply dark:mix-blend-screen blur-[120px]"
                    />
                </div>

                {/* HERO */}
                <section className="w-full min-h-[90vh] flex flex-col items-center justify-center py-20 px-6 max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, type: "spring" }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-xl mb-10 shadow-sm"
                    >
                        <Sparkles className="w-4 h-4 text-indigo-500" />
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Introducing Labs V3 for Modern Web</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 ml-2" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.05]"
                    >
                        Design that inspires.
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            Code that performs.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 font-medium"
                    >
                        Empowering innovative businesses with cutting-edge digital experiences, seamless user flows, and scalable infrastructure.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-5"
                    >
                        <button className="px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold shadow-xl shadow-slate-900/20 dark:shadow-white/10 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                            Start Building <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all">
                            Explore Features
                        </button>
                    </motion.div>
                </section>

                {/* MOCKUP / DASHBOARD PREVIEW */}
                <section className="w-full max-w-6xl mx-auto px-6 mb-32 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, type: "spring" }}
                        className="w-full aspect-[16/10] md:aspect-video rounded-3xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/80 dark:border-slate-800/80 shadow-[0_20px_80px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_80px_-15px_rgba(0,0,0,0.5)] p-2 md:p-4 overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent dark:from-black/20 z-20 pointer-events-none" />
                        <div className="w-full h-full rounded-2xl bg-slate-50 dark:bg-[#0f1117] border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col relative z-10 shadow-inner">
                            {/* Browser bar */}
                            <div className="h-12 border-b border-slate-200 dark:border-slate-800 flex items-center px-4 gap-2 bg-white/50 dark:bg-black/50 backdrop-blur-sm relative z-20">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-amber-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                <div className="mx-auto bg-slate-100 dark:bg-slate-800/50 h-6 w-1/3 rounded-md flex items-center px-3">
                                    <span className="text-[10px] text-slate-400">app.nghialabs.io</span>
                                </div>
                            </div>
                            {/* Body block */}
                            <div className="flex-1 p-6 md:p-10 flex flex-col gap-6 bg-slate-50 dark:bg-[#0f1117] relative z-10">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex flex-col gap-2 w-1/3">
                                        <div className="w-full h-8 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse" />
                                        <div className="w-2/3 h-4 bg-slate-200/50 dark:bg-slate-800/50 rounded-lg" />
                                    </div>
                                    <div className="w-24 h-10 bg-indigo-500/10 text-indigo-500 flex items-center justify-center rounded-lg text-sm font-semibold">Deploy</div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="col-span-2 h-48 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center group-hover:bg-slate-50 dark:group-hover:bg-slate-800 transition-colors">
                                        {/* Fake Chart */}
                                        <div className="w-full h-full p-6 flex items-end gap-2">
                                            {[40, 70, 45, 90, 65, 85, 110, 80, 100].map((h, i) => (
                                                <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ duration: 1, delay: i * 0.1 }} className="flex-1 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-sm" />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-span-1 h-48 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 flex flex-col gap-4">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-emerald-500" /></div>
                                        <div className="w-3/4 h-4 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                        <div className="w-1/2 h-4 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                        <div className="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded-full mt-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* LOGO TICKER / TRUSTED BY (NEW) */}
                <section className="w-full py-12 border-y border-slate-200/50 dark:border-slate-800/50 bg-white/30 dark:bg-black/20 backdrop-blur-md mb-24 relative z-10">
                    <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Trusted by innovative teams worldwide</p>
                    <div className="flex overflow-hidden relative max-w-5xl mx-auto mask-image-linear-gradient">
                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                            className="flex gap-16 md:gap-24 items-center whitespace-nowrap px-8 opacity-50 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
                        >
                            {/* Simulated Logos as Text since we don't have SVGs */}
                            {["ACME CORP", "GLOBAL SYSTEMS", "TECHNOVA", "VERTEX", "QUANTUM", "NEXUS", "ACME CORP", "GLOBAL SYSTEMS", "TECHNOVA"].map((logo, i) => (
                                <span key={i} className="text-xl md:text-2xl font-black font-serif tracking-tighter mix-blend-multiply dark:mix-blend-screen">{logo}</span>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* METRICS & FEATURES GRID (Enhanced) */}
                <section className="w-full py-24 px-6 max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Enterprise Grade by Default</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Everything you need to launch faster and scale further without technical debt.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Zap, title: "Lightning Fast", desc: "Edge network deployed globally for sub-50ms latency." },
                            { icon: Shield, title: "Bank-grade Security", desc: "SOC2 compliant infrastructure with zero-trust architecture." },
                            { icon: Box, title: "Modular Design", desc: "React components built on established design systems." },
                            { icon: Globe, title: "Global Scale", desc: "Distributed databases running on high-availability nodes." },
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="p-8 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/50 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 border border-slate-200 dark:border-slate-700 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                                    <feature.icon className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">{feature.desc}</p>
                                <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium text-sm gap-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                                    Learn more <ArrowRight className="w-4 h-4" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* TESTIMONIALS (NEW) */}
                <section className="w-full py-24 px-6 max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Loved by Engineers</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((test, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none flex flex-col justify-between relative overflow-hidden group"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div>
                                    <div className="flex gap-1 mb-6">
                                        {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 text-amber-500 fill-amber-500" />)}
                                    </div>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 font-medium leading-relaxed">&quot;{test.quote}&quot;</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={test.avatar} alt={test.author} className="w-12 h-12 rounded-full ring-2 ring-slate-100 dark:ring-slate-800" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">{test.author}</h4>
                                        <p className="text-sm text-slate-500">{test.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* PRICING / CTA (NEW) */}
                <section className="w-full py-32 px-6 relative z-10">
                    <div className="max-w-5xl mx-auto bg-slate-900 dark:bg-white rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mix-blend-overlay" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-bold text-white dark:text-slate-900 mb-6">Ready to transform your workflow?</h2>
                            <p className="text-xl text-slate-300 dark:text-slate-600 mb-10 max-w-2xl mx-auto">
                                Join thousands of developers building scalable applications without the boilerplate.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold hover:scale-105 transition-transform">
                                    Start for Free
                                </button>
                                <button className="px-8 py-4 rounded-full bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900 font-bold hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors">
                                    Talk to Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}
