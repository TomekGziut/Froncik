import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import AIMatur from './pages/AIMatur'
import Ai from './pages/api/ask/Ai'

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aimatur" element={<AIMatur />} />
        <Route path="/ai" element={<Ai />} />
      </Routes>
    </div>
  )
}

export default App
