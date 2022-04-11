import './App.css';
import { Header } from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopBody } from './Components/Top-body/TopBody';
// import { MiddleBody } from './Components/MiddleBody/MiddleBody';
import Skills from './Components/Skills/Skills';
import { Footer } from './Components/Footer/Footer';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import { Contact } from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import { MiddleBody } from './Components/MiddleBody/MiddleBody';

function App() {
  return (
    <>
    
    <div className='app'>
    <Header />
    <Router>
    <Route path="/" exact component={TopBody} />
    <Route path="/" exact component={Skills} />
    <Route path="/" exact component={Footer} />

    </Router>


    <Router>
       <Switch>
     <Route path="/contact" exact component={Contact} />
       </Switch>
    </Router>

    <Router>
       <Switch>
     <Route path="/projects" exact component={Projects} />
       </Switch>
    </Router>

    

     
         
     
     

     
     </div>
     
    </>
  );
}

export default App;
