import React from 'react'
import Nav from './Components/Nav.js'
import Footer from './Components/Footer.js'
import './Components/CSSFiles/AboutUs.css'

function AboutUs () {
             return (
             <div>
                  <Nav/>
                  <div  className="About-Style">
                     <div className="About-Intro-Style">
                          <h1></h1>
                          <p>
                         </p>
                     </div>
                     <div className="About-Fields-Style">
                     {images.map(imagesItem => 
                     <div className='hover-button'>
                         <div  className="About-Fields-imgs-Style" style={{width: '200px', height: "150px", backgroundImage: `url(${imagesItem.imgesrc})`, backgroundSize: "cover"}} >
                     
                        <div className='hover-button--on'><p>{imagesItem.hover}</p></div>
                        </div>
                     </div>  )}
                     </div>
                  </div>
                  <Footer/>
             </div>
             )
}
export default AboutUs