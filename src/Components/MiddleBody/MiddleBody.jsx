import React, { useState } from 'react'
import '../../Styles/MiddleBody Style/middleBody.css'
import { FirstP } from '../MiddleBody/Projects/FirstP'
import {  SecondP } from '../MiddleBody/Projects/SecondP'
import { ThirdP } from '../MiddleBody/Projects/ThirdP'
import { FourthP } from '../MiddleBody/Projects/FourthP'
import { FifthP } from '../MiddleBody/Projects/FifthP'

export const MiddleBody = () => {

    const  [activate, setActivate] = useState(0)
    const [activateTitle, setActivateTitle] = useState(0)
    const [activateCompo, setActivateCompo] = useState(0)

let slideArray = [
    {
        id : 1,
        title : 'Random color switcher',
        compo : <FirstP /> 
    },
    {
        id : 2,
        title : 'Counter',
        compo : <SecondP /> 
    },
    {
        id : 3,
        title : 'Colorful hover',
        compo : <ThirdP /> 
    },
    {
        id : 4,
        title : 'Random choice picker',
        compo : <FourthP /> 
    },
    {
        id : 5,
        title : 'Image slider',
        compo : <FifthP /> 
    }
]

// here logique for the scrolling animation 

window.addEventListener('scroll',()=>{

    let divOffEl = document.querySelectorAll('.divOff')
    let scrolled = window.scrollY

    if(scrolled > 680){
        divOffEl.forEach((div,idx)=>{
            
          div.style.transform = 'translateX(0)'
            
        })
        console.log(scrolled)
    }
    
})

    return (

        <>
        <hr />
        <h1 className='title'>JavaScript Mini-Projects</h1>
            <div className="container middleBody">
                {slideArray.map((element,idx)=>{
return(
                    <div 
                    key={idx} 
                    className={idx === activate? "divOff activeProject" : "divOff"}
                    onClick={()=> {
                        setActivate(idx)
                        setActivateTitle(idx)
                        setActivateCompo(idx)
                    }}
                    >
                    
        <h3 className={idx === activateTitle ? "project_title activeProject_title" : "project_title"}>
            {element.title}
        </h3>


        <div className={idx ===  activateCompo ? "compoContainer activeCompoContainer" : "compoContainer"}>
            {element.compo}
        </div>
                    </div>
)

                })}
                   
            </div>
            <hr />
        </>
    )
}
