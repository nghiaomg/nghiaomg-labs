"use client"

import * as React from "react"
import { experience, EXPERIENCE_TEXT } from "../data"

export function ExperienceSection() {
    return (
        <section id="tech-stack" className="w-full py-32 px-6 max-w-7xl mx-auto bg-zinc-50 dark:bg-zinc-950 rounded-[40px] my-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-12">{EXPERIENCE_TEXT.experienceHeader}</h2>
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
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-12">{EXPERIENCE_TEXT.capabilitiesHeader}</h2>
                    <div className="flex flex-wrap gap-4">
                        {EXPERIENCE_TEXT.capabilitiesList.map((skill, i) => (
                            <span key={i} className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-full text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
