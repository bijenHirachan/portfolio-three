import React from "react";
import styled from "styled-components";

const data = ["Fullstack", "Web Development", "MERN", "Laravel"];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 128px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SubTitle = styled.h3`
  font-size: 32px;
  margin-bottom: 8px;
  color: #e8e8e8;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: 1000px) {
    /* display: none; */
  }
`;

const ListItem = styled.li`
  font-size: 64px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #506355;
  position: relative;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #506355;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 64px;
`;

const IconGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Img = styled.img`
  width: 100px;
`;

const Works = () => {
  return (
    <Section>
      <Container>
        <Top>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item}>
                {item}
              </ListItem>
            ))}
          </List>
        </Top>
        <Bottom>
          <IconGroup>
            <Img src="./img/html.png" alt="" />
            <Img src="./img/css.png" alt="" />
            <Img src="./img/javascript.png" alt="" />
            <Img src="./img/reactjs.png" alt="" />
            <Img src="./img/redux.png" alt="" />
          </IconGroup>
          <IconGroup>
            <Img src="./img/logomark.min.svg" alt="" />
            <Img src="./img/php.png" alt="" />
            <Img src="./img/nodejs.png" alt="" />
            <Img src="./img/tailwind.png" alt="" />
            <Img src="./img/git.png" alt="" />
          </IconGroup>
        </Bottom>
      </Container>
    </Section>
  );
};

export default Works;
