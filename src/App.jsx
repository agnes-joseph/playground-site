import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import BentoExploration from './pages/BentoExploration'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream-100 text-neutral-300 font-geist">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
          <Route path="/bento" element={<BentoExploration />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
