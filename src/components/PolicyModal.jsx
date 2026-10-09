import React, { useState, useEffect } from 'react';
import { X, Truck, RotateCcw, ShieldCheck, FileText, Feather } from 'lucide-react';

export default function PolicyModal({ isOpen, onClose, initialTab = 'shipping' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (initialTab) setActiveTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="policy-modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Policy Modal"
        >
          <X size={22} />
        </button>

        <div className="policy-tabs-bar">
          <button
            type="button"
            className={`policy-tab-btn ${activeTab === 'shipping' ? 'active' : ''}`}
            onClick={() => setActiveTab('shipping')}
          >
            <Truck size={15} /> Shipping & Transit
          </button>
          <button
            type="button"
            className={`policy-tab-btn ${activeTab === 'returns' ? 'active' : ''}`}
            onClick={() => setActiveTab('returns')}
          >
            <RotateCcw size={15} /> Returns & Exchange
          </button>
          <button
            type="button"
            className={`policy-tab-btn ${activeTab === 'care' ? 'active' : ''}`}
            onClick={() => setActiveTab('care')}
          >
            <Feather size={15} /> Saree Care Guide
          </button>
          <button
            type="button"
            className={`policy-tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
            onClick={() => setActiveTab('privacy')}
          >
            <ShieldCheck size={15} /> Privacy Policy
          </button>
          <button
            type="button"
            className={`policy-tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
            onClick={() => setActiveTab('terms')}
          >
            <FileText size={15} /> Terms of Service
          </button>
        </div>

        <div className="policy-tab-body">
          {activeTab === 'shipping' && (
            <div className="policy-article animate-fade-in">
              <h3>Shipping, Transit Insurance & Global Delivery</h3>
              <p className="lead-paragraph">
                Every Vanya creation represents hundreds of hours of artisan devotion. We safeguard your handloom through tamper-evident luxury wooden packaging, sealed in waterproof transit casings with 100% full transit insurance.
              </p>
              
              <h4>Domestic Deliveries (Within India)</h4>
              <ul>
                <li><strong>Complimentary Delivery:</strong> We offer complimentary express delivery across all pin codes in India with no minimum order requirement.</li>
                <li><strong>Transit Time:</strong> Orders are dispatched within 24 to 48 hours following hand-stitched fall and pico finishing. Metros receive delivery in 2–3 business days; other regions within 4–5 business days.</li>
                <li><strong>Couriers:</strong> BlueDart Apex, Delhivery Express, and Speed Post for remote regions.</li>
              </ul>

              <h4>International Deliveries (Worldwide)</h4>
              <ul>
                <li><strong>Courier Partners:</strong> We ship to 75+ countries exclusively via DHL Express Worldwide and FedEx International Priority.</li>
                <li><strong>Delivery Timeline:</strong> Typically delivered within 4 to 7 business days from date of dispatch.</li>
                <li><strong>Complimentary Threshold:</strong> International orders above ₹25,000 (approx. $300 USD / £240 GBP) enjoy complimentary express worldwide air shipping.</li>
                <li><strong>Customs & Duties:</strong> Any import customs duties levied by the destination country are settled seamlessly through DHL clearance.</li>
              </ul>
            </div>
          )}

          {activeTab === 'returns' && (
            <div className="policy-article animate-fade-in">
              <h3>7-Day Grace Return & Exchange Policy</h3>
              <p className="lead-paragraph">
                We desire that your selected saree brings absolute joy and reverence to your special occasion. If a piece does not completely meet your expectations, we ensure an effortless return experience.
              </p>
              
              <h4>Eligibility Guidelines</h4>
              <ul>
                <li>Items must be initiated for exchange or return within <strong>7 days</strong> of delivery.</li>
                <li>The saree must remain in pristine, unworn condition with original Silk Mark certification tags intact and folded along original creases.</li>
                <li>Sarees with unstitched blouse pieces remain fully eligible. If you requested custom blouse tailoring or alteration services from our atelier, that specific order is non-returnable.</li>
              </ul>

              <h4>Complimentary Doorstep Pickup</h4>
              <p>
                Our logistics partner will arrange a complimentary pickup from your residence within India. For international exchanges, connect with your dedicated Atelier Concierge representative.
              </p>
            </div>
          )}

          {activeTab === 'care' && (
            <div className="policy-article animate-fade-in">
              <h3>Preserving Heirloom Handlooms: Saree Care Rituals</h3>
              <p className="lead-paragraph">
                Pure mulberry silk, natural tussar, and pure metallic zari are organic materials that breathe. With mindful care, your Vanya saree will retain its radiant sheen for multiple generations.
              </p>

              <h4>Essential Care Principles</h4>
              <ul>
                <li><strong>Storage in Muslin:</strong> Never store pure silk sarees in synthetic plastic bags. Wrap each saree individually in the unbleached cotton muslin pouch provided with your order.</li>
                <li><strong>Periodic Airing:</strong> Every six months, unfold your saree and let it air in a well-ventilated room out of direct sunlight for a few hours. Change the fold creases to prevent permanent fiber fatigue.</li>
                <li><strong>Dry Cleaning Only:</strong> Strictly professional dry clean only. Instruct your specialist dry cleaner to treat the real zari borders with mild, non-corrosive organic solvents.</li>
                <li><strong>Ironing:</strong> If ironing at home, always place a soft muslin cloth between the iron and the saree. Use low-to-medium silk heat, never high steam directly on zari work.</li>
              </ul>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="policy-article animate-fade-in">
              <h3>Patron Privacy & Data Sovereignty</h3>
              <p className="lead-paragraph">
                At Vanya Heritage, confidentiality is paramount. We treat our patrons’ personal information and measurements with the utmost sanctity and discretion.
              </p>

              <h4>Information We Safeguard</h4>
              <ul>
                <li><strong>Order & Contact Data:</strong> Name, delivery address, phone number, and email strictly for fulfilling orders and concierge updates.</li>
                <li><strong>Measurements:</strong> Custom blouse dimensions and styling notes are encrypted in your private patron profile.</li>
                <li><strong>Zero Data Selling:</strong> We never sell, lease, or share patron information with third-party advertising brokers.</li>
                <li><strong>Payment Security:</strong> Payment information is processed via PCI-DSS Level 1 certified gateways. We never store credit card numbers on our servers.</li>
              </ul>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="policy-article animate-fade-in">
              <h3>Atelier Terms & Craftsmanship Standards</h3>
              <p className="lead-paragraph">
                By visiting and purchasing from Vanya Heritage Atelier, you join a tradition of honoring handcraft.
              </p>

              <h4>Handloom Characteristics</h4>
              <p>
                Because our sarees are woven on human-powered pit-looms and hand-dyed with artisan recipes, subtle nuances in thread tension, slub textures, and selvedge selvedging are not flaws — they are the indisputable hallmark of genuine human craft.
              </p>

              <h4>Authenticity Guarantee</h4>
              <p>
                Every pure silk creation is accompanied by a serialized Silk Mark India certification and our Atelier Hallmark Certificate of Provenance.
              </p>
            </div>
          )}
        </div>

        <div className="policy-modal-footer">
          <button type="button" className="btn-secondary" onClick={onClose}>
            Close Policy Guide
          </button>
        </div>

      </div>
    </div>
  );
}
