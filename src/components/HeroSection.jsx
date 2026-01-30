import { motion, useScroll, useTransform } from "framer-motion"
import "./hero.css"


export default function HeroSection() {
  return (
    <section className="hero">

      <div className="pills">
        <span>2026</span>
        <span>3rd Edition</span>
      </div>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.7, ease: "easeOut" }}
      >
        PRABUDDHA
      </motion.h1>

      <p className="subtitle">
        BEYOND REALMS · THIS IS PRABUDDHA ’26
      </p>

      <motion.div
        className="robot"
        initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-lFNa5zVvW9smJcKzYrvpHZRy/"
          frameBorder="0"
        />
      </motion.div>

    </section>
  )
}
