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
        color:"#353434",
        border:"2px solid #353434",
        fontWeight:"900"
        

    }}>
       ClickUP
    </Button>
    <Button variant="contained" sx={{
        width:"160px",
        height:"60px",
        backgroundColor:"black",
        color:"#353434",
        border:"2px solid #353434",
        fontWeight:"900"

    }}>
      Dropbox
    </Button>
    <Button variant="contained" sx={{
        width:"160px",
        height:"60px",
        backgroundColor:"black",
        color:"#353434",
        border:"2px solid #353434",
        fontWeight:"900"

    }}>
      PAYCHEX
    </Button>
    <Button variant="contained" sx={{
        width:"160px",
        height:"60px",
        backgroundColor:"black",
        color:"#353434",
        border:"2px solid #353434",
        fontWeight:"900"

    }}>
      elastic
    </Button>
    <Button variant="contained" sx={{
        width:"160px",
        height:"60px",
        backgroundColor:"black",
        color:"#353434",
        border:"2px solid #353434",
        fontWeight:"900"

    }}>
      stripe
    </Button>
    </footer>

    </div>
  )
}

export default Footer