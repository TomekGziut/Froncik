import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ścieżka do loga
import cursor from '../assets/cursor.png'; // Ścieżka do kursora
import '../styles/LandingPage.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header className="landing-header">
        <img src={logo} className="logo" alt="AIMatur Logo" />
        <h1>
          <span className='orange'>A</span>
          <span className='red'>I</span>
          <span className='purple'>M</span>
          <span className='rest'>atur</span>
        </h1>
        <div className="buttons">
          <button onClick={() => navigate('/about')}>About</button>
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register')}>Register</button>
          <button onClick={() => navigate('/aimatur')}>AIMatur</button>
        </div>
      </header>
      <main>
        <section>
            <h2 className='title-text'>Celuj w sukces z</h2>
            <h1 className='main-title'>
              <span className='orange'>A</span>
              <span className='red'>I</span>
              <span className='purple'>M</span>
              <span className='rest1'>atur</span>
            </h1>
            <a href="" className='landing-link'>
              <p>odblokuj pełnię swoich możliwości</p>
            </a>
          </section>
        <section className="features">
          <div className="feature-block">Sprawdzone pomoce naukowe do matury</div>
          <div className="feature-block">Łatwy dostęp do niezbędnych materiałów</div>
          <div className="feature-block">Spersonalizowane metody i sposoby nauki</div>
        </section>
        
      </main>
      <section className="products">
          <div className="product">
            <img src={cursor} alt="Produkt" />
            <p>Nazwa produktu</p>
          </div>
        </section>
    </div>
  );
};

export default LandingPage;