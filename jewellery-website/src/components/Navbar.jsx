import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <header className={`navbar ${scrolled || !isHome ? 'navbar--solid' : 'navbar--transparent'} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="Lumière Jewels – Home">
          <span className="navbar__logo-icon">✦</span>
          <span className="navbar__logo-text">Lumière<em>Jewels</em></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>Shop</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>Contact</NavLink>
        </nav>

        {/* Actions */}
        <div className="navbar__actions">
          <Link to="/shop" className="btn btn-outline navbar__cta" aria-label="Browse our shop">Shop Now</Link>
          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <nav className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`} aria-label="Mobile navigation">
        <NavLink to="/" end className="navbar__mobile-link">Home</NavLink>
        <NavLink to="/shop" className="navbar__mobile-link">Shop</NavLink>
        <NavLink to="/about" className="navbar__mobile-link">About</NavLink>
        <NavLink to="/contact" className="navbar__mobile-link">Contact</NavLink>
      </nav>
    </header>
  );
}
