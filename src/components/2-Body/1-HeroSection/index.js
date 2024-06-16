import React from "react";
import styled from "styled-components";
import { Bio } from "../../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../../images/HeroImg.png";
import HeroBgAnimation from "../../../heroBgAnimation";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";

const HeroContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px 100px 30px;
  min-height: 75vh;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

  @media screen and (max-width: 1080px) {
    padding: 66px 60px;
  }

  @media screen and (max-width: 768px) {
    padding: 50px 16px 10px 16px;
  }
`;

const HeroBG = styled.div`
  position: absolute;
  bottom: 0%;
  left: 16.5%;

  @media screen and (max-width: 960px) {
    left: 8%;
  }

  @media screen and (max-width: 768px) {
    bottom: -1%;
    left: -28%;
  }
`;

const HeroInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media screen and (max-width: 960px) {
    order: 2;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: black;
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: black;
  line-height: 68px;
  display: flex;
  gap: 12px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: #147efb;
  cursor: pointer;
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  height: 50px;
  width: 160px;
  margin: 50px 0px;
  padding: 0 15px;
  border: 2px solid #000000;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  border-radius: 20px;
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

const HeroRightContainer = styled.div`
  order: 2;
  width: 100%;
  display: flex;
  justify-content: end;
  position: relative;
  gap: 12px;
  @media screen and (max-width: 960px) {
    order: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 768px) {
    order: 1;
    margin-bottom: 30px;
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  max-width: 400px;
  max-height: 400px;
  object-fit: cover;
  object-position: center;
  border: 2px solid ${({ theme }) => theme.primary};

  @media screen and (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media screen and (max-width: 768px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br />
              {Bio.name}
            </Title>
            <TextLoop>
              I am a{" "}
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <ResumeButton href={Bio.resume} target="_blank">
              Say Hello <NearMeRoundedIcon style={{ color: "black", marginLeft: '8px' }} />
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <HeroBG>
              <HeroBgAnimation />
            </HeroBG>
            <Image src={HeroImg} alt="Profile Image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
      <div id="abouts"></div>
    </>
  );
};

export default Hero;
