import { Link } from 'react-router-dom';
import './About.css';

const team = [
  {
    name: 'Riya Kapoor',
    role: 'Founder & Head Designer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'With 20 years in jewellery design, Riya founded Lumière to bring world-class craftsmanship to the Indian market.',
  },
  {
    name: 'Arjun Mehta',
    role: 'Master Goldsmith',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'Trained in the ateliers of Milan, Arjun brings a European precision to every piece he handcrafts.',
  },
  {
    name: 'Sunita Rao',
    role: 'Gemstone Curator',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80',
    bio: 'A certified gemmologist with relationships spanning mines in Sri Lanka, Colombia, and South Africa.',
  },
];

const milestones = [
  { year: '2008', event: 'Founded in a small workshop in Mumbai\'s Zaveri Bazaar.' },
  { year: '2012', event: 'Opened our first flagship boutique on Linking Road, Bandra.' },
  { year: '2016', event: 'Launched the Celestial Collection — our first celebrity-worn line.' },
  { year: '2020', event: 'Moved to fully certified ethical sourcing across all gemstones.' },
  { year: '2024', event: 'Expanded online, shipping to 25+ countries worldwide.' },
  { year: '2026', event: 'Celebrating 18 years of crafting moments that last a lifetime.' },
];

export default function About() {
  return (
    <main className="page-wrapper about-page">
      {/* Hero */}
      <div className="about-hero">
        <div className="about-hero__overlay" aria-hidden="true" />
        <div className="container about-hero__content">
          <p className="about-hero__eyebrow">Our Story</p>
          <h1 className="about-hero__title">Crafting Beauty<br /><em>Since 2008</em></h1>
        </div>
      </div>

      {/* Mission */}
      <section className="about-mission section" aria-labelledby="mission-heading">
        <div className="container about-mission__inner">
          <div className="about-mission__text">
            <div className="divider"><div className="divider-diamond" /></div>
            <h2 className="section-title" id="mission-heading">Who We Are</h2>
            <p className="about-mission__body">
              Lumière Jewels was born from a simple belief — that every person deserves jewellery
              that tells their story. Since our founding in 2008 in the heart of Mumbai's Zaveri
              Bazaar, we've been blending centuries-old Indian craftsmanship with contemporary
              design sensibilities.
            </p>
            <p className="about-mission__body">
              Every piece in our collection is handcrafted by master artisans who have honed their
              skills over decades. We use only certified, ethically sourced gemstones and precious
              metals — because beauty shouldn't come at a cost to our planet or its people.
            </p>
            <Link to="/shop" className="btn btn-primary" style={{ marginTop: '16px' }}>
              Explore Our Collection
            </Link>
          </div>
          <div className="about-mission__image">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=700&q=80"
              alt="Artisan crafting jewellery by hand"
              loading="lazy"
            />
            <div className="about-mission__image-badge" aria-hidden="true">
              <span className="about-mission__image-badge-num">18</span>
              <span className="about-mission__image-badge-text">Years of<br />Craft</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values" aria-labelledby="values-heading">
        <div className="container">
          <div className="divider"><div className="divider-diamond" /></div>
          <h2 className="section-title" id="values-heading">Our Values</h2>
          <p className="section-subtitle">The principles that guide everything we create</p>
          <div className="about-values__grid">
            {[
              { icon: '🌿', title: 'Ethical Sourcing', desc: 'Every gemstone is responsibly mined and certified by independent gemological laboratories.' },
              { icon: '🔨', title: 'Handcrafted Quality', desc: 'No shortcuts, no mass production. Each piece is made by hand from start to finish.' },
              { icon: '♾️', title: 'Timeless Design', desc: "We design for decades, not seasons — jewellery you'll treasure and pass down through generations." },
              { icon: '💚', title: 'Community First', desc: 'We work directly with local artisan communities, ensuring fair wages and safe working conditions.' },
            ].map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-card__icon" aria-hidden="true">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline section" aria-labelledby="timeline-heading">
        <div className="container">
          <div className="divider"><div className="divider-diamond" /></div>
          <h2 className="section-title" id="timeline-heading">Our Journey</h2>
          <p className="section-subtitle">18 years of milestones</p>
          <ol className="timeline">
            {milestones.map((m, i) => (
              <li key={i} className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}>
                <div className="timeline__dot" aria-hidden="true" />
                <div className="timeline__card">
                  <span className="timeline__year">{m.year}</span>
                  <p className="timeline__event">{m.event}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="about-team section" aria-labelledby="team-heading">
        <div className="container">
          <div className="divider"><div className="divider-diamond" /></div>
          <h2 className="section-title" id="team-heading">Meet the Team</h2>
          <p className="section-subtitle">The artisans and experts behind Lumière Jewels</p>
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-card__image-wrap">
                  <img src={member.image} alt={member.name} loading="lazy" />
                </div>
                <div className="team-card__body">
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                  <p className="team-card__bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
