import { motion } from "framer-motion"
import "./competitions.css"

export default function Competitions() {
  return (
    <div className="competitions">

      {/* HERO */}
      <section className="comp-section hero">
      <div className="bg-text">PRABUDDHA</div>

      <h1 className="hero-title">
        COMPETITIONS <span>’26</span>
      </h1>

      <div className="poster-row">
        <img src="https://697d3813c4feaabd2d115edc.imgix.net/SAVE_20210324_194657.webp" />
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" />
        <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d" />
        <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc" />
        <img src="https://697d3813c4feaabd2d115edc.imgix.net/pexels-photo-6424587.jpeg" />
      </div>
      </section>


      {/* CATEGORIES */}
      <motion.section
        className="comp-section"
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1>CATEGORIES</h1>

        <div className="category-card red">PERFORMING ARTS</div>
        <div className="category-card dark">CREATIVE ARTS</div>
        <div className="category-card red">QUIZ & LITERARY</div>
      </motion.section>

      {/* SPOTLIGHT */}
      <motion.section
        className="comp-section"
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1>SPOTLIGHT</h1>

        <div className="spot-grid">
          <div className="spot">Artist 1</div>
          <div className="spot">Artist 2</div>
          <div className="spot">Artist 3</div>
          <div className="spot">Artist 4</div>
        </div>
      </motion.section>

      {/* PASSES */}
      <motion.section
        className="comp-section"
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1>PASSES</h1>

        <div className="pass-grid">
          <div className="pass">Arcade ₹299</div>
          <div className="pass">Popcorn ₹399</div>
          <div className="pass">Battle Of Bands ₹799</div>
        </div>
      </motion.section>

    </div>
  )
}
