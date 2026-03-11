"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CALL_TO_ACTION_TEXT } from "../data"

export function CallToActionSection() {
    return (
        <section className="w-full py-40 flex justify-center items-center bg-zinc-950 text-white mt-20">
            <Link href="#contact" className="group">
                <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter flex items-center gap-4 md:gap-8 transition-transform group-hover:scale-105">
                    {CALL_TO_ACTION_TEXT.title} <ArrowRight className="w-16 h-16 md:w-32 md:h-32 group-hover:translate-x-8 transition-transform" />
                </h2>
            </Link>
        </section>
    )
}
