import Raptor from '../../assets/images/raptor.jpg'
import User from '../../assets/images/user.jpg'
import { HiArrowNarrowRight } from 'react-icons/hi'
import './articlecard.css'
import { NavLink } from 'react-router-dom'

export function ArticleCard() {
    return(
        <section className='article-card'>
            <img src={ Raptor } alt=""/>

            <div className='article-card__user'>
                <img src={ User } alt="" />
                <p>@userat</p>
            </div>

            <section className='article-card__info'>
                <h2>Title</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam facilis pariatur modi eum harum dolorem...</p>
                <NavLink to={'/readmore'} className='readmore-btn'><HiArrowNarrowRight className='birightarrow' /></NavLink>
            </section>
        </section>
    )
}