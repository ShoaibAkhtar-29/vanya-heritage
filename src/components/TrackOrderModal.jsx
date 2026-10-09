import React, { useState } from 'react';
import { X, Search, Truck, CheckCircle2, Clock, Package, MapPin, Sparkles } from 'lucide-react';

export default function TrackOrderModal({ isOpen, onClose }) {
  const [orderNumber, setOrderNumber] = useState('VN-89421');
  const [isSearched, setIsSearched] = useState(true);

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    if (orderNumber.trim()) {
      setIsSearched(true);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="track-modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Order Tracker"
        >
          <X size={22} />
        </button>

        <div className="track-modal-header">
          <span className="section-eyebrow">CONCIERGE DISPATCH CONSOLE</span>
          <h2 className="track-title">Track Your Heirloom Shipment</h2>
          <div className="gold-divider">
            <span className="gold-divider-icon">❖</span>
          </div>
          <p className="track-sub">
            Monitor the dispatch and insured transit of your handloom saree from our master finishing atelier to your doorstep.
          </p>

          <div className="track-demo-notice">
            <Sparkles size={14} className="gold-icon inline-icon" />
            <span><strong>Demonstration Feature:</strong> Sample active order <strong>VN-89421</strong> loaded below for live preview.</span>
          </div>
        </div>

        <form onSubmit={handleSearch} className="track-search-bar">
          <input
            type="text"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            placeholder="Enter Order ID (e.g. VN-89421)..."
            className="track-input"
          />
          <button type="submit" className="btn-primary track-btn">
            <Search size={16} /> Track Status
          </button>
        </form>

        {isSearched && (
          <div className="track-results-card animate-fade-in">
            <div className="shipment-meta-row">
              <div>
                <span className="meta-sub">ORDER REFERENCE</span>
                <h4 className="meta-val">{orderNumber.toUpperCase()}</h4>
              </div>
              <div>
                <span className="meta-sub">CARRIER & AWB</span>
                <h4 className="meta-val">BlueDart Apex • 8492019482</h4>
              </div>
              <div>
                <span className="meta-sub">ESTIMATED DELIVERY</span>
                <h4 className="meta-val highlight-gold">Tomorrow, by 2:00 PM IST</h4>
              </div>
            </div>

            {/* Tracking Stepper */}
            <div className="timeline-stepper">
              <div className="timeline-step completed">
                <div className="step-circle">
                  <CheckCircle2 size={16} />
                </div>
                <div className="step-info">
                  <h5>Weaving & Atelier Fall Stitching</h5>
                  <p>Hand-stitched cotton fall and delicate pico finished by karigar in Varanasi.</p>
                  <span className="step-time">Yesterday, 11:30 AM</span>
                </div>
              </div>

              <div className="timeline-step completed">
                <div className="step-circle">
                  <CheckCircle2 size={16} />
                </div>
                <div className="step-info">
                  <h5>Silk Mark Quality Verification</h5>
                  <p>Tested pure silk certification and sealed in waterproof wooden casing.</p>
                  <span className="step-time">Yesterday, 04:15 PM</span>
                </div>
              </div>

              <div className="timeline-step active">
                <div className="step-circle pulsating">
                  <Truck size={16} />
                </div>
                <div className="step-info">
                  <h5>In Transit — Air Cargo Dispatched</h5>
                  <p>Package departed Mumbai Air Hub. Out for delivery to destination salon hub.</p>
                  <span className="step-time">Today, 08:45 AM</span>
                </div>
              </div>

              <div className="timeline-step pending">
                <div className="step-circle">
                  <Package size={16} />
                </div>
                <div className="step-info">
                  <h5>Out for Doorstep Delivery</h5>
                  <p>Signature-required secure handover with insured inspection privilege.</p>
                  <span className="step-time">Scheduled for Tomorrow</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="track-modal-footer">
          <button type="button" className="btn-secondary" onClick={onClose}>
            Close Tracker
          </button>
        </div>

      </div>
    </div>
  );
}
