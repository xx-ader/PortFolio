import '../../Styles/Header Style/navBar.css'

export const NavBar = () => {
    


    const showNavBar = ()=>{
let navBarEl = document.querySelector('.navBar')
let topBodyEl = document.querySelector('.topBody')


navBarEl.classList.toggle('activeNavBar')
topBodyEl.classList.toggle("activeMargin")
    }



    return (
        <>
            <nav className="navBar col-6">
                    
                <a href="a" className='m-1 col'>Home<span className='anim_a'>Home</span></a>
                <a href="a" className='m-1 col'>Projects<span className='anim_a'>Projects</span></a>
                <a href="a" className='m-1 col'>Contact<span className='anim_a'>Contact</span></a>
            </nav>
            <button onClick={showNavBar} className='hamburger_menu'>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>

        </>
    )
}
