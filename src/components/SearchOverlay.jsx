import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Compass } from 'lucide-react';

export default function SearchOverlay({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const quickPills = ['Kanjivaram', 'Banarasi', 'Chanderi', 'Bridal', 'Zardozi', 'Ikkat', 'Tissue'];

  const filtered = query.trim()
    ? products.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q) ||
          p.origin.toLowerCase().includes(q) ||
          p.collectionName.toLowerCase().includes(q)
        );
      })
    : [];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="search-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="search-overlay-container" onClick={(e) => e.stopPropagation()}>
        
        <div className="search-bar-header">
          <div className="search-input-wrapper">
            <Search size={22} className="search-input-icon" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by weave, fabric, city, or occasion (e.g. Kanjivaram, Chanderi, Varanasi)..."
              className="search-main-input"
              aria-label="Search sarees"
            />
            {query && (
              <button
                type="button"
                className="clear-query-btn"
                onClick={() => setQuery('')}
                aria-label="Clear search query"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <button
            type="button"
            className="search-close-btn"
            onClick={onClose}
            aria-label="Close search"
          >
            <X size={24} />
          </button>
        </div>

        {/* Quick Search Tags */}
        <div className="quick-search-pills">
          <span className="pills-label">POPULAR WEAVES:</span>
          {quickPills.map((tag) => (
            <button
              key={tag}
              type="button"
              className="search-pill-btn"
              onClick={() => setQuery(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="search-results-area">
          {query.trim() === '' ? (
            <div className="search-idle-prompt">
              <Compass size={36} className="gold-icon prompt-icon" />
              <h4 className="prompt-title">Explore Heritage Weaves</h4>
              <p className="prompt-desc">
                Type any term above to discover authentic handloom drapes from our ateliers in Varanasi, Kanchipuram, and Chanderi.
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="search-empty-prompt">
              <h4>No sarees found matching "{query}"</h4>
              <p>Try searching for "Silk", "Bridal", "Zari", or "Banarasi".</p>
            </div>
          ) : (
            <div className="search-results-grid">
              <span className="results-count-header">
                Found {filtered.length} matching {filtered.length === 1 ? 'creation' : 'creations'}:
              </span>
              
              <div className="results-list">
                {filtered.map((item) => (
                  <div
                    key={item.id}
                    className="search-result-item"
                    onClick={() => {
                      onSelectProduct(item);
                      onClose();
                    }}
                  >
                    <div className="result-thumb">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="result-info">
                      <span className="result-collection">{item.collectionName} • {item.origin}</span>
                      <h4 className="result-title">{item.title}</h4>
                      <p className="result-fabric">{item.fabric}</p>
                      <span className="result-price">{formatPrice(item.price)}</span>
                    </div>
                    <div className="result-arrow">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
