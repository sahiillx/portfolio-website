import React from "react";
import styled from "styled-components";
import ProjectCard from "../../Cards/ProjectCard";
import { projects } from "../../../data/constants";

const Container = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;

  padding: 30px 0px 150px 0px;
  @media (max-width: 768px) {
    padding: 0px;
    padding-bottom: 150px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 98%, 0 100%);
  }
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 97%, 0 100%);
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;

  padding-bottom: 50px;
  gap: 12px;
  @media (max-width: 768px) {
    padding: 30px;
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 20px;
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  border: 2px solid black;
  font-size: 16px;

  font-weight: 500;
  margin: 22px 0;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;

  color: black;

  ${({ active, theme }) =>
    active &&
    `
      background-color: #147efb;
  `}

  &:hover {
    background-color: #147efb;
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background-color: black;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;
const Projects = () => {
  const [toggle, setToggle] = React.useState("All");
  return (
    <Container id="project">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Here are some of the projects I have worked on. I am always open to
          new ideas and projects. Feel free to contact me if you have any
          projects in mind.
        </Desc>

        <ToggleGroup>
          {toggle === "All" ? (
            <ToggleButton active value="All" onClick={() => setToggle("All")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="All" onClick={() => setToggle("All")}>
              All
            </ToggleButton>
          )}

          <Divider> </Divider>

          {toggle === "Web Apps" ? (
            <ToggleButton
              active
              value="Web Apps"
              onClick={() => setToggle("Web Apps")}
            >
              Web Apps
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("Web Apps")}>
              Web Apps
            </ToggleButton>
          )}

          <Divider> </Divider>
          {toggle === "Blockchain" ? (
            <ToggleButton
              active
              value="Blockchain"
              onClick={() => setToggle("Blockchain")}
            >
              Blockchain
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Blockchain"
              onClick={() => setToggle("Blockchain")}
            >
              Blockchain
            </ToggleButton>
          )}
          <Divider> </Divider>
          {toggle === "Others" ? (
            <ToggleButton
              active
              value="Others"
              onClick={() => setToggle("Others")}
            >
              Others
            </ToggleButton>
          ) : (
            <ToggleButton value="Others" onClick={() => setToggle("Others")}>
              Others
            </ToggleButton>
          )}
        </ToggleGroup>

        <CardContainer>
          {toggle === "All" &&
            projects.map((project) => <ProjectCard project={project} />)}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
