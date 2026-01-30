import "./competitions.css"

export default function Competitions() {
  return (
    <div className="competitions">

      {/* Background giant text */}
      <div className="bg-text">PRABUDDHA</div>

      {/* Header */}
      <div className="comp-header">
        <h1>
          COMPETITIONS <span>’26</span>
        </h1>
      </div>

      {/* Image Wall */}
      <div className="comp-grid">
        <img src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2" />
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" />
        <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d" />
        <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc" />
        <img src="https://images.unsplash.com/photo-1515165562835-c4c1b572a22d" />
      </div>

    </div>
  )
}
