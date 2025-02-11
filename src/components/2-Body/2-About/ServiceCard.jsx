import React from "react";
import styled from "styled-components";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

// Styled components for the ServiceCard component
const StyledTilt = styled(Tilt)`
  width: 100%;
  @media (min-width: 768px) {
    width: 250px;
  }
`;

const StyledMotionDiv = styled(motion.div)`
  width: 100%;

  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledContentWrapper = styled.div`
  background-color: #f9f9f9;
  border: 2px solid black;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 20px 40px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    min-height: 300px;
    padding: 0px 20px;
  }
  @media screen and (max-width: 1080px) {
    height: 80%;
    width: 90%;
    margin: 0 auto;
  }
`;

const StyledImage = styled.img`
  height: 80px;
  width: 80px;
  object-fit: contain;
`;

const StyledTitle = styled.h3`
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const ServiceCard = ({ index, title, icon }) => {
  return (
    <StyledTilt>
      <StyledMotionDiv>
        <StyledContentWrapper>
          <StyledImage src={icon} alt={title} />
          <StyledTitle>{title}</StyledTitle>
        </StyledContentWrapper>
      </StyledMotionDiv>
    </StyledTilt>
  );
};

export default ServiceCard;
