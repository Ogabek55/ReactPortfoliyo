import styled from "@emotion/styled";

export const CaseStudies = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: black;
  font-size: 34px;
  text-align: center;
  padding: 80px 0px 0px 0px;
`;
export const MyImg = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 15px;
  overflow: hidden;
  box-shadow:
    0 0 30px rgba(255, 255, 255, 0.5),
    0 0 60px rgba(255, 255, 255, 0.3);
  .Main_img_img {
    display: block;
    width: 100%;
    height: auto;
    transition: 0ms.3s;
  }
  .Main_img_img:hover {
    transform: scale(1.1);
    box-shadow: 0 0 50px #3F8E00;
  }
 
`;

export const MAinText = styled.div`
  .Main_div_p {
    cursor: pointer;
  }
`;
