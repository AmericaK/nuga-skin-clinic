import { useEffect, useState } from "react";

/* ==========================================================================
   NUGA SKIN CLINIC — Home (v3 · Haoderm 레퍼런스 포맷)
   흰 네비 + 풀블리드 히어로 + 딥그린 인용 섹션 + 우측 소셜 레일
   ========================================================================== */
const CONFIG = {
  phone: "(770) 687-2545",
  phoneHref: "tel:+17706872545",
  address: "2005 Boggs Rd #101, Duluth, GA 30096",
  BOOKING_URL: "https://www.vagaro.com/nugaskincareclinic",
  INSTAGRAM: "https://www.instagram.com/nugaskinclinic/",
  FACEBOOK: "https://www.facebook.com/nugabeautyskincare/",
  GOOGLE_REVIEWS: "https://www.google.com/maps/search/?api=1&query=Nuga%20Skin%20Clinic%20Duluth%20GA",
  // 히어로 슬라이드쇼: client/public/ 에 hero1~hero5.jpg. 4초 간격 크로스페이드.
  HERO_IMAGES: ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg", "/hero4.jpg", "/hero5.jpg"],
  HERO_INTERVAL: 4000,
};

const SERVICES = [
  { en: "Laser & Lifting", kr: "레이저 · 리프팅", items: ["Thermage FLX", "Ultherapy", "Potenza", "InMode"], note: "정품 프리미엄 장비로 진행하는 비수술 리프팅과 피부 탄력 케어." },
  { en: "Injectables", kr: "주사 시술", items: ["Botox", "Filler", "Thread Lift"], note: "의료 전문 인력이 시술하는 보톡스 · 필러 · 실 리프팅." },
  { en: "Skin Treatments", kr: "피부 케어", items: ["RF Microneedling", "HydraFacial", "Pigmentation", "Acne-scar Care"], note: "색소 · 여드름 흉터 · 모공까지, 피부 결을 바로잡는 정밀 케어." },
  { en: "Wellness", kr: "웰니스", items: ["Eastern Meridian Massage · 경락"], note: "겉이 아니라 흐름부터. 몸의 균형을 되찾는 동양 경락 관리." },
];

