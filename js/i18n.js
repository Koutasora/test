/* ==========================================================================
   TŁUMACZENIA PL / EN
   - Teksty stałe strony: słowniki DICT poniżej (klucz → tekst).
   - W HTML: <span data-i18n="klucz"></span>  (tekst)
             data-i18n-attr="aria-label:klucz;content:klucz2"  (atrybuty)
   - Teksty obrazów: w js/works.js i js/content.js dodaj pola *_en,
     np. title_en, description_en. Gdy brak wersji EN, pokaże się polska.
   - Wybór języka jest zapamiętywany w przeglądarce. Można też wejść z ?lang=en
   ========================================================================== */
(function () {
  'use strict';

  const DICT = {
    pl: {
      'meta.home.title': 'Magdalena Sokołowska — Sztuka, która spotyka się z sacrum',
      'meta.home.desc': 'Magdalena Sokołowska — malarstwo, wiara, światło. Obrazy olejne o tematyce sakralnej.',
      'meta.gallery.title': 'Galeria — Magdalena Sokołowska',
      'meta.gallery.desc': 'Galeria obrazów Magdaleny Sokołowskiej — malarstwo olejne o tematyce sakralnej.',
      'meta.insp.title': 'Inspiracje — Magdalena Sokołowska',
      'meta.insp.desc': 'Światło, natura, modlitwa — to, co prowadzi moje malarstwo.',
      'meta.proc.title': 'Proces twórczy — Magdalena Sokołowska',
      'meta.proc.desc': 'Między ciszą a obrazem — jak powstaje obraz olejny.',

      'meta.about.title': 'O mnie — Magdalena Sokołowska',
      'meta.about.desc': 'Magdalena Sokołowska — artystka malarka. Tworzę z potrzeby duszy.',
      'about.timeline': 'Droga artystyczna',
      'about.exh': 'Wystawy i publikacje',
      'about.studio': 'Z pracowni',
      'about.cta.title': 'Chcesz porozmawiać o obrazie lub współpracy?',
      'about.cta.text': 'Napisz do mnie — odpowiem najszybciej, jak potrafię.',
      'about.portrait.alt': 'Portret artystki',

      'nav.works': 'Prace', 'nav.about': 'O mnie', 'nav.insp': 'Inspiracje', 'nav.proc': 'Proces', 'nav.contact': 'Kontakt',
      'nav.menu': 'Otwórz menu', 'nav.main': 'Główna nawigacja', 'nav.mobile': 'Menu mobilne', 'nav.home': 'Strona główna',

      'hero.tagline': 'Sztuka, która spotyka się z sacrum',
      'hero.text': 'Maluję światło, ciszę i obecność.<br>Moje obrazy są modlitwą zapisaną<br>kolorem i symbolem.',
      'hero.cta': 'Zobacz prace',
      'hero.alt': 'Portret – malarstwo olejne',
      'hero.down': 'Przewiń w dół',

      'feat.kicker': 'Wybrane prace',
      'feat.title': 'Malowane z uważnością',
      'feat.all': 'Zobacz wszystkie prace',

      'about.kicker': 'O mnie',
      'about.title': 'Tworzę z potrzeby duszy',
      'about.p1': 'Nazywam się Magdalena Sokołowska.<br>Jestem artystką malarką.',
      'about.p2': 'W mojej twórczości łączę duchowość, symbolikę i piękno świateł. Każdy obraz powstaje z modlitwy, ciszy i zachwytu nad tajemnicą życia.',
      'about.p3': 'Wierzę, że sztuka może być przestrzenią spotkania – z drugim człowiekiem i z Tym, który jest Źródłem.',
      'about.more': 'Czytaj więcej',
      'about.alt': 'Artystka przy pracy w pracowni',

      'tile.insp.kicker': 'Inspiracje',
      'tile.insp.title': 'Światło, natura,<br>modlitwa',
      'tile.proc.kicker': 'Proces twórczy',
      'tile.proc.title': 'Między ciszą a obrazem',
      'tile.space.kicker': 'Przestrzeń',
      'tile.space.title': 'Obrazy w Twoim<br>wnętrzu',
      'tile.more': 'Zobacz więcej',

      'gal.kicker': 'Galeria',
      'gal.intro': 'Wybór obrazów olejnych — światło, cisza i obecność zapisane kolorem. Kliknij obraz, aby zobaczyć go w powiększeniu.',
      'gal.all': 'Wszystkie',
      'gal.count': 'Liczba prac: {n}',
      'gal.empty': 'Brak obrazów w tej kategorii.',
      'gal.filter': 'Filtruj według kategorii',
      'gal.zoom': 'Powiększ: {t}',
      'gal.cta.title': 'Zainteresował Cię któryś z obrazów?',
      'gal.cta.text': 'Napisz — chętnie opowiem o jego historii i dostępności.',
      'gal.cta.btn': 'Skontaktuj się',

      'insp.kicker': 'Inspiracje',
      'insp.title': 'Światło, natura, modlitwa',
      'insp.intro': 'Obrazy nie rodzą się znikąd. Czerpię z porannego światła w pracowni, z roślin i pól, z liturgii i z ciszy modlitwy. Tutaj zbieram to, co mnie prowadzi.',
      'insp.cta.title': 'Chcesz zobaczyć, co z tego powstaje?',
      'insp.cta.text': 'Zajrzyj do galerii obrazów.',
      'insp.cta.btn': 'Zobacz galerię',

      'proc.kicker': 'Proces twórczy',
      'proc.title': 'Między ciszą a obrazem',
      'proc.intro': 'Każdy obraz powstaje powoli — od modlitwy i szkicu, przez kolejne warstwy koloru, aż po ostatnie pociągnięcie pędzla.',
      'proc.cta.title': 'Zobacz, jak to wygląda na gotowych obrazach',
      'proc.cta.text': 'Wszystkie prace znajdziesz w galerii.',
      'proc.cta.btn': 'Zobacz galerię',

      'foot.contact': 'Skontaktuj się',
      'foot.text': 'Jeśli czujesz, że któryś z obrazów przemawia właśnie do Ciebie – napisz lub odwiedź mój profil.',
      'foot.write': 'Napisz do mnie',
      'foot.tagline': 'malarstwo <span class="mx-1">•</span> wiara <span class="mx-1">•</span> światło',
      'foot.follow': 'Bądźmy w kontakcie',
      'foot.rights': 'Wszelkie prawa zastrzeżone.',

      'lb.label': 'Podgląd obrazu', 'lb.close': 'Zamknij', 'lb.prev': 'Poprzedni obraz', 'lb.next': 'Następny obraz',
      'lang.label': 'Język'
    },

    en: {
      'meta.home.title': 'Magdalena Sokołowska — Art that meets the sacred',
      'meta.home.desc': 'Magdalena Sokołowska — painting, faith, light. Oil paintings with a sacred theme.',
      'meta.gallery.title': 'Gallery — Magdalena Sokołowska',
      'meta.gallery.desc': 'Gallery of paintings by Magdalena Sokołowska — oil paintings with a sacred theme.',
      'meta.insp.title': 'Inspirations — Magdalena Sokołowska',
      'meta.insp.desc': 'Light, nature, prayer — what guides my painting.',
      'meta.proc.title': 'Creative process — Magdalena Sokołowska',
      'meta.proc.desc': 'Between silence and image — how an oil painting is made.',

      'meta.about.title': 'About — Magdalena Sokołowska',
      'meta.about.desc': 'Magdalena Sokołowska — painter. I create out of a need of the soul.',
      'about.timeline': 'Artistic path',
      'about.exh': 'Exhibitions and publications',
      'about.studio': 'From the studio',
      'about.cta.title': 'Would you like to talk about a painting or a collaboration?',
      'about.cta.text': 'Write to me — I will reply as soon as I can.',
      'about.portrait.alt': 'Portrait of the artist',

      'nav.works': 'Works', 'nav.about': 'About', 'nav.insp': 'Inspirations', 'nav.proc': 'Process', 'nav.contact': 'Contact',
      'nav.menu': 'Open menu', 'nav.main': 'Main navigation', 'nav.mobile': 'Mobile menu', 'nav.home': 'Home page',

      'hero.tagline': 'Art that meets the sacred',
      'hero.text': 'I paint light, silence and presence.<br>My paintings are prayer written<br>in colour and symbol.',
      'hero.cta': 'See the works',
      'hero.alt': 'Portrait – oil painting',
      'hero.down': 'Scroll down',

      'feat.kicker': 'Selected works',
      'feat.title': 'Painted with care',
      'feat.all': 'See all works',

      'about.kicker': 'About',
      'about.title': 'I create out of a need of the soul',
      'about.p1': 'My name is Magdalena Sokołowska.<br>I am a painter.',
      'about.p2': 'In my work I combine spirituality, symbolism and the beauty of light. Every painting is born of prayer, silence and wonder at the mystery of life.',
      'about.p3': 'I believe art can be a space of encounter – with another person and with the One who is the Source.',
      'about.more': 'Read more',
      'about.alt': 'The artist at work in her studio',

      'tile.insp.kicker': 'Inspirations',
      'tile.insp.title': 'Light, nature,<br>prayer',
      'tile.proc.kicker': 'Creative process',
      'tile.proc.title': 'Between silence and image',
      'tile.space.kicker': 'Space',
      'tile.space.title': 'Paintings in your<br>home',
      'tile.more': 'See more',

      'gal.kicker': 'Gallery',
      'gal.intro': 'A selection of oil paintings — light, silence and presence written in colour. Click a painting to view it enlarged.',
      'gal.all': 'All',
      'gal.count': 'Works: {n}',
      'gal.empty': 'No paintings in this category.',
      'gal.filter': 'Filter by category',
      'gal.zoom': 'Enlarge: {t}',
      'gal.cta.title': 'Interested in one of the paintings?',
      'gal.cta.text': 'Write to me — I will gladly tell you about its story and availability.',
      'gal.cta.btn': 'Get in touch',

      'insp.kicker': 'Inspirations',
      'insp.title': 'Light, nature, prayer',
      'insp.intro': 'Paintings are not born from nowhere. I draw on the morning light in the studio, on plants and fields, on the liturgy and the silence of prayer. Here I gather what guides me.',
      'insp.cta.title': 'Want to see what comes of it?',
      'insp.cta.text': 'Take a look at the gallery.',
      'insp.cta.btn': 'See the gallery',

      'proc.kicker': 'Creative process',
      'proc.title': 'Between silence and image',
      'proc.intro': 'Every painting is made slowly — from prayer and sketch, through successive layers of colour, to the last brushstroke.',
      'proc.cta.title': 'See how it looks in finished paintings',
      'proc.cta.text': 'All works can be found in the gallery.',
      'proc.cta.btn': 'See the gallery',

      'foot.contact': 'Get in touch',
      'foot.text': 'If you feel that one of the paintings speaks to you — write to me or visit my profile.',
      'foot.write': 'Write to me',
      'foot.tagline': 'painting <span class="mx-1">•</span> faith <span class="mx-1">•</span> light',
      'foot.follow': 'Stay in touch',
      'foot.rights': 'All rights reserved.',

      'lb.label': 'Image preview', 'lb.close': 'Close', 'lb.prev': 'Previous painting', 'lb.next': 'Next painting',
      'lang.label': 'Language'
    }
  };

  /* Słowniczek popularnych wartości z works.js / content.js (tłumaczy się automatycznie) */
  const TERMS_EN = {
    'olej na płótnie': 'oil on canvas',
    'olej na desce': 'oil on panel',
    'akryl na płótnie': 'acrylic on canvas',
    'dostępny': 'available',
    'sprzedany': 'sold',
    'kolekcja prywatna': 'private collection',
    'Chrystus': 'Christ',
    'Maryja': 'Mary',
    'Pejzaże': 'Landscapes',
    'Symbole': 'Symbols',
    'Światło': 'Light',
    'Natura': 'Nature',
    'Modlitwa': 'Prayer'
  };

  let lang = 'pl';
  try {
    const q = new URLSearchParams(location.search).get('lang');
    const saved = localStorage.getItem('lang');
    if (q === 'pl' || q === 'en') lang = q;
    else if (saved === 'pl' || saved === 'en') lang = saved;
  } catch (_) {}

  const listeners = [];

  function t(key, vars) {
    let s = (DICT[lang] && DICT[lang][key]);
    if (s == null) s = DICT.pl[key];
    if (s == null) return key;
    if (vars) Object.keys(vars).forEach((k) => { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  }

  /* wartość pola obiektu w aktualnym języku: item[field_en] → słowniczek → polska */
  function loc(item, field) {
    if (!item) return '';
    if (lang === 'en') {
      if (item[field + '_en']) return item[field + '_en'];
      const base = item[field];
      if (base && TERMS_EN[base]) return TERMS_EN[base];
      return base == null ? '' : base;
    }
    return item[field] == null ? '' : item[field];
  }

  function apply(root) {
    root = root || document;
    document.documentElement.lang = lang;
    root.querySelectorAll('[data-i18n]').forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
    root.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const i = pair.indexOf(':');
        if (i > 0) el.setAttribute(pair.slice(0, i).trim(), t(pair.slice(i + 1).trim()));
      });
    });
  }

  function set(l) {
    if (l !== 'pl' && l !== 'en') return;
    lang = l;
    try { localStorage.setItem('lang', l); } catch (_) {}
    apply(document);
    listeners.forEach((fn) => { try { fn(l); } catch (e) { console.error(e); } });
  }

  window.I18N = {
    get lang() { return lang; },
    t, loc, apply, set,
    onChange(fn) { listeners.push(fn); }
  };

  apply(document);
})();
