import { SiInstagram } from 'react-icons/si'
import { BsTwitter } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'

import './footer.css'

export function Footer() {
    return (
        <footer className='footer'>
            <section className='socialmedia-container'>
                <SiInstagram className='siinstagram' />
                <BsTwitter className='bstwitter' />
                <FaGithub className='fagithub' />
                <BsFacebook className='bsfacebook' />
                <BsLinkedin className='bslinkedin' />
                <BsYoutube className='bsyoutube' />
            </section>

            <section className='copyright-container'>
                <h3>COPYRIGHT</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nulla, veritatis voluptates nemo corporis aliquid assumenda aut rerum distinctio, officiis repellat minima? Assumenda veniam fugiat quo quasi dolor esse doloremque.</p>
            </section>
        </footer>
    )
}