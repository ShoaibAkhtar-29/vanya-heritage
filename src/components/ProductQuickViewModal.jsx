import React, { useEffect } from 'react';
import { X, Heart, ShoppingBag, ShieldCheck, Sparkles, Clock, Compass, Check } from 'lucide-react';

export default function ProductQuickViewModal({
  product,
  isOpen,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCart
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="quickview-modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close product view"
        >
          <X size={22} />
        </button>

        <div className="quickview-grid">
          
          {/* Left: Product Media Gallery */}
          <div className="quickview-media-col">
            <div className="quickview-image-frame">
              <img
                src={product.image}
                alt={product.title}
                className="quickview-image"
              />
              {product.badge && (
                <span className="product-badge top-left">{product.badge}</span>
              )}
            </div>
            
            <div className="quickview-cert-strip">
              <div className="cert-pill">
                <ShieldCheck size={14} className="gold-icon" /> Silk Mark India Certified
              </div>
              <div className="cert-pill">
                <Sparkles size={14} className="gold-icon" /> 100% Tested Zari
              </div>
            </div>
          </div>

          {/* Right: Detailed Specifications & Purchase */}
          <div className="quickview-details-col">
            <div className="details-header">
              <span className="details-origin">
                <Compass size={14} className="gold-icon inline-icon" /> {product.origin}
              </span>
              <h2 className="details-title">{product.title}</h2>
              <p className="details-subtitle">{product.subtitle}</p>
            </div>

            <div className="details-price-row">
              <span className="details-current-price">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="details-original-price">{formatPrice(product.originalPrice)}</span>
              )}
              <span className="tax-inclusive-tag">Inclusive of all taxes & insurance</span>
            </div>

            <p className="details-desc">{product.description}</p>

            {/* Comprehensive Specifications Table */}
            <div className="specs-accordion">
              <h4 className="specs-heading">HEIRLOOM SPECIFICATIONS</h4>
              
              <div className="specs-list">
                <div className="spec-row">
                  <span className="spec-name">Weave & Craft:</span>
                  <span className="spec-val">{product.details?.weave}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">Zari Grade:</span>
                  <span className="spec-val">{product.details?.zari}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">Blouse Piece:</span>
                  <span className="spec-val">{product.details?.blouse}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">Length & Weight:</span>
                  <span className="spec-val">{product.details?.length} • {product.details?.weight}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">Artisan Hours:</span>
                  <span className="spec-val">
                    <Clock size={12} className="gold-icon inline-icon" /> {product.details?.craftDuration}
                  </span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">Care Instruction:</span>
                  <span className="spec-val">{product.details?.care}</span>
                </div>
              </div>
            </div>

            {/* Finishing Inclusions */}
            <div className="finishing-perks-box">
              <div className="perk-item">
                <Check size={14} className="gold-icon" />
                <span>Hand-stitched Cotton Fall & Pico included complimentary</span>
              </div>
              <div className="perk-item">
                <Check size={14} className="gold-icon" />
                <span>Complimentary unbleached muslin storage bag</span>
              </div>
            </div>

            {/* CTA Controls */}
            <div className="quickview-actions">
              <button
                type="button"
                className="btn-primary flex-1"
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                id="quickview-add-to-cart-btn"
              >
                <ShoppingBag size={17} /> Add to Atelier Bag
              </button>

              <button
                type="button"
                className={`btn-secondary wishlist-action-button ${isWishlisted ? 'is-active' : ''}`}
                onClick={() => onToggleWishlist(product)}
                aria-label="Wishlist toggle"
              >
                <Heart size={18} fill={isWishlisted ? 'var(--brand-maroon)' : 'none'} color={isWishlisted ? 'var(--brand-maroon)' : 'currentColor'} />
              </button>
            </div>

            <p className="concierge-note">
              Questions regarding styling or blouse customization? Reach our Concierge at <strong>+91 98201 44520</strong>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}
