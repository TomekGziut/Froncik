import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/LandingPage.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header className="landing-header">
        <img src={logo} className="logo" alt="AIMatur Logo" />
        <h1>
          <span className="orange">A</span>
          <span className="red">I</span>
          <span className="purple">M</span>
          <span className="rest">atur</span>
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
          <h2 className="title-text">Celuj w sukces z</h2>
          <h1 className="main-title">
            <span className="orange">A</span>
            <span className="red">I</span>
            <span className="purple">M</span>
            <span className="rest1">atur</span>
          </h1>
          <a href="" className="landing-link">
            <p>odblokuj pełnię swoich możliwości</p>
          </a>
        </section>
        <section className="features">
          <div className="feature-block">Sprawdzone pomoce naukowe do matury</div>
          <div className="feature-block">Łatwy dostęp do niezbędnych materiałów</div>
          <div className="feature-block">Spersonalizowane metody i sposoby nauki</div>
        </section>
      </main>
      <footer className="premium-plans">
        <h2>Plany Premium</h2>
        <div className="plan-container">
          <div className="plan">
            <h3>Plan Darmowy</h3>
            <p>Bezpłatny dostęp do podstawowych funkcji.</p>
            <p className="price">Koszt: 0 zł</p>
            <button>Wybierz</button>
          </div>
          <div className="plan">
            <h3>Plan Miesięczny</h3>
            <p>Pełny dostęp za 29,99 zł/miesiąc. Pierwszy tydzień za darmo!</p>
            <p className="price">Koszt: 29,99 zł/miesiąc</p>
            <button>Wybierz</button>
          </div>
          <div className="plan">
            <h3>Plan Roczny</h3>
            <p>Pełny dostęp za 299,99 zł/rok. Oszczędzasz 20%!</p>
            <p className="price">Koszt: 299,99 zł/rok</p>
            <button>Wybierz</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;