import React, { useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { FaBars } from "react-icons/fa";
import GitHubIcon from "@mui/icons-material/GitHub";

const Nav = styled.div`
  background-color: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  width: 100%;
  top: ${({ isHidden }) => (isHidden ? "-80px" : "0")};
  z-index: 10;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  transition: top 0.3s;

  @media screen and (max-width: 1080px) {
    padding: 0px 60px;
  }
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    padding: 0px 10px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
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

  @media screen and (max-width: 768px) {
    padding: 0px;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1080px) {
    font-size: 1.6rem;
  }
`;

const ColorText = styled.div`
  color: #147efb;
  font-size: 32px;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: black;
    height: 20px;
    width: 20px;
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
  }
  @media screen and (max-width: 1080px) {
    font-size: 0.9rem;
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
  border-radius: 20px;
  gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  height: 74%;
  padding: 0 15px;

  a {
    text-decoration: none;
    color: black;
  }

  svg {
    stroke: #000000; /* Default stroke color */
    transition: stroke 0.3s ease; /* Smooth transition for stroke color change */
    width: 25px;
    height: 25px;
    margin-left: 8px; /* Adjust as needed */
  }

  &:hover {
    background-color: #2e74ca;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
    color: white;

    a {
      color: white;
    }
    svg{
      stroke: white;
    }
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
  background: #ffffff;
  transition: all 0.3s ease-in-out;

  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
`;

const MobileMenuIcon = styled.a`
  color: #000000;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #147efb;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav isHidden={isHidden}>
      <NavContainer>
        <NavLogo to="/">
          <div
            style={{ display: "flex", color: "black", alignItems: "center" }}
          >
            <ColorText>&lt;</ColorText>Sahil
            <div style={{ color: "#147efb" }}>/</div>Khan
            <ColorText>&gt;</ColorText>
          </div>
        </NavLogo>
        <MobileIcon>
          <FaBars
            style={{ color: "black" }}
            onClick={() => setIsOpen(!isOpen)}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#abouts">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#qualifications">Experience</NavLink>
          <NavLink href="#project">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton>
            <a href="https://github.com/sahiillx" target="_blank">
              Github
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-brand-github"
            >
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
          </GithubButton>
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
            href="#qualifications"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Experience
          </MobileMenuIcon>
          <MobileMenuIcon
            href="#project"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Projects
          </MobileMenuIcon>
          <GithubButton
            style={{
              padding: "10px 16px",
              background: `white`,
              color: "black",
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
