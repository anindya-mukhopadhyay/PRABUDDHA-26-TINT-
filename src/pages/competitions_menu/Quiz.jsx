import "./quiz.css"

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
    <div className="quiz">

      <h1 className="quiz-title">
        QUIZ <span>ARENA</span>
      </h1>

      <div className="quiz-grid">
        {quizzes.map((q, i) => (
          <div className="quiz-card" key={i}>
            <h2>{q.title}</h2>
            <p>{q.desc}</p>
            <button>PLAY</button>
          </div>
        ))}
      </div>

    </div>
  )
}
