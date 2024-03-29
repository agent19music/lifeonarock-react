import './App.css';
import { useState, useEffect } from 'react';
import Landingpage from './pages/Landingpage.js';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Donate from './pages/Donate.js'
import Contact from './pages/Contact.js'
import Discover from './pages/Discover.js';
import Aboutus from './pages/Aboutus.js';
import Termsofservice from './pages/Termsofservice.js';
import Layout from './layout/Layout.js';
import Navbar from './layout/Navbar.js';
import Footer from './layout/Footer.js';
import Blogs from './pages/Blogs.js';
import Bloginfo from './pages/Bloginfo.js';
import Paddrive from './pages/Paddrive.js';




function App() {
 const [isDarkMode, setIsDarkMode] = useState([]) 
 const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
};
const toggle = isDarkMode ? ' bg-dark text-white' : 'bg-light text-black'
const toggle2 = isDarkMode ? 'dark':'light';
const toggle3 = isDarkMode ? 'white': 'black'
const [blogs, setBlogs] = useState([])
const [onChange, setOnchange] = useState(false)
useEffect(()=>{
  fetch ('/blogs')
  .then((res) => res.json())
  .then((res)=> setBlogs(res) )
},[onChange])

console.log(blogs)
  return (
    <div className="App">
<BrowserRouter>
<Navbar/>
  <Routes>  
          <Route path="/" element={<Layout/>} />
          <Route index element ={<Landingpage/>}/>
          <Route path="/donate" element={<Donate toggle={toggle} toggle3={toggle3} />} />
          <Route path="/contact" element={<Contact toggle3={toggle3} toggle={toggle}/>} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/tos" element={<Termsofservice toggle={toggle} toggle3={toggle3}/>} />
          <Route path="/blogs" element={<Blogs blogs={blogs}/>} />
          <Route path="/blogs/:id" element={<Bloginfo blogs={blogs}/>} />
          <Route path="/paddrive" element={<Paddrive toggle={toggle} toggle3={toggle3} />} />
     </Routes> 
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
