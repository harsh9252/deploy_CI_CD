import { Link } from 'react-router-dom';
import { featuredProducts, testimonials } from '../data/products';
import ProductCard from './ProductCard';
import './FeaturedCollections.css';

// Category showcase tiles
const collections = [
  {
    id: 'rings',
    label: 'Rings',
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&q=80',
    count: 24,
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    count: 18,
  },
  {
    id: 'earrings',
    label: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    count: 30,
  },
  {
    id: 'bracelets',
    label: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
    count: 15,
  },
];

function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'star star--filled' : 'star'} aria-hidden="true">★</span>
      ))}
    </div>
  );
}

export default function FeaturedCollections() {
  return (
    <>
      {/* ── Shop by Category ── */}
      <section className="categories section" aria-labelledby="cat-heading">
        <div className="container">
          <div className="divider"><div className="divider-diamond" /></div>
          <h2 className="section-title" id="cat-heading">Shop by Category</h2>
          <p className="section-subtitle">Discover pieces for every occasion</p>

          <div className="categories__grid">
            {collections.map(col => (
              <Link
                key={col.id}
                to={`/shop?category=${col.id}`}
                className="category-tile"
                aria-label={`Browse ${col.label}`}
              >
                <div className="category-tile__img-wrap">
                  <img src={col.image} alt={col.label} loading="lazy" />
                  <div className="category-tile__overlay" aria-hidden="true" />
                </div>
                <div className="category-tile__label">
                  <span className="category-tile__name">{col.label}</span>
                  <span className="category-tile__count">{col.count} pieces</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="featured section" aria-labelledby="feat-heading">
        <div className="container">
          <div className="divider"><div className="divider-diamond" /></div>
          <h2 className="section-title" id="feat-heading">Featured Pieces</h2>
          <p className="section-subtitle">Handpicked for their timeless beauty</p>

          <div className="featured__grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="featured__footer">
            <Link to="/shop" className="btn btn-outline">View All Jewellery</Link>
          </div>
        </div>
      </section>

      {/* ── Brand Promise strip ── */}
      <section className="promise" aria-label="Brand promise">
        <div className="container promise__grid">
          <div className="promise__item">
            <div className="promise__icon" aria-hidden="true">💎</div>
            <h3 className="promise__title">Certified Gems</h3>
            <p className="promise__text">Every stone is certified by independent gemological labs for quality and ethical sourcing.</p>
          </div>
          <div className="promise__item">
            <div className="promise__icon" aria-hidden="true">🔨</div>
            <h3 className="promise__title">Master Craftsmanship</h3>
            <p className="promise__text">Each piece is hand-finished by artisans with over two decades of experience.</p>
          </div>
          <div className="promise__item">
            <div className="promise__icon" aria-hidden="true">🚚</div>
            <h3 className="promise__title">Free Insured Shipping</h3>
            <p className="promise__text">Complimentary shipping and full insurance on every order across India.</p>
          </div>
          <div className="promise__item">
            <div className="promise__icon" aria-hidden="true">🔄</div>
            <h3 className="promise__title">30-Day Returns</h3>
            <p className="promise__text">Not in love? Return within 30 days for a full refund — no questions asked.</p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="testimonials section" aria-labelledby="test-heading">
        <div className="container">
          <div className="divider"><div className="divider-diamond" /></div>
          <h2 className="section-title" id="test-heading">What Our Customers Say</h2>
          <p className="section-subtitle">Stories from the people who wear our jewellery</p>

          <div className="testimonials__grid">
            {testimonials.map(t => (
              <blockquote key={t.id} className="testimonial-card">
                <StarRating rating={t.rating} />
                <p className="testimonial-card__text">"{t.text}"</p>
                <footer className="testimonial-card__footer">
                  <span className="testimonial-card__name">{t.name}</span>
                  <span className="testimonial-card__location">{t.location}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
