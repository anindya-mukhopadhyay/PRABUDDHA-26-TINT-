import "./universal.css"

const games = [
  { title: "BGMI", desc: "Battle Royale Championship" },
  { title: "Valorant", desc: "5v5 Tactical Shooter" },
  { title: "FIFA", desc: "Football Esports League" },
  { title: "Call of Duty", desc: "FPS Warzone" },
  { title: "Free Fire", desc: "Survival Showdown" },
  { title: "Tekken", desc: "Arcade Fighting Tournament" }
]

export default function Games() {
  return (
    <div className="universal">

      {/* Header */}
      <div className="universal-header">
        <h1>GAMES</h1>
        <p>ARENA</p>
      </div>

      {/* Grid */}
      <div className="universal-list">
        {games.map((g, i) => (
          <div className="universal-item" key={i}>
            <span className="code">GAME {i + 1}</span>
            <h2>{g.title}</h2>
            <p>{g.desc}</p>
            <button>PLAY</button>
          </div>
        ))}
      </div>

    </div>
  )
}
