import './App.css';
import { Header } from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopBody } from './Components/Top-body/TopBody';
import { MiddleBody } from './Components/MiddleBody/MiddleBody';
import Skills from './Components/Skills/Skills';
import { Footer } from './Components/Footer/Footer';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import { Contact } from './Components/Contact/Contact';

function App() {
  return (
    <>
    
    <div className='app'>
   <Router>
       <Switch>
     <Route path="/contact" exact component={Contact} />
       </Switch>
  </Router>

     <Header />

     
         
     <TopBody />
     <Skills />
     <MiddleBody />
     <Footer />
     
     

     
     </div>
     
    </>
  );
}

export default App;
