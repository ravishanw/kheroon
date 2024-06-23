import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Products from "./components/Products";
import OurStory from "./components/OurStory";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";

const kheroonTheme = createTheme({
  palette: {
    primary: {
      main: "#092635",
      light: "#0F3E55",
      dark: "#02343C",
    },
    secondary: {
      main: "#D8B6A4",
      light: "#EEEBDD",
      dark: "#630000",
    },
    alphaSecondary: {
      main: "rgba(238, 235, 221, 0.4)",
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
      <Welcome></Welcome>
      <Products></Products>
      <OurStory></OurStory>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
    </ThemeProvider>
  );
}

export default App;
