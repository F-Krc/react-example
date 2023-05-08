import React from 'react';

function FilmListe({filmeProp}) {
console.log(filmeProp);
  return (
    <div>
      <h1>Liste der besten Filme aller Zeiten</h1>
      <ul>
        {filmeProp.map((film) => (
          <li key={crypto.randomUUID()}>
            <h2>{film.titel}</h2>
            <p>{film.beschreibung}</p>
            <p className ='bewertung'>Bewertung: {film.bewertung}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmListe;
