import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Particles from 'react-particles-js';
import Hero from './cc/Hero'
import El from './cc/El'
import{ Pro1 , Pro2} from './cc/Pro'
import End from './cc/End'
import  { Foo1, Foo2,}from './cc/Foo'
import Us from './cc/Us'

function App() {
  return (
    <>
    <body>
      <Particles className='abs'
       params={{
         particles:{
           number:{ value:30 , density:{ enable:true ,value_area:900}
           }
         }
       }}
      />

  <Hero/>
  <El/>
  <Pro1/>
  <Foo1/>
  <Pro2/>
  <Foo2/>
  <Us/>
  <End/>
  </body>
  </>
  );
}

export default App;
