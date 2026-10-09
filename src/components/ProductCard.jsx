import React from 'react';
import { Heart, Eye, ShoppingBag } from 'lucide-react';

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart
}) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <article className="product-card" id={`product-${product.id}`}>
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          loading="lazy"
        />

        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}

        <button
          type="button"
          className={`wishlist-toggle-btn ${isWishlisted ? 'is-active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          aria-label={isWishlisted ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`}
          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart size={18} fill={isWishlisted ? 'var(--brand-maroon)' : 'none'} color={isWishlisted ? 'var(--brand-maroon)' : '#29231F'} />
        </button>

        {/* Action Overlay */}
        <div className="product-hover-actions">
          <button
            type="button"
            className="action-pill-btn"
            onClick={() => onQuickView(product)}
            aria-label={`Quick View ${product.title}`}
          >
            <Eye size={15} /> Quick View
          </button>
          
          <button
            type="button"
            className="action-pill-btn action-pill-primary"
            onClick={() => onAddToCart(product)}
            aria-label={`Add ${product.title} to Shopping Bag`}
          >
            <ShoppingBag size={15} /> Add to Bag
          </button>
        </div>
      </div>

      <div className="product-info" onClick={() => onQuickView(product)}>
        <span className="product-collection-meta">{product.fabric}</span>
        
        <h3 className="product-title">
          <a
            href={`#product-${product.id}`}
            onClick={(e) => {
              e.preventDefault();
              onQuickView(product);
            }}
          >
            {product.title}
          </a>
        </h3>

        <p className="product-origin">{product.origin}</p>

        <div className="product-price-row">
          <span className="product-current-price">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="product-original-price">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>
    </article>
  );
}
