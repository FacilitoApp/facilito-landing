import { useState, useEffect } from 'react'

const translations = {
  cs: {
    nav: { demo: 'Vyzkoušet demo', login: 'Přihlásit se', contact: 'Kontakt' },
    hero: {
      badge: 'Facility management nové generace poháněný AI',
      headline: 'Správa budov a technologií na jednom místě',
      sub: 'Facilito je moderní SaaS platforma, která zjednodušuje facility management – od revizí a smluv až po help desk a energetiku.',
      cta1: 'Vyzkoušet demo',
      cta2: 'Kontaktujte nás',
    },
    modules: {
      title: 'Vše, co potřebujete pro správu nemovitostí',
      sub: 'Osm integrovaných modulů pokrývá celý životní cyklus správy budov.',
      items: [
        { icon: '✓', name: 'Revize', desc: 'Plánování a evidence pravidelných revizí technických zařízení s automatickými připomínkami.' },
        { icon: '📄', name: 'Smlouvy', desc: 'Centrální správa smluv s dodavateli, nájemníky a servisními partnery.' },
        { icon: '⚡', name: 'Energie', desc: 'Monitoring spotřeby energií, analýzy a reporty pro optimalizaci nákladů.' },
        { icon: '💰', name: 'Rozpočet', desc: 'Přehledné řízení rozpočtu provozních nákladů a investic do nemovitostí.' },
        { icon: '🎫', name: 'Help desk', desc: 'Ticketovací systém pro hlášení a řešení závad od nájemníků i správců.' },
        { icon: '🏢', name: 'Pasport budov', desc: 'Digitální dokumentace budov, prostor a technických celků včetně výkresů.' },
        { icon: '⚙️', name: 'Technologie', desc: 'Evidence a správa technologických zařízení, servisní intervaly a záruky.' },
        { icon: '📌', name: 'Nástěnka', desc: 'Přehledný dashboard s klíčovými ukazateli a aktuálními úkoly pro celý tým.' },
      ],
    },
    contact: {
      title: 'Kontaktujte nás',
      sub: 'Rádi vám ukážeme, jak Facilito může zjednodušit vaši práci.',
      name: 'Jméno a příjmení',
      email: 'E-mailová adresa',
      company: 'Společnost',
      message: 'Vaše zpráva',
      send: 'Odeslat zprávu',
      success: 'Děkujeme! Ozveme se vám co nejdříve.',
    },
    footer: {
      tagline: 'Profesionální facility management pro moderní organizace.',
      rights: '© 2025 Facilito  Všechna práva vyhrazena.',
    },
  },
  en: {
    nav: { demo: 'Try demo', login: 'Log in', contact: 'Contact' },
    hero: {
      badge: 'Next-generation facility management powered by AI',
      headline: 'Building & technology management in one place',
      sub: 'Facilito is a modern SaaS platform that simplifies facility management – from inspections and contracts to help desk and energy monitoring.',
      cta1: 'Try demo',
      cta2: 'Contact us',
    },
    modules: {
      title: 'Everything you need to manage your properties',
      sub: 'Eight integrated modules cover the full lifecycle of building management.',
      items: [
        { icon: '✓', name: 'Inspections', desc: 'Plan and record regular inspections of technical equipment with automatic reminders.' },
        { icon: '📄', name: 'Contracts', desc: 'Central management of contracts with suppliers, tenants, and service partners.' },
        { icon: '⚡', name: 'Energy', desc: 'Energy consumption monitoring, analytics, and reports to optimize costs.' },
        { icon: '💰', name: 'Budget', desc: 'Clear management of operating cost budgets and property investments.' },
        { icon: '🎫', name: 'Help desk', desc: 'Ticketing system for reporting and resolving issues from tenants and managers.' },
        { icon: '🏢', name: 'Building passport', desc: 'Digital documentation of buildings, spaces, and technical systems including drawings.' },
        { icon: '⚙️', name: 'Technology', desc: 'Asset registry and management of technical equipment, service intervals, and warranties.' },
        { icon: '📌', name: 'Dashboard', desc: 'Clear overview of key indicators and current tasks for the entire team.' },
      ],
    },
    contact: {
      title: 'Contact us',
      sub: 'We are happy to show you how Facilito can simplify your work.',
      name: 'Full name',
      email: 'Email address',
      company: 'Company',
      message: 'Your message',
      send: 'Send message',
      success: 'Thank you! We will get back to you as soon as possible.',
    },
    footer: {
      tagline: 'Professional facility management for modern organizations.',
      rights: '© 2025 Facilito  All rights reserved.',
    },
  },
  de: {
    nav: { demo: 'Demo testen', login: 'Anmelden', contact: 'Kontakt' },
    hero: {
      badge: 'Facility Management der nächsten Generation – KI-gestützt',
      headline: 'Gebäude- und Technologiemanagement an einem Ort',
      sub: 'Facilito ist eine moderne SaaS-Plattform, die das Facility Management vereinfacht – von Prüfungen und Verträgen bis hin zu Help Desk und Energieüberwachung.',
      cta1: 'Demo testen',
      cta2: 'Kontakt aufnehmen',
    },
    modules: {
      title: 'Alles, was Sie für die Immobilienverwaltung benötigen',
      sub: 'Acht integrierte Module decken den gesamten Lebenszyklus der Gebäudeverwaltung ab.',
      items: [
        { icon: '✓', name: 'Prüfungen', desc: 'Planung und Erfassung regelmäßiger Prüfungen technischer Anlagen mit automatischen Erinnerungen.' },
        { icon: '📄', name: 'Verträge', desc: 'Zentrale Verwaltung von Verträgen mit Lieferanten, Mietern und Servicepartnern.' },
        { icon: '⚡', name: 'Energie', desc: 'Energieverbrauchsüberwachung, Analysen und Berichte zur Kostenoptimierung.' },
        { icon: '💰', name: 'Budget', desc: 'Übersichtliche Verwaltung von Betriebskostenbudgets und Immobilieninvestitionen.' },
        { icon: '🎫', name: 'Help Desk', desc: 'Ticketsystem zur Meldung und Behebung von Problemen durch Mieter und Verwalter.' },
        { icon: '🏢', name: 'Gebäudepass', desc: 'Digitale Dokumentation von Gebäuden, Räumen und technischen Systemen inkl. Zeichnungen.' },
        { icon: '⚙️', name: 'Technologie', desc: 'Asset-Register und Verwaltung technischer Geräte, Serviceintervalle und Garantien.' },
        { icon: '📌', name: 'Dashboard', desc: 'Klare Übersicht über Kennzahlen und aktuelle Aufgaben für das gesamte Team.' },
      ],
    },
    contact: {
      title: 'Kontakt',
      sub: 'Wir zeigen Ihnen gerne, wie Facilito Ihre Arbeit vereinfachen kann.',
      name: 'Vor- und Nachname',
      email: 'E-Mail-Adresse',
      company: 'Unternehmen',
      message: 'Ihre Nachricht',
      send: 'Nachricht senden',
      success: 'Danke! Wir melden uns so bald wie möglich.',
    },
    footer: {
      tagline: 'Professionelles Facility Management für moderne Organisationen.',
      rights: '© 2025 Facilito  Alle Rechte vorbehalten.',
    },
  },
}

