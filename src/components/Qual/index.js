import React from "react";
import styled from "styled-components";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { experiences } from "../../data/constants";
import { education } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;

  padding: 50px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
  z-index: 1;
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 98%, 0 100%);
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
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
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const QualTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const QualButton = styled.button`
  color: ${({ active }) => (active ? "#147efb" : "#000000")};
  font-size: 1.5rem;
  font-weight: 600;
  padding: 4rem 1.8rem 1.5rem 1rem;
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
`;

const Timeline = styled.div`
  width: 80%;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3px 1fr;
`;
const TimelineEmpty = styled.div``;
const TimelineMiddle = styled.div`
  position: relative;
  background-image: linear-gradient(45deg, #f27121, #e94057, #8a2387);
  width: 3px;
  height: 100%;

  @media screen and (max-width: 768px) {
    position: relative;
    background-image: linear-gradient(45deg, #f27121, #e94057, #8a2387);
    width: 3px;
    height: 100%;
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
    position: absolute;
    top: 0;
    left: 50%;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-image: linear-gradient(45deg, #f27121, #e94057, #8a2387);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
`;
const TimelineComponent = styled.div`
  margin: 0px 20px 20px 20px;
  padding: 20px;
  background: transparent;

  border: 1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  color: white;
  padding: 1.75rem;
  transition: 0.4s ease;
  overflow-wrap: break-word !important;
  margin: 1rem;
  margin-bottom: 20px;
  border-radius: 6px;
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
              style={{ marginRight: "10px" }}
            />
            Experience
          </QualButton>
          <QualButton active={!activeTab} onClick={() => setActiveTab(false)}>
            <SchoolOutlinedIcon
              fontSize={"large"}
              style={{ marginRight: "10px" }}
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
                      <p>{item.desc}</p>
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
                      <p>{item.desc}</p>
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
                      <p>{item.degree}</p>
                    </TimelineComponent>
                  </>
                )}

                {/* Render TimelineEmpty and TimelineMiddle after TimelineComponent for the last item */}
                {index % 2 !== 0 && (
                  <>
                    <TimelineComponent>
                      <h2>{item.school}</h2>
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
