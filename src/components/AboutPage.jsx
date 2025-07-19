import { useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";

const AboutContainer = styled.div`
  position: absolute;
  top: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  background: transparent;
  overflow: hidden;
  padding: 80px 20px;
  text-align: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 90%;
  z-index: 2;
  margin-bottom: 100px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TextBox = styled.div`
  flex: 1;
  padding: 20px;
  color: silver;
  text-shadow: 0px 0px 10px rgba(192, 192, 192, 0.8);
  opacity: 0;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  opacity: 0;
`;

const ProfileImage = styled.img`
  width: 450px;
  height: 450px;
  border-radius: 50%;
  border: 4px solid silver;
  box-shadow: 0px 0px 20px rgba(192, 192, 192, 0.8);
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;


const AboutPage = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, { opacity: 1, x: 0, duration: 1.5, ease: "power3.out" });
    gsap.to(imgRef.current, { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", delay: 0.3 });
    gsap.to(skillsRef.current, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 });
    gsap.to(projectsRef.current, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.7 });
  }, []);

  return (
    <AboutContainer>
      {/* About Me Section */}
      <Section>
        <TextBox ref={textRef}>
          <Title>About Me</Title>
          <Description>
            Hello! I'm a passionate Full Stack Developer with experience in React.js, Node.js, MongoDB, and MySQL.
            I love building user-friendly applications with high performance. My expertise lies in problem-solving, 
            leadership, and multitasking, ensuring that every project I work on is executed efficiently.
          </Description>
        </TextBox>
        <ImageContainer ref={imgRef}>
          <ProfileImage src="/dhanushbg.png" alt="Your Name" />
        </ImageContainer>
      </Section>

   

    
    </AboutContainer>
  );
};

export default AboutPage;
