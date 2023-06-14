import Raptor from '../../../assets/images/raptor.jpg'
import User from '../../../assets/images/user.jpg'
import { HiArrowNarrowRight } from 'react-icons/hi'
import './articlecard.css'
import { NavLink } from 'react-router-dom'

export function ArticleCard({img, userimg, userat, title, text, date}) {

    return(
        <section className='article-card'>
            <img src={ img } alt=""/>

            <div className='article-card__user'>
                <img src={ userimg } alt="" />
                <p>{ userat }</p>
            </div>

            <span className='article-card__date'>{ date }</span>

            <section className='article-card__info'>
                <h2>{ title }</h2>
                <p>{ text }</p>
                <NavLink to={'/readmore'} className='readmore-btn'><HiArrowNarrowRight className='birightarrow' /></NavLink>
            </section>
        </section>
    )
}