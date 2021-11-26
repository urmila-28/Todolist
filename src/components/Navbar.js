import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#294026", color: "red" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Banasthali Vidyapith
          </Typography>
          <Button color="inherit">Start</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
