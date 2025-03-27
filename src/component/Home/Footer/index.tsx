import React from "react";
import Button from "@mui/material/Button";
import { ClickUp } from "./style";

type Props = {};

const Footer = (props: Props) => {
  function HandeTelegram() {
    window.location.href = "https://t.me/Shamshiyev_O";
  }
  function HandeInstagram() {
    window.location.href = "https://www.instagram.com/shamshiyev_o";
  }
  function HandeYoutube() {
    window.location.href =
      "https://www.youtube.com/channel/UC_ezZnLBpv3uf2qyoD5hgOA";
  }
  return (
    <div className="container">
      <footer>
        <ClickUp>
          <Button
            className="header_button_contained1"
            variant="contained"
            onClick={HandeTelegram}
          >
            Telegram
          </Button>
          <Button
            className="header_button_contained2"
            variant="contained"
            onClick={HandeInstagram}
          >
            Instagram
          </Button>
          <Button
            className="header_button_contained3"
            variant="contained"
            onClick={HandeYoutube}
          >
            Youtube
          </Button>
        </ClickUp>
      </footer>
    </div>
  );
};

export default Footer;
