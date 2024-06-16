import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

import emailjs from "@emailjs/browser";



const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-top: 10px;
  z-index: 1;
  align-items: center;
   padding: 0px 0px 0px 0px;
  
  
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 30px;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: #000000;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 20px;
  }
`;
const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  border: 2px solid black;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  margin-top: 28px;
  gap: 12px;

  @media screen and (max-width: 768px) {
    padding: 16px;
  }
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: #000000;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  
  }
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1.5px solid black;
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 2px solid black;
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1.5px solid black;
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 2px solid #000000;
  }
`;
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  cursor: pointer;
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  font-size: 20px;
  margin-top: 16px;
  color: green;
  animation: ${pulseAnimation} 1s ease;
`;

const ErrorMessage = styled.div`
  text-align: center;
  font-size: 20px;
  margin-top: 16px;
  color: red;
  animation: ${pulseAnimation} 1s ease;
`;

const Contact = () => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        "template_2qskkjz",
        form.current,
        process.env.REACT_APP_USER
      )
      .then(
        (result) => {
          setShowSuccessMessage(true);
          form.current.reset();
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000); // Hide success message after 3 seconds
        },
        (error) => {
          setShowErrorMessage(true);
          setTimeout(() => {
            setShowErrorMessage(false);
          }, 3000); // Hide error message after 3 seconds
        }
      );
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage
            placeholder="Message"
            name="message"
            rows={4}
          />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        {showSuccessMessage && (
          <SuccessMessage>Message Sent Successfully!</SuccessMessage>
        )}
        {showErrorMessage && (
          <ErrorMessage>Failed to send message. Please try again later.</ErrorMessage>
        )}
      </Wrapper>
    </Container>
  );
};

export default Contact;