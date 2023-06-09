import { FaUserCircle } from 'react-icons/fa'
import  Logo  from '../../assets/images/logo.jpg'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export function NavBar() {

    function logged() {
        document.querySelector(".btns-container").style.display = "none"
        document.querySelector(".fausercircle").style.display = "block"
    }

    return (
        <header>
            <nav className='navbar'>
                <img 
                className='logo'
                src={ Logo } 
                alt="" />

                <ul className='pages-list'>
                    <NavLink activeclassname="active" className='page-navlink' to="/">Home</NavLink>
                    <NavLink activeclassname="active" className='page-navlink' to="/articles">Articles</NavLink>
                    <NavLink activeclassname="active" className='page-navlink' to="/another">Another</NavLink>
                </ul>

                <FaUserCircle className='fausercircle' />

                <div className='btns-container'>
                    <button className='login-btn' onClick={ logged }>Login</button>
                    <button className='register-btn register-btn-mobile' onClick={ logged }>Register</button>
                </div>
            </nav>
        </header>
    )
}