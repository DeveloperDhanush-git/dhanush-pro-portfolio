import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import * as THREE from "three";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import Navbar from "./Navbar";
import CodeTyping from "./CodeTyping";

// Styled Components
const HomepageContainer = styled.div`
  position: absolute;
  top: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: bold;
  color: white;
  text-shadow: 0px 0px 20px rgba(192, 192, 192, 0.9);
  text-align: center;
  animation: floating 3s infinite ease-in-out;
  
  @keyframes floating {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.8rem;
  font-weight: 600;
  color: silver;
  text-align: center;
  margin-top: 10px;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 20px;
`;

const Button = styled(motion.a)`
  padding: 15px 35px;
  font-size: 1.2rem;
  font-weight: bold;
  color: silver;
  border: 2px solid silver;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: inline-block;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px silver, 0 0 20px silver;
    transform: scale(1.1);
  }
`;

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;



const Homepage = () => {
  const canvasRef = useRef(null);
  const orbRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.to(".title", { opacity: 1, y: 0, duration: 1.5, delay: 0.5 });
    gsap.to(".subtitle", { opacity: 1, y: 0, duration: 1.5, delay: 1 });
    gsap.to(".button", { opacity: 1, y: 0, duration: 1.5, delay: 1.5 });

    // THREE.js Space Background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    const particles = new THREE.BufferGeometry();
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2000;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0xc0c0c0, size: 1.5 });
    const stars = new THREE.Points(particles, material);
    scene.add(stars);

    // 3D Parallax Effect
    window.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 5;
      const y = (e.clientY / window.innerHeight - 0.5) * 5;
      gsap.to(stars.rotation, { x: y * 0.1, y: x * 0.1, duration: 0.5 });
    });

    // Animate Scene
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <HomepageContainer>
      <Navbar />
      <CanvasContainer ref={canvasRef} />


      {/* Animated Title */}
      <Title className="title">
        <Typewriter
          options={{
            strings: ["Hello I am Dhanush..!", "A Smart Worker...", "A Great Designer...", "Let's Build Something Amazing..."],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
      </Title>

      {/* Subtitle */}
      <Subtitle className="subtitle">
        Full-Stack Developer | Creative Coder | UI/UX Enthusiast
      </Subtitle>

      {/* Buttons */}
      <ButtonContainer>
        <Button className="button" href="#projects">
          View Projects 🚀
        </Button>
        <Button className="button" href="#contact">
          Contact Me 📩
        </Button>
      </ButtonContainer>
      <CodeTyping />
    </HomepageContainer>
  );
};

export default Homepage;
