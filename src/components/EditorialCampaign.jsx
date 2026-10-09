import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function EditorialCampaign({ onExploreFestive }) {
  return (
    <section className="campaign-editorial-section">
      <div className="container">
        <div className="campaign-banner-card">
          
          <div className="campaign-image-side">
            <img
              src="/images/campaign_festive.jpg"
              alt="Editorial bridal and festive ethnic wear collection"
              className="campaign-photo"
              loading="lazy"
            />
          </div>

          <div className="campaign-text-side">
            <div className="campaign-eyebrow-wrap">
              <span className="badge-luxury">
                <Sparkles size={11} className="gold-icon inline-icon" /> FESTIVE & BRIDAL SALON 2026
              </span>
            </div>

            <h2 className="campaign-headline">
              For Celebrations That Stay With You.
            </h2>

            <div className="campaign-gold-accent"></div>

            <p className="campaign-paragraph">
              From the sacred rhythm of the morning shehnai to the grand laughter of an evening reception, our celebratory silks carry the weight of affection and timeless pride.
            </p>

            <div className="campaign-quote">
              “A saree is not merely woven thread; it is memory caught in golden silk.”
            </div>

            <div className="campaign-cta-wrap">
              <button
                type="button"
                className="btn-primary"
                onClick={onExploreFestive}
                id="campaign-cta-btn"
              >
                Shop the Festive Edit
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
