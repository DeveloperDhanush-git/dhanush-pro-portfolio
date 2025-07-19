import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      {/* Full-Screen Hero Section */}
      <HeroSection>
        <Title>Let's Talk</Title>
        <Email href="mailto:dhanushlingam6363@example.com">
          dhanushlingam6363@example.com
        </Email>
      </HeroSection>

      {/* Contact Form Section */}
      <ContactForm>
        <LeftTitle>Get In Touch</LeftTitle>
        <FormContainer>
          <Form>
            <SlantingEffect />
            <FormTitle>Feel free to message</FormTitle>
            <FormGroup>
              <Input type="text" required />
              <Label>Name</Label>
            </FormGroup>

            <FormGroup>
              <Input type="email" required />
              <Label>Email</Label>
            </FormGroup>

            <FormGroup>
              <Textarea required />
              <Label>Message</Label>
            </FormGroup>

            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </FormContainer>
      </ContactForm>
    </Wrapper>
  );
};

export default Contact;

/* Styled Components */
const Wrapper = styled.div`
  background: transparent;
  color: white;
  font-family: "Poppins", sans-serif;
  height: 200vh;
  width: 100%;
  position: absolute;
  top: 750vh;
`;

const HeroSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 9rem;
  font-weight: bold;
  animation: fadeIn 1.5s ease-in-out;
`;

const Email = styled.a`
  font-size: 5rem;
  font-style: italic;
  text-decoration: underline;
  color: gold;
  transition: color 0.3s ease;
  margin: 10px;

  &:hover {
    color: #ffffff;
  }
`;

const ContactForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  width: 80%;
  margin: auto;
  height: 100vh;
`;

const LeftTitle = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-align: left;
  width: 40%;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 60%;
  position: relative;
`;

const Form = styled.form`
  background: rgba(255, 255, 255, 0.1);
  padding: 50px;
  width: 550px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const SlantingEffect = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.2);
  top: -50px;
  right: -50px;
  transform: rotate(45deg);
  transition: all 0.5s ease-in-out;

  ${Form}:hover & {
    right: -20px;
    top: -20px;
    width: 170px;
    height: 170px;
  }
`;

const FormTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;

const FormGroup = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 1rem;
  color: silver;
  transition: all 0.3s ease;
  pointer-events: none;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  background: transparent;
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  font-size: 1rem;
  color: white;

  &:focus ~ label,
  &:valid ~ label {
    top: 0;
    font-size: 0.9rem;
    color: gold;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 15px 10px;
  background: transparent;
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  font-size: 1rem;
  color: gold;
  min-height: 100px;
  resize: none;

  &:focus ~ label,
  &:valid ~ label {
    top: 0;
    font-size: 0.9rem;
    color: gold;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  border: 2px solid white;
  background: transparent;
  color: gold;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;

  &:hover {
    background: gold;
    color: #0a0a0a;
  }
`;
