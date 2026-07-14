import { useEffect } from "react";
import { TREATMENTS, BOOKING_URL } from "./treatments";

export default function Treatment({ slug }: { slug: string }) {
  const t = TREATMENTS.find((x) => x.slug === slug);

  useEffect(() => {
    if (t) {
      document.title = `${t.name} | Nuga Skin Clinic — Duluth, GA`;
      const md = document.querySelector('meta[name="description"]');
      if (md) md.setAttribute("content", `${t.name} at Nuga Skin Clinic in Duluth, GA. ${t.summary}`);
    }
  }, [t]);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // 잘못된 slug → 홈으로 안내
  if (!t) {
    return (
      <div style={{ minHeight: "60vh", display: "grid", placeItems: "center", textAlign: "center", padding: 40 }}>
        <div>
          <p style={{ fontFamily: "var(--f-display)", fontSize: 28 }}>Treatment not found</p>
          <p style={{ marginTop: 12 }}><a href="/" style={{ color: "var(--gold-deep)" }}>← Home</a></p>
        </div>
      </div>
    );
  }

  const others = TREATMENTS.filter((x) => x.slug !== slug);

  return (
    <>
      {/* NAV */}
      <header className="nav is-scrolled">
        <div className="wrap nav__inner">
          <a className="brand" href="/"><img className="brand__logo" src="/logo.png" alt="Nuga Skin Clinic" /></a>
          <nav className="nav__links">
            <a className="nav__link" href="/#services">Services · 시술</a>
            <a className="nav__link" href="/#reviews">Results · 후기</a>
            <a className="nav__link" href="/about">About · 소개</a>
            <a className="nav__link" href="/#visit">Visit · 오시는 길</a>
            <a className="btn btn--solid nav__cta" href={BOOKING_URL} target="_blank" rel="noreferrer">Book · 예약</a>
          </nav>
          <button className="nav__burger" aria-label="Menu">☰</button>
        </div>
      </header>

      {/* HERO */}
      <section className="tx-hero subpage">
        <div className="wrap tx-hero__grid">
          <div className="reveal">
            <p className="eyebrow">Treatment · 시술</p>
            <h1 className="tx-hero__title">{t.name}</h1>
            <p className="tx-hero__kr kr">{t.kr}</p>
            <p className="tx-hero__summary">{t.summary}</p>
            <div className="tx-hero__cta">
              <a className="btn btn--solid" href={BOOKING_URL} target="_blank" rel="noreferrer">상담 예약 · Book a consultation</a>
              <a className="btn btn--ghost" href="/#services">← 시술 전체 · All treatments</a>
            </div>
          </div>
          <div className="tx-hero__img reveal"><img src={t.img} alt={t.name} /></div>
        </div>
      </section>

      {/* ABOUT + GOOD FOR */}
      <section className="section">
        <div className="wrap tx-body">
          <div className="tx-about reveal">
            <p className="eyebrow section__eyebrow">About</p>
            <p className="tx-about__p">{t.aboutEN}</p>
            <p className="tx-about__p kr">{t.aboutKR}</p>
            <p className="tx-note">* 효과는 개인에 따라 다를 수 있으며, 정확한 계획은 상담을 통해 결정됩니다. Results vary by individual; a personalized plan is set at consultation.</p>
          </div>
          <aside className="tx-good reveal">
            <p className="eyebrow section__eyebrow">Good for · 이런 분께</p>
            <ul className="tx-good__list">
              {t.goodFor.map((g) => (<li key={g}>{g}</li>))}
            </ul>
            <a className="btn btn--gold" href={BOOKING_URL} target="_blank" rel="noreferrer" style={{ marginTop: 24 }}>예약하기 · Book now</a>
          </aside>
        </div>
      </section>

      {/* OTHER TREATMENTS */}
      <section className="section section--dark">
        <div className="wrap">
          <div className="section__head reveal">
            <p className="eyebrow section__eyebrow" style={{ color: "var(--gold)" }}>More</p>
            <h2 className="section__title">Explore other treatments.<span className="kr">다른 시술 보기</span></h2>
          </div>
          <div className="tx-others reveal">
            {others.map((o) => (
              <a className="tx-others__card" key={o.slug} href={`/treatments/${o.slug}`}>
                <img src={o.img} alt={o.name} />
                <span className="tx-others__scrim" aria-hidden />
                <span className="tx-others__name">{o.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <div className="wrap">
          <div className="foot__grid">
            <div className="foot__brand">
              <img className="brand__logo" src="/logo.png" alt="Nuga Skin Clinic" style={{ height: 54 }} />
              <p className="foot__tag kr">서울의 피부 기술을, 애틀랜타에서. 정품 장비, 전문가의 손, 자연스러운 결과.</p>
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
