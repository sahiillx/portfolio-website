import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { FaBars } from "react-icons/fa";

const Nav = styled.div`
  background-color: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 1080px) {
    padding: 0px 30px;
  }
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    padding: 0px 6px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  //padding: 0 24px;

  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 0 6px;
  padding-left: 0px;
  font-weight: 500;
  font-size: 1.8rem;

  cursor: pointer;
  text-decoration: none;

  color: white;

  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
`;

const ColorText = styled.div`
  color: #147efb;
  font-size: 32px;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    padding-top: 4px;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;
const NavItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: black;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #147efb;
    //transition: all 0.2s ease-in-out;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 80%;
  height: 100%;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.button`
  background-color: transparent;
  color: #000000;
  border: 2px solid #000000;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  padding: 0 20px;

  &:hover {
    background-color: #2e74ca;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
    color: white;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0px;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.3s ease-in-out;

  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1" : "-1")};
`;

const MobileMenuIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <div style={{display: "flex", color: "black"}}>
            <ColorText>&lt;</ColorText>Sahil
            <div style={{ color: "#147efb" }}>/</div>Khan
            <ColorText>&gt;</ColorText>
          </div>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="skills">Skills</NavLink>
          <NavLink href="experience">Experience</NavLink>
          <NavLink href="projects">Projects</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton>Github</GithubButton>
        </ButtonContainer>
      </NavContainer>
      {isOpen && (
        <MobileMenu isOpen={isOpen}>
          <MobileMenuIcon
            href="#about"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            About
          </MobileMenuIcon>

          <MobileMenuIcon
            href="#skills"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Skills
          </MobileMenuIcon>

          <MobileMenuIcon
            href="#experience"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Experience
          </MobileMenuIcon>

          <MobileMenuIcon
            href="#projects"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Projects
          </MobileMenuIcon>

          <GithubButton
            style={{
              padding: "10px 16px",
              background: `${theme.primary}`,
              color: "white",
              width: "max-content",
            }}
            href="/"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Github
          </GithubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
