import { BsFillEnvelopeFill } from "react-icons/bs";
import { CiMoneyCheck1 } from "react-icons/ci";
import { TrendingTopics } from "../../components/containers/trendingTopics/TrendingTopics";
import './home.css'

export function Home() {
    return (
        <main className='home-main home-flow'>
            <h1 className='home-title'>Welcome to InfoHub!</h1>

            <TrendingTopics />

            
        </main>
    )
}