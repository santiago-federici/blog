import  User  from '../../../assets/images/user.jpg'
import { UserCard } from '../../pure/userCard/UserCard'

import './trendingwriters.css'



export function TrendingWriters() {

    const users = 
    [
        {
            userimg: User,
            userName: "Santi Federici",
            userat: "santi-federici",
            initialIsFollowing: false
        },
        {
            userimg: User,
            userName: "Mati Navio",
            userat: "matiasNavio",
            initialIsFollowing: true
        },
        {
            userimg: User,
            userName: "Exe Carrizo",
            userat: "eseba",
            initialIsFollowing: true
        },
        {
            userimg: User,
            userName: "Matias Mondello",
            userat: "mondeYoMatias",
            initialIsFollowing: false
        },
        {
            userimg: User,
            userName: "Giuliano Blenguini",
            userat: "CarriDrogaNafta",
            initialIsFollowing: false
        }
    ]
    
    return(
        <div className='trending-writers'>
            <h2>Trending Writers</h2>

            {
                users.map(({userimg, userName, userat, initialIsFollowing}) => (

                    <UserCard 
                    userimg={userimg} 
                    userName={userName} 
                    userat={userat} 
                    initialIsFollowing={initialIsFollowing} />
                ))
            }


        </div>
    )
}