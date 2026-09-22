import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  Hotel,
  MapPin,
  Menu,
  MessageCircle,
  Plane,
  Phone,
  ShieldCheck,
  Sparkles,
  TrainFront,
  TreePalm,
  Users,
  X,
} from "lucide-react";

import logo from "@/assets/csp-logo.jpg";
import goaCoast from "@/assets/goa-coast.jpg";
import dudhsagar from "@/assets/dudhsagar.jpg";
import southGoa from "@/assets/south-goa.jpg";

const navItems = [
  ["Goa Packages", "#packages"],
  ["Sightseeing", "#sightseeing"],
  ["Services", "#services"],
  ["About us", "#about"],
];

const packages = [
  {
    eyebrow: "THE CLASSIC",
    title: "North Goa, your way",
    copy: "Beaches, forts, cafés and the easy-going energy that makes Goa unforgettable.",
    image: goaCoast,
    days: "3–4 days",
    tag: "Best for first visits",
  },
  {
    eyebrow: "THE WILD SIDE",
    title: "Dudhsagar escape",
    copy: "Trade the coast for misty forests, thundering falls and a day worth retelling.",
    image: dudhsagar,
    days: "1 full day",
    tag: "Adventure favourite",
  },
  {
    eyebrow: "THE SLOW EDIT",
    title: "South Goa, unhurried",
    copy: "Quieter shores, golden light and space to travel at exactly your own pace.",
    image: southGoa,
    days: "3–5 days",
    tag: "For slow travellers",
  },
];

const services = [
  {
    icon: Compass,
    number: "01",
    title: "Goa tour packages",
    copy: "Thoughtful itineraries for families, couples, groups and everyone in between.",
  },
  {
    icon: TreePalm,
    number: "02",
    title: "North & South Goa",
    copy: "See the famous spots, then let us show you the corners most visitors miss.",
  },
  {
    icon: Hotel,
    number: "03",
    title: "Hotels that fit",
    copy: "Comfortable stays across budgets, chosen around your plans and priorities.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Cab & transfers",
    copy: "Reliable vehicles, airport pickups and railway transfers without the guesswork.",
  },
];

