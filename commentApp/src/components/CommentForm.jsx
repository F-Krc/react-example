import React, { useState } from 'react';

const CommentForm = ({ addComment }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
   const [allow, setAllow] = useState(false);
   const [error, setError] = useState('');

 const handleSubmit = (e) => {
   e.preventDefault();
   if (allow && name && text) {
     addComment(name, text);
     setName('');
     setText('');
     setError('');
     setAllow(false);
   } else if (!allow) {
     setError('Bitte aktivieren Sie das Checkbox');
   } else {
     setError('Please fill in all fields.');
   }
 };
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <textarea
          placeholder="Nachricht"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="textarea-field"
        ></textarea>
        {error && <p className="submit-warning">{error}</p>}
        <div>
          <input type="checkbox" checked={allow} onChange={(e) => setAllow(e.target.checked)} />
          <span>Ich habe die Datenschutzerklärung gelesen und akzeptiere sie</span>
        </div>
        <br />
        <button type="submit" className="submit-button">
          Kommentar abschicken
        </button>
      </form>
    </div>
  );
};

export default CommentForm;

