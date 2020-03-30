import React from "react"
import styled from "styled-components"
import { Container, Header } from "../styles/ui"

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style: circle;
  font-size: 1.5rem;
  font-weight: 350;
  font-family: inherit;
  margin: 5rem auto;
  width: 70%;
`

const Skills = () => {
  return (
    <Container id="my-skills">
      <Header>My Skills</Header>
      <List>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript ES6</li>
        <li>Git</li>
      </List>
      <List>
        <li>React</li>
        <li>Styled Components</li>
        <li>React Native</li>
        <li>Redux</li>
      </List>
    </Container>
  )
}

export default Skills
