import React, { useEffect, useState } from "react";
import "../../../Styles/Projects Style/secondP.css";

export const SecondP = () => {
    const [number,setNumber] = useState(0)
    const [colorNum,setColorNum] = useState('blue')
    

    // use effect avec la condition pour changement de couleur 
  useEffect(() => {
    let projetActiveEl = document.querySelector('.activeProject')
  if(number<0){
    setColorNum('rgb(255, 100, 100)')
    projetActiveEl.style.backgroundColor = colorNum
}else if(number===0){
  setColorNum('lightblue')
  projetActiveEl.style.backgroundColor = colorNum
}else if(number>0){
  setColorNum('lightgreen')
  projetActiveEl.style.backgroundColor = colorNum
}
  }, [number,colorNum])

// end use effect


  return (
    <>
      <div class="container project2">
        
        <p>Incrementer et decrementer</p>
        <h1 class="num">{`${number}`}</h1>


        <span>

          <button onClick={()=> setNumber(number-1)} id="decrease">Decrease</button>

          <button onClick={()=>setNumber(0)} id="reset">Reset</button>

          <button onClick={()=> setNumber(number+1)} id="increase">Increase</button>

        </span>

      </div>
    </>
  );
};
