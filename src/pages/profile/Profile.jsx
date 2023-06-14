import User from '../../assets/images/user.jpg'
import { ArticleCard } from '../../components/pure/artcileCard/ArticleCard'
import './profile.css'

export function Profile() {
    return (
        <main className="profile-main">
            <section className="user-profile-container">
                <img src={ User } alt="" />
                <div className='user-profile__info'>
                    <div>
                        <h3>Followers</h3>
                        <p>70</p>
                    </div>
                    <div>
                        <h3>Following</h3>
                        <p>120</p>
                    </div>
                    <div>
                        <h3>Articles</h3>
                        <p>3</p>
                    </div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eius.</p>
            </section>

            <section className='myarticles-container'>
                <h2>My articles</h2>
                {/* <p>You don't have any articles yet</p> */}
                <ArticleCard />
            </section>
        </main>
    )
}