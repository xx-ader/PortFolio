import React from 'react'
import '../../Styles/Contact Style/contact.css'
import {Footer} from '../Footer/Footer'


export const Contact = () => {
    return (
        <>
            <div className='contact'>

                <div className='global'>
            <div className='apropos'>
        <h3>Junior Web Developper</h3> 
        <p>Passionate about digital communication with desire to change things, I like debating around the best possible solution to a problem.
        I enjoy learning and demonstrating a real intellectual curiosity and an interest in education and technology.
            </p>   
        </div>
        <div className='personalInfo'>
            
         <ul>
             <li><i class="fa-solid fa-mobile-screen-button"></i><p>Mobile</p><span>+212 608 69 57 47</span></li>
             <li><i class="fa-brands fa-linkedin"></i><p>Linkedin</p><span>Reda Elmhamdi</span></li>
             <li><i class="fa-regular fa-envelope"></i><p>Email</p><span>mr.redalmhamdi@gmail.com</span></li>
         </ul>
        </div>
        </div>
        <div className='form'>
            <div>
            <em>Nom et prénom :</em>
            <input type="text" name="" id="" />
            </div>

            <div>
            <em>Adresse mail :</em>
            <input type="email" name="" id="" />
            </div>

            <div>
            <em>Message : </em>
            <textarea maxLength='124' name="" id="" cols="30" rows="10"></textarea>
            </div>

            <button className='btnSubmit'>Submit</button>

        </div>
            </div>
        <Footer />
        </>
    )
}