const REVIEWS = [
  { quote: "5년째 다니고 있어요. Amy Byun 원장님이 늘 꼼꼼하게 봐주시고 꼭 필요한 케어만 권해주세요.", by: "Hyewon K. · Microneedling · Google" },
  { quote: "Drove 4 hours from Florida for an authentic Korean facial. Loved it — we'll be back.", by: "Gabrielle H. · Google" },
  { quote: "써마지로 시작한 뒤 계속 만족하고 있어요. 온 가족이 함께 다니는, 믿고 맡기는 곳입니다.", by: "Young Sook K. · Thermage · Google" },
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

  // 히어로 슬라이드쇼 (4초 간격 자동 전환)
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
      {/* ===== NAV (흰색) ===== */}
      <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="wrap nav__inner">
          <a className="brand" href="#top">
            <img className="brand__logo" src="/logo.png" alt="Nuga Skin Clinic" />
          </a>
          <nav className="nav__links">
            <a className="nav__link" href="#services">Services · 시술</a>
            <a className="nav__link" href="#reviews">Results · 후기</a>
            <a className="nav__link" href="/about">About · 소개</a>
            <a className="nav__link" href="#visit">Visit · 오시는 길</a>
            <a className="btn btn--solid nav__cta" href={CONFIG.BOOKING_URL} target="_blank" rel="noreferrer">Book · 예약</a>
          </nav>
          <button className="nav__burger" aria-label="Menu">☰</button>
        </div>
      </header>

      {/* ===== HERO (5장 크로스페이드 슬라이드쇼, 4초) ===== */}
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

      {/* ===== GREEN INTRO (인용 섹션) ===== */}
      <section className="intro">
        <div className="intro__inner reveal">
          <h1 className="intro__h1">&lsquo;K-beauty, without the flight&rsquo;</h1>
          <p className="intro__sub kr">서울의 피부 기술을, 애틀랜타에서</p>
          <p className="intro__lead">
            Nuga Skin Clinic delivers personalized skincare built on years of clinical experience and
            medical-grade technology. Every treatment is tailored to your skin — never a fixed menu —
            so you can restore and maintain healthy, radiant skin.
            <span className="kr">정품 장비와 숙련된 전문가의 일대일 케어로, 자연스럽고 정제된 결과를 만듭니다.</span>
          </p>
          <div className="intro__cta">
            <a className="btn btn--gold" href={CONFIG.BOOKING_URL} target="_blank" rel="noreferrer">상담 예약 · Book a consultation</a>
            <a className="btn btn--line" href="#services">시술 보기 · Explore treatments</a>
          </div>
          <div className="intro__trust">
            <div className="intro__stat"><b>4.8★</b><span>Google Rating</span></div>
            <span className="intro__div" aria-hidden />
            <div className="intro__stat"><b>150+</b><span>Reviews</span></div>
            <span className="intro__div" aria-hidden />
            <div className="intro__stat"><b>13 yrs</b><span>In Duluth</span></div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="section__head reveal">
            <p className="eyebrow section__eyebrow">What we do</p>
            <h2 className="section__title">Precision care, from laser to touch.<span className="kr">레이저부터 손끝 케어까지</span></h2>
          </div>
          <div className="svc reveal">
            {SERVICES.map((s) => (
              <div className="svc__cell" key={s.en}>
                <div className="svc__cat"><h3>{s.en}</h3><span className="kr">{s.kr}</span></div>
                <ul className="svc__list">{s.items.map((it) => (<li key={it}>{it}</li>))}</ul>
                <p className="svc__note kr">{s.note}</p>
              </div>
            ))}
          </div>
          <div className="meridian reveal" style={{ marginTop: "clamp(48px, 7vw, 96px)" }} aria-hidden />
        </div>
      </section>

      {/* ===== REVIEWS (green) ===== */}
      <section className="section section--dark" id="reviews">
        <div className="wrap">
          <div className="section__head reveal">
            <p className="eyebrow section__eyebrow" style={{ color: "var(--gold)" }}>Why Atlanta trusts Nuga</p>
            <h2 className="section__title">Results our clients come back for.<span className="kr">다시 찾는 이유, 결과입니다</span></h2>
          </div>
          <div className="rev__grid reveal">
            {REVIEWS.map((r, i) => (
              <blockquote className="rev__card" key={i}>
                <div className="rev__stars" aria-hidden>★★★★★</div>
                <p className={`rev__quote${/[가-힣]/.test(r.quote) ? " kr" : ""}`}>{r.quote}</p>
                <cite className="rev__by">{r.by}</cite>
              </blockquote>
            ))}
          </div>
          <div className="rev__foot reveal">
            <p className="kr" style={{ color: "rgba(247,243,238,0.7)", fontSize: 15 }}>실제 구글 리뷰에서 발췌 · 4.8★ · 151개</p>
            <a href={CONFIG.GOOGLE_REVIEWS} target="_blank" rel="noreferrer">Read all reviews on Google →</a>
          </div>
        </div>
      </section>

      {/* ===== VISIT ===== */}
      <section className="section" id="visit">
        <div className="wrap">
          <div className="section__head reveal">
            <p className="eyebrow section__eyebrow">Visit us</p>
            <h2 className="section__title">Duluth, Georgia.<span className="kr">오시는 길 · 예약</span></h2>
          </div>
          <div className="visit__grid">
            <div className="visit__nap reveal">
              <div className="visit__row"><span className="visit__label">Address · 주소</span><span className="visit__val">{CONFIG.address}</span></div>
              <div className="visit__row"><span className="visit__label">Phone · 전화</span><span className="visit__val"><a href={CONFIG.phoneHref}>{CONFIG.phone}</a></span></div>
              <div className="visit__row">
                <span className="visit__label">Hours · 영업시간</span>
                <dl className="visit__hours"><dt>Mon–Sat</dt><dd>9:30 AM – 6:30 PM</dd><dt>Sun</dt><dd>Closed</dd></dl>
              </div>
              <div className="visit__row"><a className="btn btn--solid" href={CONFIG.BOOKING_URL} target="_blank" rel="noreferrer">상담 예약 · Book now</a></div>
              <div className="visit__social">
                <a href={CONFIG.INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
                <a href={CONFIG.FACEBOOK} target="_blank" rel="noreferrer">Facebook</a>
              </div>
            </div>
            <iframe className="visit__map reveal" title="Nuga Skin Clinic location" loading="lazy"
              src="https://www.google.com/maps?q=2005+Boggs+Rd+%23101,+Duluth,+GA+30096&output=embed" />
          </div>
        </div>
      </section>

      {/* ===== FOOTER (green) ===== */}
      <footer className="foot">
        <div className="wrap">
          <div className="foot__grid">
            <div className="foot__brand">
              <img className="brand__logo" src="/logo.png" alt="Nuga Skin Clinic" style={{ height: 54 }} />
              <p className="foot__tag kr">서울의 피부 기술을, 애틀랜타에서. 정품 장비, 전문가의 손, 자연스러운 결과.</p>
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
