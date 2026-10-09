import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, MessageSquare, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: 'Bridal Trousseau',
    notes: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus('error');
      setErrorMsg('Please complete your full name and email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus('error');
      setErrorMsg('Please provide a valid email format.');
      return;
    }
    setStatus('success');
    setErrorMsg('');
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Contact Modal"
        >
          <X size={22} />
        </button>

        <div className="contact-modal-header">
          <span className="section-eyebrow">PERSONAL CONCIERGE & APPOINTMENTS</span>
          <h2 className="contact-title">Connect with Our Atelier</h2>
          <div className="gold-divider">
            <span className="gold-divider-icon">❖</span>
          </div>
          <p className="contact-sub">
            Whether inquiring about a specific heirloom weave, seeking bespoke bridal trousseau guidance, or reserving a private boutique salon appointment.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Direct Channels */}
          <div className="contact-channels-col">
            <div className="channel-box">
              <Phone size={20} className="gold-icon" />
              <div>
                <h5>Client Concierge Direct</h5>
                <p>+91 98201 44520</p>
                <span className="channel-hours">Mon–Sat: 10:00 AM – 7:00 PM IST</span>
              </div>
            </div>

            <div className="channel-box">
              <Mail size={20} className="gold-icon" />
              <div>
                <h5>Email Inquiries</h5>
                <p>concierge@vanyaheritage.in</p>
                <span className="channel-hours">Average response: Under 4 hours</span>
              </div>
            </div>

            <div className="channel-box">
              <MapPin size={20} className="gold-icon" />
              <div>
                <h5>Boutique Salons</h5>
                <p><strong>Mumbai:</strong> Kala Ghoda, Fort</p>
                <p><strong>Hyderabad:</strong> Road No. 36, Banjara Hills</p>
              </div>
            </div>

            <div className="channel-box highlight-whatsapp">
              <MessageSquare size={20} className="whatsapp-icon" />
              <div>
                <h5>WhatsApp Video Consultation</h5>
                <p>Inspect draping & zari luster live over high-definition video with our textile curator.</p>
                <span className="channel-action">Book via Concierge below</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-col">
            {status === 'success' ? (
              <div className="contact-success-state animate-fade-in">
                <CheckCircle2 size={48} className="success-icon" />
                <h4>Inquiry Received with Honour</h4>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Our senior textile curator will reach out to you at <strong>{formData.email}</strong> within 4 business hours.
                </p>
                <div className="demo-badge-wrap">
                  <span className="badge-luxury">Demo Inquiry Simulated</span>
                </div>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ name: '', email: '', phone: '', occasion: 'Bridal Trousseau', notes: '' });
                  }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Radhika Sen"
                    className="form-input"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="radhika@example.com"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone / WhatsApp</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-occasion">Primary Occasion / Interest</label>
                  <select
                    id="contact-occasion"
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="form-input form-select"
                  >
                    <option value="Bridal Trousseau">Bridal Trousseau Curation</option>
                    <option value="Festive Saree">Festive Celebration Silk</option>
                    <option value="Heirloom Banarasi">Heirloom Banarasi Consultation</option>
                    <option value="Bespoke Tailoring">Custom Blouse Tailoring Inquiry</option>
                    <option value="Private Salon Visit">Private Salon Appointment Booking</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-notes">Notes or Specific Saree Inquiries</label>
                  <textarea
                    id="contact-notes"
                    rows="3"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about the occasion, color palette preference, or specific weaving cluster..."
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="form-error-banner animate-fade-in">
                    <AlertCircle size={15} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Inquiry to Atelier Concierge
                  <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
