
import  Raptor  from '../assets/images/raptor.jpg'
import  User  from '../assets/images/user.jpg'
import  Bodybuilder  from '../assets/images/bodybuilder.jpg'
import  Astronaut  from '../assets/images/astronaut.jpg'
import { TrendingTopics } from '../components/trendingTopics/TrendingTopics'
import { HiArrowNarrowRight } from 'react-icons/hi'
import './articles.css'
import { ArticleCard } from '../components/artcileCard/ArticleCard'

export function Articles() {


    return (
        <main className='articles-main'>
            <div className='principal-container'>
                <input type="text" placeholder='Search a topic' className='searchbox' />


                <h2>For you</h2>
                
                <div className='articles-cards-container'>
                    <ArticleCard />
                    
                    <ArticleCard />

                    <ArticleCard />
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