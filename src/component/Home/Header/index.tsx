import React from 'react'
import HeaderLinkedIn from "./Images/LinkedIn.png";
import Header_image2 from "./Images/Header_image2.png";
import HeaderTwitter from "./Images/Twitter.png";

type Props = {}

const Header = (props: Props) => {
  return (
   <>
   <div className='container'>
   <header>
   <div><a href="#">Home</a></div>
   <div><a href="#">Case Studies</a></div>
   <div><a href="#">Testimonials</a></div>
   <div><a href="#">Recent Work</a></div>
   <div><a href="#">Get In Touch</a></div>

   <div className='header_imgs'>
    <div><a href="#"><img src={HeaderLinkedIn} alt="HeaderLinkedIn" /></a></div>
    <div><a href="#"><img src={Header_image2} alt="Header_image2" /></a></div>
    <div><a href="#"><img src={HeaderTwitter} alt="HeaderTwitter" /></a></div>
   </div>
   </header>
   </div>
   </>
  )
}

export default Header