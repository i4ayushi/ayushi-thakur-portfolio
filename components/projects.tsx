"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Figma } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Travel Booking Website",
    company: "Bestway Tours & Safaris",
    description: "A comprehensive travel booking platform featuring safari tours, destination guides, and seamless booking experience with modern UI/UX.",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "API Integration"],
    liveUrl: "https://www.bestway2india.com/",
    figmaUrl: null,
    image: "/images/project-travel.jpg",
  },
  {
    title: "Explore Bharat",
    company: "EaseMyTrip",
    description: "A dedicated platform for exploring Indian travel destinations with curated packages, local experiences, and cultural insights.",
    techStack: ["React.js", "CSS3", "JavaScript", "REST APIs"],
    liveUrl: "https://www.explorebharat.com/",
    figmaUrl: null,
    image: "/images/project-explore.jpg",
  },
  {
    title: "EMT Arrivals",
    company: "EaseMyTrip",
    description: "Real-time flight tracking application with arrival information, gate updates, and delay notifications for travelers.",
    techStack: ["React.js", "WebSocket", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://emtarrivals.com/",
    figmaUrl: null,
    image: "/images/project-flights.jpg",
  },
  {
    title: "EaseMyTrip Hotels",
    company: "EaseMyTrip",
    description: "Hotel booking module with seamless search, booking, and payment integration for thousands of properties worldwide.",
    techStack: ["React.js", "Redux", "CSS3", "Payment Gateway"],
    liveUrl: "https://www.easemytrip.com/hotels/",
    figmaUrl: null,
    image: "/images/project-hotels.jpg",
  },
  {
    title: "EaseMyTrip Cabs",
    company: "EaseMyTrip",
    description: "Cab rental service with real-time booking, driver tracking, and multiple vehicle options for city and outstation travel.",
    techStack: ["React.js", "JavaScript", "CSS3", "REST APIs"],
    liveUrl: "https://www.easemytrip.com/cabs/",
    figmaUrl: null,
    image: "/images/project-cabs.jpg",
  },
  {
    title: "EaseMyTrip Activities",
    company: "EaseMyTrip",
    description: "Discover and book local activities, tours, and experiences at destinations worldwide with curated recommendations.",
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "API Integration"],
    liveUrl: "https://www.easemytrip.com/activities/",
    figmaUrl: null,
    image: "/images/project-activities.jpg",
  },
  {
    title: "Cybersecurity Website",
    company: "Nihon Cyber Defence",
    description: "Corporate website for a cybersecurity firm featuring services, case studies, and threat intelligence resources.",
    techStack: ["WordPress", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://nihoncyberdefence.co.uk/",
    figmaUrl: "https://www.figma.com/design/DQxVdxcuVWK4Wd99777hxZ",
    image: "/images/project-cyber.jpg",
  },
  {
    title: "UI/UX Design Project",
    company: "Personal Project",
    description: "Comprehensive UI/UX design project showcasing user research, wireframing, prototyping, and final design implementation.",
    techStack: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
    liveUrl: null,
    figmaUrl: "https://www.figma.com/design/q87GsBdgq10cCBpCjoVx4w",
    image: "/images/project-uiux.jpg",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Section gradient divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 max-w-6xl mx-auto">
            <span className="text-primary text-sm font-mono">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              Featured Projects
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="h-full p-5 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/50 backdrop-blur-sm transition-all duration-300 flex flex-col shadow-lg shadow-black/5 hover:shadow-primary/10">
                  {/* Project Image */}
                  <div className="relative h-40 rounded-xl bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 mb-4 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="text-xs font-medium text-foreground/90 bg-background/50 px-3 py-1 rounded-full backdrop-blur-sm">View Project</span>
                    </div>
                  </div>

                  {/* Company Tag */}
                  <span className="text-xs bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold mb-2">
                    {project.company}
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded-full">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground text-xs h-8"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                          Live Site
                        </a>
                      </Button>
                    )}
                    {project.figmaUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className={`border-primary/50 text-foreground hover:bg-primary/10 text-xs h-8 ${project.liveUrl ? '' : 'flex-1'}`}
                      >
                        <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                          <Figma className="h-3.5 w-3.5 mr-1.5" />
                          Figma
                        </a>
                      </Button>
                    )}
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
