import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { CaseStudy } from "@/components/case-study"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Background gradient overlays - Purple/Blue theme */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/8 via-secondary/3 to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/8 via-accent/3 to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/3 via-transparent to-transparent pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,_theme(colors.border/0.03)_1px,_transparent_1px),_linear-gradient(to_bottom,_theme(colors.border/0.03)_1px,_transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CaseStudy />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
