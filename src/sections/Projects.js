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
  line-height: 1.2;
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
            projects that I've made so far!
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
            My Portfolio website where you can learn more about me and the
            projects that I've made so far!
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
            This is an application I built for tracking COVID-19 stats
            worldwide.
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
            Weather Application built with Vanilla Javascript
          </Description>
        </Project>
      </ProjectsContainer>
    </Container>
  )
}

export default Projects
