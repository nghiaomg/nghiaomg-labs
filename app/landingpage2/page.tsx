"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Terminal, Database, Shield, Zap, Code, GitBranch } from "lucide-react"

export default function LandingPage2() {
    const [text, setText] = React.useState("")
    const fullText = "nghia@labs:~$ ./initialize_system.sh\n[OK] Core systems online\n[OK] Security protocols active\n[OK] Database connections established\n[OK] Ready for connection...\nnghia@labs:~$ "

    React.useEffect(() => {
        let i = 0
        const timer = setInterval(() => {
            setText(fullText.slice(0, i))
            i++
            if (i > fullText.length) clearInterval(timer)
        }, 30) // Fast typing speed
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="flex min-h-screen flex-col bg-[#0a0a0a] text-[#00ff41] font-mono selection:bg-[#00ff41] selection:text-black">
            {/* Container forced to dark theme stylings if relying on Tailwind dark mode classes */}
            <div className="dark">
                <Navbar />
            </div>

            <main className="flex-1 w-full flex flex-col items-center relative overflow-hidden pt-16">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff410d_1px,transparent_1px),linear-gradient(to_bottom,#00ff410d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                {/* HERO */}
                <section className="w-full min-h-[85vh] flex flex-col items-center justify-center py-20 px-6 max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-3xl bg-[#050505] border border-[#00ff41]/30 rounded-lg p-1 shadow-[0_0_40px_rgba(0,255,65,0.08)] mb-12"
                    >
                        <div className="bg-[#111] rounded-t-md flex items-center gap-2 px-4 py-3 border-b border-[#00ff41]/20">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            <span className="ml-2 text-xs text-[#00ff41]/50 font-sans">bash - nghia-labs - 80x24</span>
                        </div>
                        <div className="p-6 h-[180px] text-sm md:text-base whitespace-pre-wrap font-mono leading-relaxed text-[#00ff41]">
                            {text}
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-2.5 h-5 bg-[#00ff41] ml-1 align-middle"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 drop-shadow-[0_0_15px_rgba(0,255,65,0.6)]">
                            SYSTEM <span className="text-[#00ff41]">ARCHITECTURE</span>
                        </h1>
                        <p className="text-[#00ff41]/80 text-xl max-w-2xl mx-auto mb-10">
                            Engineering highly available, secure, and distributed infrastructure for the modern web.
                        </p>
                        <button className="px-8 py-4 border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black font-bold tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(0,255,65,0.3)] hover:shadow-[0_0_30px_rgba(0,255,65,0.8)]">
                            INITIALIZE CONNECTION
                        </button>
                    </motion.div>
                </section>

                {/* TECH METRICS MARQUEE or LIST */}
                <div className="w-full border-y border-[#00ff41]/20 bg-[#00ff41]/5 py-4 overflow-hidden relative z-10 flex whitespace-nowrap">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="flex gap-16 font-mono text-sm uppercase items-center text-[#00ff41]/70"
                    >
                        <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> Latency &lt; 50ms</span>
                        <span className="flex items-center gap-2"><Database className="w-4 h-4" /> 99.99% Uptime</span>
                        <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Zero-Trust Auth</span>
                        <span className="flex items-center gap-2"><Code className="w-4 h-4" /> 10k+ Commits</span>
                        <span className="flex items-center gap-2"><GitBranch className="w-4 h-4" /> CI/CD Pipeline Active</span>
                        {/* Duplicate for endless scroll effect */}
                        <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> Latency &lt; 50ms</span>
                        <span className="flex items-center gap-2"><Database className="w-4 h-4" /> 99.99% Uptime</span>
                        <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Zero-Trust Auth</span>
                    </motion.div>
                </div>

                {/* TECH CARDS */}
                <section className="w-full py-24 px-6 max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Terminal, title: "Backend Services", desc: "Go, Node.js, and Python microservices deployed on Kubernetes clusters." },
                            { icon: Database, title: "Data Engineering", desc: "PostgreSQL, Redis, and message brokering through Kafka." },
                            { icon: Shield, title: "Cybersecurity", desc: "Implementing OAuth, JWT, and role-based access control policies." },
                            { icon: Zap, title: "High Performance", desc: "Code optimized for sub-millisecond execution and horizontal scaling." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-[#050505] border border-[#00ff41]/30 hover:border-[#00ff41] rounded-none p-8 group transition-all relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <item.icon className="w-12 h-12 mb-6 text-[#00ff41]/50 group-hover:text-[#00ff41] group-hover:drop-shadow-[0_0_10px_rgba(0,255,65,0.8)] transition-all" />
                                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">{item.title}</h3>
                                <p className="text-[#00ff41]/60 text-sm leading-relaxed">{item.desc}</p>
                                <div className="mt-6 text-xs text-[#00ff41]/40 group-hover:text-[#00ff41] transition-colors uppercase cursor-pointer flex items-center gap-1">
                                    [Read Details] <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
            <div className="dark">
                <Footer />
            </div>
        </div>
    )
}
