"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Code2, 
  Palette, 
  Wrench, 
  Globe,
  FileCode,
  Layers,
  Figma,
  PenTool,
  GitBranch,
  Terminal,
  ShoppingCart,
  Database
} from "lucide-react"

// Icon mapping for skills
const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "HTML5": FileCode,
  "CSS3": Palette,
  "JavaScript": Code2,
  "React.js": Code2,
  "jQuery": Code2,
  "Wireframing": PenTool,
  "Prototyping": Layers,
  "Design Systems": Layers,
  "Figma": Figma,
  "Adobe XD": PenTool,
  "Photoshop": Palette,
  "Git": GitBranch,
  "GitHub": GitBranch,
  "VS Code": Terminal,
  "Docker": Database,
  "WordPress": Globe,
  "Shopify": ShoppingCart,
  "API Integration": Database,
  "SharePoint": Globe,
}

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "jQuery"],
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-500/10 to-purple-600/10",
    borderGradient: "hover:shadow-violet-500/25",
  },
  {
    title: "UI/UX",
    icon: Palette,
    skills: ["Wireframing", "Prototyping", "Design Systems", "Figma", "Adobe XD", "Photoshop"],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderGradient: "hover:shadow-blue-500/25",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Docker"],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    borderGradient: "hover:shadow-purple-500/25",
  },
  {
    title: "Other",
    icon: Globe,
    skills: ["WordPress", "Shopify", "API Integration", "SharePoint"],
    gradient: "from-indigo-500 to-violet-500",
    bgGradient: "from-indigo-500/10 to-violet-500/10",
    borderGradient: "hover:shadow-indigo-500/25",
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 md:py-32 relative bg-card/30">
      {/* Section gradient divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 max-w-4xl mx-auto">
            <span className="text-primary text-sm font-mono">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              Skills & Technologies
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {skillCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
                  whileHover={{ y: -5 }}
                  className={`group p-6 rounded-2xl bg-gradient-to-br ${category.bgGradient} border border-border/50 hover:border-primary/40 backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${category.borderGradient}`}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
                      <CategoryIcon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skillIcons[skill] || Code2
                      return (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          whileHover={{ 
                            scale: 1.08, 
                            y: -3,
                          }}
                          className="group/skill relative"
                        >
                          <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-background/60 backdrop-blur-sm text-foreground rounded-full border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/20 hover:text-primary">
                            <SkillIcon className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                            <span>{skill}</span>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
