import React from "react";
import Button from "@mui/material/Button";
import { ClickUp } from "./style";

const Footer = () => {
  function HandleTelegram() {
    window.location.href = "https://t.me/Shamshiyev_O";
  }
  function HandleInstagram() {
    window.location.href = "https://www.instagram.com/shamshiyev_o";
  }
  function HandleYoutube() {
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
            onClick={HandleTelegram}
          >
            Telegram
          </Button>
          <Button
            className="header_button_contained2"
            variant="contained"
            onClick={HandleInstagram}
          >
            Instagram
          </Button>
          <Button
            className="header_button_contained3"
            variant="contained"
            onClick={HandleYoutube}
          >
            Youtube
          </Button>
        </ClickUp>
      </footer>
    </div>
  );
};

export default Footer;
