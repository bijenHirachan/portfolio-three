import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
`;

const Intro = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #506355;
  position: relative;

  @media screen and (max-width: 600px) {
    font-size: 32px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #506355;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
    animation: moveText 5s infinite;
  }
  @keyframes moveText {
    to {
      width: 100%;
    }
  }
`;

const SubTitle = styled.h3`
  font-size: 32px;
  margin-bottom: 8px;
  color: #e8e8e8;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const Button = styled.a`
  background-image: linear-gradient(to right, #214eef, #fc5252);
  text-decoration: none;
  border: none;
  color: #e8e8e8;
  width: 300px;
  padding: 8px 0px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 64px;
  transition: all 0.5s;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    width: 256px;
    font-size: 14px;
  }

  :hover {
    transform: scale(1.05);
  }
`;

const Hero = () => {
  return (
    <Section id="home">
      <Container>
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
              color={"#333333"}
              attach={"material"}
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Canvas>
        <Intro>
          <SubTitle>Hey there ! I'm Bijen Hirachan</SubTitle>
          <Title text={"A Fullstack Developer"}>A Fullstack Developer</Title>
          <Button href="#about">
            <span>Learn More About Me </span>
            <AiOutlineArrowDown fontSize={22} />
          </Button>
        </Intro>
      </Container>
    </Section>
  );
};

export default Hero;
