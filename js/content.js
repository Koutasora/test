/* ==========================================================================
   TREŚCI PODSTRON "INSPIRACJE" I "PROCES"
   Edytujesz tak samo jak js/works.js — zdjęcia wrzucasz do folderów:
     images/inspirations/   (strona Inspiracje)
     images/process/        (strona Proces)

   UWAGA: poniższe teksty i zdjęcia to PRZYKŁADY — zamień je na swoje.

   Pola:
   title / title_en            – tytuł (PL / EN)
   description / description_en – opis (PL / EN)
   image                       – ścieżka do zdjęcia
   category                    – kategoria filtra (tylko Inspiracje)
   ratio                       – proporcje zdjęcia, np. "4/5" (tylko Inspiracje)
   ========================================================================== */

/* ---------- INSPIRACJE (galeria zdjęć z filtrami i powiększeniem) ---------- */
window.INSPIRATIONS = [
  {
    id: "poranne-swiatlo",
    title: "Poranne światło", title_en: "Morning light",
    image: "images/inspirations/poranne-swiatlo.jpg",
    category: "Światło", ratio: "4/5",
    description: "Pierwsze promienie w pracowni — od nich zaczyna się dzień przy płótnie.",
    description_en: "The first rays in the studio — this is how the day at the canvas begins."
  },
  {
    id: "pole-i-trawy",
    title: "Pole i trawy", title_en: "Field and grasses",
    image: "images/inspirations/pole-i-trawy.jpg",
    category: "Natura", ratio: "3/2",
    description: "Suche trawy i szerokie niebo uczą ciszy.",
    description_en: "Dry grasses and a wide sky teach silence."
  },
  {
    id: "ciche-kwiaty",
    title: "Ciche kwiaty", title_en: "Quiet flowers",
    image: "images/inspirations/ciche-kwiaty.jpg",
    category: "Natura", ratio: "1/1",
    description: "Delikatność, która nie potrzebuje słów.",
    description_en: "A delicacy that needs no words."
  },
  {
    id: "kaplica",
    title: "Kaplica", title_en: "Chapel",
    image: "images/inspirations/kaplica.jpg",
    category: "Modlitwa", ratio: "4/5",
    description: "Miejsce, w którym światło staje się modlitwą.",
    description_en: "A place where light becomes prayer."
  },
  {
    id: "swiece",
    title: "Świece", title_en: "Candles",
    image: "images/inspirations/swiece.jpg",
    category: "Światło", ratio: "1/1",
    description: "Mały płomień, który prowadzi przez ciemność.",
    description_en: "A small flame that leads through the dark."
  },
  {
    id: "ikona-i-symbol",
    title: "Ikona i symbol", title_en: "Icon and symbol",
    image: "images/inspirations/ikona-i-symbol.jpg",
    category: "Modlitwa", ratio: "3/4",
    description: "Symbol mówi więcej, niż potrafi opis.",
    description_en: "A symbol says more than a description can."
  }
];

/* ---------- PROCES TWÓRCZY (kroki: zdjęcie + opis, układ naprzemienny) ---------- */
window.PROCESS = [
  {
    title: "Cisza i szkic", title_en: "Silence and sketch",
    image: "images/process/krok-1.jpg",
    description: "Zaczynam od modlitwy i ciszy. Pierwszy szkic powstaje węglem — szukam kompozycji i miejsca, z którego wypłynie światło.",
    description_en: "I begin with prayer and silence. The first sketch is made in charcoal — I look for the composition and the place from which the light will flow."
  },
  {
    title: "Podmalówka", title_en: "Underpainting",
    image: "images/process/krok-2.jpg",
    description: "Cienkie, przezroczyste warstwy wyznaczają ton i nastrój obrazu. Jeszcze nie ma szczegółów — jest kierunek.",
    description_en: "Thin, transparent layers set the tone and mood of the painting. There are no details yet — only direction."
  },
  {
    title: "Warstwy koloru i światła", title_en: "Layers of colour and light",
    image: "images/process/krok-3.jpg",
    description: "Stopniowo buduję kolor i światło. Każda warstwa musi wyschnąć, zanim pojawi się następna — to nauka cierpliwości.",
    description_en: "I gradually build colour and light. Each layer must dry before the next appears — it is a lesson in patience."
  },
  {
    title: "Ostatnie pociągnięcie", title_en: "The last brushstroke",
    image: "images/process/krok-4.jpg",
    description: "Wykończenie i lakierowanie. Obraz odpoczywa, a ja patrzę, czy jest już taki, jaki ma być.",
    description_en: "Finishing and varnishing. The painting rests, and I look to see whether it is what it is meant to be."
  }
];

