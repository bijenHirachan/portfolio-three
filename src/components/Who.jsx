import React from "react";
import styled from "styled-components";
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
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    align-items: flex-end;
  }
`;

const Image = styled.img`
  height: 50%;
  width: 50%;
  @media screen and (max-width: 600px) {
    height: 25%;
    font-size: 32px;
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
  line-height: 0.8;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  align-items: center;
`;

const HStack = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Who = () => {
  return (
    <Section id="about">
      <Container>
        <Left>
          <Image alt="developer" src="/img/developer.svg" />
        </Left>
        <Right>
          {/* <Title>About Me</Title> */}

          <HStack style={{ gap: "5px" }}>
            <SubTitle>I love</SubTitle>
            <SubTitle>
              <Typewriter
                options={{
                  strings: [
                    "developing FULLSTACK apps",
                    "MERN Stack",
                    "Laravel",
                    "listening to music ♫",
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
