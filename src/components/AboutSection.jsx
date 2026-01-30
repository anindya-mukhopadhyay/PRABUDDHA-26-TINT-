import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        padding: "120px",
      }}
    >
      <h1 style={{ fontSize: "80px" }}>What is PRABUDDHA?</h1>
      <p style={{ maxWidth: "700px", fontSize: "20px", marginTop: "30px" }}>
        PRABUDDHA is the national-level technical and cultural festival bringing
        innovation, creativity and competition together.
      </p>
    </motion.section>
  )
}
