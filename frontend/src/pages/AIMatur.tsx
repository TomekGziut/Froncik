import React from 'react';
import '../styles/LandingPage.css';

const AIMatur: React.FC = () => {
  return (
    <div>
      <h1>AIMatur - Quizy</h1>
      <div>
        <h2>Quiz 1: Jakie jest największe miasto w Polsce?</h2>
        <input type="text" placeholder="Twoja odpowiedź" />
        <button>Sprawdź</button>
      </div>
      <div>
        <h2>Quiz 2: Ile wynosi pierwiastek kwadratowy z 16?</h2>
        <input type="text" placeholder="Twoja odpowiedź" />
        <button>Sprawdź</button>
      </div>
      <div>
        <h2>Quiz 3: Kto napisał 'Pan Tadeusz'?</h2>
        <input type="text" placeholder="Twoja odpowiedź" />
        <button>Sprawdź</button>
      </div>
    </div>
  );
};

export default AIMatur;
