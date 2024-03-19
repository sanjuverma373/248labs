import './App.css';
import Backtop from './components/Backtop';
import Behindsection from './components/Behindsection';
import Doerssec from './components/Doerssec';
import Flysection from './components/Flysection';
import Footersection from './components/Footersection';
import Headersection from './components/Headersection';
import Levelsection from './components/Levelsection';
import Mailsection from './components/Mailsection';
import Preloadersec from './components/Preloadersec';
import Richsection from './components/Richsection';
import Roadmapsection from './components/Roadmapsection';
import Slidersection from './components/Slidersection';
import Whatnextsec from './components/Whatnextsec';

function App() {
  return (
   <>
   <Preloadersec/>
   <Headersection/>
   <Slidersection/>
   <Doerssec/>
   <Levelsection/>
   <Flysection/>
   <Richsection/>
   <Behindsection/>
   <Whatnextsec/>
   <Roadmapsection/>
   <Mailsection/>
   <Footersection/> 
   <Backtop/>
   </>
  );
}

export default App;
