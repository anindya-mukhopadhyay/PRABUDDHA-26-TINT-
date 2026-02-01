import "./workshops.css"

const workshops = [
  {
    title: "AI & Machine Learning",
    desc: "Hands-on workshop on real-world AI systems",
    date: "09 March",
    price: "₹100"
  },
  {
    title: "Web Development Bootcamp",
    desc: "Full-stack web development in one day",
    date: "09 March",
    price: "₹100"
  },
  {
    title: "Cyber Security",
    desc: "Ethical hacking and CTF training",
    date: "10 March",
    price: "₹100"
  },
  {
    title: "Robotics & IoT",
    desc: "Build and control smart machines",
    date: "10 March",
    price: "₹100"
  }
]

export default function Workshops() {
  return (
    <div className="workshops">

      <h1 className="workshops-title">
        WORKSHOPS <span>’26</span>
      </h1>

      <p className="workshops-sub">
        Learn directly from industry experts at PRABUDDHA Fest.
      </p>

      <div className="workshop-grid">
        {workshops.map((w, i) => (
          <div className="workshop-card" key={i}>
            <div className="workshop-date">{w.date}</div>
            <h2>{w.title}</h2>
            <p>{w.desc}</p>
            <div className="workshop-footer">
              <span>{w.price}</span>
              <button>BOOK</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
