import { FaUserCircle } from 'react-icons/fa'
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
                <h1 className='logo'>LOGO</h1>

                <ul className='pages-list'>
                    <NavLink activeclassname="active" className='page-navlink' to="/">Home</NavLink>
                    <NavLink activeclassname="active" className='page-navlink' to="/articles">Articles</NavLink>
                    <NavLink activeclassname="active" className='page-navlink' to="/another">Another</NavLink>
                </ul>

                <NavLink to={'/profile'}><FaUserCircle className='fausercircle' /></NavLink>

                <div className='btns-container'>
                    <NavLink className='login-btn' to={'/login'}><p>Login</p></NavLink>
                    <NavLink className='register-btn' to={'/login'}><p>Register</p></NavLink>
                </div>
            </nav>
        </header>
    )
}