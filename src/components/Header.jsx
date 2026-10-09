import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronRight } from 'lucide-react';

export default function Header({
  cartCount,
  wishlistCount,
  onOpenSearch,
  onOpenAccount,
  onOpenWishlist,
  onOpenCart,
  onOpenStory,
  onSelectCategory,
  activeCategory
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (category, sectionId) => {
    setMobileMenuOpen(false);
    if (category) {
      onSelectCategory(category);
    }
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'site-header-scrolled' : ''}`}>
      <div className="container header-container">
        
        {/* Left: Mobile Menu Toggle & Brand Wordmark */}
        <div className="header-left">
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <Menu size={22} />
          </button>

          <a href="#" className="brand-logo" onClick={(e) => { e.preventDefault(); handleNavClick('all', 'hero-section'); }}>
            <span className="brand-title">VANYA</span>
            <span className="brand-subline">HERITAGE ATELIER</span>
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <button
            type="button"
            className={`nav-link ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleNavClick('all', 'collections-section')}
          >
            Collections
          </button>
          <button
            type="button"
            className={`nav-link ${activeCategory === 'sarees' ? 'active' : ''}`}
            onClick={() => handleNavClick('all', 'products-section')}
          >
            Sarees
          </button>
          <button
            type="button"
            className="nav-link"
            onClick={() => handleNavClick('all', 'products-section')}
          >
            New Arrivals
          </button>
          <button
            type="button"
            className="nav-link"
            onClick={() => handleNavClick('all', 'bestsellers-section')}
          >
            Bestsellers
          </button>
          <button
            type="button"
            className="nav-link"
            onClick={() => onOpenStory()}
          >
            Our Story
          </button>
        </nav>

        {/* Right: Actions */}
        <div className="header-actions">
          <button
            type="button"
            className="action-icon-btn"
            onClick={onOpenSearch}
            aria-label="Search Catalog"
            title="Search Catalog"
          >
            <Search size={20} strokeWidth={1.75} />
          </button>

          <button
            type="button"
            className="action-icon-btn"
            onClick={onOpenAccount}
            aria-label="Atelier Patron Account"
            title="Atelier Patron Account"
          >
            <User size={20} strokeWidth={1.75} />
          </button>

          <button
            type="button"
            className="action-icon-btn badge-btn"
            onClick={onOpenWishlist}
            aria-label={`Wishlist, ${wishlistCount} items`}
            title="Wishlist"
          >
            <Heart size={20} strokeWidth={1.75} />
            {wishlistCount > 0 && (
              <span className="count-badge animate-fade-in">{wishlistCount}</span>
            )}
          </button>

          <button
            type="button"
            className="action-icon-btn bag-btn"
            onClick={onOpenCart}
            aria-label={`Shopping Bag, ${cartCount} items`}
            title="Shopping Bag"
          >
            <ShoppingBag size={20} strokeWidth={1.75} />
            {cartCount > 0 && (
              <span className="count-badge animate-fade-in">{cartCount}</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand-logo">
                <span className="brand-title">VANYA</span>
                <span className="brand-subline">HERITAGE ATELIER</span>
              </div>
              <button
                type="button"
                className="close-drawer-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="mobile-drawer-body">
              <div className="mobile-nav-group">
                <span className="mobile-group-title">EXPLORE THE ATELIER</span>
                <button
                  type="button"
                  className="mobile-nav-item"
                  onClick={() => handleNavClick('all', 'collections-section')}
                >
                  <span>Featured Occasions</span>
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  className="mobile-nav-item"
                  onClick={() => handleNavClick('bridal', 'products-section')}
                >
                  <span>Wedding & Bridal Sarees</span>
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  className="mobile-nav-item"
                  onClick={() => handleNavClick('festive', 'products-section')}
                >
                  <span>Festive Elegance</span>
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  className="mobile-nav-item"
                  onClick={() => handleNavClick('classics', 'products-section')}
                >
                  <span>Everyday Classics & Chanderi</span>
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  className="mobile-nav-item"
                  onClick={() => handleNavClick('designer', 'products-section')}
                >
                  <span>Designer & Contemporary Silks</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="mobile-nav-group">
                <span className="mobile-group-title">SIGNATURE CURATIONS</span>
                <button
                  type="button"
                  className="mobile-nav-item"
                  onClick={() => handleNavClick('all', 'products-section')}
                >
                  <span>Newly Discovered Looms</span>
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  className="mobile-nav-item"
                  onClick={() => handleNavClick('all', 'bestsellers-section')}
                >
                  <span>Signature Heirloom Pieces</span>
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  className="mobile-nav-item"
                  onClick={() => { setMobileMenuOpen(false); onOpenStory(); }}
                >
                  <span>The Weavers' Heritage Story</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="mobile-drawer-footer">
                <button
                  type="button"
                  className="btn-secondary w-full"
                  onClick={() => { setMobileMenuOpen(false); onOpenAccount(); }}
                >
                  <User size={16} /> Patron Sign In / Profile
                </button>
                <p className="mobile-concierge-note">
                  Atelier Concierge: +91 98201 44520<br />
                  Boutiques in Mumbai & Hyderabad
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
