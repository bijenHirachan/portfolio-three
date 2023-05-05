import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  overflow-x: auto;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
  padding-left: 64px;
  padding-right: 64px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  scroll-snap-align: start;
  width: 400px;
  height: 300px;
  display: grid;
  background-color: #332e30;
  border-radius: 4px;
  @media screen and (max-width: 600px) {
    width: 390px;
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: #e8e8e8; */
  padding: 32px;
  border-radius: 4px 4px 0 0;
`;

const CardImage = styled.img``;

const CardTitle = styled.a`
  color: #506355;
  font-weight: 900;
  font-size: larger;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const CardSubTitle = styled.p`
  font-size: 12px;
  color: #e8e8e8;
`;

const CardBody = styled.div`
  font-size: 14px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// const CardButton = styled.button`
//   position: absolute;
//   bottom: 8px;
//   right: 8px;
//   border: none;
//   outline: none;
//   padding: 4px 8px;
//   background: #506355;
//   color: #e8e8e8;
//   font-weight: 400;
//   transition: all 0.5s;
//   cursor: pointer;
//   border-radius: 4px;

//   :hover {
//     transform: scale(1.1);
//   }
// `;

const TechStack = styled.p`
  width: 100%;
  height: 35px;
  font-size: 12px;
  font-weight: 500;
  color: #e8e8e8;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 8px;
`;

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <Tilt>
          <Card>
            <ImageBox>
              <CardImage src="./img/easybuy.svg" alt="" />
            </ImageBox>
            <CardBody>
              <CardTitle
                href="https://easybuy-client.netlify.app/"
                target="_blank"
              >
                Easybuy
              </CardTitle>
              <CardSubTitle>
                A ecommerce app where you can buy several items.
              </CardSubTitle>
            </CardBody>
            <TechStack>React, Nodejs, Express, React Redux, MongoDB</TechStack>
          </Card>
        </Tilt>

        <Tilt>
          <Card>
            <ImageBox>
              <CardImage src="./img/foodworld.svg" alt="" />
            </ImageBox>
            <CardBody>
              <CardTitle
                href="https://recipe-app-client.netlify.app/"
                target="_blank"
              >
                Food World
              </CardTitle>
              <CardSubTitle>
                Food world is a recipe app. Recipes can be created, updated and
                categorized.
              </CardSubTitle>
            </CardBody>
            <TechStack>React, Nodejs, Express, React Redux, MongoDB</TechStack>
          </Card>
        </Tilt>
        <Tilt>
          <Card>
            <ImageBox>
              <CardImage src="./img/taskify.svg" alt="" />
            </ImageBox>
            <CardBody>
              <CardTitle
                href="https://enchanting-trifle-b8b1f1.netlify.app/"
                target="_blank"
              >
                Taskify
              </CardTitle>
              <CardSubTitle>
                A simple todo app with drag and drop feature.
              </CardSubTitle>
            </CardBody>
            <TechStack>React</TechStack>
          </Card>
        </Tilt>
        <Tilt>
          <Card>
            <ImageBox>
              <CardImage src="./img/xCrypto.svg" alt="" />
            </ImageBox>
            <CardBody>
              <CardTitle
                href="https://enchanting-trifle-b8b1f1.netlify.app/"
                target="_blank"
              >
                Taskify
              </CardTitle>
              <CardSubTitle>
                Crypto app that lists various crypto currencies and their
                exchange rates using coingecko api
              </CardSubTitle>
            </CardBody>
            <TechStack>React</TechStack>
          </Card>
        </Tilt>
      </Container>
    </Section>
  );
};

export default Projects;
