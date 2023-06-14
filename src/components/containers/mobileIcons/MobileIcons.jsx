import { AiOutlineHome } from 'react-icons/ai'
import { GrArticle } from 'react-icons/gr'
import { AiOutlineFolder } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

import './mobileicons.css'

export function MobileIcons(){

    return(
        <section className='mobileicons-container'>
            <NavLink to={'/'}><AiOutlineHome className='aioutlinehome' /></NavLink>
            <NavLink to={'/articles'}><GrArticle className='grarticle' /></NavLink>
            <NavLink to={'/another'}><AiOutlineFolder className='aioutlinefolder' /></NavLink>
            
            
        </section>
    )
}