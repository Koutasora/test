// Konfiguracja Tailwind CSS (kolory i czcionki strony)
tailwind.config = {
  theme: {
    extend: {
      colors: {
        cream:  '#F7F2EA',   // tło główne
        sand:   '#EFE7DB',   // tło sekcji alternatywnych
        stone2: '#E3D9CB',   // kafelki
        gold:   '#B58A4B',   // akcent (złoto)
        goldd:  '#9A7238',   // akcent hover
        ink:    '#2B2622',   // tekst główny
        muted:  '#6F675E'    // tekst pomocniczy
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Jost', 'system-ui', 'sans-serif']
      }
    }
  }
};
