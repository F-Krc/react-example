import React from 'react';
import { Link } from 'react-router-dom';
import img from '../img/fk.jpg';

function Me() {
  return (
    <div className="main">
      <div className="container">
        <div className="profile-photo">
          <img src={img} alt="profil" className="profil-img" />
        </div>
        <div className="content">
          <h2>Fatih Karaca</h2>
          <p className="content-text">
            I was born in Erzurum/Turkey. I studied math. I am working as a web developer. I am learning Frontend and
            Backend programming languages. I know HTML, CSS, SCSS. Bootstrap and JavaScript. I use React as UI, Node.js
            and MongoDB as backend.
          </p>
          <br />
          <br />
          <p className="content-text">Some websites I frequently use:</p>
          <br />
          <Link to="https://www.w3schools.com/" className="links" target="_blank">
            W3 Schools
          </Link>
          <br />
          <Link to="https://www.javascripttutorial.net/" className="links" target="_blank">
            JavaScript Tutorial
          </Link>
          <br />
          <Link to="https://stackoverflow.com/" className="links" target="_blank">
            Stack Overflow
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Me;
