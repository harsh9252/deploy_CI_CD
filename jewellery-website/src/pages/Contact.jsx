import { useState } from 'react';
import './Contact.css';

const faqs = [
  {
    q: 'Do you offer custom jewellery?',
    a: 'Yes! We offer a full bespoke service. Book a consultation and our designers will create something one-of-a-kind for you.',
  },
  {
    q: 'How long does shipping take?',
    a: 'Standard shipping takes 3–5 business days across India. Express next-day delivery is available in Mumbai, Delhi, and Bangalore.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer hassle-free returns within 30 days of delivery. Custom and engraved pieces are non-refundable.',
  },
  {
    q: 'Do you resize rings?',
    a: 'Yes, free ring resizing is available within 6 months of purchase. Simply bring your ring to our boutique.',
  },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button
        className="faq-item__question"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="faq-item__chevron" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-item__answer" hidden={!open}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <main className="page-wrapper contact-page">
      {/* Hero */}
      <div className="contact-hero">
        <div className="contact-hero__overlay" aria-hidden="true" />
        <div className="container contact-hero__content">
          <p className="contact-hero__eyebrow">We'd Love to Hear from You</p>
          <h1 className="contact-hero__title">Get in Touch</h1>
        </div>
      </div>

      <div className="container contact-body">
        <div className="contact-grid">
          {/* Info panel */}
          <aside className="contact-info">
            <h2 className="contact-info__title">Visit Our Boutique</h2>
            <p className="contact-info__sub">
              Experience our full collection in person at our flagship store.
            </p>

            <ul className="contact-info__list">
              <li className="contact-info__item">
                <span className="contact-info__icon" aria-hidden="true">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>42 Jewellers Lane, Zaveri Bazaar<br />Mumbai, Maharashtra 400002</p>
                </div>
              </li>
              <li className="contact-info__item">
                <span className="contact-info__icon" aria-hidden="true">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p><a href="tel:+919876543210">+91 98765 43210</a></p>
                </div>
              </li>
              <li className="contact-info__item">
                <span className="contact-info__icon" aria-hidden="true">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:hello@lumierejewels.in">hello@lumierejewels.in</a></p>
                </div>
              </li>
              <li className="contact-info__item">
                <span className="contact-info__icon" aria-hidden="true">🕐</span>
                <div>
                  <strong>Hours</strong>
                  <p>Monday – Saturday: 10am – 7pm<br />Sunday: 11am – 5pm</p>
                </div>
              </li>
            </ul>

            {/* Map placeholder */}
            <div className="contact-map" aria-label="Store location map">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80"
                alt="Map showing our store location in Mumbai"
                loading="lazy"
              />
              <div className="contact-map__pin" aria-hidden="true">📍</div>
            </div>
          </aside>

          {/* Contact form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success" role="alert">
                <div className="contact-success__icon" aria-hidden="true">✦</div>
                <h2 className="contact-success__title">Thank You!</h2>
                <p className="contact-success__text">
                  We've received your message and will get back to you within 24 hours.
                </p>
                <button
                  className="btn btn-outline"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <h2 className="contact-form__title">Send Us a Message</h2>
                <p className="contact-form__sub">Fields marked <span aria-hidden="true">*</span><span className="sr-only">with an asterisk</span> are required.</p>

                {error && <p className="contact-form__error" role="alert">{error}</p>}

                <div className="contact-form__row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name <span aria-hidden="true">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Priya Sharma"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address <span aria-hidden="true">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="priya@example.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Custom order enquiry"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message <span aria-hidden="true">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input form-textarea"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you…"
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary contact-form__submit">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ */}
        <section className="contact-faq" aria-labelledby="faq-heading">
          <div className="divider"><div className="divider-diamond" /></div>
          <h2 className="section-title" id="faq-heading">Frequently Asked Questions</h2>
          <p className="section-subtitle">Quick answers to common queries</p>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
