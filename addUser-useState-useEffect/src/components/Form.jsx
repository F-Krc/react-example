import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Form = ({ addUser }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setFormData({ ...formData, name: e.target.value });
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setFormData({ ...formData, username: e.target.value });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormData({ ...formData, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormData({ ...formData, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !username || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }
    const newUser = {
      id: uuidv4(),
      name,
      username,
      email,
      password,
    };
    addUser(newUser);
    setName('');
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className="myForm">
      <div className="form-group">
        <input type="text" name="name" id="name" placeholder='Name' value={name} onChange={handleNameChange} />
      </div>
      <br />
      <div className="form-group">
        <input type="text" name="username" id="username" placeholder='Username' value={username} onChange={handleUsernameChange} />
      </div>
      <br />
      <div className="form-group">
        <input type="email" name="email" id="email" placeholder='E-mail' value={email} onChange={handleEmailChange} />
        {!email.includes('@') && email.length > 0 && (
          <div className="error-message">Please enter a valid email address.</div>
        )}
      </div>
      <br />
      <div className="form-group" id='passwordField'>
        <div className="password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="showIcon" type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
      <br />
      <br />
      <button type="submit" id='submitBtn'>Add User</button>
    </form>
  );
};

export default Form;
