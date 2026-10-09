import React from 'react';
import { X, User, Crown, Calendar, Sparkles, Ruler, ShieldCheck, Heart, LogOut } from 'lucide-react';

export default function ClientAccountModal({ isOpen, onClose, wishlistCount, onOpenWishlist }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="account-modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Account Modal"
        >
          <X size={22} />
        </button>

        <div className="account-modal-header">
          <div className="account-avatar">
            <User size={28} />
          </div>
          <div className="account-headline">
            <span className="account-tier">
              <Crown size={14} className="gold-icon inline-icon" /> ATELIER PRIVILEGE MEMBER
            </span>
            <h3 className="account-name">Shruti Singhania</h3>
            <p className="account-meta">patron.shruti@heritage.com • Mumbai Salon</p>
          </div>
        </div>

        <div className="account-demo-notice">
          <Sparkles size={14} className="gold-icon inline-icon" />
          <span><strong>Demonstration Account Experience:</strong> Showcases patron loyalty, bespoke measurements, and private concierge perks.</span>
        </div>

        <div className="account-stats-row">
          <div className="account-stat-card">
            <span className="stat-number">3</span>
            <span className="stat-label">Heirlooms Owned</span>
          </div>
          <div className="account-stat-card" onClick={() => { onClose(); onOpenWishlist(); }} style={{ cursor: 'pointer' }}>
            <span className="stat-number">{wishlistCount}</span>
            <span className="stat-label">Saved in Wishlist</span>
          </div>
          <div className="account-stat-card">
            <span className="stat-number">Gold</span>
            <span className="stat-label">Atelier Tier</span>
          </div>
        </div>

        <div className="account-sections-list">
          <div className="account-section-item">
            <div className="sec-icon-box">
              <Ruler size={18} />
            </div>
            <div className="sec-info">
              <h5 className="sec-title">Saved Blouse Tailoring Profile</h5>
              <p className="sec-desc">Bust: 36" | Waist: 30" | Shoulder: 14.5" | Neck: Royal Sweetheart</p>
            </div>
          </div>

          <div className="account-section-item">
            <div className="sec-icon-box">
              <Calendar size={18} />
            </div>
            <div className="sec-info">
              <h5 className="sec-title">Upcoming Private Salon Access</h5>
              <p className="sec-desc">Diwali Banarasi & Zardozi Preview • Taj Mahal Palace, Mumbai</p>
            </div>
          </div>

          <div className="account-section-item">
            <div className="sec-icon-box">
              <ShieldCheck size={18} />
            </div>
            <div className="sec-info">
              <h5 className="sec-title">Artisan Provenance Vault</h5>
              <p className="sec-desc">Digital certificates of authenticity for your 3 heirloom drapes</p>
            </div>
          </div>
        </div>

        <div className="account-modal-footer">
          <button
            type="button"
            className="btn-secondary w-full"
            onClick={onClose}
          >
            <LogOut size={15} /> Close Patron View
          </button>
        </div>

      </div>
    </div>
  );
}
