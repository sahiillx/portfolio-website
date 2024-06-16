import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import styled from "styled-components";
import { services } from "../../../data/constants";
import VerifiedIcon from "@mui/icons-material/Verified";
import NextWeek from "@mui/icons-material/NextWeek";

const StyledSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 80px 30px;
  background-color: #ffffff;

  @media screen and (max-width: 1080px) {
    padding: 66px 16px;
  }

  @media screen and (max-width: 768px) {
    padding: 32px 22px;
  }
`;

const StyledInnerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
`;

const Something = styled.div`
  text-align: center;
`;

const StyledSubText = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: #000000;
  line-height: 68px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 48px;
  }
`;

const StyledHeadText = styled.h2`
  font-size: 50px;
  font-weight: 700;
  color: #000000;
  line-height: 68px;

  @media screen and (max-width: 768px) {
    font-size: 45px;
    line-height: 38px;
    margin-bottom: 30px;
  }
`;

const StyledParagraph = styled(motion.p)`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 95};
  line-height: 32px;
  text-align: center;
  max-width: 850px;
`;

const StyledServiceCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 1080px) {
    gap: 0.5rem;
  }
  @media (max-width: 960px) {
    display: none;
  }
`;

const Cards = styled.div`
  display: flex;
  gap: 3rem;
  margin: 50px auto 40px auto;

  @media (max-width: 768px) {
  margin: 25px auto 20px auto;
  gap: 1.5rem;

}
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  border: 1.5px solid black;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 15px 25px;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 8px 6px 0px 6px;
`;
const Desc = styled.div``;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  height: 50px;
  width: 160px;
  margin-top: 15px;

  padding: 0 15px;
  border: 2px solid #000000;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  border-radius: 15px;
  font-size: 16px;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  justify-content: center;

  &:hover {
    background-color: #2e74ca;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
    color: white;
  }

  @media screen and (max-width: 768px) {
    padding: 0px;
    font-size: 18px;
    margin: 30px;
  }
`;

const About = () => {
  return (
    <>
      <StyledSection>
        <StyledInnerSection>
          <Something>
            <StyledSubText>Introduction</StyledSubText>
            <StyledHeadText>Overview</StyledHeadText>
          </Something>

          <StyledParagraph>
            Innovative and enthusiastic computer science graduate with a passion
            for critical thinking/problem-solving and sharing a love for
            technology and science. Let's collaborate and create something
            remarkable together!
          </StyledParagraph>
          
          <Cards>
            <Card>
              <VerifiedIcon style={{ color: "black" }} />
              <Title>Experience</Title>
              <Desc>8+ Year</Desc>
            </Card>
            <Card>
              <NextWeek style={{ color: "black" }} />
              <Title>Completed</Title>
              <Desc>20+ Project</Desc>
            </Card>
          </Cards>
          <ResumeButton href="/" target="_blank">
            Check Resume
              {/* Say Hello <NearMeRoundedIcon style={{ color: "black", marginLeft: '8px' }} /> */}
            </ResumeButton>
          
          <StyledServiceCardContainer>
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </StyledServiceCardContainer>
        </StyledInnerSection>
      </StyledSection>
    </>
  );
};

export default About;
