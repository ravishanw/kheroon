import { useRef, useEffect, useState } from "react";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Products from "./components/Products";
import OurStory from "./components/OurStory";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";

//  Custom Kheroon theme

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
  // Refs for sections

  const welcomeRef = useRef();
  const productsRef = useRef();
  const ourStoryRef = useRef();
  const testimonialRef = useRef();
  const contactRef = useRef();
  let refsArr = [
    welcomeRef,
    productsRef,
    ourStoryRef,
    testimonialRef,
    contactRef,
  ];

  // Visibility states for each section

  const [welcomeVisible, setWelcome] = useState(false);
  const [productsVisible, setProducts] = useState(false);
  const [ourStoryVisible, setOurStory] = useState(false);
  const [testimonialVisible, setTestimonial] = useState(false);
  const [contactVisible, setContact] = useState(false);

  // Intersection observer

  const intersectionOptions = {
    root: null,
    rootMargin: "-10%",
    threshold: 0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.id) {
            case "welcome-ref":
              setWelcome(true);
              observer.unobserve(entry.target);
              break;

            case "products-ref":
              setProducts(true);
              observer.unobserve(entry.target);
              break;

            case "our-story-ref":
              setOurStory(true);
              observer.unobserve(entry.target);
              break;

            case "testimonial-ref":
              setTestimonial(true);
              observer.unobserve(entry.target);
              break;

            case "contact-ref":
              setContact(true);
              observer.unobserve(entry.target);
              break;

            default:
              console.log(entry.target);
          }
        }
      });
    }, intersectionOptions);
    refsArr.forEach((refs) => {
      observer.observe(refs.current);
    });
  }, [refsArr, intersectionOptions]);

  return (
    <ThemeProvider theme={kheroonTheme}>
      <Navbar></Navbar>
      <div id="welcome-ref" ref={welcomeRef}>
        <Welcome visibleState={welcomeVisible}></Welcome>
      </div>
      <div id="products-ref" ref={productsRef}>
        <Products visibleState={productsVisible}></Products>
      </div>
      <div id="our-story-ref" ref={ourStoryRef}>
        <OurStory visibleState={ourStoryVisible}></OurStory>
      </div>
      <div id="testimonial-ref" ref={testimonialRef}>
        <Testimonials visibleState={testimonialVisible}></Testimonials>
      </div>
      <div id="contact-ref" ref={contactRef}>
        <ContactUs visibleState={contactVisible}></ContactUs>
      </div>
    </ThemeProvider>
  );
}

export default App;
