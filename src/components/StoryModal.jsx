import React from 'react';
import { X, Shield, Sparkles, MapPin, Feather, CheckCircle } from 'lucide-react';

export default function StoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="story-modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Story"
        >
          <X size={22} />
        </button>

        <div className="story-modal-hero">
          <img
            src="/images/brand_craftsmanship.jpg"
            alt="Vanya Heritage Master Handloom Weaver at traditional loom"
            className="story-modal-cover"
          />
          <div className="story-modal-hero-overlay">
            <span className="badge-luxury">THE LIVING WEFT</span>
            <h2>Rooted in Heritage. Made for Today.</h2>
          </div>
        </div>

        <div className="story-modal-body">
          <div className="story-intro-block">
            <p className="lead-quote">
              “A handloom saree is not an article of convenience; it is an act of devotion between human hands, spun mulberry silk, and the quiet dignity of centuries.”
            </p>
          </div>

          <div className="story-text-columns">
            <div className="story-col">
              <h4>The Atelier Genesis</h4>
              <p>
                Founded in homage to India’s incomparable handloom legacy, Vanya Heritage was born from a singular conviction: that traditional craftsmanship does not belong in museum archives, but in the living rituals and celebrations of modern life.
              </p>
              <p>
                Across centuries, Indian sarees were woven with intention — blessed at the loom, infused with regional symbolism, and worn across generations. We work to revive this sacred reverence by working exclusively with genuine artisan clusters.
              </p>
            </div>

            <div className="story-col">
              <h4>Direct Weaver Partnerships</h4>
              <p>
                By eliminating layers of intermediaries, we ensure that the master weavers of Varanasi, Kanchipuram, Chanderi, and Patan receive dignified compensation, healthcare support, and the creative freedom to revive endangered antique weaves like the Kadwa and Korvai.
              </p>
              <p>
                Every saree takes between 3 to 12 weeks to weave. No automated powerlooms, no synthetic shortcuts — only the rhythmic heartbeat of wooden shuttles and pure gold-wrapped threads.
              </p>
            </div>
          </div>

          {/* Regional Clusters Map Card */}
          <div className="weaving-clusters-card">
            <h4>OUR SACRED WEAVING GUILDS</h4>
            <div className="clusters-grid">
              <div className="cluster-item">
                <MapPin size={16} className="gold-icon" />
                <div>
                  <strong>Varanasi, Uttar Pradesh</strong>
                  <p>Kadhwa Brocades, Jangla & Rangkat silks using real gold & silver zari.</p>
                </div>
              </div>

              <div className="cluster-item">
                <MapPin size={16} className="gold-icon" />
                <div>
                  <strong>Kanchipuram, Tamil Nadu</strong>
                  <p>Heavy interlocking Korvai borders, temple motifs, and 3-ply Mulberry silk.</p>
                </div>
              </div>

              <div className="cluster-item">
                <MapPin size={16} className="gold-icon" />
                <div>
                  <strong>Chanderi, Madhya Pradesh</strong>
                  <p>Gossamer silk-cotton tissue weaves with delicate hand badla mukaish work.</p>
                </div>
              </div>

              <div className="cluster-item">
                <MapPin size={16} className="gold-icon" />
                <div>
                  <strong>Patan, Gujarat</strong>
                  <p>Masterful Double Ikkat geometric patterns dyed with natural vegetable pigments.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="story-modal-close-wrap">
            <button
              type="button"
              className="btn-primary"
              onClick={onClose}
            >
              Explore the Heirloom Collections
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