/* ---------- O MNIE (strona o-mnie.html) ----------
   Zdjęcie portretowe: images/about/magdalena.jpg (pion, ok. 1200x1600 px)
   Zdjęcia z pracowni:  images/about/ (dowolne nazwy, wpisz je w "studio")

   paragraphs  – akapity opisu (dodaj ile chcesz); w tekście możesz użyć \n jako nowej linii
   quote       – cytat/credo (usuń cały blok quote, jeśli nie chcesz cytatu)
   timeline    – "Droga artystyczna": year, title, description
   exhibitions – "Wystawy i publikacje": year, title, place
   studio      – zdjęcia z pracowni: image, caption (opcjonalnie)
   Każdą z list możesz zostawić pustą [] — sekcja wtedy się nie wyświetli.

   UWAGA: wpisy timeline / exhibitions poniżej to WZORY do uzupełnienia.
   ---------------------------------------------------------- */
window.ABOUT = {
  portrait: "images/about/magdalena.jpg",

  paragraphs: [
    {
      text: "Nazywam się Magdalena Sokołowska.\nJestem artystką malarką.",
      text_en: "My name is Magdalena Sokołowska.\nI am a painter."
    },
    {
      text: "W mojej twórczości łączę duchowość, symbolikę i piękno świateł. Każdy obraz powstaje z modlitwy, ciszy i zachwytu nad tajemnicą życia.",
      text_en: "In my work I combine spirituality, symbolism and the beauty of light. Every painting is born of prayer, silence and wonder at the mystery of life."
    },
    {
      text: "Wierzę, że sztuka może być przestrzenią spotkania – z drugim człowiekiem i z Tym, który jest Źródłem.",
      text_en: "I believe art can be a space of encounter – with another person and with the One who is the Source."
    }
  ],

  quote: {
    text: "Maluję światło, ciszę i obecność.",
    text_en: "I paint light, silence and presence.",
    author: "Magdalena Sokołowska"
  },

  timeline: [
    {
      year: "20XX",
      title: "Tutaj wpisz ważny moment", title_en: "Write an important moment here",
      description: "Krótki opis — np. początek malowania, studia, pierwszy obraz sakralny.",
      description_en: "A short description — e.g. when you began to paint, your studies, your first sacred painting."
    },
    {
      year: "20XX",
      title: "Kolejny etap", title_en: "Next stage",
      description: "Np. pierwsza wystawa, ważne zamówienie, nowa pracownia.",
      description_en: "E.g. a first exhibition, an important commission, a new studio."
    },
    {
      year: "Dziś", year_en: "Today",
      title: "Malowanie z uważnością", title_en: "Painting with care",
      description: "Tworzę obrazy olejne o tematyce sakralnej na zamówienie i do galerii.",
      description_en: "I paint sacred-themed oil paintings, on commission and for the gallery."
    }
  ],

  exhibitions: [
    {
      year: "20XX",
      title: "Tytuł wystawy", title_en: "Exhibition title",
      place: "Miejsce, miasto", place_en: "Venue, city"
    },
    {
      year: "20XX",
      title: "Inna wystawa lub publikacja", title_en: "Another exhibition or publication",
      place: "Miejsce, miasto", place_en: "Venue, city"
    }
  ],

  studio: [
    { image: "images/about/pracownia-1.jpg", caption: "Pracownia", caption_en: "The studio" },
    { image: "images/about/pracownia-2.jpg", caption: "Pędzle i farby", caption_en: "Brushes and paints" },
    { image: "images/about/pracownia-3.jpg", caption: "Obraz w trakcie powstawania", caption_en: "A painting in progress" }
  ]
};
