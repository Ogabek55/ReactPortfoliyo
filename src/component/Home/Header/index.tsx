import React from 'react'

import { Container } from '@mui/material';
import { Header_link } from './header';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube';;

type Props = {}

const Header = (props: Props) => {
  return (
   <Container maxWidth="xl">
    <header>
    <Header_link>
    <ul>
      <li className='header_home'><a href="">Home</a></li>
      <li className='header_studies'><a href="">Case Studies</a></li>
      <li className='header_testimonials'><a href="">Testimonials</a></li>
      <li className='header_recent'><a href="">Recent Work</a></li>
      <li className='header_get'><a href="#FormGetTouch">Get In Touch</a></li>
   <div className='header_imgs'>
    <div><a href="https://t.me/Shamshiyev_O" target='_blank'><TelegramIcon/></a></div>
    <div><a href="https://www.youtube.com/channel/UC_ezZnLBpv3uf2qyoD5hgOA" target='_blank'><YouTubeIcon /></a></div>
    <div><a href="https://www.instagram.com/shamshiyev_o" target='_blank'><InstagramIcon /></a></div>
   </div>
    </ul>
    </Header_link>

   </header>
   </Container>
  )
}

export default Header