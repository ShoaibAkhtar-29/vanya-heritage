import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { OCCASIONS } from '../data/products';

export default function FeaturedCollections({ onSelectOccasion }) {
  return (
    <section id="collections-section" className="collections-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">CURATED DRAPES FOR LIFETIME MILESTONES</span>
          <h2 className="section-title">Find Your Occasion</h2>
          <div className="gold-divider">
            <span className="gold-divider-icon">❖</span>
          </div>
          <p className="section-subtitle">
            From regal pheras to quiet temple mornings, explore drapes thoughtfully tailored for each auspicious hour.
          </p>
        </div>

        {/* Dynamic Asymmetric Editorial Grid */}
        <div className="occasions-editorial-grid">
          {OCCASIONS.map((occ, index) => {
            // Apply varied structural styles for visual rhythm
            const isFeatured = index === 0;
            return (
              <div
                key={occ.id}
                className={`occasion-tile occasion-tile-${occ.id} ${isFeatured ? 'occasion-tile-featured' : ''}`}
                onClick={() => onSelectOccasion(occ.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') onSelectOccasion(occ.id); }}
                aria-label={`Explore ${occ.title} collection`}
              >
                <div className="tile-image-wrapper">
                  <img
                    src={occ.image}
                    alt={`${occ.title} - ${occ.tagline}`}
                    className="tile-image"
                    loading="lazy"
                  />
                  <div className="tile-overlay-gradient"></div>
                </div>

                <div className="tile-content">
                  <span className="tile-count">{occ.productCount}</span>
                  <h3 className="tile-title">{occ.title}</h3>
                  <p className="tile-tagline">{occ.tagline}</p>
                  <p className="tile-desc">{occ.description}</p>
                  
                  <div className="tile-cta-wrap">
                    <span className="tile-cta-text">Explore Edit</span>
                    <span className="tile-cta-arrow">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
