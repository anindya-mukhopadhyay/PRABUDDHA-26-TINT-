import "./universal.css"

const events = [
  { title: "Robotics", code: "H-01", desc: "Autonomous battle bots" },
  { title: "IoT Challenge", code: "H-02", desc: "Smart automation systems" },
  { title: "Circuit Design", code: "H-03", desc: "PCB & electronics build" },
  { title: "Drone Racing", code: "H-04", desc: "High speed FPV race" },
  { title: "Line Follower", code: "H-05", desc: "Precision robotics" },
  { title: "RC War", code: "H-06", desc: "Remote controlled combat" }
]

export default function Hardware() {
  return (
    <div className="universal">

      {/* Header */}
      <div className="universal-header">
        <h1>HARDWARE</h1>
        <p>ENGINEERING · MACHINES · MECHANICS</p>
      </div>

      {/* Grid */}
      <div className="universal-list">
        {events.map((e, i) => (
          <div className="universal-item" key={i}>
            <span className="code">{e.code}</span>
            <h2>{e.title}</h2>
            <p>{e.desc}</p>
            <button>ENTER</button>
          </div>
        ))}
      </div>

    </div>
  )
}
