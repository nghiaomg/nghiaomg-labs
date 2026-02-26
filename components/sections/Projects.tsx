"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { projects } from "@/lib/data"

export function Projects() {
    return (
        <section id="projects" className="w-full py-24">
            <div className="container px-4 md:px-6 max-w-screen-2xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Real-world systems prioritizing clean architecture and scalability over quick hacks.
                        </p>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => {
                        const Icon = project.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="h-full flex"
                            >
                                <Card className="flex flex-col h-full w-full bg-card overflow-hidden hover:border-primary/50 transition-colors group">
                                    <CardHeader className="pb-4">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <div className="flex gap-2">
                                                {project.githubUrl !== "#" && (
                                                    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                                                        <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                                            <Github className="h-4 w-4" />
                                                        </a>
                                                    </Button>
                                                )}
                                                {project.liveUrl !== "#" && (
                                                    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                                                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                                            <ExternalLink className="h-4 w-4" />
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                        <CardTitle className="text-xl">{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <CardDescription className="text-sm md:text-base text-muted-foreground/90">
                                            {project.description}
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter className="pt-4 flex flex-wrap gap-2 border-t bg-muted/20">
                                        {project.techStack.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="font-medium">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
