import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
        <div id='footer'>
         
         <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
           
           <div className="me-5 d-none d-lg-block">
             <span>Get connected with us on social networks:</span>
           </div>
           
           <div>
             <Link to="https://github.com/agent19music/lifeonarock-react" className="me-4 link-secondary">
               <i className="fab fa-facebook-f"></i>
             </Link>
             <Link to="https://github.com/agent19music/lifeonarock-react" className="me-4 link-secondary">
               <i className="fab fa-twitter"></i>
             </Link>
             <Link to='mailto:forlifeonarock@gmail.com' className="me-4 link-secondary">
               <i className="fab fa-google"></i>
             </Link>
             <Link to="https://github.com/agent19music/lifeonarock-react" className="me-4 link-secondary">
               <i className="fab fa-instagram"></i>
             </Link>
             <Link to="https://github.com/agent19music/lifeonarock-react" className="me-4 link-secondary">
               <i className="fab fa-linkedin"></i>
             </Link>
             <Link to="https://github.com/agent19music/lifeonarock-react" className="me-4 link-secondary">
               <i className="fab fa-github"></i>
             </Link>
           </div>
            </section>
         
       
           <section className="">
           <div className="container text-center text-md-start mt-5">
             
             <div className="row mt-3">
               
                       <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                 
                 <h6 className="text-uppercase fw-bold mb-4">
                   <i className="fas fa-gem me-3 text-secondary"></i>LifeOnaRock
                 </h6>
                 <p>
                   Here you can use rows and columns to organize your footer content. Lorem ipsum
                   dolor sit amet, consectetur adipisicing elit.
                 </p>
               </div>
              
               
                 <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                 
                 <h6 className="text-uppercase fw-bold mb-4">
                   Navigate
                 </h6>
                 <p>
                   <Link to="/!" className="text-reset">Home</Link>
                 </p>
                 <p>
                   <Link to="/aboutus" className="text-reset">About</Link>
                 </p>
                 <p>
                   <Link to="/contact" className="text-reset">Contact</Link>
                 </p>
                 
               </div>
               
               
               <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                
                 <h6 className="text-uppercase fw-bold mb-4">
                   More
                 </h6>
                 <p>
                   <Link to="/donate" className="text-reset">Donate</Link>
                 </p>
                 <p>
                   <Link to="/tos" className="text-reset">Terms of service</Link>
                 </p>
                 
               </div>
                      
       
               
               
             </div>
           </div>
         </section>
         <div className="text-center p-4" >
           © 2023 Copyright:
           <Link className="text-reset fw-bold" to="/">LifeOnaRock All rights reserved</Link>
         </div>
         
       
       
               
           </div>
    </div>
  )
}
