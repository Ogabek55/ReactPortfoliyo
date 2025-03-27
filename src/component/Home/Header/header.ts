import styled from "@emotion/styled";

export const HeaderLink = styled.div`
max-width: 1480px;
width: 100%;
position: fixed;
margin: 0 auto;
top: 0;
z-index: 1;
ul{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
}
li{
    transition: 0.3s;
}
header ul li:hover{
    cursor: pointer;
    color:#3F8E00;
}
`