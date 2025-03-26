import React from 'react'
import Button from '@mui/material/Button';
import { ClickUp } from './style';


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='container'>
        <footer>
  <ClickUp><Button className='header_button_contained1' variant="contained" href='https://t.me/Shamshiyev_O' >
   Telegram
    </Button>
  <Button className='header_button_contained2' variant="contained" href='https://www.instagram.com/shamshiyev_o' >
      Instagram
    </Button>
<Button className='header_button_contained3' variant="contained" href='https://www.youtube.com/channel/UC_ezZnLBpv3uf2qyoD5hgOA' >
      Youtube
    </Button>
  
</ClickUp>
   
    </footer>

    </div>
  )
}

export default Footer