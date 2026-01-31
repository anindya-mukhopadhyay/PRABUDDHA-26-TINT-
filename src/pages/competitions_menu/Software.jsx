import "./software.css"

const events = [
  { title: "Hackathon", desc: "48-hour national coding challenge" },
  { title: "Web Dev Sprint", desc: "Build and deploy in record time" },
  { title: "AI Arena", desc: "Machine learning & AI battles" },
  { title: "App Development", desc: "Android & iOS innovation" },
  { title: "Cyber Security", desc: "CTF and ethical hacking" },
  { title: "Data Science", desc: "Big data, ML & analytics" }
]

export default function Software() {
  return (
    <div className="software">

      <h1 className="software-title">
        SOFTWARE <span>EVENTS</span>
      </h1>

      <div className="software-grid">
        {events.map((e, i) => (
          <div className="software-card" key={i}>
            <h2>{e.title}</h2>
            <p>{e.desc}</p>
            <button>REGISTER</button>
          </div>
        ))}
      </div>

    </div>
  )
}
