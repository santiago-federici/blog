
import Raptor from '../../assets/images/raptor.jpg'
import  User  from '../../assets/images/user.jpg'
import { TrendingTopics } from '../../components/containers/trendingTopics/TrendingTopics'
import { TrendingWriters } from '../../components/containers/trendingWriters/TrendingWriters'
import { ArticleCard } from '../../components/pure/artcileCard/ArticleCard'

import './articles.css'

export function Articles() {


    return (
        <main className='articles-main'>
            <div className='principal-container'>
                <input type="text" placeholder='Search a topic' className='searchbox' />


                <h2>For you</h2>
                
                <div className='articles-cards-container'>
                    <ArticleCard 
                    date='2 weeks ago' 
                    userimg={ User } 
                    userat='@userat' 
                    title='Title' 
                    img={ Raptor } 
                    text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam facilis pariatur modi eum harum dolorem...' />
                    
                    <ArticleCard 
                    date='2 weeks ago' 
                    userimg={ User } 
                    userat='@userat' 
                    title='Title' 
                    img={ Raptor } 
                    text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam facilis pariatur modi eum harum dolorem...' />

                    <ArticleCard 
                    date='2 weeks ago' 
                    userimg={ User } 
                    userat='@userat' 
                    title='Title' 
                    img={ Raptor } 
                    text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam facilis pariatur modi eum harum dolorem...' />
                </div>
            </div>

            <div className='trending-container'>
                <TrendingWriters />
                
                <TrendingTopics />
            </div>
        </main>
    )
}