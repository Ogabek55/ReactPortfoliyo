import React from 'react'
import HeaderLinkedIn from "./Images/LinkedIn.png";
import Header_image2 from "./Images/Header_image2.png";
import HeaderTwitter from "./Images/Twitter.png";
import { Container } from '@mui/material';
import { Header_link } from './header';

type Props = {}

const Header = (props: Props) => {
  return (
   <Container maxWidth="xl">
    <header>
    <Header_link>
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">Case Studies</a></li>
      <li><a href="">Testimonials</a></li>
      <li><a href="">Recent Work</a></li>
      <li><a href="">Get In Touch</a></li>
   <div className='header_imgs'>
    <div><a href="#"><img src={HeaderLinkedIn} alt="HeaderLinkedIn" /></a></div>
    <div><a href="#"><img src={Header_image2} alt="Header_image2" /></a></div>
    <div><a href="#"><img src={HeaderTwitter} alt="HeaderTwitter" /></a></div>
   </div>
    </ul>
    </Header_link>

   </header>
   </Container>
  )
}

export default Header