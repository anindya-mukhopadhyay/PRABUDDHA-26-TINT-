import "./business.css"

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
    <div className="business">

      <h1 className="business-title">
        BUSINESS <span>ARENA</span>
      </h1>

      <div className="business-grid">
        {events.map((e, i) => (
          <div className="business-card" key={i}>
            <h2>{e.title}</h2>
            <p>{e.desc}</p>
            <button>ENTER</button>
          </div>
        ))}
      </div>

    </div>
  )
}
