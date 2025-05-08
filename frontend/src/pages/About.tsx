import React from 'react'
import '../styles/about.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header className="landing-header">
        <img src={logo} className="logo" alt="AIMatur Logo" />
        <div onClick={() => navigate('/')} className='main-page'>
        <h1>
          <span className='orange'>A</span>
          <span className='red'>I</span>
          <span className='purple'>M</span>
          <span className='rest'>atur</span>
        </h1>
        </div>
        <div className="buttons">
          <button onClick={() => navigate('/about')}>About</button>
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register')}>Register</button>
          <button onClick={() => navigate('/aimatur')}>AIMatur</button>
        </div>
      </header>
      <header className='nas-head'>
        <h1>O nas</h1>
        </header>
        <main className='desc'>
          <p><strong>AIMatur</strong> to innowacyjna platforma edukacyjna, która łączy nowoczesną technologię sztucznej inteligencji z potrzebami
           uczniów przygotowujących się do matury.</p>
          <p>Naszym celem jest maksymalne uproszczenie nauki i zwiększenie jej efektywności poprzez personalizowane podejście.</p>
          <p>Dzięki AIMatur:</p>
          <ul>
            <li>Zyskasz dostęp do sprawdzonych materiałów edukacyjnych,</li>
            <li>Otrzymasz spersonalizowane quizy na podstawie twoich wyników w stylu arkuszy maturalnych,</li>
            <li>Skoncentrujesz się na tym, co naprawdę ważne - skutecznym przygotowaniu do egzaminów maturalnych.</li>
          </ul>
          <p>Tworzymy przestrzeń, w której każdy uczeń może rozwijać swoje możliwości i osiągać cele bez stresu i chaosu.</p>
          <p><strong>Celuj w sukces z AIMatur - odblokuj pełnię swojego potencjału!</strong></p>
        </main>
    </div>
)
}

export default About
