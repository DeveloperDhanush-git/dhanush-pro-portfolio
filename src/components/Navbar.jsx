import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(192, 192, 192, 0.7) 0%, #000000 80%);
  backdrop-filter: blur(15px);
  border-radius: 50px;
  width: 80%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  z-index: 999;
  box-shadow: 0px 0px 20px rgba(192, 192, 192, 0.6);
  opacity: ${({ visible }) => (visible ? "1" : "0")};
`;

const NavLink = styled.a`
  color: silver;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  text-shadow: 0px 0px 10px rgba(192, 192, 192, 0.8);

  &:hover {
    background: rgba(255, 255, 255, 0.15); /* Light white background */
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5); /* Glow effect */
    transform: scale(1.1);
    color: #fff;
    text-shadow: 0px 0px 25px rgba(255, 255, 255, 1);
  }
`;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarContainer visible={visible}>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </NavbarContainer>
  );
};

export default Navbar;
