import './App.css';
import { Header } from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopBody } from './Components/Top-body/TopBody';
import { MiddleBody } from './Components/MiddleBody/MiddleBody';
import Skills from './Components/Skills/Skills';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <>
    <div className='app'>
   
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
