import "./sponsors.css"

const sponsors = {
  title: [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" }
  ],
  coTitle: [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" }
  ],
  poweredBy: [
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg" }
  ],
  tech: [
    { name: "NVIDIA", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" }
  ],
  food: [
    { name: "Red Bull", logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Red_Bull.svg" },
    { name: "Domino’s", logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg" }
  ],
  medical: [
    { name: "Apollo", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Apollo_Hospitals_Logo.svg" }
  ]
}

export default function Sponsors() {
  return (
    <div className="sponsors">

      {/* TITLE SPONSOR */}
      <section className="sponsor-block hero">
        <p className="sponsor-label">TITLE SPONSOR</p>
        {sponsors.title.map((s, i) => (
          <img key={i} src={s.logo} alt={s.name} className="sponsor-logo huge"/>
        ))}
      </section>

      {/* CO TITLE */}
      <section className="sponsor-block">
        <p className="sponsor-label">CO-TITLE SPONSOR</p>
        <div className="sponsor-row">
          {sponsors.coTitle.map((s,i)=>(
            <img key={i} src={s.logo} className="sponsor-logo large"/>
          ))}
        </div>
      </section>

      {/* POWERED BY */}
      <section className="sponsor-block">
        <p className="sponsor-label">POWERED BY</p>
        <div className="sponsor-row">
          {sponsors.poweredBy.map((s,i)=>(
            <img key={i} src={s.logo} className="sponsor-logo medium"/>
          ))}
        </div>
      </section>

      {/* PARTNER GRIDS */}
      <section className="sponsor-block">
        <p className="sponsor-label">TECH PARTNERS</p>
        <div className="sponsor-grid">
          {sponsors.tech.map((s,i)=>(
            <img key={i} src={s.logo} className="sponsor-logo small"/>
          ))}
        </div>
      </section>

      <section className="sponsor-block">
        <p className="sponsor-label">FOOD & BEVERAGE</p>
        <div className="sponsor-grid">
          {sponsors.food.map((s,i)=>(
            <img key={i} src={s.logo} className="sponsor-logo small"/>
          ))}
        </div>
      </section>

      <section className="sponsor-block">
        <p className="sponsor-label">MEDICAL PARTNER</p>
        <div className="sponsor-grid">
          {sponsors.medical.map((s,i)=>(
            <img key={i} src={s.logo} className="sponsor-logo small"/>
          ))}
        </div>
      </section>

    </div>
  )
}
