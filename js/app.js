/* ==========================================================================
   LOGIKA STRONY
   - strona główna: "Wybrane prace"
   - galeria / inspiracje: siatka + filtry + lightbox (ten sam kod, inna kolekcja)
   - proces: kroki ze zdjęciami
   Nie musisz tu nic zmieniać — obrazy dodajesz w js/works.js i js/content.js
   ========================================================================== */
(function () {
  'use strict';

  const I = window.I18N;
  const t = I.t;
  const loc = I.loc;

  const COLLECTIONS = {
    works: window.WORKS || [],
    inspirations: window.INSPIRATIONS || []
  };

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
  const metaShort = (w) => [loc(w, 'technique'), w.size].filter(Boolean).join(', ');
  const metaFull  = (w) => [loc(w, 'technique'), w.size, w.year].filter(Boolean).join(' · ');

  /* ---------- Płynne pojawianie się elementów ---------- */
  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 })
    : null;
  const observeReveal = (root) => {
    root.querySelectorAll('.reveal:not(.in)').forEach((el) => (io ? io.observe(el) : el.classList.add('in')));
  };

  /* ---------- Śledzenie ładowania zdjęć (płynne wejście + obsługa błędu) ---------- */
  const trackImages = (root) => {
    root.querySelectorAll('img').forEach((img) => {
      const holder = img.closest('.work-media, .img-holder');
      if (img.complete && img.naturalWidth) { img.classList.add('loaded'); return; }
      img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
      img.addEventListener('error', () => { img.classList.add('loaded'); if (holder) holder.classList.add('broken'); }, { once: true });
    });
  };

  /* ==========================================================
     STRONA GŁÓWNA — "Wybrane prace"
     ========================================================== */
  const featuredBox = document.getElementById('featured-works');
  function renderFeatured() {
    if (!featuredBox) return;
    const featured = COLLECTIONS.works.filter((w) => w.featured).slice(0, 4);
    featuredBox.innerHTML = featured.map((w, i) => `
      <a href="galeria.html#${encodeURIComponent(w.id)}" class="card block reveal" style="--d:${i * 80}ms">
        <div class="card-img img-holder aspect-[4/5]">
          <img src="${esc(w.thumb || w.image)}" alt="${esc(loc(w, 'title'))}" loading="lazy" decoding="async">
        </div>
        <h3 class="mt-4 text-[10.5px] tracking-[.18em] uppercase text-ink font-normal">${esc(loc(w, 'title'))}</h3>
        <p class="mt-1 text-[11px] text-muted">${esc(metaShort(w))}</p>
      </a>`).join('');
    featuredBox.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
  }
  renderFeatured();

  /* ==========================================================
     PROCES — kroki
     ========================================================== */
  const processBox = document.getElementById('process-steps');
  function renderProcess() {
    if (!processBox) return;
    const steps = window.PROCESS || [];
    processBox.innerHTML = steps.map((s, i) => `
      <article class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center reveal in">
        <div class="${i % 2 ? 'lg:order-2' : ''}">
          <div class="img-holder step-img" style="aspect-ratio:4/3">
            <img class="fade-img" src="${esc(s.image)}" alt="${esc(loc(s, 'title'))}" loading="lazy" decoding="async">
          </div>
        </div>
        <div class="${i % 2 ? 'lg:order-1 lg:pr-6' : 'lg:pl-6'}">
          <p class="font-serif text-gold text-[44px] leading-none">${String(i + 1).padStart(2, '0')}</p>
          <h2 class="mt-4 font-serif text-[28px] lg:text-[34px] leading-tight font-normal text-ink">${esc(loc(s, 'title'))}</h2>
          <span class="block w-8 h-px bg-gold/70 mt-5"></span>
          <p class="mt-5 text-[14px] leading-[1.85] text-ink/90 max-w-[440px]">${esc(loc(s, 'description'))}</p>
        </div>
      </article>`).join('');
    trackImages(processBox);
  }
  renderProcess();

  /* ==========================================================
     O MNIE
     ========================================================== */
  const aboutRoot = document.getElementById('about-page');
  function renderAbout() {
    if (!aboutRoot) return;
    const A = window.ABOUT || {};
    const $ = (id) => document.getElementById(id);
    const nl = (s) => esc(s).replace(/\n/g, '<br>');

    $('about-text').innerHTML = (A.paragraphs || []).map((p) => `<p>${nl(loc(p, 'text'))}</p>`).join('');

    const q = A.quote;
    $('about-quote-sec').classList.toggle('hidden', !q);
    if (q) {
      $('about-quote').textContent = '„' + loc(q, 'text') + '”';
      $('about-quote-author').textContent = q.author || '';
    }

    const tl = A.timeline || [];
    $('about-timeline-col').classList.toggle('hidden', !tl.length);
    $('about-timeline').innerHTML = tl.map((e) => `
      <li class="relative pl-8 pb-10 border-l border-gold/40 last:pb-0">
        <span class="absolute -left-[5px] top-[7px] w-[9px] h-[9px] rounded-full bg-gold"></span>
        <p class="text-[10.5px] tracking-[.2em] uppercase text-gold font-normal">${esc(loc(e, 'year'))}</p>
        <h3 class="mt-1 font-serif text-[22px] leading-tight text-ink">${esc(loc(e, 'title'))}</h3>
        <p class="mt-2 text-[13.5px] leading-[1.8] text-ink/85 max-w-[440px]">${esc(loc(e, 'description'))}</p>
      </li>`).join('');

    const ex = A.exhibitions || [];
    $('about-exh-col').classList.toggle('hidden', !ex.length);
    $('about-exh').innerHTML = ex.map((e) => `
      <li class="flex gap-6 py-4 border-b border-gold/25">
        <span class="w-14 shrink-0 text-[11px] tracking-[.16em] text-gold pt-[3px]">${esc(loc(e, 'year'))}</span>
        <div>
          <p class="font-serif text-[20px] leading-snug text-ink">${esc(loc(e, 'title'))}</p>
          <p class="mt-1 text-[12px] text-muted">${esc(loc(e, 'place'))}</p>
        </div>
      </li>`).join('');
    $('about-both-sec').classList.toggle('hidden', !tl.length && !ex.length);

    const st = A.studio || [];
    $('about-studio-sec').classList.toggle('hidden', !st.length);
    $('about-studio').innerHTML = st.map((p, i) => `
      <figure class="reveal in">
        <div class="img-holder step-img" style="aspect-ratio:4/5">
          <img class="fade-img" src="${esc(p.image)}" alt="${esc(loc(p, 'caption'))}" loading="lazy" decoding="async">
        </div>
        ${loc(p, 'caption') ? `<figcaption class="mt-3 text-[11px] tracking-[.16em] uppercase text-muted">${esc(loc(p, 'caption'))}</figcaption>` : ''}
      </figure>`).join('');
    trackImages(aboutRoot);
  }
  renderAbout();

  /* ==========================================================
     GALERIA / INSPIRACJE
     ========================================================== */
  const grid = document.getElementById('gallery');

  I.onChange(() => { renderFeatured(); renderProcess(); renderAbout(); });
  if (!grid) return;

  const items = COLLECTIONS[grid.dataset.collection || 'works'] || [];
  const filtersBox = document.getElementById('filters');
  const countBox = document.getElementById('gallery-count');
  const emptyBox = document.getElementById('gallery-empty');
  let category = 'all';
  let visible = items.slice();

  /* --- filtry (kategorie tworzą się automatycznie) --- */
  const categories = [...new Set(items.map((w) => w.category).filter(Boolean))];
  function renderFilters() {
    if (!filtersBox) return;
    if (categories.length < 2) { filtersBox.innerHTML = ''; return; }
    const btn = (key, label) =>
      `<button type="button" class="filter-btn ${category === key ? 'active' : ''}" data-cat="${esc(key)}" aria-pressed="${category === key}">${esc(label)}</button>`;
    filtersBox.innerHTML = btn('all', t('gal.all')) +
      categories.map((c) => btn(c, loc(items.find((w) => w.category === c), 'category'))).join('');
  }
  if (filtersBox) {
    filtersBox.addEventListener('click', (e) => {
      const b = e.target.closest('.filter-btn');
      if (!b) return;
      category = b.dataset.cat;
      renderFilters();
      renderGrid(true);
    });
  }

  /* --- siatka --- */
  function renderGrid(animate) {
    visible = category === 'all' ? items.slice() : items.filter((w) => w.category === category);

    grid.innerHTML = visible.map((w, i) => {
      const meta = metaFull(w);
      const status = loc(w, 'status');
      const desc = !meta && w.description ? loc(w, 'description') : '';
      return `
      <figure class="work reveal" style="--d:${(i % 6) * 70}ms">
        <button type="button" class="work-btn" data-index="${i}" aria-label="${esc(t('gal.zoom', { t: loc(w, 'title') }))}">
          <div class="work-media img-holder" ${w.ratio ? `style="aspect-ratio:${esc(w.ratio)}"` : ''}>
            <img src="${esc(w.thumb || w.image)}" alt="${esc(loc(w, 'title'))}${w.technique ? ', ' + esc(loc(w, 'technique')) : ''}" loading="lazy" decoding="async">
            <span class="work-zoom" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M11 8v6M8 11h6"/></svg>
            </span>
          </div>
        </button>
        <figcaption class="mt-4">
          <h3 class="text-[11px] tracking-[.18em] uppercase text-ink font-normal">${esc(loc(w, 'title'))}</h3>
          ${meta ? `<p class="mt-1 text-[11.5px] text-muted">${esc(meta)}</p>` : ''}
          ${desc ? `<p class="mt-1 text-[12px] leading-[1.6] text-muted">${esc(desc)}</p>` : ''}
          ${status ? `<span class="badge mt-2 ${/sprzedan|prywat/i.test(w.status) ? 'text-muted' : 'text-gold'}">${esc(status)}</span>` : ''}
        </figcaption>
      </figure>`;
    }).join('');

    trackImages(grid);
    if (animate) { grid.classList.add('fade-swap'); setTimeout(() => grid.classList.remove('fade-swap'), 500); }
    observeReveal(grid);

    if (countBox) countBox.textContent = t('gal.count', { n: visible.length });
    if (emptyBox) emptyBox.classList.toggle('hidden', visible.length > 0);
  }

  grid.addEventListener('click', (e) => {
    const b = e.target.closest('.work-btn');
    if (b) openLightbox(Number(b.dataset.index), b);
  });

  /* ==========================================================
     LIGHTBOX
     ========================================================== */
  const lb = document.createElement('div');
  lb.className = 'lb';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.innerHTML = `
    <div class="lb-count" aria-live="polite"></div>
    <button type="button" class="lb-btn lb-close">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 5l14 14M19 5L5 19"/></svg>
    </button>
    <button type="button" class="lb-btn lb-prev">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 5l-7 7 7 7"/></svg>
    </button>
    <figure class="lb-fig">
      <img class="lb-img" alt="">
      <figcaption class="lb-cap"><h3></h3><p class="meta"></p><p class="desc"></p></figcaption>
    </figure>
    <button type="button" class="lb-btn lb-next">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 5l7 7-7 7"/></svg>
    </button>`;
  document.body.appendChild(lb);

  const lbImg = lb.querySelector('.lb-img');
  const lbTitle = lb.querySelector('h3');
  const lbMeta = lb.querySelector('.meta');
  const lbDesc = lb.querySelector('.desc');
  const lbCount = lb.querySelector('.lb-count');
  let current = 0;
  let lastFocus = null;

  const lbLabels = () => {
    lb.setAttribute('aria-label', t('lb.label'));
    lb.querySelector('.lb-close').setAttribute('aria-label', t('lb.close'));
    lb.querySelector('.lb-prev').setAttribute('aria-label', t('lb.prev'));
    lb.querySelector('.lb-next').setAttribute('aria-label', t('lb.next'));
  };
  lbLabels();

  const setHash = (id) => {
    try { history.replaceState(null, '', id ? '#' + encodeURIComponent(id) : location.pathname + location.search); } catch (_) {}
  };

  function showSlide(i, keepImage) {
    if (!visible.length) return;
    current = (i + visible.length) % visible.length;
    const w = visible[current];

    if (!keepImage) {
      lbImg.classList.add('swap');
      const next = new Image();
      next.onload = next.onerror = () => {
        lbImg.src = w.image;
        requestAnimationFrame(() => lbImg.classList.remove('swap'));
      };
      next.src = w.image;
    }
    lbImg.alt = loc(w, 'title');
    lbTitle.textContent = loc(w, 'title');
    lbMeta.textContent = [metaFull(w), loc(w, 'status')].filter(Boolean).join(' · ');
    const desc = loc(w, 'description');
    lbDesc.textContent = desc;
    lbDesc.style.display = desc ? '' : 'none';
    lbCount.textContent = `${current + 1} / ${visible.length}`;
    setHash(w.id);

    [current - 1, current + 1].forEach((k) => {   // wczytaj z wyprzedzeniem sąsiadów
      const n = visible[(k + visible.length) % visible.length];
      if (n) new Image().src = n.image;
    });
  }

  function openLightbox(i, trigger) {
    lastFocus = trigger || document.activeElement;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    showSlide(i);
    lb.querySelector('.lb-close').focus();
  }
  function closeLightbox() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    setHash('');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  lb.querySelector('.lb-close').addEventListener('click', closeLightbox);
  lb.querySelector('.lb-prev').addEventListener('click', () => showSlide(current - 1));
  lb.querySelector('.lb-next').addEventListener('click', () => showSlide(current + 1));
  lb.addEventListener('click', (e) => {
    if (e.target === lb || e.target.classList.contains('lb-fig')) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') showSlide(current - 1);
    else if (e.key === 'ArrowRight') showSlide(current + 1);
    else if (e.key === 'Tab') {            // zatrzymaj fokus wewnątrz okna
      const f = [...lb.querySelectorAll('button')];
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // gest przesunięcia na telefonie
  let tx = 0, ty = 0;
  lb.addEventListener('touchstart', (e) => { tx = e.changedTouches[0].clientX; ty = e.changedTouches[0].clientY; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - tx;
    const dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) showSlide(current + (dx < 0 ? 1 : -1));
  }, { passive: true });

  /* ---------- zmiana języka: przerysuj siatkę, filtry i otwarte powiększenie ---------- */
  I.onChange(() => {
    renderFilters();
    renderGrid(false);
    lbLabels();
    if (lb.classList.contains('open')) showSlide(current, true);
  });

  /* ---------- start ---------- */
  renderFilters();
  renderGrid(false);

  // link bezpośredni, np. galeria.html#oblicze — otwiera obraz od razu
  const id = decodeURIComponent(location.hash.replace(/^#/, ''));
  if (id) {
    const idx = visible.findIndex((w) => w.id === id);
    if (idx >= 0) openLightbox(idx);
  }
})();
