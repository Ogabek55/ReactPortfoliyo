import React from "react";
import { Container } from "@mui/material";
import { HeaderLInk } from "./header";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

interface HeaderProps {
  scrollToContent: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToContent }) => {
  return (
    <Container maxWidth="xl">
      <HeaderLInk>
        <header>
          <ul>
            <li className="header_home" onClick={() => scrollToContent("home")}>
              Home
            </li>
            <li
              className="header_studies"
              onClick={() => scrollToContent("caseStudies")}
            >
              Case Studies
            </li>
            <li
              className="header_testimonials"
              onClick={() => scrollToContent("testimonials")}
            >
              Testimonials
            </li>
            <li
              className="header_recent"
              onClick={() => scrollToContent("recentWork")}
            >
              Recent Work
            </li>
            <li
              className="header_get"
              onClick={() => scrollToContent("getInTouch")}
            >
              Get In Touch
            </li>

            <div className="header_imgs">
              <a href="https://t.me/Shamshiyev_O" target="_blank">
                <TelegramIcon />
              </a>
              <a
                href="https://www.youtube.com/channel/UC_ezZnLBpv3uf2qyoD5hgOA"
                target="_blank"
              >
                <YouTubeIcon />
              </a>
              <a href="https://www.instagram.com/shamshiyev_o" target="_blank">
                <InstagramIcon />
              </a>
            </div>
          </ul>
        </header>
      </HeaderLInk>
    </Container>
  );
};

export default Header;
