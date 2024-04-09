import "./App.css";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Qualifications from "./components/Qual";

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
        </Body>
      </Router>
  );
}

export default App;
