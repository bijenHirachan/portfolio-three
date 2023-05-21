import React from "react";
import styled from "styled-components";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Section = styled.div`
  display: flex;
  justify-content: center;
  z-index: 50;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 64px 0;
  position: fixed;
  z-index: 50;
  /* background-color: #171717; */

  /* @media screen and (max-width: 600px) {
    width: 90%;
  } */
  @media screen and (max-width: 1399px) {
    width: 90%;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 32px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const ListItem = styled.li`
  a {
    color: #e8e8e8;
    text-decoration: none;
  }

  :hover {
    a {
      color: #506355;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconItem = styled.a`
  svg {
    color: #e8e8e8;
    :hover {
      color: #506355;
    }
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <a href="#home">
            <Logo src="./img/logobijen.svg" alt="logo" />
          </a>
        </Links>
        <List>
          <ListItem>
            <a href="#home">Home</a>
          </ListItem>
          <ListItem>
            <a href="#about">About Me</a>
          </ListItem>
          <ListItem>
            <a href="#projects">Projects</a>
          </ListItem>
          <ListItem>
            <a href="#contact">Contact</a>
          </ListItem>
        </List>
        <Icons>
          <IconItem
            href="https://www.linkedin.com/in/bijen-hirachan/"
            target="_blank"
          >
            <AiOutlineLinkedin fontSize={"32px"} />
          </IconItem>
          <IconItem href="https://github.com/bijenHirachan" target="_blank">
            <AiOutlineGithub fontSize={"32px"} />
          </IconItem>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
