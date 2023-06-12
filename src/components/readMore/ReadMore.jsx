import  User  from '../../assets/images/user.jpg'
import Car from '../../assets/images/car.jpg'
import { BiLike } from 'react-icons/bi'
import { FaRegComment } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
import { BsFillBookmarkFill } from 'react-icons/bs'
import './readmore.css'

export function ReadMore() {
    return(
        <section className='readmore-card'>
            <img src={ Car } alt="" />
            <div className='readmore-card__info'>
                <div className='readmore-card__user'>
                    <img src={ User } alt="" />
                    <p>@userat</p>
                    <button className='follow-btn'>Follow</button>
                </div>
                <h2>An awesome Car!</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, dolore nam sequi quas iste totam ipsa nostrum fugit voluptas possimus placeat tempore reiciendis consequatur nesciunt deleniti expedita voluptatibus culpa natus ut quo libero quaerat quibusdam vero quam? Corrupti nisi modi quisquam? Laboriosam magnam nesciunt autem tempora quas pariatur necessitatibus perferendis.</p>
                <h3>Another title</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia perferendis soluta ipsa magni obcaecati nostrum possimus ipsam reiciendis facilis. Delectus, nam quod. Dolor dolorum, harum laudantium eius ex voluptatibus necessitatibus, ea, nihil reiciendis ad facilis amet voluptas illum mollitia. Perferendis!</p>
                <div className='interaction-icons-container'>
                    <BiLike className='bilike' />
                    <p>15</p>
                    <FaRegComment className='faregcomment' />
                    <p>3</p>
                    <BsBookmark className='bsbookmark' />
                    {/* <BsFillBookmarkFill className='bsfillbookmarkfill' /> */}
                </div>
            </div>
        </section>
    )
}