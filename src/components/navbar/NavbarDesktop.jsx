import { NavLink } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'

export function NavbarDesktop() {
    return (
        <nav className='desktop-nav'>
            <img 
            className='desktop-logo'
            src='https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png' 
            alt="" />

            <div className='desktop-links-container'>
                <NavLink activeclassname='active' to='/' className='desktop-link'>
                        <p>Home</p>
                </NavLink>

                <NavLink activeclassname='active' to='/articles' className='desktop-link'>
                        <p>Articles</p>
                </NavLink>

                <NavLink activeclassname='active' to='/' className='desktop-link'>
                        <p>Another</p>
                </NavLink>
            </div>

            <div className='dektop-profile'>
             <CgProfile className='cgprofile' />
            </div>
        </nav>
    )
}