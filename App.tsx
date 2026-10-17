import React, { FormEvent, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Globe2,
  Instagram,
  Mail,
  Menu,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react';
import { CONTACT_EMAIL, EMAIL_LINK, INSTAGRAM_LINK, PROJECTS, WHATSAPP_LINK } from './constants.tsx';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const navItems = [
  { label: 'Hizmetler', href: '#services' },
  { label: 'Mobil ürünler', href: '#mobile-products' },
  { label: 'Çalışmalar', href: '#work' },
  { label: 'Süreç', href: '#process' },
  { label: 'İletişim', href: '#contact' },
];

const serviceCards = [
  {
    number: '01',
    title: 'Web sitesi',
    description: 'Markanızı doğru anlatan, hızlı ve mobil cihazlarda kusursuz çalışan web deneyimleri.',
    detail: 'Strateji · Tasarım · SEO',
    href: '/web-sitesi/',
    icon: <Globe2 size={22} strokeWidth={1.5} />,
  },
  {
    number: '02',
    title: 'Mobil uygulama',
    description: 'Android ve iOS için gerçek ihtiyaca odaklanan, sade ve sürdürülebilir ürünler.',
    detail: 'Android · iOS · Ürün',
    href: '/mobil-uygulama/',
    icon: <Smartphone size={22} strokeWidth={1.5} />,
  },
  {
    number: '03',
    title: 'Özel yazılım',
    description: 'İş akışınıza ve hedefinize göre planlanan, sürdürülebilir dijital ürünler.',
    detail: 'Plan · Geliştirme · Yayın',
    href: '/yazilim-gelistirme/',
    icon: <Code2 size={22} strokeWidth={1.5} />,
  },
];

const processSteps = [
  { number: '01', title: 'Dinleriz', text: 'Fikri, ihtiyacı ve ulaşmak istediğiniz kişiyi netleştiririz.' },
  { number: '02', title: 'Planlarız', text: 'Kapsamı, deneyimi ve yayın hedefini sade bir yol haritasına çeviririz.' },
  { number: '03', title: 'Üretiriz', text: 'Tasarım ve geliştirmeyi aynı hedef etrafında birlikte ilerletiriz.' },
  { number: '04', title: 'Yayınlarız', text: 'Test, mağaza hazırlığı ve teslim adımlarını tamamlarız.' },
];

const takasso = PROJECTS.find((project) => project.title === 'Takasso') ?? PROJECTS[0];
const atamacep = PROJECTS.find((project) => project.title === 'AtamaCep')!;

function AtamaCepPortfolioVisual() {
  return (
    <div className="atamacep-card-art">
      <div className="atamacep-card-art__copy">
        <div className="atamacep-card-art__brand"><img src={atamacep.imageUrl} alt="AtamaCep resmî uygulama simgesi" width="72" height="72" loading="lazy" decoding="async" /><span>AtamaCep<small>KPSS ve kamu ilan takibi</small></span></div>
        <span className="atamacep-card-art__eyebrow">Pusuk ile keşfet</span>
        <strong>Bir sonraki<br /><em>fırsatına bak.</em></strong>
        <p>KPSS ve kamu ilanlarını takip etmek için geliştirdiğimiz mobil uygulama.</p>
        <span className="atamacep-card-art__stage">Google Play · Kapalı test</span>
      </div>
      <div className="atamacep-card-art__mascot">
        <img src="/media/atamacep-pusuk.png" alt="AtamaCep’in büyüteç tutan tilki maskotu Pusuk" width="635" height="824" loading="lazy" decoding="async" />
        <span>Pusuk <small>AtamaCep’in takip arkadaşı</small></span>
      </div>
    </div>
  );
}

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand ${compact ? 'brand--compact' : ''}`}>
      <span className="brand-mark" aria-hidden="true">
        <img src="/lunavor-mark.svg?v=4" alt="" width="48" height="48" decoding="async" />
      </span>
      <span className="brand-name">Lunavor</span>
    </span>
  );
}

function TakassoMiniBrand() {
  return <span className="takasso-mini-brand"><span>T</span><strong>takasso</strong></span>;
}

function TakassoPortfolioVisual() {
  return (
    <div className="takasso-card-art">
      <div className="takasso-card-art__grid" aria-hidden="true" />
      <div className="takasso-card-art__topline">
        <span className="takasso-card-art__wordmark"><span className="takasso-card-art__wordmark-mark">T</span>takasso</span>
        <span className="takasso-card-art__status">mobil · web</span>
      </div>
      <div className="takasso-card-art__copy"><span>yakınındaki</span><strong>fırsatlar.</strong></div>
      <div className="takasso-card-art__orbit" aria-hidden="true" />
      <div className="takasso-card-art__icon">
        <img src={takasso.imageUrl} alt="Takasso uygulama simgesi" width="260" height="260" loading="lazy" decoding="async" />
      </div>
      <div className="takasso-card-art__panel">
        <div><span>keşfet</span><strong>İlanlar</strong></div>
        <div><span>iletişim</span><strong>Mesajlaş</strong></div>
        <div><span>hızlı</span><strong>Doğrudan</strong></div>
      </div>
    </div>
  );
}

function TakassoDeviceScreen() {
  return (
    <div className="case-study__device-screen">
      <div className="case-study__search"><span>Yakınındaki fırsatları keşfet</span><span>⌕</span></div>
      <div className="case-study__screen-hero">
        <div><span>İkinci el,</span><strong>iyi fırsatlar.</strong></div>
        <img src={takasso.imageUrl} alt="Takasso uygulama simgesi" width="78" height="78" loading="lazy" decoding="async" />
      </div>
      <div className="case-study__screen-tabs"><span className="is-active">Keşfet</span><span>İlan ver</span><span>Mesajlar</span></div>
      <div className="case-study__screen-card"><span>Doğrudan iletişim</span><strong>İlanı incele ve mesajlaş.</strong><small>Takasso</small></div>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="eyebrow-line" aria-hidden="true" />
      {children}
    </p>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xknadjzo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `Lunavor proje iletişimi: ${formState.name}`,
        }),
      });

      if (!response.ok) throw new Error('Form gönderilemedi');
      setFormState({ name: '', email: '', message: '' });
      setFormStatus('success');
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="lunavor-site">
      <a className="skip-link" href="#main-content">İçeriğe geç</a>

      <header className={`site-header ${menuOpen ? 'site-header--open' : ''}`}>
        <a className="site-header__brand" href="#top" aria-label="Lunavor ana sayfa">
          <BrandMark />
        </a>

        <nav className="desktop-nav" aria-label="Ana menü">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="icon-link" href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={17} strokeWidth={1.7} />
          </a>
          <a className="icon-link" href={EMAIL_LINK} aria-label="E-posta gönder">
            <Mail size={17} strokeWidth={1.7} />
          </a>
          <a className="header-cta" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Proje konuşalım <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobil menü">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}<ArrowUpRight size={17} /></a>
            ))}
            <a className="mobile-nav__whatsapp" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>WhatsApp'tan konuşalım<ArrowUpRight size={17} /></a>
            <a className="mobile-nav__mail" href={EMAIL_LINK} onClick={closeMenu}>{CONTACT_EMAIL}</a>
          </nav>
        )}
      </header>

      <main id="main-content">
        <section id="top" className="hero section-frame">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__glow hero__glow--one" aria-hidden="true" />
          <div className="hero__glow hero__glow--two" aria-hidden="true" />

          <div className="hero__content">
            <Eyebrow>KİŞİYE ÖZEL DİJİTAL ÜRÜNLER</Eyebrow>
            <h1>Fikrinizi <em>dijital</em><br />bir ürüne<br /><span>dönüştürelim.</span></h1>
            <p className="hero__lead">Takasso ve AtamaCep gibi kendi mobil ürünlerimizi geliştiriyor; bu deneyimi işletmenize özel web sitelerine ve yazılım çözümlerine taşıyoruz.</p>
            <div className="hero__actions">
              <a className="button button--primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Proje konuşalım <ArrowUpRight size={17} /></a>
              <a className="button button--ghost" href="#mobile-products">Mobil ürünlerimizi gör <ChevronRight size={17} /></a>
            </div>
            <div className="hero__meta"><span>01 / 05</span><span>Fikirden yayına</span></div>
          </div>

          <div className="hero__visual" aria-label="Lunavor’un mobil ürünleri Takasso ve AtamaCep">
            <div className="hero__visual-orbit hero__visual-orbit--one" aria-hidden="true" />
            <div className="hero__visual-orbit hero__visual-orbit--two" aria-hidden="true" />
            <div className="product-window">
              <div className="product-window__bar"><span /><span /><span /><small>lunavor / product-preview</small></div>
              <div className="product-window__body">
                <div className="product-window__topline"><span>LUNAVOR MOBİL ÜRÜNLERİ</span><Smartphone size={15} /></div>
                <div className="product-window__hero-copy">Kendi fikirlerimiz.<br /><em>Gerçek ürünler.</em></div>
                <div className="hero-products">
                  <a className="hero-product" href="#takasso"><img src={takasso.imageUrl} alt="Takasso logosu" width="72" height="72" loading="eager" decoding="async" fetchPriority="high" /><span><strong>Takasso</strong><small>İkinci el alışveriş</small></span><b className="status-dot">Yayında</b><ArrowUpRight size={16} /></a>
                  <a className="hero-product hero-product--atamacep" href="#atamacep"><img src={atamacep.imageUrl} alt="AtamaCep logosu" width="72" height="72" loading="eager" decoding="async" /><span><strong>AtamaCep</strong><small>KPSS ve kamu ilan takibi</small></span><b>Kapalı test</b><ArrowUpRight size={16} /></a>
                </div>
                <div className="product-window__footer"><span>Fikirden geliştirmeye, tek ekip.</span><span>↗</span></div>
              </div>
            </div>
            <div className="hero__floating-note"><Sparkles size={14} /><span>Fikirden ürüne</span></div>
          </div>

          <a className="hero__scroll" href="#services"><span>Keşfet</span><span className="hero__scroll-line" /></a>
        </section>

        <section className="proof-strip" aria-label="Lunavor çalışmalarından seçmeler">
          <div className="proof-strip__label">GELİŞTİRDİĞİMİZ İŞLER</div>
          <div className="proof-strip__track">
            {[...PROJECTS, ...PROJECTS].map((project, index) => (
              <span className="proof-item" key={`${project.id}-${index}`}><b>{project.title.charAt(0)}</b>{project.title}</span>
            ))}
          </div>
        </section>

        <section id="services" className="answer-section section-frame section-frame--light">
          <div className="section-intro">
            <Eyebrow>02 / NE YAPIYORUZ?</Eyebrow>
            <h2>Güzel görünen değil,<br /><em>işe yarayan</em> ürünler.</h2>
            <p>İnsanların anlayabildiği, kullanabildiği ve hatırlayabildiği dijital deneyimler tasarlıyoruz.</p>
          </div>
          <div className="service-grid">
            {serviceCards.map((service) => (
              <a className="service-card" href={service.href} key={service.number} aria-label={`${service.title} geliştirme hizmetini incele`}>
                <div className="service-card__top"><span>{service.number}</span><span className="service-card__icon">{service.icon}</span></div>
                <div><h3>{service.title}</h3><p>{service.description}</p></div>
                <div className="service-card__bottom"><span>{service.detail}</span><ArrowUpRight size={17} /></div>
              </a>
            ))}
          </div>
        </section>

        <section id="mobile-products" className="case-study section-frame">
          <div className="case-study__copy">
            <Eyebrow>03 / MOBİL ÜRÜNLERİMİZ</Eyebrow>
            <h2>Kendi fikirlerimiz.<br /><em>Yaşayan</em> ürünler.</h2>
            <div className="product-intro" id="takasso"><img src={takasso.imageUrl} alt="" width="48" height="48" loading="lazy" /><strong>Takasso</strong><span>Yayında</span></div>
            <p>Takasso; ikinci el ürünleri keşfetmeyi, ilan vermeyi ve kullanıcıların doğrudan iletişim kurmasını kolaylaştıran pazar yeri uygulamamızdır.</p>
            <div className="tag-row"><span>Mobil uygulama</span><span>Web platformu</span><span>Ürün deneyimi</span></div>
            <a className="text-link" href="https://takasso.com.tr/" target="_blank" rel="noopener noreferrer">Takasso'yu incele <ArrowUpRight size={17} /></a>
            <a className="sister-product" href="#atamacep"><img src={atamacep.imageUrl} alt="AtamaCep logosu" width="64" height="64" loading="lazy" decoding="async" /><span><small>Diğer mobil ürünümüz · Kapalı test</small><strong>AtamaCep</strong><span>KPSS ve kamu ilanlarını Pusuk’la keşfet.</span></span><ArrowUpRight size={19} /></a>
          </div>
          <div className="case-study__visual">
            <div className="case-study__halo" aria-hidden="true" />
            <div className="case-study__device">
              <div className="case-study__device-top"><span>9:41</span><span>● ● ●</span></div>
              <div className="case-study__device-brand"><TakassoMiniBrand /><span>⌁</span></div>
              <TakassoDeviceScreen />
              <div className="case-study__device-caption"><span>Yakınındaki fırsatlar</span><strong>Takasso</strong></div>
            </div>
            <div className="case-study__label"><span>ÜRÜN VİTRİNİ</span><strong>01</strong></div>
          </div>
        </section>

        <section id="work" className="work-section section-frame section-frame--light">
          <div className="work-section__heading"><div><Eyebrow>04 / ÜRÜNLER VE ÇALIŞMALAR</Eyebrow><h2>Önce fikir.<br /><em>Sonra etki.</em></h2></div><p>Önce kendi mobil ürünlerimiz: Takasso ve AtamaCep. Ardından işletmeler için geliştirdiğimiz web deneyimleri.</p></div>
          <div className="work-grid">
            {PROJECTS.map((project, index) => (
              <article id={project.title === 'AtamaCep' ? 'atamacep' : undefined} className={`work-card work-card--${index + 1} ${project.title === 'Takasso' || project.title === 'AtamaCep' ? 'work-card--mobile' : 'work-card--web'}`} key={project.id}>
                <a href={project.url} target={project.url.startsWith('https://') ? '_blank' : undefined} rel={project.url.startsWith('https://') ? 'noopener noreferrer' : undefined} aria-label={project.linkLabel ?? `${project.title} projesini görüntüle`}>
                  {project.status && <span className="work-card__status">{project.status}</span>}
                  <div className={`work-card__image ${project.title === 'Takasso' ? 'work-card__image--takasso' : ''}`}>
                    {project.title === 'Takasso' ? <TakassoPortfolioVisual /> : project.title === 'AtamaCep' ? <AtamaCepPortfolioVisual /> : <img src={project.imageUrl} alt={`${project.title} için Lunavor tarafından geliştirilen ${project.category.toLocaleLowerCase('tr-TR')}`} width="1200" height="800" sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 1200px" loading="lazy" decoding="async" />}
                  </div>
                  <div className="work-card__overlay"><span>{project.category}</span><h3>{project.title}</h3><span className="work-card__arrow">{project.url.startsWith('https://') ? <ExternalLink size={17} /> : <ArrowUpRight size={17} />}</span></div>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="process-section section-frame">
          <div className="process-section__heading"><Eyebrow>05 / NASIL ÇALIŞIYORUZ?</Eyebrow><h2>Az gürültü.<br /><em>Çok netlik.</em></h2><p>İhtiyacı anlayıp sade bir planla tasarım, geliştirme, test ve yayın adımlarını birlikte yürütürüz.</p></div>
          <div className="process-list">
            {processSteps.map((step) => (
              <div className="process-row" key={step.number}><span className="process-row__number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p><ArrowUpRight size={19} /></div>
            ))}
          </div>
          <div className="principles"><span><Check size={15} /> SEO temeli</span><span><Check size={15} /> Mobil uyum</span><span><Check size={15} /> Bakımı kolay kod</span><span><ShieldCheck size={15} /> Güvenli başlangıç</span></div>
        </section>

        <section id="contact" className="contact-section section-frame section-frame--accent">
          <div className="contact-section__intro"><Eyebrow>06 / BİRLİKTE ÜRETELİM</Eyebrow><h2>Bir sonraki<br /><em>ürün ne?</em></h2><p>Fikrinizi ve hedefinizi kısaca anlatın. Size uygun yolu birlikte bulalım.</p><a className="contact-email" href={EMAIL_LINK}><Mail size={17} />{CONTACT_EMAIL}</a><a className="contact-whatsapp" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><span>WhatsApp'tan proje konuşalım</span><ArrowUpRight size={17} /></a></div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field"><label htmlFor="contact-name">Ad soyad / Firma</label><input id="contact-name" name="name" type="text" placeholder="Adınızı yazın" required value={formState.name} onChange={(event) => setFormState({ ...formState, name: event.target.value })} /></div>
            <div className="form-field"><label htmlFor="contact-email">E-posta adresi</label><input id="contact-email" name="email" type="email" placeholder="example@mail.com" required value={formState.email} onChange={(event) => setFormState({ ...formState, email: event.target.value })} /></div>
            <div className="form-field"><label htmlFor="contact-message">Proje detayları</label><textarea id="contact-message" name="message" rows={4} placeholder="Projenizden ve hedefinizden bahsedin..." required value={formState.message} onChange={(event) => setFormState({ ...formState, message: event.target.value })} /></div>
            <button className={`submit-button submit-button--${formStatus}`} type="submit" disabled={formStatus === 'sending'}>{formStatus === 'sending' ? 'Gönderiliyor...' : formStatus === 'success' ? 'Mesaj alındı ✓' : formStatus === 'error' ? 'Tekrar deneyin' : <>Mesajı gönder <Send size={17} /></>}</button>
            <p className="form-status" aria-live="polite">{formStatus === 'success' ? 'Teşekkürler, en kısa sürede dönüş yapacağız.' : formStatus === 'error' ? 'Mesaj gönderilemedi. E-posta ile de ulaşabilirsiniz.' : 'Formu doldurarak doğrudan bize ulaşabilirsiniz.'}</p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__top"><a href="#top" aria-label="Lunavor ana sayfa"><BrandMark /></a><p>Kişiye ve işletmeye özel web siteleri, mobil uygulamalar ve yazılım çözümleri.</p><div className="site-footer__links"><a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a><a href={EMAIL_LINK} aria-label="E-posta"><Mail size={18} /></a></div></div>
        <div className="site-footer__bottom"><span>© 2026 Lunavor. Tüm hakları saklıdır.</span><nav className="site-footer__service-links" aria-label="Hizmet sayfaları"><a href="/web-sitesi/">Web</a><a href="/mobil-uygulama/">Mobil</a><a href="/yazilim-gelistirme/">Yazılım</a></nav></div>
      </footer>
    </div>
  );
}

export default App;
