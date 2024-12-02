import React from 'react'
import Button from '@mui/material/Button';
import { ClickUp } from './style';


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='container'>
        <footer>
  <ClickUp><Button variant="contained" >
   ClicUp
    </Button>
  <Button variant="contained" >
      Dropbox
    </Button>
<Button variant="contained" >
      PAYCHEX
    </Button>
  <Button variant="contained" >
      elastik
    </Button>
  <Button variant="contained" >
      stripe
    </Button>
</ClickUp>
   
    </footer>

    </div>
  )
}

export default Footer