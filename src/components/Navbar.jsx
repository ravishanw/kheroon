import { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import KheroonLogo from "../assets/kheroonLogo.png";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  {
    item: "Products",
    itemLink: "#products",
  },
  {
    item: "Our story",
    itemLink: "#our-story",
  },
  {
    item: "Testimonials",
    itemLink: "#testimonials",
  },
  {
    item: "Contact us",
    itemLink: "#contact-us",
  },
];

function Navbar() {
  const [navState, setNav] = useState(false);

  // Handle nav state

  function openNav() {
    setNav(true);
  }

  function closeNav() {
    setNav(false);
  }

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <AppBar
          color="primary"
          sx={{
            backgroundColor: "#fff",
            position: "fixed",
            "& .MuiToolbar-root": {
              padding: { xs: "0px" },
            },
          }}
          className="padding-horizontal"
        >
          <Toolbar>
            <Box sx={{ flex: 1 }}>
              <Button href="#">
                <img src={KheroonLogo} alt="kheroon-logo" className="kh-logo" />
              </Button>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              {navItems.map((item, index) => {
                return (
                  <Button
                    key={index}
                    sx={{ textTransform: "none" }}
                    href={item.itemLink}
                  >
                    {item.item}
                  </Button>
                );
              })}
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Button onClick={openNav}>
                <MenuIcon color="primary.main"></MenuIcon>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        color="primary.main"
        anchor="right"
        open={navState}
        onClose={closeNav}
        PaperProps={{
          sx: { width: "50%" },
        }}
      >
        <List>
          <ListItem>
            <Button onClick={closeNav}>
              <CloseIcon></CloseIcon>
            </Button>
          </ListItem>
          {navItems.map((el, index) => {
            return (
              <ListItem key={index}>
                <ListItemButton key={index} href={el.itemLink}>
                  <ListItemText key={index} primary={el.item}></ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}

export default Navbar;
