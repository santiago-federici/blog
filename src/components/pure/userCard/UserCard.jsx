import { useState } from 'react'
import './usercard.css'

export function UserCard({userimg, userName, userat, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)


    const btnText = isFollowing ? "Following" : "Follow"
    const btnClassName = isFollowing ? "follow-btn is-following-btn" : "follow-btn"


    return(
        <div className='user-card'>
                <div className='user-card-info'>
                    <img src={ userimg } alt="" />
                    <div>
                        <p>{ userName }</p>
                        <p className='user-card-at'>@{ userat }</p>
                    </div>
                </div>

                <button className={ btnClassName } onClick={ () => setIsFollowing(!isFollowing) }>
                    <p className='follow-btn-text'>{ btnText }</p>
                    <p className='stop-following-btn'>Stop following</p>
                </button>
        </div>
    )
}