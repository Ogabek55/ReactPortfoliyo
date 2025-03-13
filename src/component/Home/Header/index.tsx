import React from "react";
import { Container } from "@mui/material";
import { Header_link } from "./header";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

interface HeaderProps {
  scrollToContent: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToContent }) => {
  return (
    <Container maxWidth="xl">
      <header>
        <Header_link>
          <ul>
            <li className="header_home" onClick={() => scrollToContent("home")} style={{ cursor: "pointer" }}>
              Home
            </li>
            <li className="header_studies" onClick={() => scrollToContent("caseStudies")} style={{ cursor: "pointer" }}>
              Case Studies
            </li>
            <li className="header_testimonials" onClick={() => scrollToContent("testimonials")} style={{ cursor: "pointer" }}>
              Testimonials
            </li>
            <li className="header_recent" onClick={() => scrollToContent("recentWork")} style={{ cursor: "pointer" }}>
              Recent Work
            </li>
            <li className="header_get" onClick={() => scrollToContent("getInTouch")} style={{ cursor: "pointer" }}>
              Get In Touch
            </li>

            <div className="header_imgs">
              <a href="https://t.me/Shamshiyev_O" target="_blank">
                <TelegramIcon />
              </a>
              <a href="https://www.youtube.com/channel/UC_ezZnLBpv3uf2qyoD5hgOA" target="_blank">
                <YouTubeIcon />
              </a>
              <a href="https://www.instagram.com/shamshiyev_o" target="_blank">
                <InstagramIcon />
              </a>
            </div>
          </ul>
        </Header_link>
      </header>
    </Container>
  );
};

export default Header;
