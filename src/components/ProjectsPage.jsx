import { useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: transparent;
  overflow: hidden;
  position: absolute;
  top: 540vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 90%;
  height: 80%;
  z-index: 2;
  position: relative;
`;

const TitleBox = styled.div`
  flex: 1;
  color: silver;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 0px 0px 10px rgba(192, 192, 192, 0.8);
  padding-left: 20px;
  opacity: 0;
`;

const ProjectsList = styled.div`
  flex: 2;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none; /* Hide scrollbar for Firefox */
  -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 40px;
  opacity: 0;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none; 
  }
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  border: 1px solid silver;
  box-shadow: 0px 10px 30px rgba(192, 192, 192, 0.5);
  color: white;
  width: 300px;
  height: 300px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  
  &:hover {
    transform: rotateY(10deg) scale(1.05);
    box-shadow: 0px 20px 40px rgba(192, 192, 192, 0.8);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const ProjectInfo = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const ArrowButton = styled.a`
  background: silver;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, transform 0.3s;
  
  &:hover {
    background: white;
    transform: scale(1.1);
  }
`;

const ParallaxBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("https://source.unsplash.com/random/1600x900/?technology") no-repeat center;
  background-size: cover;
  opacity: 0.2;
  transform: scale(1.2);
`;

const projects = [
  {
    title: "Portfolio Website",
    image: "https://source.unsplash.com/300x200/?portfolio",
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E-commerce Website",
    image: "https://source.unsplash.com/300x200/?ecommerce",
    link: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Railway Navigation App",
    image: "https://source.unsplash.com/300x200/?navigation",
    link: "https://github.com/yourusername/railway-app",
  },
  {
    title: "Data Visualization",
    image: "https://source.unsplash.com/300x200/?data",
    link: "https://github.com/yourusername/data-viz",
  },
  {
    title: "VR College Tour",
    image: "https://source.unsplash.com/300x200/?vr",
    link: "https://github.com/yourusername/vr-college-tour",
  },
  {
    title: "AI Chatbot",
    image: "https://source.unsplash.com/300x200/?ai",
    link: "https://github.com/yourusername/ai-chatbot",
  },
];

const ProjectsPage = () => {
  const titleRef = useRef(null);
  const listRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(titleRef.current, {
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: "power4.out",
    });

    gsap.to(listRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    });

    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      gsap.to(bgRef.current, {
        y: scrollPos * 0.2,
        scale: 1 + scrollPos * 0.0005,
      });
    });
  }, []);

  return (
    <ProjectsContainer>
      <ParallaxBackground ref={bgRef} />
      <ContentWrapper>
        <TitleBox ref={titleRef}>Projects</TitleBox>
        <ProjectsList ref={listRef}>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ArrowButton href={project.link} target="_blank" rel="noopener noreferrer">
                  <FaArrowRight color="black" />
                </ArrowButton>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsList>
      </ContentWrapper>
    </ProjectsContainer>
  );
};

export default ProjectsPage;
