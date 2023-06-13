import { BsUpload } from 'react-icons/bs'
import { useState } from 'react'


import './writearticle.css'

export function WriteArticle() {

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState('No selected file')
    
        return(
        <main className='write-article-main'>
            <section className='new-article-card'>
                <input hidden type="file" accept='image/*' id='original-choose-image' onChange={ ({target: {files}}) => {
                    files[0] && setFileName(files[0].name)
                    if(files){
                        setImage(URL.createObjectURL(files[0]))
                        document.querySelector(".bsupload").style.display = 'none'
                        document.querySelector(".custom-choose-image").style.display = 'none'
                    }
                } } />
                {image ?
                <img src={ image } className='new-article__img' />
                :
                <div className='new-article__img-container'>
                    <BsUpload className='bsupload' />
                    <label for='original-choose-image' className='custom-choose-image'>
                        Choose image
                    </label>
                </div>}
                
                <div className='new-article__info'>
                    <input type="text" placeholder='Insert title' className='insert-title-input' />
                    <input type="text" placeholder='Insert text' className='insert-text-input' />
                </div>
            </section>
        </main>
    )
}