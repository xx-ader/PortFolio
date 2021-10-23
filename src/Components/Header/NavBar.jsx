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
                    
                <a href="a" className='m-1 col'><b>H</b>ome<span className='anim_a'><b>H</b>ome</span></a>
                <a href="a" className='m-1 col'><b>P</b>rojects<span className='anim_a'><b>P</b>rojects</span></a>
                <a href="a" className='m-1 col'><b>C</b>ontact<span className='anim_a'><b>C</b>ontact</span></a>
            </nav>
            <button onClick={showNavBar} className='hamburger_menu'>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>

        </>
    )
}
