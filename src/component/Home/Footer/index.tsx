import React from 'react'
import Button from '@mui/material/Button';
import { ClickUp } from './style';


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='container'>
        <footer>
  <ClickUp><Button className='header_button_contained1' variant="contained" >
   ClicUp
    </Button>
  <Button className='header_button_contained2' variant="contained" >
      Dropbox
    </Button>
<Button className='header_button_contained3' variant="contained" >
      PAYCHEX
    </Button>
  <Button className='header_button_contained4' variant="contained" >
      elastik
    </Button>
  <Button className='header_button_contained5' variant="contained" >
      stripe
    </Button>
</ClickUp>
   
    </footer>

    </div>
  )
}

export default Footer