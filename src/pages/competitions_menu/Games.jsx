import "./games.css"

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
    <div className="games">

      <h1 className="games-title">
        GAMES <span>ARENA</span>
      </h1>

      <div className="games-grid">
        {games.map((g, i) => (
          <div className="game-card" key={i}>
            <h2>{g.title}</h2>
            <p>{g.desc}</p>
            <button>PLAY</button>
          </div>
        ))}
      </div>

    </div>
  )
}