function LogoSVG() {
  return (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="0"  y="10" width="5" height="10"/>
      <rect x="8"  y="5"  width="5" height="15"/>
      <rect x="16" y="0"  width="5" height="20"/>
    </svg>
  )
}

const BLUE = '#185FA5'
const BLUE_LIGHT = '#2171C7'
const DARK = '#0D1117'
const DARK2 = '#161B22'
const DARK3 = '#1C2330'
const BORDER = '#30363D'
const TEXT = '#E6EDF3'
const MUTED = '#8B949E'

export default function App() {
  const [lang, setLang] = useState('cs')
  const [menuOpen, setMenuOpen] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const t = translations[lang]

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, company, message } = formState
    const subject = encodeURIComponent(`Zpráva z webu – ${name}`)
    const body = encodeURIComponent(
      [
        `Jméno: ${name}`,
        `Email: ${email}`,
        company ? `Společnost: ${company}` : '',
        '',
        message,
      ].filter(Boolean).join('\n')
    )
    window.location.href = `mailto:info@facilito.cz?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const styles = {
    root: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      background: DARK,
      color: TEXT,
      minHeight: '100vh',
      margin: 0,
    },

    // NAV
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(13,17,23,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${BORDER}`,
    },
    navInner: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 24px',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      textDecoration: 'none',
      cursor: 'pointer',
      userSelect: 'none',
    },
    logoText: {
      fontSize: 26,
      fontWeight: 700,
      color: '#ffffff',
      letterSpacing: -0.5,
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    },
    navLink: {
      background: 'none',
      border: 'none',
      color: TEXT,
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer',
      padding: '6px 12px',
      borderRadius: 6,
      transition: 'color 0.2s',
    },
    langSwitcher: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      background: DARK3,
      border: `1px solid ${BORDER}`,
      borderRadius: 8,
      padding: 3,
    },
    langBtn: (active) => ({
      background: active ? BLUE : 'none',
      border: 'none',
      color: active ? '#fff' : MUTED,
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer',
      padding: '4px 8px',
      borderRadius: 5,
      transition: 'all 0.2s',
      letterSpacing: 0.5,
    }),
    loginBtn: {
      background: BLUE,
      border: 'none',
      color: '#fff',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      padding: '8px 18px',
      borderRadius: 8,
      transition: 'background 0.2s',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
    },
    hamburger: {
      display: 'none',
      background: 'none',
      border: `1px solid ${BORDER}`,
      color: TEXT,
      borderRadius: 6,
      padding: '6px 10px',
      cursor: 'pointer',
      fontSize: 18,
    },

    // HERO
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 24px 80px',
      background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(24,95,165,0.18) 0%, transparent 70%), ${DARK}`,
      position: 'relative',
      overflow: 'hidden',
    },
    heroGrid: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `linear-gradient(${BORDER} 1px, transparent 1px), linear-gradient(90deg, ${BORDER} 1px, transparent 1px)`,
      backgroundSize: '60px 60px',
      opacity: 0.18,
      pointerEvents: 'none',
    },
    heroContent: {
      maxWidth: 780,
      position: 'relative',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      background: 'rgba(24,95,165,0.15)',
      border: `1px solid rgba(24,95,165,0.4)`,
      color: '#60A5FA',
      fontSize: 15,
      fontWeight: 600,
      padding: '8px 18px',
      borderRadius: 20,
      marginBottom: 28,
      letterSpacing: 0.1,
    },
    heroH1: {
      fontSize: 'clamp(2.4rem, 6vw, 4.32rem)',
      fontWeight: 800,
      lineHeight: 1.1,
      marginBottom: 24,
      letterSpacing: -1.5,
      color: TEXT,
    },
    heroAccent: {
      color: BLUE_LIGHT,
    },
    heroSub: {
      fontSize: 'clamp(1rem, 2vw, 1.2rem)',
      color: MUTED,
      lineHeight: 1.7,
      marginBottom: 40,
      maxWidth: 620,
      margin: '0 auto 40px',
    },
    heroCtas: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    ctaPrimary: {
      background: BLUE,
      color: '#fff',
      border: 'none',
      padding: '14px 28px',
      borderRadius: 10,
      fontSize: 15,
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'background 0.2s, transform 0.1s',
      letterSpacing: 0.2,
    },
    ctaSecondary: {
      background: 'transparent',
      color: TEXT,
      border: `1px solid ${BORDER}`,
      padding: '14px 28px',
      borderRadius: 10,
      fontSize: 15,
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'border-color 0.2s, background 0.2s',
    },
    heroStats: {
      display: 'flex',
      justifyContent: 'center',
      gap: 48,
      marginTop: 64,
      flexWrap: 'wrap',
    },
    stat: {
      textAlign: 'center',
    },
    statNum: {
      fontSize: 28,
      fontWeight: 800,
      color: TEXT,
      display: 'block',
    },
    statLabel: {
      fontSize: 13,
      color: MUTED,
      marginTop: 4,
    },

    // MODULES
    section: {
      padding: '96px 24px',
    },
    sectionDark: {
      padding: '96px 24px',
      background: DARK2,
    },
    container: {
      maxWidth: 1200,
      margin: '0 auto',
    },
    sectionTag: {
      color: BLUE_LIGHT,
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: 1,
      textTransform: 'uppercase',
      marginBottom: 12,
      display: 'block',
    },
    sectionTitle: {
      fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
      fontWeight: 800,
      letterSpacing: -0.8,
      marginBottom: 16,
      color: TEXT,
    },
    sectionSub: {
      color: MUTED,
      fontSize: 16,
      lineHeight: 1.7,
      maxWidth: 560,
      marginBottom: 56,
    },
    modulesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: 20,
    },
    moduleCard: {
      background: DARK3,
      border: `1px solid ${BORDER}`,
      borderRadius: 14,
      padding: '28px 24px',
      transition: 'border-color 0.2s, transform 0.2s',
      cursor: 'default',
    },
    moduleIcon: {
      width: 44,
      height: 44,
      background: 'rgba(24,95,165,0.15)',
      border: `1px solid rgba(24,95,165,0.3)`,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      marginBottom: 16,
    },
    moduleName: {
      fontSize: 16,
      fontWeight: 700,
      color: TEXT,
      marginBottom: 8,
    },
    moduleDesc: {
      fontSize: 14,
      color: MUTED,
      lineHeight: 1.6,
    },

    // CONTACT
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? 40 : 64,
      alignItems: 'start',
    },
    contactInfo: {},
    contactInfoItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14,
      marginBottom: 24,
    },
    contactInfoIcon: {
      width: 40,
      height: 40,
      background: 'rgba(24,95,165,0.12)',
      border: `1px solid rgba(24,95,165,0.25)`,
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      flexShrink: 0,
    },
    contactInfoLabel: {
      fontSize: 13,
      color: MUTED,
      marginBottom: 3,
    },
    contactInfoValue: {
      fontSize: 15,
      color: TEXT,
      fontWeight: 500,
    },
    form: {
      background: DARK3,
      border: `1px solid ${BORDER}`,
      borderRadius: 16,
      padding: 32,
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: 16,
      marginBottom: 16,
    },
    formGroup: {
      marginBottom: 16,
    },
    label: {
      display: 'block',
      fontSize: 13,
      fontWeight: 500,
      color: MUTED,
      marginBottom: 6,
    },
    input: {
      width: '100%',
      background: DARK2,
      border: `1px solid ${BORDER}`,
      borderRadius: 8,
      padding: '10px 14px',
      color: TEXT,
      fontSize: 14,
      outline: 'none',
      transition: 'border-color 0.2s',
      boxSizing: 'border-box',
    },
    textarea: {
      width: '100%',
      background: DARK2,
      border: `1px solid ${BORDER}`,
      borderRadius: 8,
      padding: '10px 14px',
      color: TEXT,
      fontSize: 14,
      outline: 'none',
      transition: 'border-color 0.2s',
      resize: 'vertical',
      minHeight: 120,
      fontFamily: 'inherit',
      boxSizing: 'border-box',
    },
    submitBtn: {
      width: '100%',
      background: BLUE,
      color: '#fff',
      border: 'none',
      padding: '13px 24px',
      borderRadius: 8,
      fontSize: 15,
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'background 0.2s',
    },
    successMsg: {
      textAlign: 'center',
      padding: '48px 24px',
      color: '#34D399',
      fontSize: 16,
      fontWeight: 500,
    },

    // FOOTER
    footer: {
      background: '#0A0E14',
      borderTop: `1px solid ${BORDER}`,
      padding: '48px 24px 32px',
    },
    footerInner: {
      maxWidth: 1200,
      margin: '0 auto',
    },
    footerTop: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 32,
      marginBottom: 40,
    },
    footerBrand: {
      maxWidth: 300,
    },
    footerTagline: {
      color: MUTED,
      fontSize: 14,
      lineHeight: 1.6,
      marginTop: 12,
    },
    footerLinks: {
      display: 'flex',
      gap: 64,
      flexWrap: 'wrap',
    },
    footerCol: {},
    footerColTitle: {
      fontSize: 12,
      fontWeight: 700,
      color: MUTED,
      letterSpacing: 1,
      textTransform: 'uppercase',
      marginBottom: 16,
    },
    footerLink: {
      display: 'block',
      color: MUTED,
      fontSize: 14,
      marginBottom: 10,
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color 0.2s',
    },
    footerBottom: {
      borderTop: `1px solid ${BORDER}`,
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12,
    },
    footerRights: {
      color: MUTED,
      fontSize: 13,
    },
  }

  return (
    <div style={styles.root}>
      {/* NAV */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.logo} onClick={() => scrollTo('hero')}>
            <LogoSVG />
            <span style={styles.logoText}>Facilito</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={styles.langSwitcher}>
              {['cs', 'en', 'de'].map((l) => (
                <button key={l} style={styles.langBtn(lang === l)} onClick={() => setLang(l)}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <div style={{ ...styles.navLinks, display: 'flex' }}>
              <button style={styles.navLink} onClick={() => scrollTo('modules')}>
                Moduly
              </button>
              <button style={styles.navLink} onClick={() => scrollTo('contact')}>
                {t.nav.contact}
              </button>
            </div>

            <a href="https://app.facilito.cz" target="_blank" rel="noopener noreferrer" style={styles.loginBtn}>
              {t.nav.login}
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" style={styles.hero}>
        <div style={styles.heroGrid} />
        <div style={styles.heroContent}>
          <div style={styles.badge}>
            {t.hero.badge}
          </div>
          <h1 style={styles.heroH1}>{t.hero.headline}</h1>
          <p style={styles.heroSub}>{t.hero.sub}</p>
          <div style={styles.heroCtas}>
            <button style={styles.ctaPrimary} onClick={() => scrollTo('contact')}
              onMouseEnter={e => e.target.style.background = BLUE_LIGHT}
              onMouseLeave={e => e.target.style.background = BLUE}>
              {t.hero.cta1}
            </button>
            <button style={styles.ctaSecondary} onClick={() => scrollTo('contact')}
              onMouseEnter={e => { e.target.style.borderColor = BLUE; e.target.style.background = 'rgba(24,95,165,0.08)' }}
              onMouseLeave={e => { e.target.style.borderColor = BORDER; e.target.style.background = 'transparent' }}>
              {t.hero.cta2}
            </button>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" style={styles.sectionDark}>
        <div style={styles.container}>
          <span style={styles.sectionTag}>Moduly</span>
          <h2 style={styles.sectionTitle}>{t.modules.title}</h2>
          <p style={styles.sectionSub}>{t.modules.sub}</p>
          <div style={styles.modulesGrid}>
            {t.modules.items.map((mod) => (
              <div key={mod.name} style={styles.moduleCard}
                onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = 'none' }}>
                <div style={styles.moduleIcon}>{mod.icon}</div>
                <div style={styles.moduleName}>{mod.name}</div>
                <div style={styles.moduleDesc}>{mod.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <div style={styles.container}>
          <span style={styles.sectionTag}>Kontakt</span>
          <h2 style={styles.sectionTitle}>{t.contact.title}</h2>
          <p style={styles.sectionSub}>{t.contact.sub}</p>

          <div style={styles.contactGrid}>
            <div style={styles.contactInfo}>
              <div style={styles.contactInfoItem}>
                <div style={styles.contactInfoIcon}>📧</div>
                <div>
                  <div style={styles.contactInfoLabel}>Email</div>
                  <div style={styles.contactInfoValue}>info@facilito.cz</div>
                </div>
              </div>
            </div>

            <div style={styles.form}>
              {submitted ? (
                <div style={styles.successMsg}>✓ {t.contact.success}</div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>{t.contact.name}</label>
                      <input style={styles.input} required value={formState.name}
                        onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                        onFocus={e => e.target.style.borderColor = BLUE}
                        onBlur={e => e.target.style.borderColor = BORDER} />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>{t.contact.email}</label>
                      <input style={styles.input} type="email" required value={formState.email}
                        onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                        onFocus={e => e.target.style.borderColor = BLUE}
                        onBlur={e => e.target.style.borderColor = BORDER} />
                    </div>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>{t.contact.company}</label>
                    <input style={styles.input} value={formState.company}
                      onChange={e => setFormState(s => ({ ...s, company: e.target.value }))}
                      onFocus={e => e.target.style.borderColor = BLUE}
                      onBlur={e => e.target.style.borderColor = BORDER} />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>{t.contact.message}</label>
                    <textarea style={styles.textarea} required value={formState.message}
                      onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                      onFocus={e => e.target.style.borderColor = BLUE}
                      onBlur={e => e.target.style.borderColor = BORDER} />
                  </div>
                  <button type="submit" style={styles.submitBtn}
                    onMouseEnter={e => e.target.style.background = BLUE_LIGHT}
                    onMouseLeave={e => e.target.style.background = BLUE}>
                    {t.contact.send}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerTop}>
            <div style={styles.footerBrand}>
              <div style={styles.logo}>
                <LogoSVG />
                <span style={styles.logoText}>Facilito</span>
              </div>
              <p style={styles.footerTagline}>{t.footer.tagline}</p>
            </div>
            <div style={styles.footerLinks}>
              <div style={styles.footerCol}>
                <div style={styles.footerColTitle}>
                  {lang === 'cs' ? 'Produkt' : lang === 'en' ? 'Product' : 'Produkt'}
                </div>
                {t.modules.items.slice(0, 4).map(m => (
                  <span key={m.name} style={styles.footerLink}>{m.name}</span>
                ))}
              </div>
              <div style={styles.footerCol}>
                <div style={styles.footerColTitle}>
                  {lang === 'cs' ? 'Společnost' : lang === 'en' ? 'Company' : 'Unternehmen'}
                </div>
                {[
                  lang === 'cs' ? 'O nás' : lang === 'en' ? 'About' : 'Über uns',
                  lang === 'cs' ? 'Blog' : 'Blog',
                  lang === 'cs' ? 'Kariéra' : lang === 'en' ? 'Careers' : 'Karriere',
                  lang === 'cs' ? 'Kontakt' : lang === 'en' ? 'Contact' : 'Kontakt',
                ].map(l => (
                  <span key={l} style={styles.footerLink}>{l}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <span style={styles.footerRights}>{t.footer.rights}</span>
            <div style={{ display: 'flex', gap: 24 }}>
              {[
                lang === 'cs' ? 'Ochrana osobních údajů' : lang === 'en' ? 'Privacy Policy' : 'Datenschutz',
                lang === 'cs' ? 'Podmínky použití' : lang === 'en' ? 'Terms of Service' : 'Nutzungsbedingungen',
              ].map(l => (
                <span key={l} style={{ ...styles.footerLink, marginBottom: 0 }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: ${DARK}; }
        html { scroll-behavior: smooth; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .footer-top { flex-direction: column; }
          .hero-stats { gap: 32px !important; }
        }
        @media (max-width: 640px) {
          .nav-links-desktop { display: none !important; }
        }
      `}</style>
    </div>
  )
}
