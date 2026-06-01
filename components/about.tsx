"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Palette, Users, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive, high-performance web applications",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing interfaces",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working with product, design, and engineering teams",
  },
  {
    icon: Sparkles,
    title: "User-Centered",
    description: "Focusing on accessibility and user experience",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-primary text-sm font-mono">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              About Me
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a passionate <span className="text-primary font-medium">Front-End Developer</span> and{" "}
                <span className="text-primary font-medium">UI/UX Designer</span> with over 3.5 years of experience
                in building responsive, high-performance web applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans across <span className="text-foreground">HTML5, CSS3, JavaScript (ES6), React.js,</span> and{" "}
                <span className="text-foreground">WordPress</span>. I specialize in UI/UX design, including wireframing,
                prototyping, and creating design systems that prioritize user experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I thrive in collaborative environments, working closely with product managers, designers, and
                engineering teams to deliver digital experiences that are both beautiful and functional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="group p-4 rounded-xl bg-gradient-to-br from-card/60 to-card/30 border border-border/50 hover:border-primary/50 backdrop-blur-sm transition-all duration-300"
                >
                  <item.icon className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-foreground font-semibold mb-1 text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
