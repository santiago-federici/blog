import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import { MobileIcons } from './components/containers/mobileIcons/MobileIcons'

import { NavBar } from './components/containers/navbar/Navbar'
import { Home } from './pages/home/Home'
import { Another } from './pages/another/Another'
import { Articles } from './pages/articles/Articles'
import { Footer } from './components/containers/footer/Footer'
import { Profile } from './pages/profile/Profile'
import { WriteArticle } from './pages/writeArticle/WriteArticle' 
import { ReadMore } from './components/containers/readMore/ReadMore' 
import { Login } from './components/containers/login/login'

import './App.css'

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
                    <Route path="/login" element={<Login />} />
                </Routes>
                <MobileIcons />
                <Footer />
            </Router>
        </div>
    )
}

export default App
