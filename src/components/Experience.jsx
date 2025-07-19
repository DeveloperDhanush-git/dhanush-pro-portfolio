import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaMedal, FaTrophy, FaCertificate } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "Full Stack Web Developer Intern",
    company: "Coding Raja Technologies",
    location: "Coimbatore, India",
    duration: "Aug 2024 - Sep 2024",
    description: "Worked on e-commerce and blog website development.",
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Octanet Services Pvt Ltd",
    location: "Coimbatore, India",
    duration: "July 2024 - Aug 2024",
    description: "Developed frontend UI components using HTML, CSS, and JavaScript.",
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "Hunarintern",
    location: "Coimbatore, India",
    duration: "June 2024 - July 2024",
    description: "Worked on a dynamic portfolio project for real-world clients.",
  },
  {
    id: 4,
    role: "IT & Web Development Intern",
    company: "BasketHunt Pvt. Ltd.",
    location: "Remote",
    duration: "Oct 2024 - Present",
    description: "Focused on cloud deployment & database optimization.",
  },
];

const achievements = [
  { title: "5+ Hackathons", icon: <FaTrophy /> },
  { title: "10+ International Conferences", icon: <FaMedal /> },
  { title: "MERN Stack Certified", icon: <FaCertificate /> },
  { title: "Highest CGPA Award", icon: <FaMedal /> },
];

const Experience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const sectionTop = document.getElementById("experience")?.offsetTop || 0;
      const scrollY = window.scrollY;
      const progress = Math.min(((scrollY - sectionTop + windowHeight / 2) / windowHeight) * 100, 100);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section id="experience">
      <Title>Experience & Achievements</Title>

      {/* Experience Timeline */}
      <TimelineContainer>
        <ProgressLine style={{ height: `${scrollProgress}%` }} />
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} style={{ animationDelay: `${index * 0.3}s` }}>
            <StageCircle completed={scrollProgress > index * 25} />
            <Content>
              <Role>{exp.role}</Role>
              <Company>{exp.company}</Company>
              <Location>{exp.location}</Location>
              <Duration>{exp.duration}</Duration>
              <Description>{exp.description}</Description>
            </Content>
          </ExperienceCard>
        ))}
      </TimelineContainer>

      {/* Achievements Section */}
      <AchievementContainer>
        {achievements.map((achieve, index) => (
          <AchievementCard key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <Icon>{achieve.icon}</Icon>
            <AchievementText>{achieve.title}</AchievementText>
          </AchievementCard>
        ))}
      </AchievementContainer>
    </Section>
  );
};

/* Keyframes */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glow = keyframes`
  0% { box-shadow: 0px 0px 10px rgba(255, 204, 0, 0.3); }
  100% { box-shadow: 0px 0px 20px rgba(255, 204, 0, 0.8); }
`;

/* Styled Components */
const Section = styled.section`
  width: 100%;
  background: transparent;
  color: white;
  text-align: center;
  position: absolute;
  top: 370vh;
  
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 40px;
  
`;

const TimelineContainer = styled.div`
  position: relative;
  left: 70px;
  width: 1200px;
  margin: auto;
`;

const ProgressLine = styled.div`
  position: absolute;
  left: -2%;
  width: 6px;
  background: linear-gradient(to bottom, #ffc400, #ff8c00);
  transition: height 0.36s ease;
  transform: translateX(-50%);
  height: 0;
`;

const ExperienceCard = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  margin: 50px 96px;
  border-radius: 10px;
  width: 90%;
  text-align: left;
  animation: ${fadeIn} 1s ease-in-out;
  
`;

const StageCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ completed }) => (completed ? "#ffcc00" : "#666")};
  position: absolute;
  left: -130px;
  top: 20px;
  
`;

const Content = styled.div`
  margin-left: 40px;
  width: 80%;
  
`;

const Role = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: #ffcc00;
`;

const Location = styled.p`
  font-size: 1rem;
  color: #aaa;
`;

const Duration = styled.p`
  font-size: 1rem;
  font-style: italic;
  color: #bbb;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-top: 10px;
`;

const AchievementContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
`;

const AchievementCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 1s ease-in-out;

  &:hover {
    transform: scale(1.1);
    animation: ${glow} 0.8s infinite alternate;
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  color: #ffcc00;
`;

const AchievementText = styled.p`
  font-size: 1.2rem;
`;

export default Experience;
