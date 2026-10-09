import React from 'react';
import { ArrowRight, Feather, Shield, Clock } from 'lucide-react';

export default function BrandStory({ onOpenStory }) {
  return (
    <section id="story-section" className="brand-story-section">
      <div className="container brand-story-container">
        
        {/* Left: Artisan Photography */}
        <div className="story-image-wrap">
          <div className="story-image-frame">
            <img
              src="/images/brand_craftsmanship.jpg"
              alt="Indian master handloom weaver in Varanasi crafting pure gold zari silk on traditional wooden pit-loom"
              className="story-image"
              loading="lazy"
            />
            <div className="story-image-badge">
              <span className="badge-title">HEREDITARY GUILD</span>
              <span className="badge-subtitle">Varanasi Pit-Looms • 4th Generation</span>
            </div>
          </div>
        </div>

        {/* Right: Narrative Editorial */}
        <div className="story-narrative-col">
          <span className="section-eyebrow">THE WEAVING PHILOSOPHY</span>
          <h2 className="story-title">Rooted in Heritage. Made for Today.</h2>
          
          <div className="story-gold-line"></div>

          <p className="story-lead">
            Every warp and weft tells a story of centuries-old patience. We collaborate directly with hereditary weaving clusters across Varanasi, Kanchipuram, Chanderi, and Patan — preserving rare kadhwa and interlocking korvai techniques while honoring the master artisans whose hands keep India's living textile heritage alive.
          </p>

          <p className="story-subtext">
            In an era of fleeting fast fashion, a handwoven saree stands as an eternal heirloom: draped by a mother, cherished by a daughter, and treasured for decades without losing its luster or soul.
          </p>

          {/* Pillars */}
          <div className="story-pillars-grid">
            <div className="story-pillar">
              <div className="pillar-icon-box">
                <Shield size={18} />
              </div>
              <div>
                <h4 className="pillar-title">Pure Provenance</h4>
                <p className="pillar-desc">100% natural mulberry silks & certified tested zari; direct artisan fair wages.</p>
              </div>
            </div>

            <div className="story-pillar">
              <div className="pillar-icon-box">
                <Clock size={18} />
              </div>
              <div>
                <h4 className="pillar-title">Slow Mastery</h4>
                <p className="pillar-desc">Up to 240 dedicated loom hours per single bridal saree, never rushed.</p>
              </div>
            </div>

            <div className="story-pillar">
              <div className="pillar-icon-box">
                <Feather size={18} />
              </div>
              <div>
                <h4 className="pillar-title">Tailored Finishing</h4>
                <p className="pillar-desc">Complimentary hand-stitched fall, pico, and custom unstitched blouse piece.</p>
              </div>
            </div>
          </div>

          <div className="story-cta-wrap">
            <button
              type="button"
              className="btn-primary"
              onClick={onOpenStory}
              id="story-discover-btn"
            >
              Discover Our Story
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
