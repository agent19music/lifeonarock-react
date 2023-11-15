import './App.css';
import LandingPage from './Landingpage';
import Navbar from './Navbar';
import Footer from './Foooter';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Donate from './Donate'
import Contact from './Contact'
import Discover from './Discover';
import Aboutus from './Aboutus';
import Termsofservice from './Termsofservice';

function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Navbar/>
  <Routes>  
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/tos" element={<Termsofservice />} />
        
          
     </Routes> 
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
