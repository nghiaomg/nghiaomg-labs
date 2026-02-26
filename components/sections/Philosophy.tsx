"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Zap, Box, Rocket } from "lucide-react"

const principles = [
    {
        title: "System Thinking First",
        description: "Designing holistic architectures that solve core problems, not just treating symptoms.",
        icon: <Cpu className="h-6 w-6 text-primary" />,
        delay: 0.1,
    },
    {
        title: "Performance Matters",
        description: "Every millisecond counts. Focusing on fast execution, optimized assets, and efficient logic.",
        icon: <Zap className="h-6 w-6 text-primary" />,
        delay: 0.2,
    },
    {
        title: "Clean Architecture",
        description: "Prioritizing maintainability and scalability over quick, messy hacks. Code must be readable.",
        icon: <Box className="h-6 w-6 text-primary" />,
        delay: 0.3,
    },
    {
        title: "Products > Tutorials",
        description: "Building real-world, production-ready systems rather than isolated, simplistic examples.",
        icon: <Rocket className="h-6 w-6 text-primary" />,
        delay: 0.4,
    },
]

export function Philosophy() {
    return (
        <section id="philosophy" className="w-full py-24 bg-muted/40 text-center">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Engineering Philosophy</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            The four core principles that guide every architectural decision and line of code.
                        </p>
                    </div>
                </div>

                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-16">
                    {principles.map((p, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: p.delay }}
                        >
                            <Card className="h-full bg-background border-border/50 transition-colors hover:border-primary/50 text-left">
                                <CardHeader>
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                        {p.icon}
                                    </div>
                                    <CardTitle>{p.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">{p.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
