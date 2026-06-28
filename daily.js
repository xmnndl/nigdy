// daily.js
// Tutaj wklejasz ID z linków Spotify do tracków na poszczególne dni tygodnia.
// Żeby wziąć ID z linku np.: https://open.spotify.com/track/2x2qXhV98KusM8zT6Tq6O4?si=123...
// Skopiuj tylko ten kod przed znakiem zapytań (2x2qXhV98KusM8zT6Tq6O4).

const weekTracks = [
    "0Xl9DRIQFa3PinMxQu4b7t", // Indeks 0 = Niedziela
    "475LeYzQVZDJ4RhxI0gIfQ", // Indeks 1 = Poniedziałek
    "3BVR2gH0qP6mX7V8TXXYc8", // Indeks 2 = Wtorek
    "4cOdK2wGLETKBW3PvgPWqT", // Indeks 3 = Środa
    "4BP3BKT6O7m01L399B6JvJ", // Indeks 4 = Czwartek
    "60a0Rd6pjxilEEA4ZLwHDF", // Indeks 5 = Piątek
    "5k4kLgH9qj6Xn1X8Hq3uJ9"  // Indeks 6 = Sobota
];

// Sprawdzenie dzisiejszego dnia (od 0 do 6 według zegara przeglądarki usera)
const todayIdx = new Date().getDay(); 

// Przypisanie tracka na dziś - ta zmienna używana jest w index.html
const todayTrackId = weekTracks[todayIdx];