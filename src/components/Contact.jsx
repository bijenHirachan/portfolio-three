import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  padding: 16px;
  background-color: #e8e8e8;
  border: none;
  border-radius: 8px;
  outline: none;

  &:focus {
    outline: 2px solid #506355;
  }
`;

const TextArea = styled.textarea`
  padding: 16px;
  background-color: #e8e8e8;
  border: none;
  border-radius: 8px;
  outline: none;

  &:focus {
    outline: 2px solid #506355;
  }
`;

const Button = styled.button`
  margin-top: 8px;
  background-image: linear-gradient(to right, #214eef, #fc5252);
  border: none;
  color: white;
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: all 0.5s;

  :hover {
    background-image: linear-gradient(to right, #fc5252, #214eef);
    transform: translateY(4px);
  }
`;

const SuccessMessage = styled.p`
  color: #e8e8e8;
`;

const Right = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Contact = () => {
  const form = useRef();

  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0qrpbve",
        "template_hpe3ysc",
        form.current,
        "u_WDYpTKzC92lmr17"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form ref={form} onSubmit={handleSubmit}>
            <Title>Contact</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              rows={5}
              placeholder="Write your message"
              name="message"
            />
            <Button type="submit">SEND</Button>
            {success && (
              <SuccessMessage>Your message has been sent.</SuccessMessage>
            )}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
