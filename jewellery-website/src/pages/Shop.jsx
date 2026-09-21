import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const SORT_OPTIONS = [
  { value: 'default', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A–Z' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get('category') || 'all'
  );
  const [sort, setSort] = useState('default');
  const [search, setSearch] = useState('');

  // Sync category from URL params
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory !== 'all') {
      list = list.filter(p => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      );
    }

    switch (sort) {
      case 'price-asc':  return list.sort((a, b) => a.price - b.price);
      case 'price-desc': return list.sort((a, b) => b.price - a.price);
      case 'name-asc':   return list.sort((a, b) => a.name.localeCompare(b.name));
      default:           return list;
    }
  }, [activeCategory, sort, search]);

  return (
    <main className="page-wrapper shop-page">
      {/* Page Header */}
      <div className="shop-hero" role="banner">
        <div className="shop-hero__overlay" aria-hidden="true" />
        <div className="container shop-hero__content">
          <p className="shop-hero__eyebrow">Lumière Jewels</p>
          <h1 className="shop-hero__title">Our Collection</h1>
          <p className="shop-hero__sub">
            {products.length} exquisite pieces, each with a story to tell
          </p>
        </div>
      </div>

      <div className="container shop-body">
        {/* Toolbar */}
        <div className="shop-toolbar">
          {/* Search */}
          <div className="shop-search">
            <svg className="shop-search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              placeholder="Search jewellery…"
              className="shop-search__input"
              value={search}
              onChange={e => setSearch(e.target.value)}
              aria-label="Search products"
            />
          </div>

          {/* Sort */}
          <div className="shop-sort">
            <label htmlFor="sort-select" className="shop-sort__label">Sort by</label>
            <select
              id="sort-select"
              className="shop-sort__select"
              value={sort}
              onChange={e => setSort(e.target.value)}
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category filters */}
        <div className="shop-filters" role="group" aria-label="Filter by category">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'filter-btn--active' : ''}`}
              onClick={() => handleCategoryChange(cat.id)}
              aria-pressed={activeCategory === cat.id}
            >
              {cat.label}
              <span className="filter-btn__count">
                {cat.id === 'all'
                  ? products.length
                  : products.filter(p => p.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="shop-grid" aria-live="polite" aria-label="Product results">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="shop-empty" aria-live="polite">
            <div className="shop-empty__icon" aria-hidden="true">🔍</div>
            <h2 className="shop-empty__title">No results found</h2>
            <p className="shop-empty__text">Try a different category or search term.</p>
            <button
              className="btn btn-outline"
              onClick={() => { setSearch(''); handleCategoryChange('all'); }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
