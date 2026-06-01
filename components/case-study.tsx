"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Search, Layout, Layers, CheckCircle, Wrench, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const caseStudySteps = [
  {
    icon: Target,
    title: "Problem",
    description: "Identified user pain points through surveys and feedback analysis. Users struggled with complex navigation and unclear booking processes on existing travel platforms.",
    color: "from-red-500/20 to-orange-500/20",
    iconColor: "text-red-400",
  },
  {
    icon: Search,
    title: "Research",
    description: "Conducted competitive analysis, user interviews, and created user personas. Analyzed 5+ competitor platforms and interviewed 20+ potential users.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Layout,
    title: "Wireframes",
    description: "Created low-fidelity wireframes focusing on user flow optimization. Iterated through 3 major versions based on stakeholder feedback.",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Layers,
    title: "Design Process",
    description: "Developed high-fidelity mockups with a cohesive design system. Established typography, color palette, and component library for consistency.",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: CheckCircle,
    title: "Final Solution",
    description: "Delivered a streamlined booking experience with 40% faster task completion. Implemented intuitive navigation and clear visual hierarchy.",
    color: "from-primary/20 to-secondary/20",
    iconColor: "text-primary",
  },
]

const toolsUsed = [
  { name: "Figma", category: "Design" },
  { name: "Adobe XD", category: "Prototyping" },
  { name: "FigJam", category: "Collaboration" },
  { name: "Maze", category: "User Testing" },
  { name: "Notion", category: "Documentation" },
  { name: "Miro", category: "Brainstorming" },
]

export function CaseStudy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="case-study" className="py-20 md:py-32 relative bg-card/30">
      {/* Section gradient divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 max-w-6xl mx-auto">
            <span className="text-secondary text-sm font-mono">05.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              UI/UX Case Study
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>

          {/* Case Study Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border border-border/50 backdrop-blur-sm"
            >
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Travel Booking Experience Redesign
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A comprehensive UX case study focusing on improving the travel booking experience. 
                This project involved end-to-end design process from user research to final implementation, 
                resulting in a more intuitive and efficient booking flow.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full border border-primary/30">
                  UX Research
                </span>
                <span className="px-3 py-1 text-sm bg-secondary/20 text-secondary rounded-full border border-secondary/30">
                  UI Design
                </span>
                <span className="px-3 py-1 text-sm bg-accent/20 text-accent rounded-full border border-accent/30">
                  Prototyping
                </span>
              </div>
            </motion.div>
          </div>

          {/* Process Steps */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-xl font-semibold text-foreground mb-8 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
              Design Process
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudySteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="h-full p-6 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/30 backdrop-blur-sm transition-all duration-300">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <step.icon className={`h-6 w-6 ${step.iconColor}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools Used */}
          <div className="max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="p-6 rounded-2xl bg-card/40 border border-border/50 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">Tools Used</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {toolsUsed.map((tool) => (
                  <div
                    key={tool.name}
                    className="px-4 py-2 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <span className="text-sm font-medium text-foreground">{tool.name}</span>
                    <span className="text-xs text-muted-foreground ml-2">({tool.category})</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* View Full Case Study CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground px-8 rounded-full shadow-lg shadow-primary/25"
            >
              <a href="https://www.figma.com/design/q87GsBdgq10cCBpCjoVx4w" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Full Case Study on Figma
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
