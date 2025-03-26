import Button from "@mui/material/Button";
import MainImgPerson from "./images/MyImg.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Footerr from "../Footer/";
import Information_fintech_img from "./images/myschool-img.jpg";
import Information_fintech_img1 from "./images/Queezy-dashboard-img1.jpg";
import Information_fintech_img2 from "./images/Queezy-dashboard-img2.jpg";
import { CaseStudies, MAinText, MyImg } from "./main";
import { Container, Typography } from "@mui/material";
import CartComponent from "../CartComponent";
import CompyuterImg1 from "./images/CompyuterImg1.png";
import CompyuterImg2 from "./images/CompyuterImg2.png";
import FloatingActionButtons from "../Add";
import Form from "../Form";
import { ForwardedRef, forwardRef, MutableRefObject } from "react";

interface MainProps {
  homeRef: MutableRefObject<HTMLDivElement | null>;
  caseStudiesRef: MutableRefObject<HTMLDivElement | null>;
  testimonialsRef: MutableRefObject<HTMLDivElement | null>;
  recentWorkRef: MutableRefObject<HTMLDivElement | null>;
  getInTouchRef: MutableRefObject<HTMLDivElement | null>;
}


const Main = forwardRef<HTMLDivElement | null, MainProps>(
  ({ homeRef, caseStudiesRef, testimonialsRef, recentWorkRef, getInTouchRef }, ref) => {
  return (
    <>
   
      <Container maxWidth="xl">
        <section className="section_informatiion0">
          <main className="main">
            <MAinText>
              <div ref={homeRef} className="Main_text">
                <h1 className="Main_text_h1">My name is Og'abek</h1>
                <p className="Main_text_p">
                  {" "}
                  I am Shamshiyev Og'abek, born in 2005 in Bakhmal district of
                  Jizzakh region. Currently, I am studying FrontEnd
                  programming.I really like this FrontEnd field. That's why I
                  chose this direction.
                </p>
                <Button
                  variant="contained"
                  sx={{
                    background: "#3F8E00",
                    width: "307px",
                    height: "63px",
                    marginTop: "30px",
                  }}
                >
                  Let’s get started <ChevronRightIcon />
                </Button>
                <p className="Main_div_p">Worked with</p>
              </div>
            </MAinText>
            <MyImg>
              <div className="Main_img">
                <img className="Main_img_img" src={MainImgPerson} alt="" />
              </div>
            </MyImg>
            
          </main>
          <Footerr />
        </section>
      </Container>
      <main className="section_informatsion1_main">
        <div ref={caseStudiesRef} className="section_informatsion1">
          <Container maxWidth="lg">
            <CaseStudies>Case Studies</CaseStudies>
            <Typography
              variant="overline"
              sx={{
                display: "flex",
                justifyContent: "center",
                maxWidth: "547px",
                fontSize: "14px",
                color: "#9C9C9C",
                textAlign: "center",
                fontWeight: "bold",
                lineHeight: "24px",
                letterSpacing: "1px",
                padding: "10px 0px 0px 0px",
                margin: "0 auto",
              }}
            >
              I have spent the last 1+ years focusing on learning frontend
              programming. During this time I have built the sites you see
              below.
            </Typography>
            <div className="information">
              <div className="information_fintech">
                <div className="information_fintech_text">
                  <Button
                    variant="contained"
                    sx={{
                      background: "#FFF6E9",
                      width: "72px",
                      height: "27px",
                      marginTop: "30px",
                      color: "#FFA217",
                      fontSize: "12px",
                      fontWeight: "bold",
                      borderRadius: "27px",
                      marginLeft: "10px",
                    }}
                  >
                    Fintech
                  </Button>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      fontFamily: "Raleway",
                      padding: "10px",
                    }}
                  >
                    This is the MySchool website.
                  </Typography>
                  <Typography
                    className="information_fintech_text_typography"
                    sx={{
                      maxWidth: "421px",
                      fontSize: "14px",
                      color: "#9C9C9C",
                      fontFamily: "Raleway",
                      lineHeight: "24px",
                      padding: "10px",
                    }}
                  >
                    The purpose of this site is to further improve communication
                    between students and teachers at the school. Electronic
                    information about all qualified teachers at the school is
                    stored here.
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      background: "#FFA217",
                      width: "195px",
                      height: "38px",
                      padding: "10px",
                    }}
                  >
                    View case study
                    <ChevronRightIcon />
                  </Button>
                </div>

                <div className="information_fintech_imgs">
                  <img
                    className="information_fintech_img"
                    style={{ width: "445px", height: "320px" }}
                    src={Information_fintech_img}
                    alt=""
                  />
                </div>
              </div>
              <div className="information_fintech">
                <div className="information_fintech_imgs">
                  <img
                    style={{ width: "445px", height: "320px" }}
                    className="information_fintech_img"
                    src={Information_fintech_img1}
                    alt=""
                  />
                </div>
                <div className="information_fintech_text">
                  <Button
                    variant="contained"
                    sx={{
                      background: "#D0E6FF",
                      width: "72px",
                      height: "27px",
                      marginTop: "30px",
                      color: "#000AFF",
                      fontSize: "12px",
                      fontWeight: "bold",
                      borderRadius: "27px",
                      marginLeft: "10px",
                    }}
                  >
                    Fintech
                  </Button>
                  <Typography
                    className="information_fintech_text_typography"
                    variant="h1"
                    sx={{
                      maxWidth: "421px",
                      fontSize: "14px",
                      color: "red",
                      fontFamily: "Raleway",
                      lineHeight: "24px",
                      padding: "10px",
                      // textAlign: "center",
                    }}
                  >
                    The purpose of this site is to allow students to test their
                    knowledge online for free. It aims to determine how well
                    students are mastering the subjects. To access this site,
                    you only need to register with a Google Email.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      fontFamily: "Raleway",
                      padding: "10px",
                    }}
                  >
                    Electronic exam website, i.e. Queezy-Dashboard
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#000AFF",
                      width: "195px",
                      height: "38px",
                      padding: "10px",
                    }}
                  >
                    View case study
                    <ChevronRightIcon />
                  </Button>
                </div>
              </div>
              <div className="information_fintech">
                <div className="information_fintech_text">
                  <Button
                    variant="contained"
                    sx={{
                      background: "#E0FFF8",
                      width: "72px",
                      height: "27px",
                      marginTop: "30px",
                      color: "#2AB090",
                      fontSize: "12px",
                      fontWeight: "bold",
                      borderRadius: "27px",
                      marginLeft: "10px",
                    }}
                  >
                    Fintech
                  </Button>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      fontFamily: "Raleway",
                      padding: "10px",
                    }}
                  >
                    Electronic exam website, i.e. Queezy-Dashboard
                  </Typography>
                  <Typography
                    className="information_fintech_text_typography"
                    sx={{
                      maxWidth: "421px",
                      fontSize: "14px",
                      color: "#9C9C9C",
                      fontFamily: "Raleway",
                      lineHeight: "24px",
                      padding: "10px",
                    }}
                  >
                    Here, when a reader registers and logs in again, they can
                    reset their forgotten password. I think this will allow for
                    wider use of this site.
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      background: "#2AB090",
                      width: "195px",
                      height: "38px",
                      padding: "10px",
                    }}
                  >
                    View case study
                    <ChevronRightIcon />
                  </Button>
                </div>
                <div className="information_fintech_imgs">
                  <img
                    style={{ width: "445px", height: "512px" }}
                    className="information_fintech_img2"
                    src={Information_fintech_img2}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div ref={testimonialsRef} className="Testimonials_information">
            <Typography
              variant="h3"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "white",
                padding: "130px 0px 0px 0px",
              }}
            >
              Testimonials
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#9C9C9C",
                padding: "10px 0px 0px 0px",
                lineHeight: "24px",
                letterSpacing: "1px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Typography>
            <div className="Testimonials_information_carts">
              <CartComponent />
              <CartComponent />
              <CartComponent />
              <CartComponent />
            </div>
          </div>
        </Container>
        <div  ref={recentWorkRef} className="section_informatsion1">
          <Container>
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "80px 0px 0px 0px",
                fontSize: "34px",
                fontWeight: "bold",
              }}
            >
              Recent Work
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#9C9C9C",
                lineHeight: "24px",
              }}
            >
              Solvinguser & business problems since last 15+ years. <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Typography>

            <div className="carts">
              <div className="carts1">
                <img className="carts1_img" src={CompyuterImg1} alt="" />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "24px",
                    padding: "10px 0px",
                  }}
                >
                  Work name here
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#9C9C9C",
                    lineHeight: "24px",
                  }}
                >
                  Labore et dolore magna aliqua. sed do eiusmod <br /> tempor
                  incididunt ut labore et dolore magna.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    background: "#62BA1B",
                    width: "150px",
                    height: "38px",
                    marginTop: "30px",
                    padding: "10px",
                  }}
                >
                  Know more <ChevronRightIcon />
                </Button>
              </div>
              <div className="carts1">
                <img className="carts1_img" src={CompyuterImg2} alt="" />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "24px",
                    padding: "10px 0px",
                  }}
                >
                  Work name here
                </Typography>
                <Typography
                  sx={{
                    color: "#9C9C9C",
                    lineHeight: "24px",
                  }}
                >
                  Labore et dolore magna aliqua. sed do eiusmod <br /> tempor
                  incididunt ut labore et dolore magna.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    background: "#62BA1B",
                    width: "150px",
                    height: "38px",
                    marginTop: "30px",
                    padding: "10px",
                  }}
                >
                  Know more <ChevronRightIcon />
                </Button>
              </div>
            </div>
          </Container>
        </div>
        <footer className="Testimonials_information_footer">
          <Container>
            <div ref={getInTouchRef} className="footer">
              <div>
                <Typography
                  variant="h1"
                  sx={{
                    padding: "10px",
                    color: "white",
                    fontSize: "34px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Get In Touch
                </Typography>
                <Typography
                  sx={{
                    color: "#9C9C9C",
                    lineHeight: "24px",
                    textAlign: "center",
                  }}
                >
                  Those who wish to contact me should fill out the form below. <br />{" "}
                  For suggestions and inquiries, please use the form below.{" "}
                </Typography>
                <Form />
              </div>
              <div></div>
            </div>
          </Container>
        </footer>
      </main>

      <FloatingActionButtons  />
    </>
  );
});
export default Main;