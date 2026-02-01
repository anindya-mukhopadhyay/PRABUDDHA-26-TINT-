import "./hardware.css"

const events = [
  { code: "S-01", title: "Hackathon", desc: "48-hour national coding war" },
  { code: "S-02", title: "Web Dev Sprint", desc: "Build and deploy at speed" },
  { code: "S-03", title: "AI Arena", desc: "Machine learning battles" },
  { code: "S-04", title: "App Development", desc: "Android & iOS innovation" },
  { code: "S-05", title: "Cyber Security", desc: "CTF & ethical hacking" },
  { code: "S-06", title: "Data Science", desc: "Big data & analytics" }
]

export default function Software() {
  return (
    <div className="hardware">

      <div className="hardware-header">
        <h1>SOFTWARE</h1>
        <p>CODE · AI · DEVELOPMENT</p>
      </div>

      <div className="hardware-list">
        {events.map((e,i) => (
          <div className="hardware-item" key={i}>
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
