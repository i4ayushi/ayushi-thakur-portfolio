"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/ayushithakur",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/ayushithakur",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/ayushithakur",
    label: "Twitter",
  },
  {
    icon: Mail,
    href: "mailto:ayushi.thakur@email.com",
    label: "Email",
  },
]

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 relative">
      {/* Top gradient line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ayushi Thakur</p>
            <p className="text-sm text-muted-foreground">Front-End Developer & UI/UX Designer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.1 }}
                className="p-2 rounded-lg bg-gradient-to-br from-card/60 to-card/30 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <link.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> &copy; {new Date().getFullYear()}
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
