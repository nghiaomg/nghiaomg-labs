"use client"

import * as React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ArchiveHeader, ArchiveList, useScrollSpy } from "@/features/projects-archive"

export default function ProjectsPage() {
    const activeIdx = useScrollSpy(".project-section")

    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
            <Navbar />

            <main className="flex-1 w-full pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-20 items-start">
                    <ArchiveHeader activeIdx={activeIdx} />
                    <ArchiveList />
                </div>
            </main>

            <Footer />
        </div>
    )
}