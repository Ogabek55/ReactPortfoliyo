import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Content } from "./style";

export default function FloatingActionButtons() {
  const handleAddClick = () => {
    console.log("The button worked."); 

    const numNameInput = document.getElementById("footer_from_input");
    if (numNameInput) {
      numNameInput.focus();
      numNameInput.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      console.error('Element with ID "footer_from_input" not found');
    }
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Content>
        <Fab color="primary" aria-label="add" onClick={handleAddClick}>
          <AddIcon />
        </Fab>
      </Content>
    </Box>
  );
}
