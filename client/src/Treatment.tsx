import { useEffect } from "react";
import { TREATMENTS } from "./treatments";

function Media({ src, label, className }: { src?: string; label: string; className?: string }) {
  if (!src) return <div className={`tx-ph ${className || ""}`} data-label={label} />;
  return (
    <div className={`tx-ph ${className || ""}`} data-label={label}>
      <img src={src} alt={label} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} />
    </div>
  );
}

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
  }, [t]);

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
  const benefits = t.benefits && t.benefits.length ? t.benefits : t.goodFor;

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
            <a className="nav__link" href="/contact">Contact</a>
            <a className="btn btn--solid nav__cta" href="/contact">Book</a>
          </nav>
          <button className="nav__burger" aria-label="Menu">☰</button>
        </div>
      </header>

      {/* HERO */}
      <section className="tx-hero subpage">
        <div className="wrap tx-hero__grid">
          <div className="reveal">
            <p className="eyebrow">Treatment</p>
            <h1 className="tx-hero__title">{t.name}</h1>
            <p className="tx-hero__summary">{t.summary}</p>
            <div className="tx-hero__cta">
              <a className="btn btn--solid" href="/contact">Book a consultation</a>
              <a className="btn btn--ghost" href="/#services">← All treatments</a>
            </div>
          </div>
          <div className="tx-hero__img reveal"><img src={t.img} alt={t.name} /></div>
        </div>
      </section>

      {!t.deviceGroups && (<>
      {/* WHAT IS */}
      <section className="section">
        <div className="wrap tx-split">
          <div className="reveal">
            <h2 className="tx-h2">What is {t.name}?</h2>
            <p className="tx-p">{t.whatIs || t.about}</p>
          </div>
          <Media src={t.deviceImg} label={t.name} className="tx-ph--square reveal" />
        </div>
      </section>

      {/* WHY */}
      <section className="section section--soft">
        <div className="wrap tx-split tx-split--rev">
          <div className="reveal">
            <h2 className="tx-h2">Why {t.name}?</h2>
            <p className="tx-p" style={{ marginBottom: 18 }}>A few reasons our clients love this treatment:</p>
            <ul className="tx-benefits">
              {benefits.map((bnf) => (<li key={bnf}>{bnf}</li>))}
            </ul>
          </div>
          {t.whyImg ? (
            <div className="tx-why-img reveal"><img src={t.whyImg} alt={t.name} loading="lazy" /></div>
          ) : (
            <div className="tx-ph tx-ph--wide reveal">
              <img src={t.img} alt={t.name} loading="lazy" />
            </div>
          )}
        </div>
      </section>

      {/* TREATMENT AREAS */}
      {t.treatmentAreas && t.treatmentAreas.length > 0 && (
        <section className="section section--soft">
          <div className="wrap">
            <div className="section__head section__head--center reveal">
              <p className="eyebrow section__eyebrow" style={{ color: "var(--gold-deep)" }}>Treatment areas</p>
              <h2 className="section__title">Where {t.name} can help.</h2>
            </div>
            <div className="tx-areas reveal">
              {t.treatmentAreas.map((a) => (<span className="tx-area" key={a}>{a}</span>))}
            </div>
          </div>
        </section>
      )}

      {/* CLINICAL RESULTS */}
      {(t.resultsGallery?.length || t.results?.length) ? (
        <section className="section">
          <div className="wrap">
            <div className="section__head section__head--center reveal">
              <p className="eyebrow section__eyebrow" style={{ color: "var(--gold-deep)" }}>Clinical Results</p>
              <h2 className="section__title">Before &amp; after.</h2>
            </div>
            {t.resultsGallery?.length ? (
              <div className="tx-gallery reveal">
                {t.resultsGallery.map((im, i) => (
                  <Media key={i} src={im} label="Result" className="tx-ph--portrait" />
                ))}
              </div>
            ) : (
              <div className="tx-results reveal">
                {t.results!.map((grp, gi) => (
                  <div className="tx-result-group" key={gi}>
                    {grp.title && <h3 className="tx-result-title">{grp.title}</h3>}
                    <div className="tx-result-imgs">
                      {grp.imgs.map((im, ii) => (
                        <Media key={ii} src={im} label="Before / After" className="tx-ph--result" />
                      ))}
                    </div>
                    {grp.caption && <p className="tx-result-cap">{grp.caption}</p>}
                  </div>
                ))}
              </div>
            )}
            <p className="tx-note" style={{ textAlign: "center", marginTop: 22 }}>
              * Individual results vary. Photos are for illustration; your plan is set at consultation.
            </p>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      {t.faq && t.faq.length > 0 && (
        <section className="section section--soft">
          <div className="wrap">
            <div className="section__head section__head--center reveal">
              <p className="eyebrow section__eyebrow" style={{ color: "var(--gold-deep)" }}>FAQ</p>
              <h2 className="section__title">Frequently asked questions.</h2>
            </div>
            <div className="tx-faq reveal">
              {t.faq.map((f, i) => (
                <details className="tx-faq__item" key={i}>
                  <summary className="tx-faq__q">{f.q}</summary>
                  <p className="tx-faq__a">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
      </>)}

      {/* LASER — device groups */}
      {t.deviceGroups && (
        <>
          <section className="section">
            <div className={`wrap${t.deviceImg ? " tx-split" : ""}`}>
              <div className="reveal">
                <h2 className="tx-h2">{t.groupsTitle || "Our laser & RF platforms"}</h2>
                <p className="tx-p">{t.about}</p>
              </div>
              {t.deviceImg && <Media src={t.deviceImg} label={t.name} className="tx-ph--square reveal" />}
            </div>
          </section>
          {t.deviceGroups.map((group, gi) => (
            <section className={`section ${gi % 2 === 0 ? "section--soft" : ""}`} key={group.concern}>
              <div className="wrap">
                <div className="section__head section__head--center reveal">
                  <p className="eyebrow section__eyebrow" style={{ color: "var(--gold-deep)" }}>{group.concern}</p>
                  <h2 className="section__title">{group.heading || (group.concern === "Lifting" ? "Lift & tighten." : group.concern === "Brightening" ? "Brighten & even out." : "Clear & resurface.")}</h2>
                </div>
                <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {group.devices.map((d) => (
                    <div key={d.name} style={{ display: "flex", flexWrap: "wrap", gap: 30, alignItems: "flex-start", background: "#fff", border: "1px solid rgba(20,18,15,0.08)", borderRadius: 16, padding: 24 }}>
                      <div style={{ flex: "0 0 340px", maxWidth: "100%" }}>
                        {d.img ? (
                          <img src={d.img} alt={d.name} loading="lazy" style={{ width: "100%", aspectRatio: "1 / 1", objectFit: group.imgCover ? "cover" : "contain", display: "block", borderRadius: 12 }} onError={(e) => { e.currentTarget.style.visibility = "hidden"; }} />
                        ) : (
                          <div style={{ width: "100%", aspectRatio: "1 / 1", borderRadius: 12, background: "#f4f1ec" }} />
                        )}
                      </div>
                      <div style={{ flex: "1 1 380px", minWidth: 0 }}>
                        <h3 className="laser-card__name" style={{ marginTop: 0 }}>{d.name}</h3>
                        <p className="laser-card__desc">{d.desc}</p>
                        {d.howImg && (
                          <div style={{ marginTop: 14 }}>
                            <span style={{ display: "block", fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "var(--gold-deep)", fontWeight: 700, marginBottom: 8 }}>
                              How it works
                            </span>
                            <img
                              src={d.howImg}
                              alt={`How ${d.name} works`}
                              loading="lazy"
                              style={{ width: "100%", borderRadius: 8, display: "block" }}
                              onError={(e) => { e.currentTarget.style.display = "none"; }}
                            />
                          </div>
                        )}
                        {d.gallery && d.gallery.length > 0 && (
                          <div style={{ marginTop: 14 }}>
                            <span style={{ display: "block", fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "var(--gold-deep)", fontWeight: 700, marginBottom: 8 }}>
                              Before &amp; After
                            </span>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                              {d.gallery.map((im, i) => (
                                <img
                                  key={i}
                                  src={im}
                                  alt={`${d.name} result ${i + 1}`}
                                  loading="lazy"
                                  style={{ flex: d.gallery!.length > 1 ? "1 1 30%" : "1 1 100%", minWidth: 120, maxWidth: "100%", borderRadius: 8, display: "block" }}
                                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                                />
                              ))}
                            </div>
                            <p style={{ fontSize: 11, color: "var(--ink-soft, #8a8178)", marginTop: 8 }}>
                              * Individual results vary.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </>
      )}

      {/* BOOK CTA */}
      <section className="section section--dark">
        <div className="wrap tx-cta">
          <h2 className="section__title" style={{ color: "#fff" }}>Ready to start?</h2>
          <p style={{ color: "rgba(247,243,238,0.82)", margin: "14px 0 26px", fontSize: 17 }}>
            Book a consultation and we'll build a plan around your skin.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn btn--gold" href="/contact">Book now</a>
            <a className="btn btn--line" href="tel:+17706872545">Call (770) 687-2545</a>
          </div>
        </div>
      </section>

      {/* OTHER TREATMENTS */}
      <section className="section">
        <div className="wrap">
          <div className="section__head section__head--center reveal">
            <p className="eyebrow section__eyebrow" style={{ color: "var(--gold-deep)" }}>More</p>
            <h2 className="section__title">Explore other treatments.</h2>
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
