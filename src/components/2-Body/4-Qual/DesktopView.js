import React from "react";
import styled from "styled-components";
import { experiences } from "../../../data/constants";
import { education } from "../../../data/constants";


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
    height: 50px;
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
    margin: 0px;
    padding: 1rem;
  }

  @media (max-width: 560px) {
    width: 90%;
    font-size: 0.9rem;
    padding: 1.25rem;
  }
`;

const Date = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

const DesktopView = ({ activeTab }) => {
  return (
    <div>
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
    </div>
  );
};

export default DesktopView;
