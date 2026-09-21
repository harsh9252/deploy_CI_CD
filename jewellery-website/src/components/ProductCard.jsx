import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { id, name, category, price, originalPrice, image, badge } = product;
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : null;

  return (
    <article className="product-card" aria-label={name}>
      <Link to={`/shop?id=${id}`} className="product-card__image-wrap">
        <img
          src={image}
          alt={name}
          className="product-card__image"
          loading="lazy"
        />
        {badge && (
          <span className={`product-card__badge product-card__badge--${badge.toLowerCase()}`}>
            {badge}
          </span>
        )}
        <div className="product-card__hover-overlay" aria-hidden="true">
          <span className="product-card__quick-view">Quick View</span>
        </div>
      </Link>

      <div className="product-card__body">
        <p className="product-card__category">{category}</p>
        <h3 className="product-card__name">
          <Link to={`/shop?id=${id}`}>{name}</Link>
        </h3>
        <div className="product-card__pricing">
          <span className="product-card__price">₹{price.toLocaleString('en-IN')}</span>
          {originalPrice && (
            <>
              <span className="product-card__original">₹{originalPrice.toLocaleString('en-IN')}</span>
              <span className="product-card__discount">-{discount}%</span>
            </>
          )}
        </div>
        <Link to="/shop" className="product-card__cta btn btn-dark">
          Add to Cart
        </Link>
      </div>
    </article>
  );
}
