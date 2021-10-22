import '../../../Styles/Projects Style/fifthP.css'

export const FifthP = () => {
    
   // const canvas = document.querySelector('#canvas');
  // const [addTransform,setAddTransform] = useState(0)
  

   const imgEl = document.querySelectorAll('.carousel img')
   let idx = 0

   const testIdx = ()=>{
    if(idx > imgEl.length - 1){
        idx = 0
    }else if(idx < 0){
       idx = imgEl.length - 1
    }
    imgEl.forEach((element,index)=>{
        element.style.transform = `translateX(${-idx * 100}%)`
    })
   }

   const prev = ()=>{
      idx--
    testIdx()   
   }

   const next = ()=>{
    idx++
    testIdx()        
   }



    return (
        <>
       <div className="container project5">
           <div className="carousel">
            <img src="https://blog-fr.orson.io/wp-content/uploads/2017/06/jpeg-ou-png.jpg" alt="" />
            <img src="https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=20&m=1072093690&s=612x612&w=0&h=Ns3WeEm1VrIHhZOmhiGY_fYKvIlbJrVADLqfxyPQVPM=" alt="" />
            <img src="https://t2.ea.ltmcdn.com/fr/images/4/5/4/comment_de_temps_vit_un_elephant_454_orig.jpg" alt="" />
            <img src="https://img.ohmymag.com/article/480/animal/le-lion-est-surnomme-le-roi-des-animaux_dec7b3a06b35cc5eab71320a80c80652e79df5d3.jpg" alt="" />
           </div>
           <div className="buttons">
               <button onClick={prev} className='prev'>Previous</button>
               <button onClick={next} className='next'>Next</button>
           </div>
       </div>  
        </>
    )
}


