"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics & Communication Engineering",
    institution: "Jaipur Engineering College",
    location: "Jaipur, India",
    year: "2020",
    description: "Studied electronics fundamentals, communication systems, and gained strong foundation in programming and problem-solving.",
  },
  {
    degree: "Diploma",
    field: "Electronics & Communication Engineering",
    institution: "Jayoti Vidyapeeth Women&apos;s University",
    location: "Jaipur, India",
    year: "2016",
    description: "Developed practical skills in electronics and communication technologies with hands-on project experience.",
  },
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 max-w-4xl mx-auto">
            <span className="text-primary text-sm font-mono">06.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              Education
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-card/60 to-card/30 border border-border/50 hover:border-primary/30 backdrop-blur-sm transition-all duration-300 shadow-lg shadow-black/5 hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-2">{edu.field}</p>
                      
                      <p className="text-foreground font-medium mb-2">{edu.institution}</p>
                      
                      <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {edu.year}
                        </span>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
