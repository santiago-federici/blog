import { BsFillEnvelopeFill } from "react-icons/bs";
import { CiMoneyCheck1 } from "react-icons/ci";
import './home.css'

export function Home() {
    return (
        <main className='home-main'>
            <h1 className='home-h1'>Welcome to The News Wave!</h1>

            <div className='cards-container'>
                <section className='article-card'>
                    <img 
                    src="https://nationalseniors.com.au/generated/1440w-3-2/istock-1294303237-cryptocurrency-investment-financial-22-jpg.jpg?1644369957" 
                    alt="" />    
                    <div className="article-card__info">
                        <h2 className='article-card__title'>Crypto currency</h2>
                        <button className='article-card__gotobtn'>Topic</button>
                    </div>
                </section>                
            </div>

            <div className='join-container'>
                <section className="join-card">
                    <BsFillEnvelopeFill className="floating-iconenvelope" />
                    <span className="floating-iconcircle"></span>
                    <div className="join-card__info">
                        <h2>Join us!</h2>
                        <p>Create an account and subscribe to your favorite writers to get notified about the latest news.</p>
                        <button className='register-btn'>Create account</button>
                    </div>
                </section>
                <section className="join-card">
                    <BsFillEnvelopeFill className="floating-iconenvelope" />
                    <span className="floating-iconcircle"></span>
                    <div className="join-card__info">
                        <h2>Already have an account?</h2>
                        <p>Login to your account to see what your favorite wirters have uploaded.</p>
                        <button className='login-btn'>Login</button>
                    </div>
                </section>
            </div>

        </main>
    )
}