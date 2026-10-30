/* ==========================================================================
   LISTA OBRAZÓW — TO JEDYNY PLIK, KTÓRY EDYTUJESZ, ABY DODAĆ / USUNĄĆ OBRAZ
   ==========================================================================

   JAK DODAĆ NOWY OBRAZ (3 kroki):
   1. Wrzuć zdjęcie obrazu do folderu  images/works/  (np. nowy-obraz.jpg)
   2. Skopiuj jeden blok { ... }, wklej na początku lub końcu listy poniżej
   3. Zmień dane (id, title, image...) — gotowe, obraz pojawi się w galerii
      i (jeśli featured: true) na stronie głównej.

   POLA:
   id          – unikalna nazwa bez polskich znaków i spacji (np. "w-ciszy")
   title       – tytuł obrazu          (title_en – tytuł po angielsku)
   image       – ścieżka do zdjęcia, np. "images/works/w-ciszy.jpg"
   thumb       – (opcjonalnie) mniejsza wersja do siatki, np. "images/works/w-ciszy-small.jpg"
   technique   – technika, np. "olej na płótnie"
   size        – wymiary, np. "70x80 cm"
   year        – rok powstania
   category    – kategoria; filtry w galerii tworzą się AUTOMATYCZNIE z tych nazw
   featured    – true = pokaż na stronie głównej w "Wybrane prace" (pierwsze 4)
   status      – (opcjonalnie) "dostępny" / "sprzedany" / "kolekcja prywatna"
   description – (opcjonalnie) krótki opis widoczny po powiększeniu (description_en – po angielsku)
   technique_en, category_en, status_en – (opcjonalnie) angielskie wersje; popularne wartości
                 ("olej na płótnie", "dostępny", "Chrystus"...) tłumaczą się same, lista w js/i18n.js
   ratio       – (opcjonalnie) proporcje zdjęcia, np. "4/5" – zapobiega "skakaniu" strony
                 podczas ładowania. Jeśli nie znasz, pomiń.

   Kolejność w tej liście = kolejność w galerii.

   Poniższe wpisy to PRZYKŁADY z obrazami zastępczymi (.jpg) — zastąp je swoimi.
   ========================================================================== */

window.WORKS = [
  {
    id: "w-ciszy",
    title: "W ciszy",
    title_en: "In silence",
    image: "images/works/w-ciszy.jpg",
    technique: "olej na płótnie",
    size: "70x80 cm",
    year: 2025,
    category: "Chrystus",
    featured: true,
    status: "dostępny",
    ratio: "4/5",
    description: "Portret w profilu, malowany w porannym świetle pracowni.",
    description_en: "A profile portrait, painted in the morning light of the studio."
  },
  {
    id: "oblicze",
    title: "Oblicze",
    title_en: "Face",
    image: "images/works/oblicze.jpg",
    technique: "olej na płótnie",
    size: "70x70 cm",
    year: 2025,
    category: "Chrystus",
    featured: true,
    status: "dostępny",
    ratio: "1/1",
    description: ""
  },
  {
    id: "mloda-maryja-z-jezusem",
    title: "Młoda Maryja z Jezusem",
    title_en: "Young Mary with Jesus",
    image: "images/works/mloda-maryja.jpg",
    technique: "olej na płótnie",
    size: "60x80 cm",
    year: 2024,
    category: "Maryja",
    featured: true,
    status: "sprzedany",
    ratio: "3/4",
    description: ""
  },
  {
    id: "ciche-wolanie",
    title: "Ciche wołanie",
    title_en: "Quiet cry",
    image: "images/works/ciche-wolanie.jpg",
    technique: "olej na płótnie",
    size: "70x70 cm",
    year: 2024,
    category: "Chrystus",
    featured: true,
    status: "dostępny",
    ratio: "1/1",
    description: ""
  },
  {
    id: "swiatlo-poranka",
    title: "Światło poranka",
    title_en: "Morning light",
    image: "images/works/swiatlo-poranka.jpg",
    technique: "olej na płótnie",
    size: "90x60 cm",
    year: 2023,
    category: "Pejzaże",
    featured: false,
    ratio: "3/2",
    description: ""
  },
  {
    id: "matka",
    title: "Matka",
    title_en: "Mother",
    image: "images/works/matka.jpg",
    technique: "olej na płótnie",
    size: "50x70 cm",
    year: 2023,
    category: "Maryja",
    featured: false,
    ratio: "5/7",
    description: ""
  },
  {
    id: "adoracja",
    title: "Adoracja",
    title_en: "Adoration",
    image: "images/works/adoracja.jpg",
    technique: "olej na płótnie",
    size: "60x60 cm",
    year: 2022,
    category: "Symbole",
    featured: false,
    ratio: "1/1",
    description: ""
  },
  {
    id: "droga",
    title: "Droga",
    title_en: "The road",
    image: "images/works/droga.jpg",
    technique: "olej na płótnie",
    size: "100x70 cm",
    year: 2022,
    category: "Pejzaże",
    featured: false,
    ratio: "10/7",
    description: ""
  }
];
