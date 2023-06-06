import { BiHomeAlt } from 'react-icons/bi'
import { GrArticle } from 'react-icons/gr'
import { MdFavoriteBorder } from 'react-icons/md'

export function FooterMobile() {
    return (
        <footer className="mobile-footer">
            <div className="mobile-footer__icons">
                <div className='icon-container'><BiHomeAlt className='bihomealt' /></div>
                <div className='icon-container'><GrArticle className='grarticle' /></div>
                <div className='icon-container'><MdFavoriteBorder className='mdfavoriteborder' /></div>
            </div>
            <div className="mobile-footer__copy">Copyright</div>
        </footer>
    )
}