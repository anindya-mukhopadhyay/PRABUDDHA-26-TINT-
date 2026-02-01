import "./universal.css"

const quizzes = [
  { title: "Tech Quiz", desc: "AI, coding & modern tech" },
  { title: "General Quiz", desc: "Everything under the sun" },
  { title: "Business Quiz", desc: "Startups, markets & finance" },
  { title: "Pop Culture Quiz", desc: "Movies, music & trends" },
  { title: "Sports Quiz", desc: "Cricket, football & esports" },
  { title: "Speed Quiz", desc: "Rapid fire round" }
]

export default function Quiz() {
  return (
    <div className="universal">

      {/* Header */}
      <div className="universal-header">
        <h1>QUIZ</h1>
        <p>ARENA</p>
      </div>

      {/* Grid */}
      <div className="universal-list">
        {quizzes.map((q, i) => (
          <div className="universal-item" key={i}>
            <span className="code">QZ {i + 1}</span>
            <h2>{q.title}</h2>
            <p>{q.desc}</p>
            <button>PLAY</button>
          </div>
        ))}
      </div>

    </div>
  )
}
