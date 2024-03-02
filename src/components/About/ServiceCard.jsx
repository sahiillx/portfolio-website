import React from "react";
import styled from "styled-components";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

// Styled components for the ServiceCard component
const StyledTilt = styled(Tilt)`
  width: 100%;
  @media (min-width: 640px) {
    width: 250px;
  }
`;

const StyledMotionDiv = styled(motion.div)`
  width: 100%;
  background: linear-gradient(
    90deg,
    #00cea8 0%,
    #bf61ff 100%
  ); /* Green to pink gradient */
  padding: 1px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledContentWrapper = styled.div`
  background-color: #151030; /* Tertiary color */
  border-radius: 20px;
  padding: 20px 40px; /* Adjust padding as needed */
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  height: 80px;
  width: 80px;
  object-fit: contain;
`;

const StyledTitle = styled.h3`
  color: #fff;
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
