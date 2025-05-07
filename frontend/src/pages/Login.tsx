import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Dodaj logikę logowania
  };

  return (
    <div className="login-page">
      <h1>Logowanie</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Wpisz swój email"
            required
          />
        </label>
        <label>
          Hasło:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Wpisz swoje hasło"
            required
          />
        </label>
        <button type="submit">Zaloguj się</button>
      </form>
    </div>
  );
};

export default LoginPage;