import './home.css'

export function Home() {
    return (
        <main className='main-home'>
            <h1>Welcome to (page's Name)</h1>
            <div className='articles-cards-container'>
                <section className='article-card' style={{backgroundImage: 'url(https://nationalseniors.com.au/generated/1440w-3-2/istock-1294303237-cryptocurrency-investment-financial-22-jpg.jpg?1644369957)'}}>
                    <div className="article-card__info">    
                        <h2 className='article-card__title'>Crypto currency</h2>
                    </div>
                </section>
            </div>
        </main>
    )
}