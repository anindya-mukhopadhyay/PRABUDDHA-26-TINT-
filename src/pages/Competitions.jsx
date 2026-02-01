import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import "./competitions.css"

export default function Competitions() {
  const navigate = useNavigate()
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
        <img src="https://697d3813c4feaabd2d115edc.imgix.net/coding-quiz.jpg" />
        <img src="https://697d3813c4feaabd2d115edc.imgix.net/pexels-vanessa-loring-7868836.jpg" />
        <img src="https://697d3813c4feaabd2d115edc.imgix.net/pexels-a-darmel-8133989.jpg" />
        <img src="https://697d3813c4feaabd2d115edc.imgix.net/pexels-mizunokozuki-12899140.jpg" />
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

        <div className="category-card red" onClick={() => navigate("/hardware")}>
          HARDWARE
        </div>

        <div className="category-card dark" onClick={() => navigate("/software")}>
          SOFTWARE
        </div>

        <div className="category-card red" onClick={() => navigate("/quiz")}>
          QUIZ
        </div>

        <div className="category-card dark" onClick={() => navigate("/business")}>
          BUSINESS
        </div>
        <div className="category-card red" onClick={() => navigate("/games")}>
          GAMES
        </div>
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
