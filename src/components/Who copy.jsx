import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { MdOutlineChildCare, MdTravelExplore } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { FiMusic } from "react-icons/fi";
import Cube from "./Cube";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Typewriter from "typewriter-effect";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  /* position: relative; */
  @media screen and (max-width: 600px) {
    margin-top: 128px;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  color: #506355;
  @media screen and (max-width: 600px) {
    font-size: 32px;
  }
`;

const SubTitle = styled.h3`
  font-size: 32px;
  color: #e8e8e8;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 600px) {
    align-items: center;
    justify-content: flex-start;
  }
`;

const HStack = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 600px) {
    & > svg {
      font-size: 16px;
    }
  }
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ fov: 24, position: [5, 5, 5] }}>
            <OrbitControls autoRotate enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>About Me</Title>

          <HStack>
            <AiOutlineHome fontSize={32} color="#e8e8e8" />
            <SubTitle>Leuven, Belgium</SubTitle>
          </HStack>

          <HStack style={{ gap: "8px" }}>
            <SubTitle>I love</SubTitle>
            <SubTitle>
              <Typewriter
                options={{
                  strings: [
                    "developing FULLSTACK apps",
                    "MERN Stack",
                    "Laravel",
                    "listening music ♫",
                    "travelling",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </SubTitle>
          </HStack>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
