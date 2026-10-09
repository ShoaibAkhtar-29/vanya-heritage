import React from 'react';
import ProductCard from './ProductCard';

export default function Bestsellers({
  products,
  wishlist,
  onToggleWishlist,
  onQuickView,
  onAddToCart
}) {
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 4);

  return (
    <section id="bestsellers-section" className="bestsellers-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">TIMELESS HEIRLOOM FAVORITES</span>
          <h2 className="section-title">Signature Pieces</h2>
          <div className="gold-divider">
            <span className="gold-divider-icon">❖</span>
          </div>
          <p className="section-subtitle">
            Our most revered drapes, celebrated by connoisseurs for their intricate hand-brocading, balanced weight, and enduring grace.
          </p>
        </div>

        <div className="bestsellers-grid">
          {bestsellers.map((product) => (
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
