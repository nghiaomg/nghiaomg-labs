import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Philosophy } from "@/components/sections/Philosophy"
import { Projects } from "@/components/sections/Projects"
import { TechStack } from "@/components/sections/TechStack"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background relative selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center">
        <Hero />
        <Philosophy />
        <Projects />
        <TechStack />
      </main>
      <Footer />
    </div>
  )
}
