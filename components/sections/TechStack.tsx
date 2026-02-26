"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { skills } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TechStack() {
    return (
        <section id="tech-stack" className="w-full py-24 bg-muted/40">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tech Stack</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                            Technologies chosen for performance, scalability, and maintainability.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-background/50 backdrop-blur border-border/50">
                                <CardHeader>
                                    <CardTitle className="text-xl text-center text-primary">
                                        {skillGroup.category}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {skillGroup.items.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-center justify-center p-3 rounded-md bg-muted/50 font-medium text-sm md:text-base"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
