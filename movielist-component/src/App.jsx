import React from 'react';
import FilmListe from '../components/FilmListe';

function App() {
  const filme = [
    { titel: 'The Shawshank Redemption', beschreibung: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', bewertung: 9.3 },
    { titel: 'The Godfather', beschreibung: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', bewertung: 9.2 },
    { titel: 'The Dark Knight', beschreibung: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', bewertung: 9.0 },
  ];

  return (
    <div>
      <FilmListe filmeProp={filme} />
    </div>
  );
}

export default App;