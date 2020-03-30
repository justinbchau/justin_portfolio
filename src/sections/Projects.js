import React from "react"
import styled from "styled-components"
import { Container, Header } from "../styles/ui"
import NBAProject from "../components/nbaProject"
import JcProject from "../components/jcProject"
import Erase2020 from "../components/eraseProject"
import Weather from "../components/weatherProject"

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem;
  justify-content: center;
  align-items: center;

  a: {
    text-decoration: none;
  }
`

const Wrapper = styled.div`
  box-shadow: 2px 5px 5px black;
  transition: all 0.2s ease-out;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 70%;
  margin: auto;

  &:hover {
    transform: translateY(-5px);
  }
`

const Project = styled.div`
  justify-content: center;
  align-items: center;
`

const Head = styled.h1`
  font-weight: 500;
  margin-top: 3rem;
`

const Description = styled.h4`
  margin-top: 3rem;
  font-weight: 220;
  font-size: 1.3rem;
  line-height: 1.6;
  text-align: center;
`
const Subhead = styled.h5`
  font-size: 1rem;
`

const Projects = () => {
  return (
    <Container id="my-projects">
      <Header>Projects</Header>
      <ProjectsContainer>
        <Project>
          <Head>Portfolio Website</Head>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Justin Portfolio"
            href="#"
          >
            <Wrapper>
              <JcProject />
            </Wrapper>
          </a>
          <Description>
            My Portfolio website where you can learn more about me and the
            projects that I've made so far! Since I know React, I decided I
            wanted to practice making a website using an Static Website
            Generator such as Gatsby.
            <br />
            <br />
            <Subhead>-Built with Gatsby & Styled Components</Subhead>
          </Description>
        </Project>

        <Project>
          <Head>NBA Stats Tracker</Head>
          <a
            target="_blank"
            title="NBA Stats Project"
            rel="noopener noreferrer"
            href="https://eager-brown-f8c19d.netlify.com/"
          >
            <Wrapper>
              <NBAProject />
            </Wrapper>
          </a>
          <Description>
            An Application that pulls stats from all NBA Players from an API.
            You can query for individual players or scan through the pages to
            view the huge list of players. I used this app as an opportunity to
            practice using Redux for state management.
            <br />
            <br />
            <Subhead>
              -Built with React, Redux, Styled Components and Semantic UI
            </Subhead>
          </Description>
        </Project>

        <Project>
          <Head>COVID-19 Global Tracker</Head>
          <a
            target="_blank"
            title="NBA Stats Project"
            rel="noopener noreferrer"
            href="https://erase2020.com"
          >
            <Wrapper>
              <Erase2020 />
            </Wrapper>
          </a>
          <Description>
            A simple application that fetches data regarding COVID-19 stats
            worldwide. Choose the country you want to display stats for, and it
            will render within the card in the middle of the screen. I used this
            as well as another opportunity to practice using React Hooks and
            creating my own custom Hooks. Here I created a custom Hook that on
            page load would fetch the data for all Countries from an endpoint.
            <br />
            <br />
            <Subhead>-Built with React & Styled Components</Subhead>
          </Description>
        </Project>
        <Project>
          <Head>Weather Application</Head>
          <a
            target="_blank"
            title="NBA Stats Project"
            rel="noopener noreferrer"
            href="https://mrchaufun.github.io/Weather-Application/"
          >
            <Wrapper>
              <Weather />
            </Wrapper>
          </a>
          <Description>
            Weather Application that was my very first unlead project built with
            Vanilla JavaScript. After going through a couple tutorials, I
            decided that I wanted to practice the knowledge I had retained and
            built this app. On page load, it will ask to pull your geolocation
            in order to display the correct data per your specific long and lat.
            I also implemented a simple toggle button that will convert from
            Fahrenheit to Celcius!
            <br />
            <br />
            <Subhead>-Built with HTML, CSS and JavaScript</Subhead>
          </Description>
        </Project>
      </ProjectsContainer>
    </Container>
  )
}

export default Projects
