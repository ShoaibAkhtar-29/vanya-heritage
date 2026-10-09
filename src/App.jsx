import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import NewArrivals from './components/NewArrivals';
import BrandStory from './components/BrandStory';
import Bestsellers from './components/Bestsellers';
import EditorialCampaign from './components/EditorialCampaign';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

// Modals & Drawers
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import ProductQuickViewModal from './components/ProductQuickViewModal';
import SearchOverlay from './components/SearchOverlay';
import ClientAccountModal from './components/ClientAccountModal';
import StoryModal from './components/StoryModal';
import ContactModal from './components/ContactModal';
import FaqModal from './components/FaqModal';
import PolicyModal from './components/PolicyModal';
import TrackOrderModal from './components/TrackOrderModal';

import { PRODUCTS } from './data/products';
import './App.css';

export default function App() {
  // Cart & Wishlist state with default luxury starter item
  const [cart, setCart] = useState([
    {
      id: 'saree-kanjivaram-crimson',
      title: 'Kanjivaram Pure Mulberry Silk Saree',
      fabric: 'Pure Mulberry Silk • Tested Gold Zari',
      price: 38500,
      image: '/images/product_1.jpg',
      quantity: 1
    }
  ]);

  const [wishlist, setWishlist] = useState(['saree-banarasi-rangkat', 'saree-chanderi-tissue']);
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Modals state
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);
  const [policyModal, setPolicyModal] = useState({ isOpen: false, tab: 'shipping' });
  const [trackOrderOpen, setTrackOrderOpen] = useState(false);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Cart Handlers
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          fabric: product.fabric,
          price: product.price,
          image: product.image,
          quantity: 1
        }
      ];
    });
    showToast(`Added "${product.title}" to your Atelier Bag`);
    setCartDrawerOpen(true);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    showToast('Removed item from bag');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        showToast(`Removed "${product.title}" from Wishlist`);
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Saved "${product.title}" to Wishlist`);
        return [...prev, product.id];
      }
    });
  };

  const handleMoveToBag = (product) => {
    handleAddToCart(product);
    setWishlist((prev) => prev.filter((id) => id !== product.id));
    setWishlistDrawerOpen(false);
  };

  // Filter & Navigation Handlers
  const handleSelectOccasion = (occasionId) => {
    setActiveFilter(occasionId);
    const el = document.getElementById('products-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPolicy = (tab = 'shipping') => {
    setPolicyModal({ isOpen: true, tab });
  };

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app-root">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="atelier-toast animate-fade-in" role="status">
          <span className="toast-dot"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Announcement Bar */}
      <AnnouncementBar onOpenContact={() => setContactOpen(true)} />

      {/* Sticky Header */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAccount={() => setAccountOpen(true)}
        onOpenWishlist={() => setWishlistDrawerOpen(true)}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenStory={() => setStoryOpen(true)}
        onSelectCategory={setActiveFilter}
        activeCategory={activeFilter}
      />

      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('products-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onStoryClick={() => setStoryOpen(true)}
        />

        {/* Featured Collections / Occasions */}
        <FeaturedCollections onSelectOccasion={handleSelectOccasion} />

        {/* New Arrivals Section */}
        <NewArrivals
          products={PRODUCTS}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Brand Story Banner */}
        <BrandStory onOpenStory={() => setStoryOpen(true)} />

        {/* Bestsellers Section */}
        <Bestsellers
          products={PRODUCTS}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
        />

        {/* Editorial Campaign Banner */}
        <EditorialCampaign
          onExploreFestive={() => {
            setActiveFilter('festive');
            const el = document.getElementById('products-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Customer Experience Testimonials */}
        <Testimonials />

        {/* Newsletter Section */}
        <Newsletter />
      </main>

      {/* Complete Premium Footer */}
      <Footer
        onSelectCategory={(cat) => setActiveFilter(cat)}
        onOpenStory={() => setStoryOpen(true)}
        onOpenContact={() => setContactOpen(true)}
        onOpenFaq={() => setFaqOpen(true)}
        onOpenPolicy={handleOpenPolicy}
        onOpenTrackOrder={() => setTrackOrderOpen(true)}
      />

      {/* Slide-out Drawers & Modals */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      <WishlistDrawer
        isOpen={wishlistDrawerOpen}
        onClose={() => setWishlistDrawerOpen(false)}
        wishlistIds={wishlist}
        products={PRODUCTS}
        onRemoveWishlist={(id) => setWishlist((prev) => prev.filter((item) => item !== id))}
        onMoveToBag={handleMoveToBag}
      />

      <ProductQuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
        isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

      <ClientAccountModal
        isOpen={accountOpen}
        onClose={() => setAccountOpen(false)}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setWishlistDrawerOpen(true)}
      />

      <StoryModal
        isOpen={storyOpen}
        onClose={() => setStoryOpen(false)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <FaqModal
        isOpen={faqOpen}
        onClose={() => setFaqOpen(false)}
      />

      <PolicyModal
        isOpen={policyModal.isOpen}
        onClose={() => setPolicyModal({ isOpen: false, tab: 'shipping' })}
        initialTab={policyModal.tab}
      />

      <TrackOrderModal
        isOpen={trackOrderOpen}
        onClose={() => setTrackOrderOpen(false)}
      />

    </div>
  );
}
