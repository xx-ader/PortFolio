import '../../Styles/Header Style/topBody.css'
import { Description } from './Description'

export const TopBody = () => {


setTimeout(()=>{
    let imgEl = document.querySelector('.pic')
    let descriptionEl = document.querySelector('.description')
    imgEl.classList.add("showTopBody")
    descriptionEl.classList.add("showTopBody")
},1000)
    return (
        <>
            <div className="topBody">
              
                <img className='pic' src='https://st.depositphotos.com/1016545/4532/i/600/depositphotos_45321361-stock-photo-letters-in-fire-letter-r.jpg' alt='hello' />
               
                <Description />
               
            </div>
        </>
    )
}
