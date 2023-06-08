import { AiOutlineHome } from 'react-icons/ai'
import { GrArticle } from 'react-icons/gr'
import { AiOutlineFolder } from 'react-icons/ai'

import './mobileicons.css'

export function MobileIcons(){

    return(
        <section className='mobileicons-container'>
            <AiOutlineHome className='aioutlinehome' />
            <GrArticle className='grarticle' />
            <AiOutlineFolder className='aioutlinefolder' />
        </section>
    )
}