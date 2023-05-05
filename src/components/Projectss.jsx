import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

const Container = styled.div`
  width: 1400px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  overflow-x: scroll;
  scrollbar-width: none;
  /* scroll-snap-type: x mandatory; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  min-height: 300px;
  min-width: 300px;
  /* scroll-snap-align: center; */
`;

const Projects = () => {
  return (
    <Section>
      <Container>
        <Card>hksjafl</Card>
        <Card></Card>
      </Container>
    </Section>
  );
};

export default Projects;
