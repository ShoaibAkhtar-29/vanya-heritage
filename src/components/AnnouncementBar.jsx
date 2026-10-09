import React from 'react';
import { Sparkles, Phone, ShieldCheck } from 'lucide-react';

export default function AnnouncementBar({ onOpenContact }) {
  return (
    <div className="announcement-bar">
      <div className="container announcement-content">
        <div className="announcement-left">
          <span className="announcement-tag">
            <Sparkles size={12} className="gold-icon" /> ATELIER PRIVILEGE
          </span>
          <span className="announcement-text">
            Complimentary Worldwide Express Delivery Above ₹15,000 • Handcrafted Saree Fall & Pico Finishing Included
          </span>
        </div>
        <div className="announcement-right">
          <span className="announcement-meta">
            <ShieldCheck size={13} className="gold-icon" /> Silk Mark India Certified
          </span>
          <span className="announcement-divider">|</span>
          <button 
            type="button" 
            className="announcement-link" 
            onClick={onOpenContact}
            aria-label="Open Atelier Concierge Contact"
          >
            <Phone size={12} /> Concierge
          </button>
        </div>
      </div>
    </div>
  );
}
