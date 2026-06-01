"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Calendar, ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "Bestway Tours & Safaris",
    role: "Front-End Developer",
    period: "Nov 2025 – March 2026",
    responsibilities: [
      "Developing and maintaining responsive travel booking websites",
      "Implementing modern UI components with React.js and Tailwind CSS",
      "Optimizing website performance and SEO for better user engagement",
      "Collaborating with backend team for API integration",
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "API Integration"],
  },
  {
    company: "EaseMyTrip",
    role: "UI/UX Developer",
    period: "Apr 2024 – Aug 2025",
    responsibilities: [
      "Designed and developed Explore Bharat travel platform",
      "Created responsive interfaces for Hotels, Cabs, and Activities modules",
      "Built EMT Arrivals feature for real-time flight tracking",
      "Worked on design systems and component libraries",
    ],
    technologies: ["React.js", "CSS3", "JavaScript", "Figma", "Adobe XD"],
  },
  {
    company: "Nihon Cyber Defence",
    role: "Front-End Developer",
    period: "May 2023 – Mar 2024",
    responsibilities: [
      "Developed cybersecurity-focused corporate website",
      "Implemented secure and accessible UI components",
      "Created responsive layouts for multiple device sizes",
      "Collaborated with security team on UX best practices",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "WordPress"],
  },
  {
    company: "Intecons Software Lab",
    role: "Web Developer",
    period: "Nov 2021 – Feb 2023",
    responsibilities: [
      "Built corporate websites and UI redesigns for clients",
      "Developed custom WordPress themes and plugins",
      "Implemented responsive designs using modern CSS techniques",
      "Worked on SharePoint integrations and customizations",
    ],
    technologies: ["WordPress", "HTML5", "CSS3", "JavaScript", "SharePoint"],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 max-w-4xl mx-auto">
            <span className="text-primary text-sm font-mono">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              Work Experience
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent -translate-x-1/2 hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative mb-8 md:mb-12 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2" : "md:pl-8 md:ml-auto md:w-1/2"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-6 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-y-1/2 md:left-auto md:right-0 translate-x-1/2" 
                  style={{ [index % 2 === 0 ? 'right' : 'left']: '-8px' }}
                />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 backdrop-blur-sm transition-all duration-300 group"
                >
                  <div className={`flex items-start gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div className={index % 2 === 0 ? "md:text-right" : ""}>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>

                  <div className={`flex items-center gap-2 mb-4 text-muted-foreground text-sm ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>

                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className={`text-primary mt-1.5 ${index % 2 === 0 ? "md:order-2" : ""}`}>▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
