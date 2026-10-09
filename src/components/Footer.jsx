import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  CreditCard, 
  ShieldCheck, 
  ChevronDown 
} from 'lucide-react';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
  </svg>
);


export default function Footer({
  onSelectCategory,
  onOpenStory,
  onOpenContact,
  onOpenFaq,
  onOpenPolicy,
  onOpenTrackOrder
}) {
  const [footerEmail, setFooterEmail] = useState('');
  const [footerSubscribed, setFooterSubscribed] = useState(false);
  const [footerError, setFooterError] = useState('');
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleFooterSubmit = (e) => {
    e.preventDefault();
    if (!footerEmail.trim()) {
      setFooterError('Please enter your email.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(footerEmail)) {
      setFooterError('Please provide a valid email.');
      return;
    }
    setFooterSubscribed(true);
    setFooterError('');
  };

  const handleCategoryNav = (cat) => {
    onSelectCategory(cat);
    const el = document.getElementById('products-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      
      {/* Top Footer Banner: Craft Guarantees */}
      <div className="footer-top-strip">
        <div className="container">
          <div className="footer-guarantees-grid">
            <div className="guarantee-box">
              <ShieldCheck className="guarantee-icon" size={20} />
              <div>
                <h5 className="guarantee-heading">Silk Mark Certified</h5>
                <p className="guarantee-sub">100% Guaranteed Pure Mulberry & Katan Silk</p>
              </div>
            </div>

            <div className="guarantee-box">
              <Sparkles className="guarantee-icon" size={20} />
              <div>
                <h5 className="guarantee-heading">Complimentary Finishing</h5>
                <p className="guarantee-sub">Hand-stitched Fall, Pico & Attached Blouse</p>
              </div>
            </div>

            <div className="guarantee-box">
              <CreditCard className="guarantee-icon" size={20} />
              <div>
                <h5 className="guarantee-heading">Worldwide Insured Express</h5>
                <p className="guarantee-sub">Free Delivery in India; Global Air via DHL</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer Grid */}
      <div className="container footer-main-content">
        <div className="footer-columns-grid">
          
          {/* Column 1: Brand Wordmark & Narrative */}
          <div className="footer-col brand-col">
            <div className="footer-brand-header">
              <span className="brand-title">VANYA</span>
              <span className="brand-subline">HERITAGE ATELIER</span>
            </div>
            
            <p className="footer-brand-bio">
              Celebrating the beauty of Indian craftsmanship through timeless sarees and contemporary ethnic wear. Preserving centuries of handloom lore, one drape at a time.
            </p>

            <div className="footer-contact-details">
              <div className="contact-row">
                <MapPin size={15} className="gold-icon" />
                <span>Atelier: Kala Ghoda, Mumbai • Banjara Hills, Hyderabad</span>
              </div>
              <div className="contact-row">
                <Phone size={15} className="gold-icon" />
                <span>Client Concierge: +91 98201 44520 (10 AM – 7 PM IST)</span>
              </div>
              <div className="contact-row">
                <Mail size={15} className="gold-icon" />
                <span>concierge@vanyaheritage.in</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="footer-social-links" aria-label="Social Media">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram"
                title="Vanya Heritage on Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Facebook"
                title="Vanya Heritage on Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="YouTube"
                title="Vanya Heritage on YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Shop Sarees */}
          <div className="footer-col">
            <div 
              className="footer-col-header mobile-accordion-header"
              onClick={() => toggleAccordion('shop')}
            >
              <h4 className="footer-col-title">Shop Sarees</h4>
              <ChevronDown size={16} className={`accordion-arrow ${openAccordion === 'shop' ? 'open' : ''}`} />
            </div>

            <ul className={`footer-link-list ${openAccordion === 'shop' ? 'mobile-show' : ''}`}>
              <li>
                <button type="button" onClick={() => handleCategoryNav('all')} className="footer-link-btn">
                  All Sarees & Weaves
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleCategoryNav('bridal')} className="footer-link-btn">
                  Kanjivaram Silk Sarees
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleCategoryNav('festive')} className="footer-link-btn">
                  Banarasi Kadhwa Brocades
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleCategoryNav('classics')} className="footer-link-btn">
                  Handspun Chanderi & Tussar
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleCategoryNav('designer')} className="footer-link-btn">
                  Designer Tissue & Organza
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleCategoryNav('bridal')} className="footer-link-btn">
                  Festive & Wedding Troussseau
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleCategoryNav('all')} className="footer-link-btn">
                  Newly Discovered Looms
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="footer-col">
            <div 
              className="footer-col-header mobile-accordion-header"
              onClick={() => toggleAccordion('care')}
            >
              <h4 className="footer-col-title">Customer Care</h4>
              <ChevronDown size={16} className={`accordion-arrow ${openAccordion === 'care' ? 'open' : ''}`} />
            </div>

            <ul className={`footer-link-list ${openAccordion === 'care' ? 'mobile-show' : ''}`}>
              <li>
                <button type="button" onClick={onOpenContact} className="footer-link-btn">
                  Contact Us & Private Appointment
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenFaq} className="footer-link-btn">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onOpenPolicy('shipping')} className="footer-link-btn">
                  Shipping & Worldwide Delivery
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onOpenPolicy('returns')} className="footer-link-btn">
                  7-Day Returns & Exchanges
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenTrackOrder} className="footer-link-btn highlight-link">
                  Track Your Order (Demo)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onOpenPolicy('care')} className="footer-link-btn">
                  Saree Care & Muslin Preservation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: About & Heritage */}
          <div className="footer-col">
            <div 
              className="footer-col-header mobile-accordion-header"
              onClick={() => toggleAccordion('about')}
            >
              <h4 className="footer-col-title">About the Atelier</h4>
              <ChevronDown size={16} className={`accordion-arrow ${openAccordion === 'about' ? 'open' : ''}`} />
            </div>

            <ul className={`footer-link-list ${openAccordion === 'about' ? 'mobile-show' : ''}`}>
              <li>
                <button type="button" onClick={onOpenStory} className="footer-link-btn">
                  Our Story & Heritage
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenStory} className="footer-link-btn">
                  Master Artisans & Handloom Map
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onOpenPolicy('privacy')} className="footer-link-btn">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onOpenPolicy('terms')} className="footer-link-btn">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenContact} className="footer-link-btn">
                  Bespoke Bridal Consultations
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Mini Newsletter */}
          <div className="footer-col footer-col-newsletter">
            <h4 className="footer-col-title">Atelier Dispatch</h4>
            <p className="footer-newsletter-text">
              Receive seasonal lookbooks, handloom documentation, and private trunk show privileges.
            </p>

            {footerSubscribed ? (
              <div className="footer-sub-success animate-fade-in">
                <CheckCircle2 size={16} className="success-icon" />
                <span>Subscribed to seasonal edit dispatches. (Demo)</span>
              </div>
            ) : (
              <form onSubmit={handleFooterSubmit} className="footer-mini-form">
                <div className="footer-input-row">
                  <input
                    type="email"
                    value={footerEmail}
                    onChange={(e) => {
                      setFooterEmail(e.target.value);
                      setFooterError('');
                    }}
                    placeholder="patron@domain.com"
                    className="footer-mini-input"
                    aria-label="Email address"
                  />
                  <button type="submit" className="footer-mini-btn" aria-label="Subscribe">
                    <ArrowRight size={15} />
                  </button>
                </div>
                {footerError && (
                  <div className="footer-error-text">
                    <AlertCircle size={12} /> {footerError}
                  </div>
                )}
                <span className="demo-notice-text">Demonstration email interaction</span>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <p className="copyright-text">
              © 2026 VANYA HERITAGE ATELIER. All rights reserved. Handcrafted in India.
            </p>
            <div className="footer-legal-links">
              <button type="button" onClick={() => onOpenPolicy('privacy')} className="legal-link-btn">
                Privacy Policy
              </button>
              <span className="legal-sep">•</span>
              <button type="button" onClick={() => onOpenPolicy('terms')} className="legal-link-btn">
                Terms of Service
              </button>
              <span className="legal-sep">•</span>
              <button type="button" onClick={() => onOpenPolicy('shipping')} className="legal-link-btn">
                Shipping Policy
              </button>
            </div>
          </div>

          <div className="footer-bottom-right">
            <span className="payment-label">SECURE COMMERCE</span>
            <div className="payment-badges" aria-label="Payment Methods">
              <span className="pay-badge">VISA</span>
              <span className="pay-badge">MASTERCARD</span>
              <span className="pay-badge">RUPAY</span>
              <span className="pay-badge">UPI</span>
              <span className="pay-badge">NET BANKING</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
