import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/Style.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Guides from './pages/Guides'
import Guide from './pages/Guide'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/guides/:slug" element={<Guide />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}