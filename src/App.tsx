import { IonApp, setupIonicReact } from '@ionic/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import {About , Contact , Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'
setupIonicReact();

const App: React.FC = () => (
  <IonApp>

<BrowserRouter>
<div className='reletive z-0 bg-primary' >
  <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center' >
    <Navbar/>
    <Hero />
  </div>
  <About/> 
  <Experience/>
  <Tech/>
  <Works/> 
  <Feedbacks/>
  <div className='reletive z-0'>
    <Contact/>
    <StarsCanvas/>
  </div>
</div>
</BrowserRouter>
  </IonApp>
); 

export default App;
