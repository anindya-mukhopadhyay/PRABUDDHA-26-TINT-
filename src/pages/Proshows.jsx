import "./proshows.css"

const artists = [
  {
    name: "DIVINE",
    desc: "India’s biggest hip-hop artist",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  },
  {
    name: "RITVIZ",
    desc: "Electronic pop sensation",
    img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc"
  },
  {
    name: "ARMAAN MALIK",
    desc: "Global pop star",
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
  },
  {
    name: "DJ SNAKE",
    desc: "International EDM icon",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  }
]

export default function Proshows() {
  return (
    <div className="proshows">

      <div className="proshows-head">
        <h1>PROSHOWS</h1>
        <p>THE NIGHT WHERE MUSIC BECOMES HISTORY</p>
      </div>

      <div className="lineup">
        {artists.map((a, i) => (
          <div className="artist-row" key={i}>
            <div className="artist-text">
              <h2>{a.name}</h2>
              <span>{a.desc}</span>
            </div>

            <div className="artist-img">
              <img src={a.img} />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
