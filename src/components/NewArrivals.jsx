import React from 'react';
import ProductCard from './ProductCard';

export default function NewArrivals({
  products,
  wishlist,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  activeFilter,
  onFilterChange
}) {
  const filterTabs = [
    { id: 'all', label: 'All Creations' },
    { id: 'bridal', label: 'Bridal & Wedding' },
    { id: 'festive', label: 'Festive Silks' },
    { id: 'classics', label: 'Handspun Classics' },
    { id: 'designer', label: 'Designer & Tissue' }
  ];

  const displayedProducts = activeFilter === 'all'
    ? products.slice(0, 6)
    : products.filter(p => p.collection === activeFilter).slice(0, 6);

  return (
    <section id="products-section" className="products-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">FRESH FROM THE HERITAGE LOOMS</span>
          <h2 className="section-title">Newly Discovered</h2>
          <div className="gold-divider">
            <span className="gold-divider-icon">❖</span>
          </div>
          <p className="section-subtitle">
            Limited-run masterworks completed over the past fortnight, each preserving antique motif vocabularies and certified pure silks.
          </p>

          {/* Filter Pills */}
          <div className="category-filter-bar">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`filter-pill-btn ${activeFilter === tab.id ? 'active' : ''}`}
                onClick={() => onFilterChange(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
