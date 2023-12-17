import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUpForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name != '' && password != '') {
      console.log({ name }, { password });
    } else alert('Заполните все поля!');
  };

  return (
    <div className="signup__container">
      <h1>Регистрация</h1>
      <div className="hidden">
        <h2>Привет, {name}! </h2>
        <Link to="/" className="contact_link">
          На гланую страницу
        </Link>
      </div>
      <form className="signup__form">
        <div className="signup__group">
          <label htmlFor="name">Укажите ваше имя</label>
          <input
            type="name"
            className="signup__name"
            placeholder="Введите имя"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="signup__error-name"></p>
        </div>
        <div className="signup__group">
          <label htmlFor="password">Придумайте пароль</label>
          <input
            type="password"
            className="signup__password"
            placeholder="Введите пароль"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="signup__error-password"></p>
        </div>
        <button type="submit" className="signup__button" onClick={handleSubmit}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export { SignUpForm };
