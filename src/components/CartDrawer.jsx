import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 15000;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountRemaining = Math.max(0, freeShippingThreshold - subtotal);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleSimulateCheckout = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      onClearCart();
      setCheckoutComplete(false);
      onClose();
    }, 4500);
  };

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer-panel cart-drawer" onClick={(e) => e.stopPropagation()}>
        
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-title-wrap">
            <ShoppingBag size={20} className="gold-icon" />
            <h3 className="drawer-title">Your Atelier Bag</h3>
            <span className="drawer-count">({cart.reduce((a, b) => a + b.quantity, 0)})</span>
          </div>

          <button
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close Shopping Bag"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Strip */}
        <div className="shipping-progress-strip">
          <div className="progress-info">
            <Sparkles size={14} className="gold-icon" />
            <span>
              {amountRemaining > 0 ? (
                <>Add <strong>{formatPrice(amountRemaining)}</strong> for Complimentary Worldwide Express</>
              ) : (
                <><strong>Unlocked:</strong> Complimentary Worldwide Express Delivery</>
              )}
            </span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>

        {/* Drawer Body */}
        <div className="drawer-body">
          {checkoutComplete ? (
            <div className="checkout-success-view animate-fade-in">
              <CheckCircle2 size={56} className="success-icon-large" />
              <h4 className="checkout-success-title">Order Placed with the Atelier</h4>
              <p className="checkout-order-number">Order Reference: <strong>VN-89421</strong></p>
              <p className="checkout-success-desc">
                Thank you for patronizing Vanya Heritage. Our master karigars are preparing your saree with hand-stitched fall and pico finishing.
              </p>
              <div className="checkout-demo-tag">
                <span>(Demonstration Mode: Simulated Order Completion)</span>
              </div>
            </div>
          ) : cart.length === 0 ? (
            <div className="empty-cart-view">
              <ShoppingBag size={48} className="empty-icon" />
              <h4 className="empty-cart-title">Your Bag is Empty</h4>
              <p className="empty-cart-desc">
                Explore our newly discovered handloom sarees and find an heirloom piece worthy of memory.
              </p>
              <button
                type="button"
                className="btn-primary"
                onClick={onClose}
              >
                Explore Sarees
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item-row">
                  <div className="cart-item-thumb">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="cart-item-info">
                    <h5 className="cart-item-title">{item.title}</h5>
                    <p className="cart-item-fabric">{item.fabric}</p>
                    
                    <div className="finishing-tag">
                      <ShieldCheck size={12} className="gold-icon" /> Hand-stitched Fall & Pico Included
                    </div>

                    <div className="cart-item-price-row">
                      <span className="cart-item-price">{formatPrice(item.price)}</span>
                      
                      <div className="quantity-controls">
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <button
                        type="button"
                        className="remove-item-btn"
                        onClick={() => onRemoveItem(item.id)}
                        aria-label="Remove item"
                        title="Remove from bag"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && !checkoutComplete && (
          <div className="drawer-footer">
            <div className="cart-summary-line">
              <span className="summary-label">Subtotal</span>
              <span className="summary-value">{formatPrice(subtotal)}</span>
            </div>

            <div className="cart-summary-line summary-sub">
              <span>Saree Fall & Pico Finishing</span>
              <span className="free-tag">Complimentary</span>
            </div>

            <div className="cart-summary-line summary-sub">
              <span>Shipping & Insured Transit</span>
              <span className="free-tag">
                {amountRemaining === 0 ? 'Complimentary' : 'Calculated at Next Step'}
              </span>
            </div>

            <div className="cart-total-line">
              <span className="total-label">Estimated Total</span>
              <span className="total-amount">{formatPrice(subtotal)}</span>
            </div>

            <button
              type="button"
              className="btn-primary w-full checkout-btn"
              onClick={handleSimulateCheckout}
              id="cart-checkout-btn"
            >
              Proceed to Atelier Checkout
              <ArrowRight size={16} />
            </button>

            <p className="drawer-guarantee-note">
              100% Silk Mark Certified • 7-Day Doorstep Exchange Policy
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
