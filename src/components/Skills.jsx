import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaHtml5, FaCss3, FaJs, FaGithub } from "react-icons/fa";

const skills = [
  { name: "React.js", icon: <FaReact />, level: "Intermediate" },
  { name: "Node.js", icon: <FaNodeJs />, level: "Intermediate" },
  { name: "MongoDB", icon: <FaDatabase />, level: "Intermediate" },
  { name: "MySQL", icon: <FaDatabase />, level: "Intermediate" },
  { name: "Python", icon: <FaPython />, level: "Beginner" },
  { name: "HTML5", icon: <FaHtml5 />, level: "Expert" },
  { name: "CSS3", icon: <FaCss3 />, level: "Expert" },
  { name: "JavaScript", icon: <FaJs />, level: "Expert" },
  { name: "GitHub", icon: <FaGithub />, level: "Intermediate" },
];

const Skills = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame;

    const scroll = () => {
      if (!isHovered) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; // Reset without visible jump
        } else {
          scrollContainer.scrollLeft += 1; // Smooth auto-scroll
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]); // Run effect again when `isHovered` changes

  return (
    <Section>
      <Title>Skills & Tech Stack</Title>
      <ScrollWrapper>
        <ScrollContainer ref={scrollRef}>
          <ScrollableContent>
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <SkillCard
                key={index}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Icon>{skill.icon}</Icon>
                <SkillName>{skill.name}</SkillName>
                <SkillLevel>{skill.level}</SkillLevel>
              </SkillCard>
            ))}
          </ScrollableContent>
        </ScrollContainer>
      </ScrollWrapper>
    </Section>
  );
};

/* Styled Components */
const Section = styled.section`
  width: 100%;
  text-align: center;
  padding: 20px 20px;
  background: transparent;
  color: silver;
  height: 50%;
  position: absolute;
  top: 300vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 40px;
  animation: fadeIn 1.5s ease-in-out;
`;

const ScrollWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  white-space: nowrap;
  width: 100%;
  padding: 20px 0;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollableContent = styled.div`
  display: flex;
  gap: 35px;
  flex-wrap: nowrap;
`;

const SkillCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  width: 180px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  position: relative;
  overflow: hidden;
  display: inline-block;

  &:hover {
    transform: rotateX(15deg) rotateY(-15deg);
    box-shadow: 0px 15px 40px rgba(235, 235, 235, 0.6);
  }
`;

const Icon = styled.div`
  font-size: 4rem;
  color: white;
  margin-bottom: 15px;
  animation: glow 1.5s infinite alternate;
`;

const SkillName = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
`;

const SkillLevel = styled.p`
  font-size: 1rem;
  color: gray;
`;

export default Skills;
