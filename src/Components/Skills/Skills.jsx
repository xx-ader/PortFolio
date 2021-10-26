import React from 'react'
import '../../Styles/skills Style/skills.css'
import html from '../../assets/html.ico'
import css from '../../assets/css.ico'
import js from '../../assets/js.ico'
import reactLogo from '../../assets/reactLogo.ico'
const Skills = () => {
    return (
        <>
        <div className="skills">
        
            <h1>My technical competencies</h1>

            <div className="divs">

            <div className="col-4">
            <h3>HTML 5</h3>
            <img src={html} alt='' />
            </div>

            <div className="col-4">
                <h3>CSS 3</h3>
                <img src={css}  alt=''/>
            </div>

            <div className="col-4">
                <h3>JavaScript</h3>
            <img src={js} alt='' />
            </div>

            <div className="col-4">
                <h3>React Js</h3>
            <img src={reactLogo} alt='' />
            </div>
            </div>
        </div>
        </>
    )
}

export default Skills
