import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;

  padding: 30px 0px 80px 0px;

  @media (max-width: 768px) {
    padding: 0px;
    padding-bottom: 50px;
    margin-top: 20px;
  }
  z-index: 1;
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

  @media screen and (max-width: 1080px) {
    padding-top: 20px;
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
  padding-bottom: 20px;
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
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }

  @media screen and (max-width: 1080px) {
    font-size: 35px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 20px;
  }
  @media screen and (max-width: 1080px) {
    font-size: 16px;
  }
`;

const QualTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin: 0px auto;
  }
`;
const QualButton = styled.button`
  color: ${({ active }) => (active ? "#147efb" : "#000000")};
  font-size: 1.5rem;
  font-weight: 600;
  padding: 30px 1.8rem 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  :hover {
    color: #147efb;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    padding: 15px;
  }

  @media screen and (max-width: 1080px) {
    font-size: 1.3rem;
  }
`;



const Qualification = () => {
  const [activeTab, setActiveTab] = React.useState(true);
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  const [isMobile, setIsMobile] = useState(mediaQuery.matches);

  useEffect(() => {
    mediaQuery.addEventListener("change", () => {
      setIsMobile(mediaQuery.matches);
    });
  }, []);

  return (
    <div>
      <Container id="qualification">
        <Wrapper>
          <Title>Qualification</Title>
          <Desc>
            My work experience as a software engineer and working on different
            companies and projects.
          </Desc>
          <QualTabs>
            <QualButton active={activeTab} onClick={() => setActiveTab(true)}>
              <WorkOutlineIcon
                fontSize={"large"}
                style={{ marginRight: "10px", color: "black" }}
              />
              Experience
            </QualButton>
            <QualButton active={!activeTab} onClick={() => setActiveTab(false)}>
              <SchoolOutlinedIcon
                fontSize={"large"}
                style={{ marginRight: "10px", color: "black" }}
              />
              Education
            </QualButton>
          </QualTabs>

          {isMobile ? (
            <MobileView activeTab={activeTab} />
          ) : (
            <DesktopView activeTab={activeTab} />
          )}
        </Wrapper>
      </Container>
    </div>
  );
};

export default Qualification;
