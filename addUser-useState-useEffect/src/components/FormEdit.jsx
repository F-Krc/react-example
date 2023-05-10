import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const FormEdit = ({ addUser }) => {
  const [form, setForm] = useState({ name: '', username: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.username || !form.email || !form.password) {
      alert('Please fill in all fields.');
      return;
    }
    const newUser = {
      id: uuidv4(),
      name: form.name,
      username: form.username,
      email: form.email,
      password: form.password,
    };
    addUser(newUser);
    setForm({ name: '', username: '', email: '', password: '' });
  };
  return (
    <form onSubmit={handleSubmit} className="myForm">
      <div className="form-group">
        <input type="text" name="name" id="name" placeholder="Name" value={form.name} onChange={onChangeInput} />
      </div>
      <br />
      <div className="form-group">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={form.username}
          onChange={onChangeInput}
        />
      </div>
      <br />
      <div className="form-group">
        <input type="email" name="email" id="email" placeholder="E-mail" value={form.email} onChange={onChangeInput} />
        {!form.email.includes('@') && form.email.length > 0 && (
          <div className="error-message">Please enter a valid email address.</div>
        )}
      </div>
      <br />
      <div className="form-group" id="passwordField">
        <div className="password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="Password"
            value={form.password}
            onChange={onChangeInput}
          />
          <button className="showIcon" type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
      <br />
      <br />
      <button type="submit" id="submitBtn">
        Add User
      </button>
    </form>
  );
};

export default FormEdit;
