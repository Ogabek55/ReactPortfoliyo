import React from 'react';
import Button from '@mui/material/Button';
import MainImgPerson from "./images/MainImgPerson.png";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Footerr from '../Footer/';
import  Information_fintech_img from './images/Information_fintech_img.png';
import  Information_fintech_img1 from './images/Information_fintech_img1.png';
import  Information_fintech_img2 from './images/Information_fintech_img2.png';
import { CaseStudies, MediaQueries } from './main';
import { Container, Typography } from '@mui/material';
import CartComponent  from "../CartComponent";
import CompyuterImg1 from "./images/CompyuterImg1.png";
import CompyuterImg2 from "./images/CompyuterImg2.png";
import FloatingActionButtons from "../Add";



type Props = {}

const Main = (props: Props) => {
  return (
    <>
   <MediaQueries>
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
            <img className='Main_img_img' src={MainImgPerson} alt="" />
        </div>
        </main>
        <Footerr/>
   </section>
    </Container>
   <main className='section_informatsion1_main'>
        <section className='section_informatsion1'>
        <Container maxWidth="xl">
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
              <div className='information'>
              <div className='information_fintech'>
                <div className='information_fintech_text'>
                <Button variant="contained" sx={{
                background:"#FFF6E9",
                width:"72px",
                height:"27px",
                marginTop:"30px",
                color:"#FFA217",
                fontSize:"12px",
                fontWeight:"bold",
                borderRadius:"27px",
                marginLeft:"10px"
            }}>
                      Fintech
                </Button>
                <Typography sx={{
                  fontSize:"24px",
                  fontWeight:"bold",
                  fontFamily:"Raleway",
                  padding:"10px"

                }}>
                    Work name here
                 </Typography>
                <Typography className='information_fintech_text_typography' sx={{
                  width:"421px",
                  fontSize:"14px",
                  color:"#9C9C9C",
                  fontFamily:"Raleway",
                  lineHeight:"24px",
                  padding:"10px",
                  
                }} >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
                </Typography>
               
                <Button variant="contained" sx={{
                background:"#FFA217",
                width:"195px",
                height:"38px",
                padding:"10px"
                
            }}>
           View case study<ChevronRightIcon/>
                   </Button> 
                </div>
                <div className='information_fintech_img'>
                  <img src={Information_fintech_img} alt="" />
                </div>
              </div>
              <div className='information_fintech'>
              <div className='information_fintech_img'>
                  <img src={Information_fintech_img1} alt="" />
                </div>
                <div className='information_fintech_text'>
                <Button variant="contained" sx={{
                background:"#D0E6FF",
                width:"72px",
                height:"27px",
                marginTop:"30px",
                color:"#000AFF",
                fontSize:"12px",
                fontWeight:"bold",
                borderRadius:"27px",
                marginLeft:"10px"
            }}>
                      Fintech
                </Button>
                  <Typography className='information_fintech_text_typography' sx={{
                    width:"421px",
                    fontSize:"14px",
                    color:"#9C9C9C",
                    fontFamily:"Raleway",
                    lineHeight:"24px",
                    padding:"10px"
                  }} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </Typography>
                <Typography sx={{
                  fontSize:"24px",
                  fontWeight:"bold",
                  fontFamily:"Raleway",
                  padding:"10px"

                }}>
                    Work name here
                 </Typography>
                <Button variant="contained" sx={{
                background:"#000AFF",
                width:"195px",
                height:"38px",
                padding:"10px"
                
            }}>
           View case study<ChevronRightIcon/>
                   </Button> 
                </div>
                
              </div>
              <div className='information_fintech'>
                <div className='information_fintech_text'>
                <Button variant="contained" sx={{
                background:"#E0FFF8",
                width:"72px",
                height:"27px",
                marginTop:"30px",
                color:"#2AB090",
                fontSize:"12px",
                fontWeight:"bold",
                borderRadius:"27px",
                marginLeft:"10px"
            }}>
                      Fintech
                </Button>
                <Typography sx={{
                  fontSize:"24px",
                  fontWeight:"bold",
                  fontFamily:"Raleway",
                  padding:"10px"

                }}>
                    Work name here
                 </Typography>
                <Typography className='information_fintech_text_typography' sx={{
                  width:"421px",
                  fontSize:"14px",
                  color:"#9C9C9C",
                  fontFamily:"Raleway",
                  lineHeight:"24px",
                  padding:"10px"
                }} >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
                </Typography>
               
                <Button variant="contained" sx={{
                background:"#2AB090",
                width:"195px",
                height:"38px",
                padding:"10px"
                
            }}>
           View case study<ChevronRightIcon/>
                   </Button> 
                </div>
                <div className='information_fintech_img'>
                  <img className='information_fintech_img2' src={Information_fintech_img2}  alt="" />
                </div>
              </div></div>
        </Container>
       </section>
       <Container>
       <div className='Testimonials_information'>
       <Typography variant='h3' sx={{
        display:"flex",
        justifyContent:"center",
        color:'white',
        padding:"130px 0px 0px 0px"
       }}>Testimonials</Typography>
       <Typography variant='subtitle2' sx={{
        display:"flex",
        justifyContent:"center",
        color:'#9C9C9C',
        padding:"10px 0px 0px 0px",
        lineHeight:"24px",
        letterSpacing:"1px"   
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography>
        <div className='Testimonials_information_carts'>
          <CartComponent/>
          <CartComponent/>
          <CartComponent/>
          <CartComponent/>
        </div>
        </div></Container>
        <section className='section_informatsion1'>
          <Container>
           <Typography variant='h5' sx={{
             display:"flex",
             justifyContent:"center",
             padding:"80px 0px 0px 0px",
             fontSize:"34px",
             fontWeight:"bold"
               }}>Recent Work</Typography>
          <Typography variant="subtitle1" sx={{
             display:"flex",
           justifyContent:"center",
           color:"#9C9C9C",
           lineHeight:"24px"
           }}>Solvinguser & business problems since last 15+ years. <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography>

            <div className='carts'>
              <div className='carts1'>
              <img src={CompyuterImg1} alt="" />
              <Typography variant='h5' sx={{
                fontWeight:"bold",
                fontSize:"24px"
              }}>Work name here</Typography>
              <Typography variant='subtitle2' sx={{
                color:"#9C9C9C",
                lineHeight:"24px",
                 padding:"20px 0px"
              }}>Labore et dolore magna aliqua. sed do eiusmod <br /> tempor incididunt ut labore et dolore magna.</Typography>
               <Button variant="contained" sx={{
                background:"#62BA1B",
                width:"150px",
                height:"38px",
                marginTop:"30px",
                padding:"10px"
                }}>
                Know more <ChevronRightIcon/>
               </Button>
          </div>
              <div className='carts1'>
              <img src={CompyuterImg2} alt="" />
              <Typography variant='h5' sx={{
                fontSize:"24px",
              }}>Work name here</Typography>
              <Typography  sx={{
                color:"#9C9C9C",
                lineHeight:"24px",
                padding:"20px 0px"
              }}>Labore et dolore magna aliqua. sed do eiusmod <br /> tempor incididunt ut labore et dolore magna.</Typography>
               <Button variant="contained" sx={{
                background:"#62BA1B",
                width:"150px",
                height:"38px",
                marginTop:"30px",
              
                }}>
                Know more <ChevronRightIcon/>
               </Button>
              </div>
            </div>
          </Container>
        </section>
        <footer className="Testimonials_information_footer">
          <Container >
            <div className='footer'>
              <div>
              <Typography variant='h1' sx={{
               padding:"10px",
               color:"white",
               fontSize:"34px",
               fontWeight:"bold",
               textAlign:"center"
             }}>Get In Touch</Typography>
             <Typography sx={{
              color:"#9C9C9C",
              lineHeight:"24px"
             }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography>
             
             <form style={{textAlign:"center"}}>
              <Typography sx={{
               fontFamily:"Raleway",
               fontSize:"12px",
               color:"white",
               padding:"40px 0px 0px 0px"
              }}>Email</Typography>
              <input className='footer_from_input' id='footer_from_input' type="email" placeholder='Please enter your email' />
              <Typography sx={{
               fontFamily:"Raleway",
               fontSize:"12px",
               color:"white",
               padding:"40px 0px 0px 0px"
              }}>Mobile</Typography>
              <input className='footer_from_input' type="tel" placeholder='Enter mobile' />
              <Typography sx={{
               fontFamily:"Raleway",
               fontSize:"12px",
               color:"white",
               padding:"40px 0px 0px 0px"
              }}>Message</Typography>
           <textarea className='footer_from_input_message' id="message" name="message" placeholder="Enter your message"></textarea>
           <div>
           <Button variant="contained" sx={{
                background:"#3F8E00",
                width:"350px",
                height:"50px",
                marginTop:"30px",
                fontWeight:"bold",
                borderRadius:"4px"
                }}>
               Submit <ChevronRightIcon/>
               </Button>
           </div>
             </form>
             
             </div>
            </div>
          </Container>
        </footer>
      </main>
      
  <FloatingActionButtons/>
      </MediaQueries>
    </>
  
  )
}

export default Main