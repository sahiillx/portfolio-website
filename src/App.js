import "./App.css";
import styled from "styled-components";

import Navbar from "./components/1-Navbar";
import Hero from "./components/2-Body/1-HeroSection";
import Skills from "./components/2-Body/3-Skills";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/2-Body/2-About";
import Projects from "./components/2-Body/5-Projects";
import Qualifications from "./components/2-Body/4-Qual";
import Contact from "./components/2-Body/6-Contact/Contact";
import Footer from "./components/2-Body/7-Footer/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <Router>
      <Navbar />
      <Body>
        <Hero />
        <About />
        <Skills />
        <Qualifications />
        <Projects />
        <Contact />
        <Footer />
      </Body>
    </Router>
  );
}

export default App;
