import React, { useState } from 'react';
import { X, ChevronDown, HelpCircle, Search } from 'lucide-react';
import { FAQS } from '../data/products';

export default function FaqModal({ isOpen, onClose }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [faqFilter, setFaqFilter] = useState('');

  if (!isOpen) return null;

  const filteredFaqs = FAQS.filter(
    (item) =>
      item.q.toLowerCase().includes(faqFilter.toLowerCase()) ||
      item.a.toLowerCase().includes(faqFilter.toLowerCase())
  );

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="faq-modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close FAQ Modal"
        >
          <X size={22} />
        </button>

        <div className="faq-modal-header">
          <span className="section-eyebrow">CLIENT CARE & CONCIERGE</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="gold-divider">
            <span className="gold-divider-icon">❖</span>
          </div>
          <p className="faq-sub">
            Clear insights regarding silk authenticity, hand-stitched fall and pico finishing, worldwide delivery, and preservation.
          </p>

          <div className="faq-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              value={faqFilter}
              onChange={(e) => setFaqFilter(e.target.value)}
              placeholder="Search questions (e.g. Silk Mark, Blouse, Shipping)..."
              className="faq-search-input"
            />
          </div>
        </div>

        <div className="faq-accordion-list">
          {filteredFaqs.length === 0 ? (
            <p className="empty-faq-text">No matching answers found. Contact our concierge at +91 98201 44520.</p>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.q}</span>
                    <ChevronDown size={18} className={`faq-arrow ${isOpen ? 'rotate' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="faq-answer-panel animate-fade-in">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        <div className="faq-modal-footer">
          <p>
            Have a custom query? Reach out directly to our senior textile curator: <strong>concierge@vanyaheritage.in</strong>
          </p>
        </div>

      </div>
    </div>
  );
}
