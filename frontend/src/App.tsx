import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
