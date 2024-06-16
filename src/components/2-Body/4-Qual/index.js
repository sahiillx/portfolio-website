import React from "react";
import styled from "styled-components";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { experiences } from "../../../data/constants";
import { education } from "../../../data/constants";

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
    padding: 20px;
  }

  @media screen and (max-width: 1080px) {
    font-size: 1.3rem;
  }
`;

const Timeline = styled.div`
  width: 80%;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3px 1fr;

  @media screen and (max-width: 768px) {
    min-width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    margin: 0px;
  }
  @media screen and (max-width: 1080px) {
  }
`;
const TimelineEmpty = styled.div``;
const TimelineMiddle = styled.div`
  position: relative;
  background-image: linear-gradient(45deg, #f27121, #e94057, #8a2387);
  width: 3px;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const TimelineCircle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-image: linear-gradient(45deg, #f27121, #e94057, #8a2387);
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const TimelineComponent = styled.div`
  margin: 0px 20px 20px 20px;
  padding: 20px;
  background: transparent;

  border: 2px solid black;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  color: black;
  padding: 1.75rem;
  transition: 0.4s ease;
  overflow-wrap: break-word !important;
  margin: 1rem;
  margin-bottom: 20px;
  border-radius: 6px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 25px;
  }
  @media screen and (max-width: 1080px) {
    font-size: 0.8rem;
    height: 70%;
`;

const Date = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

const Qualification = () => {
  const [activeTab, setActiveTab] = React.useState(true);

  return (
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

        {/* ------------------------Experience Timeline-------------------------- */}
        {activeTab === true && (
          <Timeline>
            {experiences.map((item, index) => (
              <React.Fragment key={index}>
                {index % 2 === 0 && (
                  <>
                    <TimelineComponent>
                      <h2>{item.role}</h2>
                      <Date>{item.date}</Date>
                      <p>{item.company}</p>
                    </TimelineComponent>
                    <TimelineMiddle>
                      <TimelineCircle></TimelineCircle>
                    </TimelineMiddle>
                    <TimelineEmpty></TimelineEmpty>
                  </>
                )}

                {index % 2 !== 0 && (
                  <>
                    <TimelineEmpty></TimelineEmpty>

                    <TimelineMiddle>
                      <TimelineCircle></TimelineCircle>
                    </TimelineMiddle>
                    <TimelineComponent>
                      <h2>{item.role}</h2>
                      <Date>{item.date}</Date>
                      <p>{item.company}</p>
                    </TimelineComponent>
                  </>
                )}
              </React.Fragment>
            ))}
          </Timeline>
        )}

        {/* ------------------------Education Timeline-------------------------- */}
        {activeTab === false && (
          <Timeline>
            {education.map((item, index) => (
              <React.Fragment key={index}>
                {/* Render TimelineEmpty and TimelineMiddle before TimelineComponent for the first item */}
                {index % 2 === 0 && (
                  <>
                    <TimelineEmpty></TimelineEmpty>
                    <TimelineMiddle>
                      <TimelineCircle></TimelineCircle>
                    </TimelineMiddle>
                    <TimelineComponent>
                      <h2>{item.school}</h2>
                      <Date>{item.date}</Date>
                      <p>{item.degree}</p>
                    </TimelineComponent>
                  </>
                )}

                {/* Render TimelineEmpty and TimelineMiddle after TimelineComponent for the last item */}
                {index % 2 !== 0 && (
                  <>
                    <TimelineComponent>
                      <h2>{item.school}</h2>
                      <Date>{item.date}</Date>
                      <p>{item.degree}</p>
                    </TimelineComponent>

                    <TimelineMiddle>
                      <TimelineCircle></TimelineCircle>
                    </TimelineMiddle>
                    <TimelineEmpty></TimelineEmpty>
                  </>
                )}
              </React.Fragment>
            ))}
          </Timeline>
        )}
      </Wrapper>
    </Container>
  );
};

export default Qualification;
