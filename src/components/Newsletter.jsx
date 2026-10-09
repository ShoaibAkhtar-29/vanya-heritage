import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'error' | 'success'
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val) => {
    return String(val)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address to receive invitations.');
      return;
    }

    if (!validateEmail(email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid email format (e.g., patron@domain.com).');
      return;
    }

    // Success state (Demo simulation)
    setStatus('success');
    setErrorMessage('');
  };

  const handleReset = () => {
    setEmail('');
    setStatus('idle');
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-box">
          <span className="section-eyebrow">THE PRIVATE SALON</span>
          <h2 className="newsletter-headline">Invitations to the Atelier Salon</h2>
          <div className="gold-divider">
            <span className="gold-divider-icon">❖</span>
          </div>
          
          <p className="newsletter-sub">
            Subscribe for private lookbook previews, rare handloom release notices, and exclusive invitations to our private trunk shows.
          </p>

          {status === 'success' ? (
            <div className="newsletter-feedback-success animate-fade-in">
              <CheckCircle2 size={24} className="success-icon" />
              <div>
                <p className="success-text">
                  Welcome to the Vanya Atelier Circle.
                </p>
                <p className="success-sub">
                  A preview dispatch has been simulated for <strong>{email}</strong>. (Demonstration Mode: No live emails are stored).
                </p>
                <button
                  type="button"
                  className="reset-btn"
                  onClick={handleReset}
                >
                  Enter another email
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form" noValidate>
              <div className="newsletter-input-group">
                <div className="input-icon-wrap">
                  <Mail size={18} className="mail-input-icon" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter your email address"
                    className={`newsletter-input ${status === 'error' ? 'input-error' : ''}`}
                    aria-label="Email address for atelier newsletter"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary newsletter-submit-btn"
                  id="newsletter-subscribe-btn"
                >
                  Join the Circle
                  <ArrowRight size={15} />
                </button>
              </div>

              {status === 'error' && (
                <div className="newsletter-feedback-error animate-fade-in" role="alert">
                  <AlertCircle size={15} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <p className="newsletter-note">
                Demonstration interaction. We respect your sanctity: no unsolicited promotions or spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
