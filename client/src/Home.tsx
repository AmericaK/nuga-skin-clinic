import { useEffect, useState } from "react";
import { TREATMENTS } from "./treatments";

/* ==========================================================================
   NUGA SKIN CLINIC — Home (v3 · Haoderm reference format)
   White nav + full-bleed hero + deep-green intro + right social rail
   ========================================================================== */
const CONFIG = {
  phone: "(770) 687-2545",
  phoneHref: "tel:+17706872545",
  address: "2005 Boggs Rd #101, Duluth, GA 30096",
  BOOKING_URL: "https://www.vagaro.com/nugaskincareclinic",
  INSTAGRAM: "https://www.instagram.com/nugaskinclinic/",
  FACEBOOK: "https://www.facebook.com/nugabeautyskincare/",
  GOOGLE_REVIEWS: "https://www.google.com/maps/search/?api=1&query=Nuga%20Skin%20Clinic%20Duluth%20GA",
  // Hero slideshow: hero1~hero5.jpg in client/public/. 4s crossfade.
  HERO_IMAGES: ["/hero1.JPG", "/hero2.jpg", "/hero3.jpg", "/hero4.jpg", "/hero5.jpg"],
  HERO_INTERVAL: 4000,
};

const REVIEWS = [
  { quote: "I've been coming for five years. Amy always takes careful time with me and only recommends what I actually need.", by: "Hyewon K. · Microneedling · Google" },
  { quote: "Drove 4 hours from Florida for an authentic Korean facial. Loved it — we'll be back.", by: "Gabrielle H. · Google" },
  { quote: "We started with Thermage and have been happy ever since. Our whole family comes here — a place we trust.", by: "Young Sook K. · Thermage · Google" },
];

