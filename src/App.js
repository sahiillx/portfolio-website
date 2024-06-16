import "./App.css";
import styled from "styled-components";
import React from "react";
import Navbar from "./components/1-Navbar";
import Hero from "./components/2-Body/1-HeroSection";
import Skills from "./components/2-Body/3-Skills";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/2-Body/2-About";
import Projects from "./components/2-Body/5-Projects";
import Qualifications from "./components/2-Body/4-Qual";
import Contact from "./components/2-Body/6-Contact/Contact";
import Footer from "./components/2-Body/7-Footer/Footer";
import ProjectDetails from "./components/Cards/ProjectDetail";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;

  @media screen and (max-width: 960px) {
    padding-top: 3rem;
  }
`;

function App() {
  const [openModal, setOpenModal] = React.useState({
    state: false,
    project: null,
  });
  return (
    <Router>
      <Navbar />
      <Body>
        <Hero />
        <About />
        <div id="skills">
          <Skills />
        </div>

        <div id="qualifications">
          <Qualifications />
        </div>

        <div id="project">
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
        {openModal.state && (
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        )}
      </Body>
    </Router>
  );
}

export default App;
