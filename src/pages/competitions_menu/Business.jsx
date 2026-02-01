import "./universal.css"

const events = [
  { title: "Startup Pitch", desc: "Pitch your idea to real investors" },
  { title: "Marketing Wars", desc: "Brand & strategy battle" },
  { title: "Stock Market League", desc: "Virtual trading competition" },
  { title: "Case Study", desc: "Solve real business problems" },
  { title: "Finance Frenzy", desc: "Money, valuation & economics" },
  { title: "Entrepreneur Quiz", desc: "Startup knowledge challenge" }
]

export default function Business() {
  return (
    <div className="universal">

      {/* Header */}
      <div className="universal-header">
        <h1>BUSINESS</h1>
        <p>ARENA</p>
      </div>

      {/* Grid */}
      <div className="universal-list">
        {events.map((e, i) => (
          <div className="universal-item" key={i}>
            <span className="code">BS {i + 1}</span>
            <h2>{e.title}</h2>
            <p>{e.desc}</p>
            <button>ENTER</button>
          </div>
        ))}
      </div>

    </div>
  )
}
