import React from 'react';
import Button from '@mui/material/Button';
import MainImgPerson from "./images/MainImgPerson.png";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Footer from '../Footer';

type Props = {}

const Main = (props: Props) => {
  return (
    <div className='container'>
    <main>
        <div className='Main_text'>
            <h1 className='Main_text_h1' >Your Name Here</h1>
            <p className='Main_text_p'> Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <Button variant="contained" sx={{
                background:"#3F8E00",
                width:"307px",
                height:"63px",
                marginTop:"30px"
            }}>
           Let’s get started <ChevronRightIcon/>
            </Button>
            
                <p className='Main_div_p'>Worked with</p>
        
        </div>
        <div className='Main_img'>
            <img src={MainImgPerson} alt="" />
        </div>
        </main>
   
    </div>
  )
}

export default Main