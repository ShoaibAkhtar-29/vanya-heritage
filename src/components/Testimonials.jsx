import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">PATRON REFLECTIONS</span>
          <h2 className="section-title">Cherished by Connoisseurs</h2>
          <div className="gold-divider">
            <span className="gold-divider-icon">❖</span>
          </div>
          <p className="section-subtitle">
            Authentic reflections from brides, scholars, and textile collectors across the subcontinent.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="quote-mark-icon">
                <Quote size={28} />
              </div>

              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#B49A68" color="#B49A68" />
                ))}
              </div>

              <p className="testimonial-quote">"{t.quote}"</p>

              <div className="testimonial-author-block">
                <div className="author-details">
                  <h4 className="author-name">{t.author}</h4>
                  <span className="author-role">{t.role} • {t.location}</span>
                </div>
                
                <div className="verified-purchase-tag">
                  <CheckCircle size={13} className="verified-icon" />
                  <span>Verified Purchase: <strong>{t.purchased}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-disclaimer">
          <span>* Curated Patron Reflections (Demonstration archive from atelier customer care)</span>
        </div>

      </div>
    </section>
  );
}
