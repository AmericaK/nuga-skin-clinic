import { useEffect, useState } from "react";

/*
   NUGA SKIN CLINIC — Contact / Booking
   Submits to  POST /api/contact  ->  Express + Resend  ->  seon0807@gmail.com
   (See server contact route file for the backend handler.)
*/

const CONFIG = {
  phone: "(770) 687-2545",
  phoneHref: "tel:+17706872545",
  address: "2005 Boggs Rd #101, Duluth, GA 30096",
  INSTAGRAM: "https://www.instagram.com/nugaskinclinic/",
  FACEBOOK: "https://www.facebook.com/nugabeautyskincare/",
  MAP: "https://www.google.com/maps?q=2005+Boggs+Rd+%23101,+Duluth,+GA+30096&output=embed",
};

const TREATMENT_OPTIONS = [
  "Ultherapy",
  "Thermage FLX",
  "Potenza RF",
  "Laser Treatments",
  "Injectables",
  "Facials & Lymphatic",
];

type Status = "idle" | "sending" | "ok" | "err";

export default function Contact() {
  const [scrolled, setScrolled] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [treatments, setTreatments] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    document.title = "Book & Contact | Nuga Skin Clinic — Duluth, GA";
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

  const toggleTreatment = (t: string) =>
    setTreatments((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setStatus("err");
      setErrMsg("Please fill in your name, email, and message.");
      return;
    }
    setStatus("sending");
    setErrMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email, phone, treatments, message }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json().catch(() => ({}));
      if (data && data.ok === false) throw new Error(data.error || "Send failed");
      setStatus("ok");
      setFirstName(""); setEmail(""); setPhone(""); setTreatments([]); setMessage("");
    } catch (err) {
      setStatus("err");
      setErrMsg("Sorry — something went wrong sending your request. Please call us at (770) 687-2545 or email seon0807@gmail.com.");
    }
  }

  return (
    <>
      {/* NAV */}
      <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="wrap nav__inner">
          <a className="brand" href="/"><img className="brand__logo" src="/logo.png" alt="Nuga Skin Clinic" /></a>
          <nav className="nav__links">
            <a className="nav__deal" href="/deals">Deals</a>
            <a className="nav__link" href="/#services">Services</a>
            <a className="nav__link" href="/#reviews">Results</a>
            <a className="nav__link" href="/about">About</a>
            <a className="nav__link" href="/contact">Contact</a>
            <a className="btn btn--solid nav__cta" href="/contact">Book</a>
          </nav>
          <button className="nav__burger" aria-label="Menu">☰</button>
        </div>
      </header>

      {/* HEADER */}
      <section className="section subpage">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: 720 }}>
            <p className="eyebrow section__eyebrow">Book &amp; Contact</p>
            <h1 className="section__title">Let&rsquo;s get you booked.</h1>
            <p className="about__lead">
              Tell us what you&rsquo;re interested in and we&rsquo;ll get back to you to confirm your appointment.
              Prefer to talk? Call <a href={CONFIG.phoneHref} style={{ color: "var(--gold-deep)" }}>{CONFIG.phone}</a>.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cform__grid">
            {/* FORM */}
            <form className="reveal" onSubmit={handleSubmit} noValidate>
              <div className="cfield">
                <label className="cfield__label" htmlFor="cf-name">First name <span>*</span></label>
                <input id="cf-name" className="cinput" type="text" value={firstName}
                  onChange={(e) => setFirstName(e.target.value)} autoComplete="given-name" />
              </div>

              <div className="cform__row">
                <div className="cfield">
                  <label className="cfield__label" htmlFor="cf-email">Email <span>*</span></label>
                  <input id="cf-email" className="cinput" type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                </div>
                <div className="cfield">
                  <label className="cfield__label" htmlFor="cf-phone">Phone</label>
                  <input id="cf-phone" className="cinput" type="tel" value={phone}
                    onChange={(e) => setPhone(e.target.value)} autoComplete="tel" placeholder="(770) 000-0000" />
                </div>
              </div>

              <div className="cfield">
                <label className="cfield__label">Which treatment are you interested in?</label>
                <div className="cchecks">
                  {TREATMENT_OPTIONS.map((t) => (
                    <label className="ccheck" key={t}>
                      <input type="checkbox" checked={treatments.includes(t)} onChange={() => toggleTreatment(t)} />
                      <span>{t}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="cfield">
                <label className="cfield__label" htmlFor="cf-msg">Write a message <span>*</span></label>
                <textarea id="cf-msg" className="ctextarea" value={message}
                  onChange={(e) => setMessage(e.target.value)} placeholder="When would you like to come in? Any questions?" />
              </div>

              <button type="submit" className="btn btn--solid cform__submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Submit"}
              </button>

              {status === "ok" && (
                <p className="cnote" style={{ color: "var(--gold-deep)" }}>
                  Thank you — your request has been sent. We&rsquo;ll be in touch shortly.
                </p>
              )}
              {status === "err" && (
                <p className="cnote" style={{ color: "#b23b3b" }}>{errMsg}</p>
              )}
            </form>

            {/* INFO */}
            <aside className="reveal">
              <div className="cinfo__row">
                <p className="cinfo__label">Call us</p>
                <p className="cinfo__val"><a href={CONFIG.phoneHref} style={{ color: "var(--ink)" }}>{CONFIG.phone}</a></p>
              </div>
              <div className="cinfo__row">
                <p className="cinfo__label">Visit us</p>
                <p className="cinfo__val">{CONFIG.address}</p>
              </div>
              <div className="cinfo__row">
                <p className="cinfo__label">Hours</p>
                <p className="cinfo__val" style={{ fontSize: 16, lineHeight: 1.8 }}>
                  Mon–Sat: 9:30 AM – 6:30 PM<br />Sun: Closed
                </p>
              </div>
              <div className="cinfo__row" style={{ display: "flex", gap: 12 }}>
                <a href={CONFIG.INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"
                  style={{ width: 42, height: 42, borderRadius: "50%", display: "grid", placeItems: "center", background: "var(--ink)", color: "#fff" }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.3.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.3-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.3-.6-.4-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.3 1.3-.4 2.3-.5C9 2 9.3 2 12 2zm0 3.4a6.6 6.6 0 100 13.2 6.6 6.6 0 000-13.2zm0 1.8a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zm5.3-3.1a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                </a>
                <a href={CONFIG.FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook"
                  style={{ width: 42, height: 42, borderRadius: "50%", display: "grid", placeItems: "center", background: "var(--ink)", color: "#fff" }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M14 9h2.5l.3-3H14V4.5c0-.8.2-1.3 1.4-1.3H17V.6C16.7.5 15.7.5 14.6.5 12.3.5 11 1.8 11 4.3V6H8.5v3H11v9h3V9z"/></svg>
                </a>
              </div>
              <iframe className="cmap" title="Nuga Skin Clinic location" loading="lazy" src={CONFIG.MAP} />
            </aside>
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
              {CONFIG.address}<br /><a href={CONFIG.phoneHref}>{CONFIG.phone}</a><br />Mon–Sat 9:30 AM–6:30 PM · Sun Closed
            </div>
          </div>
          <p className="foot__legal">© 2026 Nuga Skin Clinic · Duluth, GA. All rights reserved.</p>
        </div>
      </footer>

      {/* RAIL */}
      <div className="rail" aria-label="Quick contact">
        <a href={CONFIG.phoneHref} aria-label="Call"><svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .7-.2 1L6.6 10.8z"/></svg></a>
        <a href={CONFIG.INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.3.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.3-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.3-.6-.4-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.3 1.3-.4 2.3-.5C9 2 9.3 2 12 2zm0 3.4a6.6 6.6 0 100 13.2 6.6 6.6 0 000-13.2zm0 1.8a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zm5.3-3.1a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg></a>
        <a href={CONFIG.FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M14 9h2.5l.3-3H14V4.5c0-.8.2-1.3 1.4-1.3H17V.6C16.7.5 15.7.5 14.6.5 12.3.5 11 1.8 11 4.3V6H8.5v3H11v9h3V9z"/></svg></a>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Top"><svg viewBox="0 0 24 24"><path d="M12 8l-6 6 1.4 1.4L12 10.8l4.6 4.6L18 14z"/></svg></button>
      </div>
    </>
  );
}
