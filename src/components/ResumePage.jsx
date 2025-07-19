import React from "react";
import styled, { keyframes } from "styled-components";
import { FaDownload } from "react-icons/fa";
import { Tilt } from "react-tilt";

const resumePDF = "/DHANUSHD - Resume.pdf";

const ResumePage = () => {
  return (
    <Section id="resume">
      <Title>📜 My Resume</Title>

   
        <ResumeContainer>
          <ResumeWrapper>
            <ResumeIframe src={resumePDF} title="Resume Preview" />
          </ResumeWrapper>
        </ResumeContainer>
     
      {/* Download Button */}
      <DownloadButton href={resumePDF} download="DHANUSHD-Resume.pdf">
        <FaDownload /> Download CV
      </DownloadButton>
    </Section>
  );
};

/* Animations */
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

const glow = keyframes`
  0% { box-shadow: 0px 0px 10px rgba(255, 204, 0, 0.3); }
  100% { box-shadow: 0px 0px 20px rgba(255, 204, 0, 0.8); }
`;

/* Styled Components */
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 20%;
  background: transparent;
  color: white;
  position: absolute;
  top: 650vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
`;

const ResumeContainer = styled.div`

  width: 910px;
  height: 600px;
  cursor: pointer;
`;

const ResumeWrapper = styled.div`
  width: 100%;
  height: 100%;
  
  position: relative;

  /* Hover effect */
  &:hover {

 box-shadow: 0px 15px 40px rgba(255, 206, 70, 0.6);
  }
`;

const ResumeIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: none;
`;

const DownloadButton = styled.a`
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(to right, #ffcc00, #ff8c00);
  color: black;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${bounce} 1s infinite alternate;

  &:hover {
    transform: scale(1.1);
    animation: ${glow} 0.8s infinite alternate;
  }

  svg {
    font-size: 1.5rem;
  }
`;

export default ResumePage;