function scrollToId(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver.disconnect();
    };
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <div className="nav-inner">
          <a className="brand-lockup" href="#top" aria-label="CSP Global Tours home">
            <span className="brand-mark"><img src={logo} alt="CSP Global Tour logo" width="48" height="48" /></span>
            <span className="brand-copy">
              <strong>CSP GLOBAL</strong>
              <small>TOURS & TRAVEL</small>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <a className="nav-call" href="tel:+918489036959">
            <Phone size={15} strokeWidth={2.4} />
            <span>Call us</span>
          </a>
          <button className="menu-toggle" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen((value) => !value)}>
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="mobile-nav">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMobile}>{label}<ArrowRight size={16} /></a>
            ))}
            <a href="#contact" className="mobile-nav__cta" onClick={closeMobile}>Plan my Goa trip <ArrowRight size={16} /></a>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-backdrop" style={{ backgroundImage: `url(${goaCoast})` }} />
          <div className="hero-shade" />
          <div className="hero-grain" />
          <div className="hero-content page-wrap">
            <div className="hero-kicker"><span /> YOUR GOA, BEAUTIFULLY PLANNED</div>
            <div className="hero-layout">
              <div className="hero-copy">
                <h1>Go where<br /><em>the light is.</em></h1>
                <p className="hero-lede">The beaches, backroads and little moments that turn a Goa holiday into a story you keep telling.</p>
                <div className="hero-actions">
                  <a className="button button--orange" href="#contact">Plan my Goa trip <ArrowUpRight /></a>
                  <a className="text-link text-link--light" href="#packages">Explore packages <ArrowDownRight /></a>
                </div>
              </div>
              <div className="hero-aside">
                <div className="hero-aside__line" />
                <p>YOUR TRUSTED<br />TRAVEL PARTNER<br /><strong>IN GOA</strong></p>
                <span className="hero-aside__stamp">EST. 2012 <span>✳</span> INDIA</span>
              </div>
            </div>
            <div className="hero-bottom">
              <div className="hero-note"><MapPin size={16} /> Goa, India <span>•</span> Personal, local & easy</div>
              <div className="hero-scroll"><span>Scroll to explore</span><span className="scroll-line" /></div>
            </div>
          </div>
        </section>

        <section className="intro-section page-wrap reveal" id="about">
          <div className="section-marker">01 <span>/</span> WHY CSP GLOBAL</div>
          <div className="intro-grid">
            <h2>Travel plans with<br /><em>a human touch.</em></h2>
            <div className="intro-copy">
              <p className="standfirst">Goa is easy to love. We make it easy to experience.</p>
              <p>From the first “where should we stay?” to the ride back to the airport, CSP Global Tours brings the local know-how, thoughtful planning and on-ground care that let you simply enjoy being there.</p>
              <a className="text-link" href="#services">How we make it easy <ArrowRight /></a>
            </div>
          </div>
          <div className="trust-strip">
            <div><strong>12+</strong><span>years of Goa<br />know-how</span></div>
            <div><strong>500<span>+</span></strong><span>happy journeys<br />& counting</span></div>
            <div><strong>24<span>/</span>7</strong><span>local support<br />when you need it</span></div>
            <div className="trust-strip__last"><Sparkles size={18} /><span>Made for<br /><strong>your kind of trip.</strong></span></div>
          </div>
        </section>

        <section className="packages-section" id="packages">
          <div className="page-wrap">
            <div className="section-heading section-heading--light">
              <div><div className="section-marker section-marker--light">02 <span>/</span> START HERE</div><h2>Pick a mood.<br /><em>We’ll map the rest.</em></h2></div>
              <p>Every trip is different. Choose the feeling you want to take home, and we’ll handle the details in between.</p>
            </div>
            <div className="package-grid">
              {packages.map((item, index) => (
                  <a className={`package-card package-card--${index + 1} reveal reveal-delay-${index + 1}`} href="#contact" key={item.title}>
                  <img src={item.image} alt={item.title} />
                  <div className="package-card__shade" />
                  <div className="package-card__top"><span>{item.eyebrow}</span><span className="package-card__arrow"><ArrowUpRight size={18} /></span></div>
                  <div className="package-card__bottom"><span className="package-card__tag">{item.tag}</span><h3>{item.title}</h3><p>{item.copy}</p><span className="package-card__duration"><Clock3 size={13} /> {item.days}</span></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section page-wrap" id="services">
          <div className="section-heading">
            <div><div className="section-marker">03 <span>/</span> THE CSP EDIT</div><h2>Everything you need.<br /><em>Nothing you don’t.</em></h2></div>
            <p>One friendly team for the big bookings and the tiny details. No tabs to juggle. No “please contact another provider.”</p>
          </div>
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return <div className="service-item reveal" key={service.number}><div className="service-item__top"><span>{service.number}</span><Icon size={24} strokeWidth={1.6} /></div><h3>{service.title}</h3><p>{service.copy}</p><ArrowRight className="service-item__arrow" size={18} /></div>;
            })}
          </div>
          <div className="service-note"><div className="service-note__icon"><Users size={20} /></div><p><strong>Travelling with a group?</strong> We’ll coordinate the moving parts so everyone can focus on the fun.</p><a href="#contact" className="text-link">Talk to a human <ArrowRight /></a></div>
        </section>

        <section className="feature-section page-wrap reveal" id="sightseeing">
          <div className="feature-photo"><img src={dudhsagar} alt="Dudhsagar waterfall surrounded by Goa's green forest" /><div className="feature-photo__label"><span>THE DAY TRIP</span><strong>Dudhsagar<br />in full flow</strong></div></div>
          <div className="feature-copy"><div className="section-marker">04 <span>/</span> BEYOND THE BEACH</div><h2>Chase the<br /><em>good kind</em><br />of wild.</h2><p>Board the jeep, follow the forest tracks and let Dudhsagar do what it does best: make you stop and stare.</p><ul><li><Check size={15} /> Hotel pickup & drop</li><li><Check size={15} /> Local trip coordination</li><li><Check size={15} /> Easy add-on to your Goa plan</li></ul><a className="button button--ink" href="#contact">Ask about Dudhsagar <ArrowUpRight /></a></div>
        </section>

        <section className="enquire-section reveal" id="contact">
          <div className="page-wrap enquire-grid">
            <div className="enquire-copy"><div className="section-marker section-marker--light">05 <span>/</span> LET’S TALK GOA</div><h2>Tell us what<br /><em>you’re dreaming of.</em></h2><p>Dates, group size, a rough budget — or just “we want the beach.” Send what you know. We’ll take it from there.</p><div className="contact-details"><a href="tel:+918489036959"><Phone size={18} /> 84890 36959</a><a href="tel:+919356302194"><Phone size={18} /> 93563 02194</a><a href="mailto:cspglobeltours@gmail.com"><MessageCircle size={18} /> cspglobeltours@gmail.com</a></div></div>
            <form className="enquire-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
              {submitted ? <div className="form-success"><div className="form-success__icon"><Check /></div><h3>We’ve got your note.</h3><p>Thank you for reaching out. Call or WhatsApp us for the quickest reply.</p><a className="button button--orange" href="https://wa.me/918489036959?text=Hi%20CSP%20Global%20Tours%2C%20I%20just%20sent%20an%20enquiry%20through%20your%20website.">Open WhatsApp <ArrowUpRight /></a></div> : <><div className="form-row"><label>Your name<input required name="name" placeholder="What should we call you?" /></label><label>Travellers<select name="travellers" defaultValue="2"><option value="1">Just me</option><option value="2">2 travellers</option><option value="3-5">3–5 travellers</option><option value="6+">6+ travellers</option></select></label></div><label>What kind of Goa trip are you after?<select name="trip" defaultValue=""><option value="" disabled>Select a starting point</option><option>Beaches & sightseeing</option><option>Dudhsagar & adventure</option><option>Family holiday</option><option>Couple getaway</option><option>Something custom</option></select></label><label>Anything else we should know? <span className="optional">Optional</span><textarea name="message" rows={3} placeholder="Dates, hotel style, places you’ve saved…" /></label><button className="button button--orange button--full" type="submit">Start planning <ArrowRight /></button><p className="form-footnote">Prefer to chat? <a href="https://wa.me/918489036959?text=Hi%20CSP%20Global%20Tours%2C%20I%27d%20like%20to%20plan%20a%20Goa%20trip.">WhatsApp us directly</a>.</p></>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-wrap footer-grid"><div className="footer-brand"><a className="brand-lockup" href="#top"><span className="brand-mark"><img src={logo} alt="CSP Global Tour logo" width="48" height="48" /></span><span className="brand-copy"><strong>CSP GLOBAL</strong><small>TOURS & TRAVEL</small></span></a><p>Your trusted travel partner<br />in Goa, India.</p></div><div className="footer-links"><span className="footer-label">Explore</span><a href="#packages">Goa packages</a><a href="#sightseeing">Sightseeing</a><a href="#services">Cab & hotels</a></div><div className="footer-links"><span className="footer-label">Say hello</span><a href="tel:+918489036959">84890 36959</a><a href="tel:+919356302194">93563 02194</a><a href="mailto:cspglobeltours@gmail.com">Email us</a></div><div className="footer-address"><span className="footer-label">Visit us</span><p>Karpaga Vinayaga Pawn Broker Shop<br />Madurai Road, near Indian Bank<br />Opp. Durga Hotel, Usilampatti TK<br />Madurai DT · 625532</p></div></div><div className="page-wrap footer-bottom"><span>© {new Date().getFullYear()} CSP Global Tours</span><span>Goa, India <TreePalm size={13} /></span><a href="#top">Back to top <ChevronDown size={14} className="rotate-180" /></a></div>
      </footer>
    </div>
  );
}

function ArrowUpRight({ size = 17 }: { size?: number }) {
  return <ArrowRight size={size} className="arrow-up-right" />;
}
