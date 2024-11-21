import React from 'react'
import Button from '@mui/material/Button';



type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='container'>
        <footer>
    <Button variant="contained" sx={{
        width:"160px",
        height:"60px",
        backgroundColor:"black",
        color:"#1B1B1B",
        border:"1px solid #1B1B1B",
        fontWeight:"900"
        

    }}>
       ClickUP
    </Button>
    <Button variant="contained" sx={{
        width:"160px",
        height:"60px",
        backgroundColor:"black",
        color:"#1B1B1B",
        border:"1px solid #1B1B1B",
        fontWeight:"900"

    }}>
      Dropbox
    </Button>
    <Button variant="contained" sx={{
        width:"160px",
        height:"60px",
        backgroundColor:"black",
        color:"#1B1B1B",
        border:"1px solid #1B1B1B",
        fontWeight:"900"

    }}>
      PAYCHEX
    </Button>
    <Button variant="contained" sx={{
        width:"160px",
        height:"60px",
        backgroundColor:"black",
        color:"#1B1B1B",
        border:"1px solid #1B1B1B",
        fontWeight:"900"

    }}>
      elastic
    </Button>
    <Button variant="contained" sx={{
        width:"160px",
        height:"60px",
        backgroundColor:"black",
        color:"#1B1B1B",
        border:"1px solid #1B1B1B",
        fontWeight:"900"

    }}>
      stripe
    </Button>
    </footer>

    </div>
  )
}

export default Footer