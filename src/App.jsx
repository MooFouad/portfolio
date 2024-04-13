import { useRef } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


function App() {
  const aboutRef = useRef()

  return (
    <>
      <Navbar />
      <Header />
      <About about={aboutRef}/>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
