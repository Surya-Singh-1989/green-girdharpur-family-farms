"use client";

import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const slides = useMemo(
    () => Array.from({ length: 10 }).map((_, i) => `/photos/farm-${i + 1}.jpeg`),
    []
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [resIndex, setResIndex] = useState(0);

  // Auto-advance every 3.5 seconds
  useEffect(() => {
    if (paused) return;

    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(t);
  }, [paused, slides.length]);

  useEffect(() => {
    if (paused) return;

    const t = setInterval(() => {
      setResIndex((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(t);
  }, [paused]);

  return (
    <div className="page">
      {/* Header + navigation */}
      <header className="header">
        <div className="container headerInner">
          <div className="brand"></div>

          <nav className="nav" aria-label="Primary">
            <a className="navLink" href="#photos">
              Photos
            </a>
            <a className="navLink" href="#produce">
              Produce
            </a>
            <a className="navLink" href="#practices">
              Practices
            </a>
            <a className="navLink" href="#vision">
              Vision
            </a>
            <a className="navLink" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroCopy">
              <h1 className="h1">Basant Family Farms</h1>
              <p className="subhead">
                A family farm near Narnaul—trusted staples, green vegetables, and seasonal fruits.
              </p>

              <div className="ctaRow" role="group" aria-label="Primary actions">
                <a className="btn btnPrimary" href="#contact">
                  Enquire availability
                </a>
                <a className="btn btnSecondary" href="#contact">
                  Contact us
                </a>
                <a className="btn btnTertiary" href="#produce">
                  Check produce
                </a>
              </div>
            </div>

            <aside className="heroCard" aria-label="Quick info">
              <div className="cardTitle">Quick Info</div>
              <ul className="list">
                <li>
                  <span className="label">Location:</span> Girdharpur (Near Narnaul), Haryana
                </li>
               
              </ul>
              <div className="note">
                This is a trial site. We will refine details and add updated photos over time.
              </div>
            </aside>
          </div>
        </section>

        {/* Farm Summary */}
        <section className="section" aria-labelledby="summary-title">
          <div className="container">
            <h2 id="summary-title" className="h2">
              Farm Summary
            </h2>
            <p className="p">
              Basant Family Farms is a family-run farm rooted in the fields near Narnaul. We focus on
              growing clean, seasonal produce with care and consistency—so what reaches your home feels
              fresh, simple, and trustworthy.
            </p>
            <p className="p">
              Our approach combines local experience with practical, responsible farming methods. As we
              grow, we want to build long-term relationships with people who value quality and honesty in
              what they eat.
            </p>
          </div>
        </section>

        {/* Photos Carousel (moved here: after Farm Summary) */}
        <section id="photos" className="section" aria-labelledby="photos-title">
          <div className="container">
            <h2 id="photos-title" className="h2">
              Photos
            </h2>

            <div
              aria-label="Farm photos carousel"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid rgba(28, 35, 26, 0.12)",
                boxShadow: "0 10px 24px rgba(28, 35, 26, 0.08)",
                background: "#ffffff",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <div
                  style={{
                    display: "flex",
                    width: `${slides.length * 100}%`,
                    transform: `translateX(-${index * (100 / slides.length)}%)`,
                    transition: "transform 600ms ease",
                  }}
                >
                  {slides.map((src, i) => (
                    <div
                      key={src}
                      style={{
                        width: `${100 / slides.length}%`,
                        flex: `0 0 ${100 / slides.length}%`,
                      }}
                    >
                      <img
                        src={src}
                        alt={`Green Girdharpur Family Farms photo ${i + 1}`}
                        style={{
                          width: "100%",
                          height: "360px",
                          objectFit: "cover",
                          display: "block",
                        }}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots */}
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  padding: "10px 12px",
                  justifyContent: "center",
                  borderTop: "1px solid rgba(28, 35, 26, 0.12)",
                  background: "rgba(243, 246, 238, 0.6)",
                }}
              >
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to photo ${i + 1}`}
                    onClick={() => setIndex(i)}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      border: "1px solid rgba(47, 109, 58, 0.35)",
                      background: i === index ? "#2f6d3a" : "transparent",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Produce */}
        <section id="produce" className="section sectionAlt" aria-labelledby="produce-title">
          <div className="container">
            <h2 id="produce-title" className="h2">
              Produce
            </h2>

            <div className="grid3" role="list">
              {/* Cereals (with image) */}
              <article className="card" role="listitem">
                <div className="cardTitle">Cereals</div>
                <div className="chips">
                  <span className="chip">Sharbati Wheat</span>
                </div>

                <div className="produceImgWrap" aria-label="Sharbati wheat photo">
                  <img
                    className="produceImg"
                    src="/produce/sharbati-wheat.jpeg"
                    alt="Sharbati Wheat"
                    loading="lazy"
                  />
                </div>
              </article>

              {/* Vegetables */}
              <article className="card" role="listitem">
                <div className="cardTitle">Green homegrown vegetables</div>
                <div className="chips">
                  <span className="chip">Mint</span>
                  <span className="chip">Spinach</span>
                  <span className="chip">Lemon</span>
                  <span className="chip">Brinjal</span>
                  <span className="chip">Carrots</span>
                  <span className="chip">Muli</span>
                </div>
              </article>

              {/* Fruits */}
              <article className="card" role="listitem">
                <div className="cardTitle">Fruits</div>
                <div className="chips">
                  <span className="chip">Mangoes</span>
                  <span className="chip">Amrud</span>
                </div>
              </article>
            </div>

            <p className="finePrint">
              Availability can vary by season. Please contact us for current stock and timing.
            </p>
          </div>
        </section>

        {/* Farm Practices */}
        <section id="practices" className="section" aria-labelledby="practices-title">
          <div className="container">
            <h2 id="practices-title" className="h2">
              Farm Practices
            </h2>

            <div className="stack">
              <div className="practice">
                <div className="practiceTitle">Soil testing</div>
                <div className="practiceText">
                  We use soil testing to better understand our fields and make more informed decisions for
                  each season.
                </div>
              </div>

              <div className="practice">
                <div className="practiceTitle">Compost and organic manure</div>
                <div className="practiceText">
                  We use compost and organic manure where suitable to support soil health and long-term
                  productivity.
                </div>
              </div>

              <div className="practice">
                <div className="practiceTitle">Low and controlled chemicals</div>
                <div className="practiceText">
                  We keep chemical use low and controlled, focusing on responsible application when needed.
                </div>
              </div>

              <div className="practice">
                <div className="practiceTitle">Handpicked vegetables</div>
                <div className="practiceText">
                  Vegetables are handpicked to maintain freshness and quality from farm to home.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section id="vision" className="section sectionAlt" aria-labelledby="vision-title">
          <div className="container">
            <h2 id="vision-title" className="h2">
              Vision
            </h2>
            <div className="vision">
              We are building a greener future—bringing green to everyone through sustainable agriculture.
            </div>
          </div>
        </section>

        {/* Permanent Residents */}
        <section id="residents" className="section" aria-labelledby="residents-title">
          <div className="container">
            <h2 id="residents-title" className="h2">
              Permanent Residents
            </h2>
            <p className="p">A few familiar faces that are part of daily life on the farm.</p>

            <div
              aria-label="Permanent residents carousel"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid rgba(28, 35, 26, 0.12)",
                boxShadow: "0 10px 24px rgba(28, 35, 26, 0.08)",
                background: "#ffffff",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <div
                  style={{
                    display: "flex",
                    width: `${3 * 100}%`,
                    transform: `translateX(-${resIndex * (100 / 3)}%)`,
                    transition: "transform 600ms ease",
                  }}
                >
                  {[1, 2, 3].map((n) => (
                    <div key={n} style={{ width: `${100 / 3}%`, flex: `0 0 ${100 / 3}%` }}>
                      <img
                        src={`/residents/resident-${n}.jpeg`}
                        alt={`Permanent resident ${n}`}
                        style={{
                          width: "100%",
                          height: "320px",
                          objectFit: "cover",
                          display: "block",
                        }}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 8,
                  padding: "10px 12px",
                  justifyContent: "center",
                  borderTop: "1px solid rgba(28, 35, 26, 0.12)",
                  background: "rgba(243, 246, 238, 0.6)",
                }}
              >
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to resident photo ${i + 1}`}
                    onClick={() => setResIndex(i)}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      border: "1px solid rgba(47, 109, 58, 0.35)",
                      background: i === resIndex ? "#2f6d3a" : "transparent",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section" aria-labelledby="contact-title">
          <div className="container">
            <h2 id="contact-title" className="h2">
              Contact
            </h2>

            <div className="contactCard">
              <div className="contactLead">
                For availability, pricing, or farm-related queries, reach out to us.
              </div>

              <div className="contactRows">
                <div className="contactRow">
                  <span className="label">WhatsApp:</span>{" "}
                  <a className="link" href="#">
                    +91 XXXXXXXXXX
                  </a>
                </div>
                <div className="contactRow">
                  <span className="label">Phone:</span>{" "}
                  <a className="link" href="#">
                    +91 XXXXXXXXXX
                  </a>
                </div>
                <div className="contactRow">
                  <span className="label">Email:</span>{" "}
                  <a className="link" href="mailto:hello@example.com">
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="smallNote">
                (Placeholders for now. We will replace these with your real details when you are ready.)
              </div>
            </div>

            <footer className="footer">
              <div className="finePrint">© {new Date().getFullYear()} Green Girdharpur Family Farms</div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
