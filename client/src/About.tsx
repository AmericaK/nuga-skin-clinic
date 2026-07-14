import { useEffect, useState } from "react";

/* ==========================================================================
   NUGA SKIN CLINIC — About

   채울 값:
   - TEAM_PHOTO : 단체 사진. client/public/ 에 파일 넣고 "/team.jpg" 처럼 지정.
   - STAFF[].photo : 각 직원 사진. "/staff-amy.jpg" 등.
   - STAFF[].role / bio : 직책·소개. ⚠️ 사실만 채우세요. 지어내지 마세요.
     (직책·경력·전문분야를 주시면 소개 문구는 다듬어 드립니다.)
   ========================================================================== */

const BOOKING_URL = "https://www.vagaro.com/nugaskincareclinic";

const TEAM_PHOTO = "/nuga_about.jpg";

// 실제 직원 정보 + 사진. 소개(bio)는 직책 기반의 사실 문구 — 경력·전문분야를 주시면 보강합니다.
const STAFF = [
  {
    name: "Amy Byun",
    role: "Owner · 대표",
    bio: "누가 스킨 클리닉을 이끄는 대표. 팀 전체의 케어 기준을 세우고 진료·운영을 총괄합니다.",
    photo: "/about1.jpg",
  },
  {
    name: "Soo Namgoong",
    role: "MD · 전문의",
    bio: "전문의(Medical Doctor)로서 의료적 판단과 진료를 담당합니다.",
    photo: "/about4.jpg",
  },
  {
    name: "Sumi Kwak",
    role: "NP · 전문간호사",
    bio: "전문간호사(Nurse Practitioner)로 시술 상담과 맞춤 케어 플랜을 담당합니다.",
    photo: "/about2.jpg",
  },
  {
    name: "Jane Jung",
    role: "RN · 간호사",
    bio: "정식 간호사(Registered Nurse)로 안전하고 세심한 시술 진행을 맡습니다.",
    photo: "/about3.jpg",
  },
];

