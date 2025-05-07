import React, { useState } from 'react';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Hasła nie są zgodne!');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    // Dodaj logikę rejestracji
  };

  return (
    <div className="register-page">
      <h1>Rejestracja</h1>
      <form className="register-form" onSubmit={handleSubmit}>
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
        <label>
          Potwierdź hasło:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Potwierdź swoje hasło"
            required
          />
        </label>
        <button type="submit">Zarejestruj się</button>
      </form>
    </div>
  );
};

export default RegisterPage;