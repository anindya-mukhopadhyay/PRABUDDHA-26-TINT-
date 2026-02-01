import "./proshows.css"

const artists = [
  {
    name: "DIVINE",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  },
  {
    name: "RITVIZ",
    img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc"
  },
  {
    name: "ARMAAN MALIK",
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
  },
  {
    name: "DJ SNAKE",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  
]

export default function Proshows() {
  return (
    <div className="proshows">

      {/* Background text */}
      <div className="proshows-bg">PROSHOWS</div>

      {/* Header */}
      <div className="proshows-header">
        <h1>
          PROSHOWS <span>’26</span>
        </h1>
        <p>LIVE · LOUD · LEGENDARY</p>
      </div>

      {/* Posters */}
      <div className="proshows-posters">
        {artists.map((a, i) => (
          <div className="poster" key={i}>
            <img src={a.img} />
            <h2>{a.name}</h2>
          </div>
        ))}
      </div>

    </div>
  )
}
