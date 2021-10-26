import '../../Styles/Header Style/topBody.css'
import { Description } from './Description'
import profil from '../../assets/profil.png'
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
              
                <img className='pic' src={profil} alt='hello' />
               
                <Description />
               
            </div>
        </>
    )
}
