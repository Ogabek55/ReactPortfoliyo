import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const pages = [
  { name: "Home", section: "home" },
  { name: "Case Studies", section: "caseStudies" },
  { name: "Testimonials", section: "testimonials" },
  { name: "Recent Work", section: "recentWork" },
  { name: "Get In Touch", section: "getInTouch" },
];

interface HeaderProps {
  scrollToContent: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToContent }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ background: "#222" }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={() => scrollToContent(page.section)}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => scrollToContent(page.section)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton
                color="inherit"
                href="https://t.me/Shamshiyev_O"
                target="_blank"
              >
                <TelegramIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.youtube.com/channel/UC_ezZnLBpv3uf2qyoD5hgOA"
                target="_blank"
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.instagram.com/shamshiyev_o"
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar />
    </>
  );
};

export default Header;
