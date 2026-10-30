/* ==========================================================================
   WSPÓLNY NAGŁÓWEK I STOPKA (dla wszystkich podstron)
   Dane kontaktowe zmieniasz TUTAJ — jedno miejsce dla całej strony.
   ========================================================================== */
(function () {
  'use strict';

  const SITE = {
    name: 'Magdalena Sokołowska',
    email: 'magdalena.sokolowska@gmail.com',
    facebook: 'https://www.facebook.com/madzia11223355',
    instagram: 'https://www.instagram.com/art.magdalenasokolowska',
    instagramHandle: '@art.magdalenasokolowska',
    year: 2025
  };

  const I = window.I18N;
  const t = I.t;
  const page = document.body.dataset.page || 'home';
  const home = page === 'home' ? '' : 'index.html';

  const nav = () => [
    { label: t('nav.works'), href: 'galeria.html',     key: 'gallery' },
    { label: t('nav.about'), href: 'o-mnie.html',        key: 'about' },
    { label: t('nav.insp'),  href: 'inspiracje.html',   key: 'inspirations' },
    { label: t('nav.proc'),  href: 'proces.html',       key: 'process' },
    { label: t('nav.contact'), href: '#kontakt',        key: 'contact' }
  ];

  const MONOGRAM = (size) => `
    <svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" class="text-gold" aria-hidden="true">
      <text x="1" y="29" font-family="Cormorant Garamond, serif" font-size="30" fill="currentColor">M</text>
      <text x="18" y="33" font-family="Cormorant Garamond, serif" font-size="26" fill="currentColor">S</text>
    </svg>`;
  const STAR = (cls) => `<svg width="12" height="12" viewBox="0 0 12 12" class="${cls}" aria-hidden="true"><path d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z" fill="currentColor"/></svg>`;
  const IG_ICON = (s) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>`;

  const langSwitch = (cls) => `
    <div class="${cls}" role="group" aria-label="${t('lang.label')}">
      <button type="button" data-lang="pl" class="lang-btn ${I.lang === 'pl' ? 'on' : ''}" aria-pressed="${I.lang === 'pl'}">PL</button>
      <span aria-hidden="true">/</span>
      <button type="button" data-lang="en" class="lang-btn ${I.lang === 'en' ? 'on' : ''}" aria-pressed="${I.lang === 'en'}">EN</button>
    </div>`;

  /* ---------- NAGŁÓWEK ---------- */
  const header = document.getElementById('site-header');
  function renderHeader() {
    if (!header) return;
    const items = nav();
    header.innerHTML = `
      <div class="max-w-[1440px] mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">
        <a href="${home || '#top'}" class="flex items-center gap-4" aria-label="${SITE.name} — ${t('nav.home')}">
          ${MONOGRAM(34)}
          ${STAR('text-gold hidden sm:block')}
        </a>
        <nav class="hidden lg:flex items-center gap-14 text-[11px] tracking-[.2em] uppercase font-normal text-ink" aria-label="${t('nav.main')}">
          ${items.map((n) => `<a href="${n.href}" class="ulink ${n.key === page ? 'active' : ''}">${n.label}</a>`).join('')}
        </nav>
        <div class="flex items-center gap-6">
          ${langSwitch('hidden lg:flex items-center gap-2 text-[11px] tracking-[.18em] text-muted')}
          <button id="burger" type="button" class="lg:hidden p-2 -mr-2 text-ink" aria-label="${t('nav.menu')}" aria-expanded="false" aria-controls="mnav">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
          </button>
        </div>
      </div>
      <nav id="mnav" class="lg:hidden bg-cream/95 backdrop-blur border-t border-gold/20 px-6 text-[12px] tracking-[.2em] uppercase" aria-label="${t('nav.mobile')}">
        <div class="py-4 flex flex-col gap-4">
          ${items.map((n) => `<a href="${n.href}" class="py-1 hover:text-gold transition-colors ${n.key === page ? 'text-gold' : ''}">${n.label}</a>`).join('')}
          ${langSwitch('flex items-center gap-2 text-[12px] tracking-[.18em] text-muted pt-2')}
        </div>
      </nav>`;
  }

  if (header) {
    const variant = header.dataset.variant || 'overlay'; // overlay = przezroczysty nad hero, solid = od razu tło
    header.className = 'fixed top-0 inset-x-0 z-40 transition-all duration-300' + (variant === 'solid' ? ' is-solid' : '');
    renderHeader();

    // jedna delegacja zdarzeń — działa po każdym przerysowaniu nagłówka
    header.addEventListener('click', (e) => {
      const lb = e.target.closest('[data-lang]');
      if (lb) { I.set(lb.dataset.lang); return; }
      const burger = e.target.closest('#burger');
      if (burger) {
        const open = header.querySelector('#mnav').classList.toggle('open');
        burger.setAttribute('aria-expanded', String(open));
        return;
      }
      if (e.target.closest('#mnav a')) {
        header.querySelector('#mnav').classList.remove('open');
        const b = header.querySelector('#burger'); if (b) b.setAttribute('aria-expanded', 'false');
      }
    });

    if (variant !== 'solid') {
      const onScroll = () => header.classList.toggle('is-solid', window.scrollY > 40);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  }

  /* ---------- STOPKA ---------- */
  const footer = document.getElementById('site-footer');
  function renderFooter() {
    if (!footer) return;
    footer.innerHTML = `
      <div class="max-w-[1440px] mx-auto px-6 lg:px-12 pt-10 pb-6">
        <div class="grid md:grid-cols-3 gap-10 md:gap-6 items-start lg:px-[16px]">
          <div>
            <p class="text-[9.5px] tracking-[.22em] uppercase text-gold font-normal">${t('foot.contact')}</p>
            <p class="mt-4 text-[12px] leading-[1.7] text-ink/90 max-w-[210px]">${t('foot.text')}</p>
            <a href="mailto:${SITE.email}" class="btn mt-5 !py-[10px] !px-[22px] !text-[10px]">${t('foot.write')}</a>
          </div>
          <div class="flex items-center justify-center gap-6 md:gap-10 order-first md:order-none">
            <svg width="14" height="70" viewBox="0 0 14 70" class="text-gold hidden sm:block" aria-hidden="true"><path d="M7 0 V70" stroke="currentColor" stroke-width=".8"/><path d="M7 30 L8.5 34.5 L13 36 L8.5 37.5 L7 42 L5.5 37.5 L1 36 L5.5 34.5Z" fill="currentColor"/></svg>
            <div class="text-center">
              <div class="mx-auto w-fit">${MONOGRAM(46)}</div>
              <p class="mt-2 font-serif uppercase text-[15px] tracking-[.14em] text-ink">${SITE.name}</p>
              <p class="mt-1 font-serif text-[12px] text-gold tracking-[.06em]">${t('foot.tagline')}</p>
            </div>
          </div>
          <div class="md:pl-10 lg:pl-[60px]">
            <p class="text-[9.5px] tracking-[.22em] uppercase text-gold font-normal">${t('foot.follow')}</p>
            <a href="${SITE.instagram}" target="_blank" rel="noopener noreferrer" class="block mt-4 text-[12px] text-ink hover:text-gold transition-colors">Instagram: ${SITE.instagramHandle}</a>
            <div class="mt-4 flex items-center gap-4">
              <a href="${SITE.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-ink hover:text-gold transition-colors">${IG_ICON(18)}</a>
              <a href="${SITE.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="text-ink hover:text-gold transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5Z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <p class="mt-8 text-center text-[10px] text-muted tracking-wide">© ${SITE.year} ${SITE.name}. ${t('foot.rights')}</p>
      </div>`;
  }
  if (footer) {
    footer.id = 'kontakt';
    footer.className = 'bg-cream border-t border-gold/10';
    renderFooter();
  }

  // przerysuj po zmianie języka
  I.onChange(() => { renderHeader(); renderFooter(); });

  window.SITE = SITE;
})();
