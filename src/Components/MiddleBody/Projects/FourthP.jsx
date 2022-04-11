import React, { useState } from 'react'
import '../../../Styles/MiniProjects /fourthP.css'
import { colorsArray } from '../../../DATA/colorsArray'
export const FourthP = () => {

    const [addedChoice,setAddedChoice] = useState([])

    // fonction d'ajout et d'execution du bouton ENTER 
    const add = (e)=>{
        let textEl = document.querySelector('#text')
        setAddedChoice(e.target.value.split(','))
        if(e.key === 'Enter'){
            randomSelect()
            
            textEl.value =''
        }
    }


    
    // Logique pour la selection Aleatoir
    const times = 30
    const randomSelect = ()=>{
        let elChoiceEl = document.querySelectorAll('.choiceEl')    

        // INterval qui switch les choix 
            const interval = setInterval(()=>{
            const randomChoice = addedChoice[Math.floor(Math.random() * addedChoice.length)]
           elChoiceEl.forEach((element,idx)=>{

               // color et unColor the choice 
               if(randomChoice === element.textContent){
                   let colorX = colorsArray[Math.floor(Math.random() * colorsArray.length)]
                   element.style.backgroundColor = colorX
                   document.querySelector('.activeProject').style.backgroundColor = colorX
               }else{
                element.style.backgroundColor = 'red'
               }
           })

           // stop interval of random switching color on ONE CHOICE
            setTimeout(()=>{
              clearInterval(interval)
              
            }, times * 100)


        },300)
    }
    
        
     




    return (
        <>
              <div className='project4'>
                  <p className='directive1'>Type your choices here divided by a comma (',').</p>
                  <div className="txt">
                      <textarea onKeyUp={add} placeholder='Enter your choices . . .' id="text"></textarea>
                      <p className='directive2'>Press Enter when you're done.</p>
                  </div>
                  <div className="choices">
                      {addedChoice.filter((choice)=>choice.trim() !== '').map((choice,idx)=>{
                          return(
                              <p className='choiceEl' key={idx}>{choice}</p>
                          )
                      })}
                  </div>
              </div> 
       </>
    )
}


