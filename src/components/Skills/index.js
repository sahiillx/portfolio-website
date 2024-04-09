import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 30px 130px 30px;
  background-color: #f9f9f9;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
  max-width: 1200px;
  position: relative;
`;

const Title = styled.h1`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 960px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 1200px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media screen and (max-width: 960px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;

  justify-content: center;
  gap: 30px;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  height: 350px;

  background-color: ${({ theme }) => theme.card};
  border: 0.5px solid #854ce6;
  border-radius: 16px;
  padding: 18px 36px;

  @media (max-width: 960px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 12px;
  text-align: center;
`;
const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  padding: 12px 16px;
  font-weight: 400;

  @media (max-width: 960px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    padding: 6px 8px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of the technologies I've been working with recently:
        </Desc>
        <SkillsContainer>
          {skills.map((item) => (
            <Skill>
              <SkillTitle>{item.title}</SkillTitle>
              <SkillList>
                {item.skills.map((skill) => (
                  <SkillItem>
                    <SkillImage src={skill.image} />
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
