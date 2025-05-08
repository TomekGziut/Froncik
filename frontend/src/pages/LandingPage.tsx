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
          <button  className='main-button' onClick={() => navigate('/about')}>About</button>
          <button className='main-button'  onClick={() => navigate('/login')}>Login</button>
          <button className='main-button' onClick={() => navigate('/register')}>Register</button>
          <button className='main-button' onClick={() => navigate('/aimatur')}>AIMatur</button>
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
          <h2 className="feature-block">Sprawdzone pomoce naukowe do matury</h2>
          <h2 className="feature-block">Łatwy dostęp do niezbędnych materiałów</h2>
          <h2 className="feature-block">Spersonalizowane metody i sposoby nauki</h2>
        </section>
      </main>

      <section>

        <h2 className='inf'>Informacje o aplikacji</h2>

        <div className="about-block">
          <h3>Ai, która naprawde pomaga</h3>
          <p>AIMatur to inteligentna aplikacja wspierająca naukę do matury – stworzona z myślą o uczniach, 
            którzy chcą uczyć się skuteczniej, szybciej i mądrzej. Dzięki wykorzystaniu sztucznej inteligencji,
             AIMatur analizuje Twoje postępy, identyfikuje słabe punkty i tworzy spersonalizowane plany nauki,
              dopasowane do Twoich potrzeb.</p>
        </div>
        <div className="about-block2">
          <h3>Co potrafi AIMatur?</h3>
          <p> • Generuje zadania maturalne na podstawie  poprzednich matur </p>
          <p> • dostosowuje się do Twojego poziomu i tempa nauki</p>
          <p> • Tłumaczy trudne zagadnienia krok po kroku – niczym nauczyciel dostępny 24/7</p>
          <p> • Analizuje Twoje błędy, i wyjaśnia rozwiązania</p>
          <p> • Tworzy podsumowania i fiszki idealne do szybkiej powtórki</p>
          <p> • Umożliwia naukę z dowolnego miejsca – na telefonie, tablecie czy laptopie</p>
        </div>
        <div className="about-block3">
          <h3>Dlaczego AIMatur?</h3>
          <p>Zwiększ swoje szanse na wysoki wynik – ucz się efektywnie, a nie więcej</p>
          <p>Cała matura w jednej aplikacji – język polski, matematyka, języki obce i przedmioty rozszerzone</p>
          <p>Technologia AI w służbie edukacji – bo przyszłość to mądra nauka</p>
          <p>Oszczędzaj czas – ucz się tego, co naprawdę musisz powtórzyć</p>
          <p>Tryb nocny i harmonogram nauki – ucz się tak, jak lubisz</p>

        </div>
      </section>
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