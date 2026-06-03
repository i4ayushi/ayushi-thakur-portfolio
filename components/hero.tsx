"use client"

import { motion } from "framer-motion"
import { MapPin, ArrowDown, Download, FolderOpen, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Purple/Blue gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-secondary/15 to-accent/15 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-accent/10 to-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full">
                {/* Gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                    {/* Profile placeholder with gradient */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center">
                      <img src="/profile.jpg" alt="Ayushi Thakur" className="w-full h-full object-cover rounded-full"/>
                    </div>
                  </div>
                </div>
                {/* Floating decoration */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-r from-secondary to-accent"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="text-center lg:text-left flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-4"
              >
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Gurugram, India</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span className="text-foreground">Ayushi </span>
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Thakur
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl font-medium mb-4"
              >
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Front-End Developer
                </span>
                <span className="text-muted-foreground"> | </span>
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  UI/UX Designer
                </span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
              >
                Crafting user-friendly and visually appealing digital experiences with 3.5+ years of expertise
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground px-8 rounded-full group transition-all duration-300 shadow-lg shadow-primary/25"
                >
                  <a href="#projects">
                    <FolderOpen className="mr-2 h-5 w-5 group-hover:rotate-6 transition-transform" />
                    View Projects
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 rounded-full group transition-all duration-300"
                >
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