function Rail() {
  return (
    <div className="rail" aria-label="Quick contact">
      <a href={CONFIG.phoneHref} aria-label="Call">
        <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .7-.2 1L6.6 10.8z"/></svg>
      </a>
      <a href={CONFIG.INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram">
        <svg viewBox="0 0 24 24"><path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.3.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.3-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.3-.6-.4-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.3 1.3-.4 2.3-.5C9 2 9.3 2 12 2zm0 1.8c-2.7 0-3 0-4 .1-.8 0-1.2.2-1.5.3-.4.1-.6.3-.9.6-.3.3-.5.5-.6.9-.1.3-.3.7-.3 1.5-.1 1-.1 1.3-.1 4s0 3 .1 4c0 .8.2 1.2.3 1.5.1.4.3.6.6.9.3.3.5.5.9.6.3.1.7.3 1.5.3 1 .1 1.3.1 4 .1s3 0 4-.1c.8 0 1.2-.2 1.5-.3.4-.1.6-.3.9-.6.3-.3.5-.5.6-.9.1-.3.3-.7.3-1.5.1-1 .1-1.3.1-4s0-3-.1-4c0-.8-.2-1.2-.3-1.5-.1-.4-.3-.6-.6-.9-.3-.3-.5-.5-.9-.6-.3-.1-.7-.3-1.5-.3-1-.1-1.3-.1-4-.1zm0 3.1a5.1 5.1 0 110 10.2 5.1 5.1 0 010-10.2zm0 1.8a3.3 3.3 0 100 6.6 3.3 3.3 0 000-6.6zm5.3-3.1a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
      </a>
      <a href={CONFIG.FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook">
        <svg viewBox="0 0 24 24"><path d="M14 9h2.5l.3-3H14V4.5c0-.8.2-1.3 1.4-1.3H17V.6C16.7.5 15.7.5 14.6.5 12.3.5 11 1.8 11 4.3V6H8.5v3H11v9h3V9z"/></svg>
      </a>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Top">
        <svg viewBox="0 0 24 24"><path d="M12 8l-6 6 1.4 1.4L12 10.8l4.6 4.6L18 14z"/></svg>
      </button>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [slide, setSlide] = useState(0);

  // Hero slideshow (auto-advance every 4s)
  useEffect(() => {
    const t = setInterval(
      () => setSlide((s) => (s + 1) % CONFIG.HERO_IMAGES.length),
      CONFIG.HERO_INTERVAL
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ===== NAV ===== */}
      <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="wrap nav__inner">
          <a className="brand" href="#top">
            <img className="brand__logo" src="/logo.png" alt="Nuga Skin Clinic" />
          </a>
          <nav className="nav__links">
            <a className="nav__deal" href="/deals">Deals</a>
            <a className="nav__link" href="#services">Services</a>
            <a className="nav__link" href="#reviews">Results</a>
            <a className="nav__link" href="/about">About</a>
            <a className="nav__link" href="#visit">Visit</a>
            <a className="nav__link" href="/contact">Contact</a>
            <a className="btn btn--solid nav__cta" href="/contact">Book</a>
          </nav>
          <button className="nav__burger" aria-label="Menu">☰</button>
        </div>
      </header>

      {/* ===== HERO (5-image crossfade slideshow, 4s) ===== */}
      <section id="top" className="herofull">
        {CONFIG.HERO_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden={i !== slide}
            className={`herofull__img${i === slide ? " is-active" : ""}`}
          />
        ))}
        <div className="herofull__dots">
          {CONFIG.HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              className={i === slide ? "is-on" : ""}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ===== GREEN INTRO ===== */}
      <section className="intro">
        <div className="intro__inner reveal">
          <h1 className="intro__h1">&lsquo;K-beauty, without the flight&rsquo;</h1>
          <p className="intro__sub">Seoul-grade skincare, right here in Duluth.</p>
          <p className="intro__lead">
            Nuga Skin Clinic delivers personalized skincare built on years of clinical experience and
            medical-grade technology. Every treatment is tailored to your skin — never a fixed menu —
            so you can restore and maintain healthy, radiant skin.
          </p>
          <div className="intro__cta">
            <a className="btn btn--gold" href="/contact">Book a consultation</a>
            <a className="btn btn--line" href="#services">Explore treatments</a>
          </div>
          <div className="intro__trust">
            <div className="intro__stat"><b>4.9★</b><span>Google Rating</span></div>
            <span className="intro__div" aria-hidden />
            <div className="intro__stat"><b>150+</b><span>Reviews</span></div>
            <span className="intro__div" aria-hidden />
            <div className="intro__stat"><b>13 yrs</b><span>In Duluth</span></div>
          </div>
        </div>
      </section>

      {/* ===== TREATMENTS (Haoderm 'Solution' style masonry) ===== */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="solhead reveal">
            <h2 className="solhead__title">&lsquo;Nuga Solutions&rsquo;</h2>
            <p className="solhead__sub">
              Personalized, medical-grade treatments for beauty that starts with healthy skin.
            </p>
          </div>

          <div className="solgrid reveal">
            {[1, 2, 3].map((col) => (
              <div className={`solcol${col !== 2 ? " solcol--offset" : ""}`} key={col}>
                {TREATMENTS.filter((t) => t.col === col).map((t) => (
                  <a className="solcard" key={t.name} href={`/treatments/${t.slug}`}>
                    <img src={t.img} alt={t.name} />
                    <span className="solcard__scrim" aria-hidden />
                    <div className="solcard__body">
                      <h3 className="solcard__name">&lsquo;{t.name}&rsquo;</h3>
                      <span className="solcard__btn">View More <svg viewBox="0 0 24 24" aria-hidden><path d="M5 12h12M13 6l6 6-6 6"/></svg></span>
                    </div>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS (green) ===== */}
      <section className="section section--dark" id="reviews">
        <div className="wrap">
          <div className="section__head section__head--center reveal">
            <p className="eyebrow section__eyebrow" style={{ color: "var(--gold)" }}>Why Atlanta trusts Nuga</p>
            <h2 className="section__title">Results our clients come back for.</h2>
          </div>
          <div className="rev__grid reveal">
            {REVIEWS.map((r, i) => (
              <blockquote className="rev__card" key={i}>
                <div className="rev__stars" aria-hidden>★★★★★</div>
                <p className="rev__quote">{r.quote}</p>
                <cite className="rev__by">{r.by}</cite>
              </blockquote>
            ))}
          </div>
          <div className="rev__foot reveal">
            <p style={{ color: "rgba(247,243,238,0.7)", fontSize: 15 }}>From real Google reviews · 4.9★ · 151 reviews</p>
            <a href={CONFIG.GOOGLE_REVIEWS} target="_blank" rel="noreferrer">Read all reviews on Google →</a>
          </div>
        </div>
      </section>

      {/* ===== VISIT ===== */}
      <section className="section" id="visit">
        <div className="wrap">
          <div className="visit__grid">
            <div className="visit__nap reveal">
              <div className="section__head">
                <p className="eyebrow section__eyebrow">Visit us</p>
                <h2 className="section__title">Duluth, Georgia.</h2>
              </div>
              <div className="visit__row"><span className="visit__label">Address</span><span className="visit__val">{CONFIG.address}</span></div>
              <div className="visit__row"><span className="visit__label">Phone</span><span className="visit__val"><a href={CONFIG.phoneHref}>{CONFIG.phone}</a></span></div>
              <div className="visit__row">
                <span className="visit__label">Hours</span>
                <dl className="visit__hours"><dt>Mon–Sat</dt><dd>9:30 AM – 6:30 PM</dd><dt>Sun</dt><dd>Closed</dd></dl>
              </div>
              <div className="visit__row"><a className="btn btn--solid" href="/contact">Book now</a></div>
              <div className="visit__social">
                <a href={CONFIG.INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" aria-hidden><path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.3.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.3-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.3-.6-.4-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.3 1.3-.4 2.3-.5C9 2 9.3 2 12 2zm0 3.4a6.6 6.6 0 100 13.2 6.6 6.6 0 000-13.2zm0 1.8a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zm5.3-3.1a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                  <span>Instagram</span>
                </a>
                <a href={CONFIG.FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" aria-hidden><path d="M14 9h2.5l.3-3H14V4.5c0-.8.2-1.3 1.4-1.3H17V.6C16.7.5 15.7.5 14.6.5 12.3.5 11 1.8 11 4.3V6H8.5v3H11v9h3V9z"/></svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", gap: 12 }}>
                <a href={CONFIG.INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"
                  style={{ width: 42, height: 42, borderRadius: "50%", display: "grid", placeItems: "center", background: "var(--ink, #2e2a24)", color: "#fff" }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.3.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.3-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.3-.6-.4-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.3 1.3-.4 2.3-.5C9 2 9.3 2 12 2zm0 3.4a6.6 6.6 0 100 13.2 6.6 6.6 0 000-13.2zm0 1.8a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zm5.3-3.1a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                </a>
                <a href={CONFIG.FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook"
                  style={{ width: 42, height: 42, borderRadius: "50%", display: "grid", placeItems: "center", background: "var(--ink, #2e2a24)", color: "#fff" }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M14 9h2.5l.3-3H14V4.5c0-.8.2-1.3 1.4-1.3H17V.6C16.7.5 15.7.5 14.6.5 12.3.5 11 1.8 11 4.3V6H8.5v3H11v9h3V9z"/></svg>
                </a>
              </div>
              <iframe className="visit__map" title="Nuga Skin Clinic location" loading="lazy"
                src="https://www.google.com/maps?q=2005+Boggs+Rd+%23101,+Duluth,+GA+30096&output=embed" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER (green) ===== */}
      <footer className="foot">
        <div className="wrap">
          <div className="foot__grid">
            <div className="foot__brand">
              <img className="brand__logo" src="/logo.png" alt="Nuga Skin Clinic" style={{ height: 54 }} />
              <p className="foot__tag">Seoul-grade skincare in Duluth — trusted devices, expert hands, natural results.</p>
            </div>
            <div className="foot__nap">
              {CONFIG.address}<br /><a href={CONFIG.phoneHref}>{CONFIG.phone}</a><br />Mon–Sat 9:30 AM–6:30 PM · Sun Closed
            </div>
          </div>
          <p className="foot__legal">© 2026 Nuga Skin Clinic · Duluth, GA. All rights reserved.</p>
        </div>
      </footer>

      <Rail />
    </>
  );
}
