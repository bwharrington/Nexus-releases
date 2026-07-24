import { NavLink } from 'react-router-dom'
import './SiteHeader.css'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="site-header__brand" end>
          <img src={`${import.meta.env.BASE_URL}nexus.svg`} alt="" width={32} height={32} />
          <span>Nexus</span>
        </NavLink>
        <nav className="site-header__nav" aria-label="Primary">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/help">Help</NavLink>
        </nav>
      </div>
    </header>
  )
}
