import React from 'react'
import '../../Styles/skills Style/skills.css'
import html from '../../assets/html.png'
import boot from '../../assets/boot.png'
import css from '../../assets/css.png'
import c from '../../assets/c.jpg'
import js from '../../assets/js.png'
import reactLogo from '../../assets/reactLogo.png'
const Skills = () => {
    return (
        <>
        <hr />
        <div className="skills container">
        
            <h1>My technical competencies</h1>
            <div className="divs">
            <div className="design col-4">
            <h3>Design</h3>
            <ul className='list'><li><img src={html} alt='' />HTML 5</li>
            <li><img src={css}  alt=''/>CSS 3</li>
            <li><img src={boot}  alt=''/>BOOTSTRAP</li>
            </ul>
            
            </div>

            <div className="language col-4">
                <h3>Languages</h3>
               <ul className='list'><li><img src={js} alt='' />JavaScript</li>
                   <li><img src={c} alt='' />C++</li>
               </ul>
            </div>

            <div className="framework col-4">
                <h3>FrameWork</h3>
            <ul className='list'><li><img src={reactLogo} alt='' />React JS</li></ul>

            </div>
            </div>
        </div>
        </>
    )
}

export default Skills
