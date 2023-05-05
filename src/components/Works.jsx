import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sphere from "./Sphere";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 1400px;
`;

const Card = styled.div``;

const Works = () => {
  return <Section></Section>;
};

export default Works;
