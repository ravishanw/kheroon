import { Typography } from "@mui/material";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";

const kheroonTheme = createTheme({
  palette: {
    primary: {
      main: "#092635",
      light: "#0F3E55",
      dark: "#0F3E55",
    },
    secondary: {
      main: "#D8B6A4",
      light: "#EEEBDD",
      dark: "#630000",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

function App() {
  return (
    <ThemeProvider theme={kheroonTheme}>
      <Navbar></Navbar>
      <div>
        <Typography>Hello world</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
