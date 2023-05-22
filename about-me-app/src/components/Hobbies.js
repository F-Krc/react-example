import React from 'react';
import imageData from './imageData';

function Hobbies() {
  return (
    <div className="main">
      <h2>Hiking</h2>
      <div className="container-hobbies">
        {imageData.slice(0, 4).map((item) => (
          <div className="container-item" key={item.id}>
            <img src={item.url} alt={`img${item.id}`} />
          </div>
        ))}
      </div>
      <h2>Riding</h2>
      <div className="container-hobbies">
        {imageData.slice(4).map((item) => (
          <div className="container-item" key={item.id}>
            <img src={item.url} alt={`img${item.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hobbies;
