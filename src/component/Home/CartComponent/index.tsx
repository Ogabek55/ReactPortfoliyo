import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import ClientPhoto1 from "./images/Client photo 1.png";

function TestimonialCard() {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "8px",
        padding: "24px",
        maxWidth: "400px",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          padding: "2px",
          background: "linear-gradient(180deg, #9C9C9C, #9C9C9C, #9C9C9C)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "40px",
          lineHeight: "1",
          fontWeight: "bold",
          mb: 2,
          color: "white",
        }}
      >
        &ldquo;
      </Typography>

      <Typography
        sx={{
          fontSize: "16px",
          lineHeight: "1.6",
          mb: 3,
          color: "#9C9C9C",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>

      <Box display="flex" alignItems="center">
        <Avatar
          alt="Client Name"
          src={ClientPhoto1}
          sx={{ width: 40, height: 40, mr: 2 }}
        />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#FFFFFF",
          }}
        >
          Elyor Tuyliyev
        </Typography>
      </Box>
    </Box>
  );
}

export default TestimonialCard;
