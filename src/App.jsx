import { NavBar } from './components/navbar/Navbar'
import { Home } from './pages/Home'
import { Articles } from './pages/Articles'
import { Another } from './pages/Another'
import { MobileIcons } from './components/mobileIcons/MobileIcons'
import { Footer } from './components/footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'


import './App.css'

function App() {

    return (
        
        <div className='body-app'>
            <Router>
                <NavBar />
                {/* <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />0
                    <Route path="/another" element={<Another />} />0
                </Routes> */}
                <MobileIcons />
                {/* <Footer /> */}
            </Router>
        </div>
    )
}

export default App
