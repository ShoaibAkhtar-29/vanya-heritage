import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistIds,
  products,
  onRemoveWishlist,
  onMoveToBag
}) {
  if (!isOpen) return null;

  const wishlistedProducts = products.filter((p) => wishlistIds.includes(p.id));

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer-panel wishlist-drawer" onClick={(e) => e.stopPropagation()}>
        
        <div className="drawer-header">
          <div className="drawer-title-wrap">
            <Heart size={20} className="gold-icon" fill="var(--brand-maroon)" color="var(--brand-maroon)" />
            <h3 className="drawer-title">Curated Wishlist</h3>
            <span className="drawer-count">({wishlistedProducts.length})</span>
          </div>

          <button
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close Wishlist"
          >
            <X size={20} />
          </button>
        </div>

        <div className="drawer-body">
          {wishlistedProducts.length === 0 ? (
            <div className="empty-cart-view">
              <Heart size={48} className="empty-icon" />
              <h4 className="empty-cart-title">Your Wishlist is Empty</h4>
              <p className="empty-cart-desc">
                Save your favorite handloom drapes by clicking the heart icon on any piece.
              </p>
              <button
                type="button"
                className="btn-primary"
                onClick={onClose}
              >
                Discover Sarees
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {wishlistedProducts.map((item) => (
                <div key={item.id} className="cart-item-row">
                  <div className="cart-item-thumb">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="cart-item-info">
                    <h5 className="cart-item-title">{item.title}</h5>
                    <p className="cart-item-fabric">{item.fabric}</p>
                    <span className="cart-item-price">{formatPrice(item.price)}</span>

                    <div className="wishlist-action-row">
                      <button
                        type="button"
                        className="btn-primary btn-sm"
                        onClick={() => onMoveToBag(item)}
                      >
                        <ShoppingBag size={14} /> Move to Bag
                      </button>

                      <button
                        type="button"
                        className="remove-item-btn"
                        onClick={() => onRemoveWishlist(item.id)}
                        aria-label="Remove from wishlist"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {wishlistedProducts.length > 0 && (
          <div className="drawer-footer">
            <button
              type="button"
              className="btn-secondary w-full"
              onClick={onClose}
            >
              Continue Exploring Collections
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
