import Logo from './Logo'
import { NavBar } from './NavBar'
import '../../Styles/Header Style/header.css'


export const Header = () => {

// animation du header au refresh
setTimeout(()=>{
      let header_generalEl = document.querySelector('.header_general')
      header_generalEl.classList.add('showHeader')
}, 1000)

    return (
        <>
        <div className={`header_general col-12`}>
            <Logo />
            <NavBar />

        </div>
            
          
        </>
    )
}
