import { NavBar } from './components/navbar/Navbar'
import { Home } from './pages/Home'
import { Articles } from './pages/Articles'
import { Another } from './pages/Another'
import { MobileIcons } from './components/mobileIcons/MobileIcons'
import { Footer } from './components/footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'


import './App.css'
import { Profile } from './pages/Profile'
import { WriteArticle } from './pages/WriteArticle'
import { ReadMore } from './components/readMore/ReadMore'

function App() {

    return (
        
        <div className='body-app'>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/another" element={<Another />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/writearticle" element={<WriteArticle />} />
                    <Route path="/readmore" element={<ReadMore />} />
                </Routes>
                <MobileIcons />
                <Footer />
            </Router>
        </div>
    )
}

export default App
