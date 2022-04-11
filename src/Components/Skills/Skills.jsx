import '../../Styles/skills Style/skills.css'
import { skillsArray } from '../../DATA/data'



const Skills = () => {


let purcentage = 0


const animaitrise = (e)=>{
    let circle2El = document.querySelectorAll('.back svg circle:nth-child(2)')
    let numberEl = document.querySelectorAll('.number')
let interval = setInterval(() => {
    if (purcentage < skillsArray[e].maitrise){
           
               purcentage++
    numberEl[e].textContent = `${purcentage}`
    circle2El[e].style.strokeDashoffset = `calc(440 - (440 * ${purcentage})/100)`      
}else {
    clearInterval(interval)
} 
}, 20);
        
}

let stopAnimaitrise = ()=>{
    purcentage = 0
}








    return (
        <>
        <div className="skills">
        
            <h1>My technical competencies</h1>

            <div className="divs">
            
            

           
             {skillsArray.map((skill,idx)=>{
                 return (

                     <div className="card" onMouseLeave={stopAnimaitrise}  onMouseEnter={()=>animaitrise(idx)}>
            <div className="col-4 front">
                <h3>{skill.name}</h3>
            <img src={skill.image} alt='' />
            </div>
            <div className="col-4 back">
                <svg>
                    <circle cx='70' cy='70' r='70'></circle>
                    <circle cx='70' cy='70' r='70'></circle>
                </svg>
                <h2 className='maitrise'><span className='number'>{purcentage}</span><span className='percent'>%</span></h2>
                </div>
            </div>

                 )
             })}
            



            </div>
        </div>
        </>
    )
}

export default Skills
