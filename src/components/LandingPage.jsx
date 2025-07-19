import { useEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const LandingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1000;
  overflow: hidden;
  transform-origin: center center;
  transform-style: preserve-3d;
  perspective: 1000px;
  filter: brightness(0.8);
  transition: transform 0.5s ease-out, filter 0.5s ease-out;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: silver;
  text-shadow: 0px 0px 20px rgba(192, 192, 192, 0.9);
  text-align: center;
  opacity: 0;
  z-index: 2;
`;

const ScrollText = styled.p`
  font-weight: bold;
  color: silver;
  text-shadow: 0px 0px 20px rgba(192, 192, 192, 0.9);
  text-align: center;
  margin-top: 20px;
  opacity: 0;
  animation: bounce 1.5s infinite alternate ease-in-out;
  z-index: 2;

  @keyframes bounce {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(10px);
    }
  }
`;

const LandingPage = () => {
  const landingRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // THREE.js Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Space Particles
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

    // Fire-like Moving Stars
    const fireStars = [];
    const fireCount = 50;
    const fireMaterial = new THREE.PointsMaterial({
      color: 0xffd700,
      size: 5,
      transparent: true,
      opacity: 0.8,
    });

    for (let i = 0; i < fireCount; i++) {
      const fireParticle = new THREE.BufferGeometry();
      const firePositions = new Float32Array(3);
      firePositions[0] = (Math.random() - 0.5) * window.innerWidth;
      firePositions[1] = (Math.random() - 0.5) * window.innerHeight;
      firePositions[2] = Math.random() * -500;
      fireParticle.setAttribute(
        "position",
        new THREE.BufferAttribute(firePositions, 3)
      );

      const fireStar = new THREE.Points(fireParticle, fireMaterial);
      scene.add(fireStar);
      fireStars.push(fireStar);
    }

    camera.position.z = 500;

    // Animate Scene
    const animate = () => {
      requestAnimationFrame(animate);

      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;

      fireStars.forEach((fireStar) => {
        let firePos = fireStar.geometry.attributes.position.array;
        firePos[1] -= 2;
        if (firePos[1] < -window.innerHeight / 2) {
          firePos[1] = window.innerHeight / 2;
        }
        fireStar.geometry.attributes.position.needsUpdate = true;
      });

      renderer.render(scene, camera);
    };
    animate();

    // ✨ GSAP Animations ✨
    gsap.to(landingRef.current, { opacity: 1, duration: 1 });
    gsap.to(".scroll-text", { opacity: 1, delay: 1.5 });

    gsap.fromTo(
      ".title",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );

    gsap.from(".letter", {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      duration: 1.5,
      delay: 0.5,
    });

    // Smooth Scroll Effect
    const handleScroll = () => {
      let scrollY = window.scrollY;
      let progress = Math.min(scrollY / (window.innerHeight * 0.8), 1);

      gsap.to(landingRef.current, {
        scale: 1 + progress * 2, // Zoom in
        y: -progress * 100, // Move up slightly
        filter: `brightness(${0.8 + progress * 2})`, // Brighten
        opacity: 1 - progress, // Fade out slightly
        duration: 0.5, // Smooth effect
        ease: "power3.out",
      });

      if (progress === 1) {
        landingRef.current.style.pointerEvents = "none";
      } else {
        landingRef.current.style.pointerEvents = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <LandingContainer ref={landingRef}>
      {/* Video Background */}
      <VideoBackground src="/herobg.mp4" playsInline autoPlay muted loop />

      {/* THREE.js Canvas */}
      <div ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}></div>

      {/* Animated Text */}
      <Title className="title">
        <Typewriter
          options={{
            strings: [
              "Welcome to My Portfolio...",
              "Explore My Work...",
              "Scroll to Begin...",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </Title>

      {/* Scroll Instruction */}
      <ScrollText className="scroll-text">Scroll to Start ↓</ScrollText>
    </LandingContainer>
  );
};

export default LandingPage;
