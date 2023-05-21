import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  z-index: 10;
`;

const Container = styled.div`
  width: 1400px;
  padding-top: 20vh;
  height: 80%;
  overflow-y: scroll;
  background-color: #171717;

  @media screen and (max-width: 1399px) {
    width: 90%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.p`
  padding-left: 4px;
  font-weight: 500;
  font-size: 12px;
`;

const CardImageLeft = styled.div`
  margin: 8px 4px;
  background-color: #506355;
  padding: 16px;
  display: grid;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px #506355;
  grid-template-areas:
    "cardimage cardbody cardbody cardbody"
    "cardimage cardbody cardbody cardbody"
    "cardimage techstack techstack techstack";

  @media screen and (max-width: 600px) {
    grid-template-areas:
      "cardimage cardimage cardimage cardimage"
      "cardbody cardbody cardbody cardbody"
      "techstack techstack techstack techstack";
  }
`;

const CardImageRight = styled.div`
  margin: 8px 4px;
  background-color: #506355;
  padding: 16px;
  display: grid;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px #506355;
  grid-template-areas:
    "cardbody cardbody cardbody cardimage"
    "cardbody cardbody cardbody cardimage"
    "techstack techstack techstack cardimage";

  @media screen and (max-width: 600px) {
    grid-template-areas:
      "cardimage cardimage cardimage cardimage"
      "cardbody cardbody cardbody cardbody"
      "techstack techstack techstack techstack";
  }
`;

const ImageBox = styled.div`
  grid-area: cardimage;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  object-fit: contain;
`;

const CardTitle = styled.a`
  font-weight: 400;
  font-size: 22px;
  color: #171717;
`;

const CardSubTitle = styled.p`
  font-size: 13px;
  color: #171717;
`;

const CardBody = styled.div`
  grid-area: cardbody;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
`;

const TechStack = styled.p`
  grid-area: techstack;
  border-top: 1px solid #171717;
  padding-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const TechItem = styled.span`
  color: #171717;
  font-weight: light;
  outline: 1px solid #171717;
  padding: 2px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <Title>Some of my projects</Title>

        <Link href="https://easybuy-client.netlify.app/" target="_blank">
          <CardImageLeft>
            <ImageBox>
              <CardImage src="/img/easybuy.svg" />
            </ImageBox>
            <CardBody>
              <CardTitle>Easybuy</CardTitle>
              <CardSubTitle>
                An ecommerce app integrated with stripe payment gateway.
              </CardSubTitle>
            </CardBody>
            <TechStack>
              <TechItem>React</TechItem>
              <TechItem>Redux</TechItem>
              <TechItem>MongoDB</TechItem>
              <TechItem>Express</TechItem>
              <TechItem>Stripe</TechItem>
              <TechItem>Chakra UI</TechItem>
            </TechStack>
          </CardImageLeft>
        </Link>

        <Link href="https://next-recipe-tau.vercel.app/" target="_blank">
          <CardImageRight>
            <ImageBox>
              <CardImage src="/img/recipe.png" />
            </ImageBox>
            <CardBody>
              <CardTitle>Recipe</CardTitle>
              <CardSubTitle>Create and categorize your recipes.</CardSubTitle>
            </CardBody>
            <TechStack>
              <TechItem>React</TechItem>
              <TechItem>NextJS 13</TechItem>
              <TechItem>MongoDB</TechItem>
            </TechStack>
          </CardImageRight>
        </Link>

        <Link
          href="https://enchanting-trifle-b8b1f1.netlify.app/"
          target="_blank"
        >
          <CardImageLeft>
            <ImageBox>
              <CardImage src="/img/taskify.svg" />
            </ImageBox>
            <CardBody>
              <CardTitle>Taskify</CardTitle>
              <CardSubTitle>
                A simple todo app with drag and drop features.
              </CardSubTitle>
            </CardBody>
            <TechStack>
              <TechItem>React</TechItem>
              <TechItem>React Beautiful DND</TechItem>
            </TechStack>
          </CardImageLeft>
        </Link>

        <Link target="_blank" href="https://infoaboutcrypto.netlify.app/">
          <CardImageRight>
            <ImageBox>
              <CardImage src="/img/xCrypto.svg" />
            </ImageBox>
            <CardBody>
              <CardTitle>XCrypto</CardTitle>
              <CardSubTitle>
                Crypto app that lists various crypto currencies and their
                exchange rates using coingecko api
              </CardSubTitle>
            </CardBody>
            <TechStack>
              <TechItem>React</TechItem>
              <TechItem>Chakra UI</TechItem>
              <TechItem>Coingecko API</TechItem>
            </TechStack>
          </CardImageRight>
        </Link>

        <Link href="https://recipe-app-client.netlify.app/" target="_blank">
          <CardImageLeft>
            <ImageBox>
              <CardImage src="/img/foodworld.svg" />
            </ImageBox>
            <CardBody>
              <CardTitle>Food World</CardTitle>
              <CardSubTitle>A recipe app</CardSubTitle>
            </CardBody>
            <TechStack>
              <TechItem>React</TechItem>
              <TechItem>Redux</TechItem>
              <TechItem>MongoDB</TechItem>
              <TechItem>Express</TechItem>
              <TechItem>Chakra UI</TechItem>
            </TechStack>
          </CardImageLeft>
        </Link>
      </Container>
    </Section>
  );
};

export default Projects;
