import React from "react";
import styled from "styled-components";

const Container = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;

  padding: 20px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding-top: 40px;
  padding-bottom: 30px;
  gap: 12px;
  @media (max-width: 960px) {
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
    font-size: 16px;
  }
`;

const ToggleGroup = styled.div``;

const ToggleButton = styled.div``;

const Projects = () => {
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
          <ToggleButton></ToggleButton>
        </ToggleGroup>
      </Wrapper>
    </Container>
  );
};

export default Projects;
