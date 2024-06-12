import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import khLogo from "../assets/kheroonLogo.png";
import Button from "@mui/material/Button";

const navItems = [
  {
    item: "Products",
    itemLink: "#",
  },
  {
    item: "Our story",
    itemLink: "#",
  },
  {
    item: "Testimonials",
    itemLink: "#",
  },
  {
    item: "Contact us",
    itemLink: "#",
  },
];

function Navbar() {
  return (
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
              <img src={khLogo} alt="kheroon-logo" className="kh-logo" />
            </Button>
          </Box>
          <Box
            sx={{ display: "flex", flex: 1, justifyContent: "space-between" }}
          >
            {navItems.map((item, index) => {
              return (
                <Button key={index} sx={{ textTransform: "none" }}>
                  {item.item}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
