import { Link } from 'react-router-dom'
import guides from '../guides/guides.json'

export default function Guides() {
  return (
    <div className="container">
      <section className="hero">
        <p className="label">▶ GUÍAS</p>
        <h1>Todo lo que<br /><span>he aprendido</span></h1>
        <p>Guías y recursos sobre gamedev: diseño, código, herramientas y todo lo que voy descubriendo.</p>
      </section>

      <section className="section">
        <p className="section-title">// TODAS LAS GUÍAS</p>
        <div className="guides-grid">
          {guides.map(g => (
            <Link key={g.slug} className="guide-card" to={`/guides/${g.slug}`}>
              <span className="guide-tag">{g.tag}</span>
              <h3>{g.title}</h3>
              <span>{g.readTime}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}