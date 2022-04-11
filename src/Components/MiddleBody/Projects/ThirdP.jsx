import React from 'react'
import '../../../Styles/MiniProjects /thirdP.css'
import { colorsArray,squaresNumber } from '../../../DATA/colorsArray'

export const ThirdP = () => {


    
   // document.querySelector('.square').style.backgroundColor = colorsArray[x]



    return (
        <>
         <div className="project3">
             
             {[...Array(squaresNumber)].map((num,idx)=>{
                 return(
                 <div onMouseOver={(e)=> {
                    let x = Math.floor(Math.random() * colorsArray.length)
                     e.target.style.backgroundColor = colorsArray[x]
                     e.target.style.boxShadow = `0px 0px 2px 1px ${colorsArray[x]}`
                     document.querySelector('.activeProject').style.backgroundColor = colorsArray[x]
                    }} 
                    className='square'
                    key={idx}
                    onMouseOut={(e)=>{
                        e.target.style.backgroundColor = 'white'
                        e.target.style.boxShadow = ''
                    }}></div>
                 
                    )
                })}
             
        
        </div> 
        </>
    )
}

