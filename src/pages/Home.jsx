import { Link } from 'react-router-dom'
import guides from '../guides/guides.json'

export default function Home() {
  const recent = guides.slice(0, 3)
  return (
    <>
      <div className="container">
        <section className="hero">
          <p className="label">▶ GAMEDEV DEVLOG</p>
          <h1>Hola,<br />soy <span>Ale</span></h1>
          <p>Construyendo un videojuego desde cero y documentando cada paso. Guías, errores y lo que voy aprendiendo por el camino.</p>
          <Link className="btn" to="/guides">► ver guías</Link>
        </section>

        <section className="section">
          <p className="section-title">// GUÍAS RECIENTES</p>
          <div className="guides-grid">
            {recent.map(g => (
              <Link key={g.slug} className="guide-card" to={`/guides/${g.slug}`}>
                <span className="guide-tag">{g.tag}</span>
                <h3>{g.title}</h3>
                <span>{g.readTime}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}