export default function About() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const initial = (name: string) => (name.match(/[A-Za-z가-힣]/)?.[0] ?? "·").toUpperCase();

  return (
    <>
      {/* ================= NAV ================= */}
      <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="wrap nav__inner">
          <a className="brand" href="/">
            <img className="brand__logo" src="/logo.png" alt="Nuga Skin Clinic" />
          </a>
          <nav className="nav__links">
            <a className="nav__link" href="/#services">Services · 시술</a>
            <a className="nav__link" href="/#reviews">Results · 후기</a>
            <a className="nav__link" href="/about">About · 소개</a>
            <a className="nav__link" href="/#visit">Visit · 오시는 길</a>
            <a className="btn btn--solid nav__cta" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book · 예약
            </a>
          </nav>
          <button className="nav__burger" aria-label="Menu">☰</button>
        </div>
      </header>

      {/* ================= INTRO ================= */}
      <section className="section subpage">
        <div className="wrap">
          <div className="about__intro reveal">
            <p className="eyebrow section__eyebrow">About · 소개</p>
            <h1 className="section__title">
              The hands behind your skin.
              <span className="kr">당신의 피부를 맡은 손길</span>
            </h1>
            <p className="about__lead">
              At Nuga Skin Clinic, Seoul-grade technique meets one-on-one care. Our specialists work
              with medical-grade devices and a treatment plan built around your skin — not a menu.
            </p>
            <p className="about__lead kr">
              누가 스킨 클리닉은 서울의 피부 관리 노하우와 일대일 맞춤 케어를 함께 담았습니다. 정품 의료 장비와,
              정형화된 메뉴가 아닌 개개인의 피부에 맞춘 관리로 애틀랜타 가족들의 신뢰를 이어오고 있습니다.
            </p>
            {/* 위 소개 문구는 검토·교체 가능합니다. 창업 연도·설립 스토리 등 사실을 주시면 반영합니다. */}
          </div>
        </div>
      </section>

      {/* ================= TEAM (단체 사진 + 설명) ================= */}
      <section className="section section--dark">
        <div className="wrap">
          <div className="team">
            <div className="team__photo reveal">
              {TEAM_PHOTO ? (
                <img className="team__img" src={TEAM_PHOTO} alt="Nuga Skin Clinic 팀" />
              ) : (
                <div className="team__ph">
                  <span className="team__ph-mark">Team Photo</span>
                  <span className="team__ph-cap">단체 사진 · client/public/team.jpg</span>
                </div>
              )}
            </div>
            <div className="team__text reveal">
              <p className="eyebrow section__eyebrow" style={{ color: "var(--gold)" }}>Our team · 팀 소개</p>
              <h2 className="section__title">One team, one standard of care.</h2>
              <p className="about__lead" style={{ color: "rgba(247,243,238,0.82)" }}>
                Every member of Nuga is trained to the same standard: listen first, treat with
                precision, and follow through. That consistency is why families return, year after year.
              </p>
              <p className="about__lead kr" style={{ color: "rgba(247,243,238,0.82)" }}>
                누가의 모든 구성원은 같은 기준으로 일합니다. 먼저 듣고, 정밀하게 시술하고, 끝까지 책임집니다.
                온 가족이 해마다 다시 찾는 이유가 바로 이 일관성입니다.
              </p>
              {/* 팀 설명 문구도 대표님 제공 사실(구성·인원·이력)에 맞춰 교체 가능 */}
            </div>
          </div>
        </div>
      </section>

      {/* ================= STAFF (4명) ================= */}
      <section className="section">
        <div className="wrap">
          <div className="section__head reveal">
            <p className="eyebrow section__eyebrow">Meet the specialists</p>
            <h2 className="section__title">
              Our specialists.
              <span className="kr">전문가 소개</span>
            </h2>
          </div>

          <div className="staff__grid">
            {STAFF.map((s, i) => (
              <article className="staff__card reveal" key={i}>
                <div className="staff__photo">
                  {s.photo ? (
                    <img className="staff__img" src={s.photo} alt={s.name} />
                  ) : (
                    <span className="staff__initial">{initial(s.name)}</span>
                  )}
                </div>
                <h3 className="staff__name">{s.name}</h3>
                <p className="staff__role">{s.role}</p>
                <p className="staff__bio kr">{s.bio}</p>
              </article>
            ))}
          </div>

          <div className="about__cta reveal">
            <a className="btn btn--solid" href={BOOKING_URL} target="_blank" rel="noreferrer">
              상담 예약 · Book a consultation
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="foot">
        <div className="wrap">
          <div className="foot__grid">
            <div className="foot__brand">
              <img className="brand__logo" src="/logo.png" alt="Nuga Skin Clinic" style={{ height: 54 }} />
              <p className="foot__tag kr">서울의 피부 기술을, 애틀랜타에서. 정품 장비, 전문가의 손, 자연스러운 결과.</p>
            </div>
            <div className="foot__nap">
              2005 Boggs Rd #101, Duluth, GA 30096<br />
              <a href="tel:+17706872545">(770) 687-2545</a><br />
              Mon–Sat 9:30 AM–6:30 PM · Sun Closed
            </div>
          </div>
          <p className="foot__legal">© 2026 Nuga Skin Clinic · Duluth, GA. All rights reserved.</p>
        </div>
      </footer>

      {/* ===== Right social rail (site-wide) ===== */}
      <div className="rail" aria-label="Quick contact">
        <a href="tel:+17706872545" aria-label="Call">
          <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .7-.2 1L6.6 10.8z"/></svg>
        </a>
        <a href="https://www.instagram.com/nugaskinclinic/" target="_blank" rel="noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24"><path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.3.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.3-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.3-.6-.4-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.3 1.3-.4 2.3-.5C9 2 9.3 2 12 2zm0 3.4a6.6 6.6 0 100 13.2 6.6 6.6 0 000-13.2zm0 1.8a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zm5.3-3.1a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
        </a>
        <a href="https://www.facebook.com/nugabeautyskincare/" target="_blank" rel="noreferrer" aria-label="Facebook">
          <svg viewBox="0 0 24 24"><path d="M14 9h2.5l.3-3H14V4.5c0-.8.2-1.3 1.4-1.3H17V.6C16.7.5 15.7.5 14.6.5 12.3.5 11 1.8 11 4.3V6H8.5v3H11v9h3V9z"/></svg>
        </a>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Top">
          <svg viewBox="0 0 24 24"><path d="M12 8l-6 6 1.4 1.4L12 10.8l4.6 4.6L18 14z"/></svg>
        </button>
      </div>
    </>
  );
}
