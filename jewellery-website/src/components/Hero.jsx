import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero banner">
      <div className="hero__bg" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1600&q=85"
          alt=""
          className="hero__bg-img"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container">
        <p className="hero__eyebrow">New Collection 2026</p>
        <h1 className="hero__title">
          Crafted to Last<br />
          <em>A Lifetime</em>
        </h1>
        <p className="hero__subtitle">
          Exquisite jewellery handcrafted with ethically sourced gemstones
          and precious metals — for the moments that matter most.
        </p>
        <div className="hero__actions">
          <Link to="/shop" className="btn btn-primary hero__btn">Explore Collection</Link>
          <Link to="/about" className="btn hero__btn hero__btn--ghost">Our Story</Link>
        </div>

        {/* Trust badges */}
        <div className="hero__badges">
          <div className="hero__badge">
            <span className="hero__badge-icon">✦</span>
            <span>Ethically Sourced</span>
          </div>
          <div className="hero__badge">
            <span className="hero__badge-icon">✦</span>
            <span>Lifetime Warranty</span>
          </div>
          <div className="hero__badge">
            <span className="hero__badge-icon">✦</span>
            <span>Free Shipping</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero__scroll-cue" aria-hidden="true">
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}
