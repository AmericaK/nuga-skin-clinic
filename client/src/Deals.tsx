import { useEffect } from "react";
import { DEALS, BOOKING_URL } from "./deals";

export default function Deals() {
  useEffect(() => {
    document.title = "Special Deals | Nuga Skin Clinic — Duluth, GA";
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* NAV */}
      <header className="nav is-scrolled">
        <div className="wrap nav__inner">
          <a className="brand" href="/"><img className="brand__logo" src="/logo.png" alt="Nuga Skin Clinic" /></a>
          <nav className="nav__links">
            <a className="nav__deal" href="/deals">Deals</a>
            <a className="nav__link" href="/#services">Services</a>
            <a className="nav__link" href="/#reviews">Results</a>
            <a className="nav__link" href="/about">About</a>
            <a className="nav__link" href="/#visit">Visit</a>
            <a className="btn btn--solid nav__cta" href={BOOKING_URL} target="_blank" rel="noreferrer">Book</a>
          </nav>
          <button className="nav__burger" aria-label="Menu">☰</button>
        </div>
      </header>

      {/* HEADER */}
      <section className="section subpage">
        <div className="wrap">
          <div className="section__head section__head--center reveal">
            <p className="eyebrow section__eyebrow" style={{ color: "var(--gold-deep)" }}>Special Deals</p>
            <h1 className="section__title">Current promotions.</h1>
            <p className="deals__sub">New offers are added regularly — book early, spots are limited.</p>
          </div>

          {DEALS.length > 0 ? (
            <div className="deals-grid reveal">
              {DEALS.map((d, i) => (
                <a className="deal-card" key={i} href={BOOKING_URL} target="_blank" rel="noreferrer">
                  <img src={d.img} alt={d.title || `Deal ${i + 1}`} loading="lazy" />
                  {d.title && <span className="deal-card__title">{d.title}</span>}
                </a>
              ))}
            </div>
          ) : (
            <p className="deals__empty reveal">New deals are on the way — check back soon.</p>
          )}

          <div className="about__cta reveal" style={{ marginTop: 48 }}>
            <a className="btn btn--solid" href={BOOKING_URL} target="_blank" rel="noreferrer">Book a consultation</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <div className="wrap">
          <div className="foot__grid">
            <div className="foot__brand">
              <img className="brand__logo" src="/logo.png" alt="Nuga Skin Clinic" style={{ height: 54 }} />
              <p className="foot__tag">Seoul-grade skincare in Duluth — trusted devices, expert hands, natural results.</p>
            </div>
            <div className="foot__nap">
              2005 Boggs Rd #101, Duluth, GA 30096<br /><a href="tel:+17706872545">(770) 687-2545</a><br />Mon–Sat 9:30 AM–6:30 PM · Sun Closed
            </div>
          </div>
          <p className="foot__legal">© 2026 Nuga Skin Clinic · Duluth, GA. All rights reserved.</p>
        </div>
      </footer>

      {/* RAIL */}
      <div className="rail" aria-label="Quick contact">
        <a href="tel:+17706872545" aria-label="Call"><svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .7-.2 1L6.6 10.8z"/></svg></a>
        <a href="https://www.instagram.com/nugaskinclinic/" target="_blank" rel="noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.3.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.3-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.3-.6-.4-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.3 1.3-.4 2.3-.5C9 2 9.3 2 12 2zm0 3.4a6.6 6.6 0 100 13.2 6.6 6.6 0 000-13.2zm0 1.8a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zm5.3-3.1a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg></a>
        <a href="https://www.facebook.com/nugabeautyskincare/" target="_blank" rel="noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M14 9h2.5l.3-3H14V4.5c0-.8.2-1.3 1.4-1.3H17V.6C16.7.5 15.7.5 14.6.5 12.3.5 11 1.8 11 4.3V6H8.5v3H11v9h3V9z"/></svg></a>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Top"><svg viewBox="0 0 24 24"><path d="M12 8l-6 6 1.4 1.4L12 10.8l4.6 4.6L18 14z"/></svg></button>
      </div>
    </>
  );
}
