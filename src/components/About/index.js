import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import styled from "styled-components";
import { services } from "../../data/constants";

const StyledSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 80px 30px;

  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }

  @media screen and (max-width: 640px) {
    padding: 32px 16px;
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
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
`;

const StyledHeadText = styled.h2`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
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
            Innovative and enthusiastic computer science undergrad (Currently in
            Third Year) with a passion for critical thinking/problem-solving and
            sharing a love for technology and science. Let's collaborate and
            create something remarkable together!
          </StyledParagraph>

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
