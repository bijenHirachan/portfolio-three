import styled from "styled-components";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background-color: #171717;
  /* background: url("./img/bg.jpg");
  background-size: cover; */
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Who />
      <Projects />
      {/* <Works /> */}
      <Contact />
    </Container>
  );
}

export default App;
