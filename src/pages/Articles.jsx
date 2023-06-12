
import  Raptor  from '../assets/images/raptor.jpg'
import  User  from '../assets/images/user.jpg'
import  Bodybuilder  from '../assets/images/bodybuilder.jpg'
import  Astronaut  from '../assets/images/astronaut.jpg'
import { TrendingTopics } from '../components/trendingTopics/TrendingTopics'
import { BiRightArrow } from 'react-icons/bi'
import { HiArrowNarrowRight } from 'react-icons/hi'
import './articles.css'

export function Articles() {


    return (
        <main className='articles-main'>
            {/* <ReadMore /> */}


            <div className='principal-container'>
                <input type="text" placeholder='Search a topic' className='searchbox' />


                <h2>For you</h2>
                
                <div className='articles-cards-container'>
                    <section className='article-card'>

                        <img src={ Raptor } alt=""/>

                        <div className='article-card__user'>
                            <img src={ User } alt="" />
                            <p>@userat</p>
                        </div>

                        <section className='article-card__info'>
                            <h2>Title</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam facilis pariatur modi eum harum dolorem...</p>
                            <button className='readmore-btn'><HiArrowNarrowRight className='birightarrow' /></button>
                        </section>
                    </section>

                    <section className='article-card'>

                        <img src={ Bodybuilder } alt=""/>

                        <div className='article-card__user'>
                            <img src={ User } alt="" />
                            <p>@userat</p>
                        </div>

                        <section className='article-card__info'>
                            <h2>Title</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam facilis pariatur modi eum harum dolorem...</p>
                            <button className='readmore-btn'><HiArrowNarrowRight className='birightarrow' /></button>
                        </section>
                    </section>

                    <section className='article-card'>

                        <img src={ Astronaut } alt=""/>

                        <div className='article-card__user'>
                            <img src={ User } alt="" />
                            <p>@userat</p>
                        </div>

                        <section className='article-card__info'>
                            <h2>Title</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam facilis pariatur modi eum harum dolorem...</p>
                            <button className='readmore-btn'><HiArrowNarrowRight className='birightarrow' /></button>
                        </section>
                    </section>
                </div>
            </div>

            <div className='trending-container'>
                <div className='trending-writers'>
                    <h2>Trending Writers</h2>

                    <div className='trending-writers__user'>
                            <img src={ User } alt="" />
                            <p>@userat</p>
                            <button className='follow-btn'>Follow</button>
                    </div>
                    <div className='trending-writers__user'>
                            <img src={ User } alt="" />
                            <p>@userat</p>
                            <button className='follow-btn'>Follow</button>
                    </div>
                    <div className='trending-writers__user'>
                            <img src={ User } alt="" />
                            <p>@userat</p>
                            <button className='follow-btn'>Follow</button>
                    </div>
                    <div className='trending-writers__user'>
                            <img src={ User } alt="" />
                            <p>@userat</p>
                            <button className='follow-btn'>Follow</button>
                    </div>
                </div>
                
                <TrendingTopics />
            </div>
        </main>
    )
}