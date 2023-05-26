
import './App.css';
import Navbar from './component/Navbar';

import Middle1 from './component/Middle1';
import Experience from './component/Experience';
import Data from './component/Data';
import Services from './component/Services';
import Companies from './component/Companies';
import Aboutus from './component/Aboutus';
import Partner from './component/Partner';
import Try from './component/Try';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Middle1/>
    <Experience/>
    <Data/>
    <Services/>
    <Companies/>
    <Aboutus/>
    <Partner/>
    <Try/>
    <Footer />
  
    </div>
  );
}

export default App;
