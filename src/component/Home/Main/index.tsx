import React from 'react';
import Button from '@mui/material/Button';
import MainImgPerson from "./images/MainImgPerson.png";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Footer from '../Footer';
import { CaseStudies } from './main';
import { Container, Typography } from '@mui/material';

type Props = {}

const Main = (props: Props) => {
  return (
    <>
    <Container maxWidth="xl">
    <section className='section_informatiion0'>
    <main className='main'>
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
        <Footer/>
   </section>
    </Container>
   <main className='section_informatsion1_main'>
        <section className='section_informatsion1'>
        <Container>
             <CaseStudies>
              Case Studies</CaseStudies>
              <Typography variant='overline' sx={{
                display:"flex",
                justifyContent:"center",
                maxWidth:"547px",
                fontSize: "14px",
                color: "#9C9C9C",
                textAlign: "center", 
                fontWeight: "bold",
                lineHeight: "24px",
                letterSpacing: "1px",
                padding:"10px 0px 0px 0px",
                margin:"0 auto"
              }}>
              Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <div className='information_fintech'>
                <div>
                <Button variant="contained" sx={{
                background:"#FFF6E9",
                width:"72px",
                height:"27px",
                marginTop:"30px",
                color:"#FFA217",
                fontSize:"12px",
                fontWeight:"bold",
                borderRadius:"27px"
            }}>
           Fintech
                </Button>
                <h1 className='information_fintech_h1'>Work name here</h1>
                <p className='information_fintech_p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <Button variant="contained" sx={{
                background:"#FFA217",
                width:"195px",
                height:"38px",
                
            }}>
           View case study<ChevronRightIcon/>
            </Button>
              </div>
        </Container>
       </section>
      </main>
   
  
  
    </>
  
  )
}

export default Main