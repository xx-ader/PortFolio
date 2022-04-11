import React, { useEffect, useState } from 'react'
import '../../../Styles/MiniProjects /firstP.css'

// decalage error d'une couleuur à regler 
export const FirstP = () => {

const [color, setColor] = useState([0,0,0])


const switchFunction = ()=>{
    let x = Math.floor(Math.random()*255)
    let y = Math.floor(Math.random()*255)
    let z = Math.floor(Math.random()*255)
document.querySelector('.activeProject').style.backgroundColor = `rgb(${x},${y},${z})` 
setColor([x,y,z])


             
}

useEffect(() => {
    
   // switchFunction()
    //console.log(color)
   // document.title = `${color}`
},[color])


    return (
        <>
         <div className="container project1">

              
             <button 
             onClick={switchFunction} 
             className='switch_btn'>Click to Switch</button>
            <p>The color code : <span>{`${color}`}</span></p>

         </div>  
        </>
    )
}

