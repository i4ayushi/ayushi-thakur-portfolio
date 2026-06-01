"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Smooth spring animation for the outer circle (trailing effect)
  const springConfig = { damping: 25, stiffness: 200 }
  const outerX = useSpring(cursorX, springConfig)
  const outerY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Track hover state for interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.closest("[data-cursor-hover]")
      
      setIsHovering(isInteractive)
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mousemove", handleElementHover)
    document.body.addEventListener("mouseenter", handleMouseEnter)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mousemove", handleElementHover)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [cursorX, cursorY])

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null
  }

  return (
    <>
      {/* Hide default cursor globally */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
      
      {/* Inner dot - follows cursor directly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 20 },
          opacity: { duration: 0.2 },
        }}
      >
        <div 
          className={`w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
            isHovering 
              ? "bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/50" 
              : "bg-foreground"
          }`}
        />
      </motion.div>

      {/* Outer circle - follows with delay (trailing effect) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: outerX,
          y: outerY,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 200, damping: 15 },
          opacity: { duration: 0.2 },
        }}
      >
        <div 
          className={`w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 ${
            isHovering 
              ? "border-primary/80 bg-primary/10 shadow-lg shadow-primary/30" 
              : "border-foreground/30 bg-transparent"
          }`}
        />
      </motion.div>

      {/* Glow effect on hover */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          style={{
            x: outerX,
            y: outerY,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <div className="w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-xl" />
        </motion.div>
      )}
    </>
  )
}
