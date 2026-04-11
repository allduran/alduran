import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="logo">ALE<span>DURÁN</span></NavLink>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>inicio</NavLink>
        <NavLink to="/guides" className={({ isActive }) => isActive ? 'active' : ''}>guías</NavLink>
        <a href="https://youtube.com/@al_duran" target="_blank" rel="noreferrer">youtube</a>
      </div>
    </nav>
  )
}