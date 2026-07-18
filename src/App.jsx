import { useEffect } from 'react'
import { siteConfig } from './config'

function App() {
  const { logo, nav, hero, features, interestCards, stats, promises, footer } = siteConfig

  useEffect(() => {
    Object.entries(siteConfig.theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value)
    })
  }, [])

  const heroStyle = hero.background
    ? { backgroundImage: `url(${hero.background})` }
    : {}

  return (
    <div className="page-shell">
      <header className="site-header" id="home">
        <div className="brand-block">
          {logo.src ? (
            <img className="brand-logo" src={logo.src} alt={logo.alt} />
          ) : (
            <div className="brand-text">
              <span className="brand-title">{logo.title}</span>
              <span className="brand-subtitle">{logo.subtitle}</span>
            </div>
          )}
        </div>
        <nav className="site-nav">
          {nav.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href={hero.ctaSecondary.href}>
          {hero.ctaSecondary.label}
        </a>
      </header>

      <main className="page-content">
        <section className="hero-section" style={heroStyle}>
          <div className="hero-copy">
            <span className="eyebrow">{hero.pretitle}</span>
            <h1>{hero.title}</h1>
            <p className="hero-description">{hero.description}</p>

            <div className="hero-countdown">
              {Object.entries(hero.countdown).map(([key, value]) => (
                <div key={key} className="countdown-card">
                  <span className="countdown-value">{value}</span>
                  <small>{key}</small>
                </div>
              ))}
            </div>

            <form className="hero-form" id="newsletter">
              <input type="email" placeholder={hero.emailPlaceholder} aria-label="Email" />
              <button type="submit">{hero.ctaPrimary.label}</button>
            </form>
            <p className="hero-note">{hero.note}</p>
          </div>

          <aside className="hero-panel">
            <div className="logo-panel">
              {logo.src ? (
                <img className="panel-logo" src={logo.src} alt={logo.alt} />
              ) : (
                <div className="panel-logo-text">
                  <strong>{logo.title}</strong>
                  <span>{logo.subtitle}</span>
                </div>
              )}
            </div>
            <div className="panel-copy">
              <p>Building <strong>Trust</strong>.</p>
              <p>Creating <strong>Wealth</strong>.</p>
              <p>Securing <strong>Futures</strong>.</p>
            </div>
          </aside>
        </section>

        <section className="section section-features">
          <div className="section-heading">
            <p className="eyebrow">What to Expect</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-interest">
          <div className="section-heading">
            <p className="eyebrow">How can we help you?</p>
            <h2>Let us know your interest and we’ll get in touch.</h2>
          </div>
          <div className="interest-grid">
            {interestCards.map((card) => (
              <article key={card.title} className="interest-card">
                <h3>{card.title}</h3>
                <button type="button">{card.action}</button>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-stats">
          {stats.map((item) => (
            <div key={item.label} className="stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="section section-promises">
          <div className="section-heading">
            <p className="eyebrow">Our Promise</p>
          </div>
          <div className="promise-grid">
            {promises.map((promise) => (
              <div key={promise} className="promise-pill">
                {promise}
              </div>
            ))}
          </div>
        </section>

        <section className="section section-newsletter">
          <div className="newsletter-card">
            <div>
              <h2>Be the First to Know!</h2>
              <p>Join our community and get exclusive updates, early access, and special opportunities.</p>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder={hero.emailPlaceholder} aria-label="Email" />
              <button type="submit">Join Our Community</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">{logo.title}</span>
            <p>{footer.company.description}</p>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              {footer.links.map((link) => (
                <li key={link.title}>
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Get in touch</h4>
            <p>{footer.contact.phone}</p>
            <p>{footer.contact.email}</p>
            {footer.contact.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="footer-social">
            <h4>Follow us</h4>
            <div className="social-links">
              {footer.social.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{footer.copyright}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
