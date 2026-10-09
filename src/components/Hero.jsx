import React from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

export default function Hero({ onExploreClick, onStoryClick }) {
  return (
    <section id="hero-section" className="hero-section">
      <div className="container hero-container">
        
        {/* Left / Editorial Copy Column */}
        <div className="hero-editorial-col">
          <div className="hero-badge-wrap">
            <span className="badge-luxury">
              <Sparkles size={11} className="gold-icon inline-icon" /> HERITAGE HANDLOOM ATELIER
            </span>
          </div>

          <span className="hero-eyebrow">THE ART OF INDIAN ELEGANCE</span>

          <h1 className="hero-headline">
            Tradition, Woven Into Every Moment.
          </h1>

          <div className="hero-gold-accent"></div>

          <p className="hero-description">
            Discover timeless sarees and thoughtfully crafted ethnic wear, made for the moments you will always remember. Each warp and weft is loomed with patience by India’s hereditary master weavers.
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="btn-primary"
              onClick={onExploreClick}
              id="hero-explore-btn"
            >
              Explore the Collection
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={onStoryClick}
              id="hero-story-btn"
            >
              <Compass size={16} />
              Discover Our Story
            </button>
          </div>

          {/* Luxury Quality Proof Badges */}
          <div className="hero-provenance-strip">
            <div className="provenance-item">
              <span className="provenance-label">SILK MARK</span>
              <span className="provenance-sub">100% Certified Mulberry</span>
            </div>
            <div className="provenance-sep">•</div>
            <div className="provenance-item">
              <span className="provenance-label">REAL ZARI</span>
              <span className="provenance-sub">Tested Metallic Threads</span>
            </div>
            <div className="provenance-sep">•</div>
            <div className="provenance-item">
              <span className="provenance-label">ARTISAN LOOMS</span>
              <span className="provenance-sub">Varanasi & Kanchipuram</span>
            </div>
          </div>
        </div>

        {/* Right / Hero Photograph Column */}
        <div className="hero-visual-col">
          <div className="hero-image-frame">
            <img
              src="/images/hero_saree.jpg"
              alt="Indian woman wearing an exquisite royal maroon and antique gold Kanjivaram silk saree in a heritage architectural courtyard"
              className="hero-image"
              loading="eager"
            />
            <div className="hero-image-caption">
              <span className="caption-tag">LOOKBOOK 2026</span>
              <span className="caption-title">The Royal Haveli Series — Kanjivaram Brocade</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
