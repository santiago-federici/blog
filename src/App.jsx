import { NavBar } from './components/navbar/Navbar'
import { Home } from './pages/Home'
import { Articles } from './pages/Articles'
import { Footer } from './components/footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'


import './App.css'

function App() {

    return (
        
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Articles />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
