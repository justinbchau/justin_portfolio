import { Link } from "react-scroll"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import styled from "styled-components"

const StyledHeader = styled.header`
  width: 100%;
  max-width: 100vw;
  top: 0;
  left: 0;
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100vw;
  background-color: #1b262c;
  box-shadow: 3px 3px 3px #204051;
  height: 5rem;
`

const Icon = styled.h1`
  margin-left: 1rem;
  align-items: center;
  justify-content: flex-start;
  width: 5rem;
  margin-right: 55%;
`

const AboutMe = styled(Link)`
  font-family: Fira Sans;
  justify-content: flex-end;
  cursor: pointer;
  font-size: 1.2rem;
  color: white;
  display: flex;
  padding: 1.3rem;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  transition: color 0.2s ease-out;

  :hover {
    color: #f3c623;
  }
`

const Skills = styled(AboutMe)``

const Projects = styled(AboutMe)``

const Contact = styled(AboutMe)``

const Header = () => (
  <StyledHeader>
    <StyledNav>
      <Icon>
        <Image />
      </Icon>
      <AboutMe to="about-me" spy={true} smooth={true} offset={-80}>
        About Me
      </AboutMe>
      <Skills to="my-skills" spy={true} smooth={true} offset={-80}>
        Skills
      </Skills>
      <Projects to="my-projects" spy={true} smooth={true} offset={-80}>
        Projects
      </Projects>
      <Contact to="contact-me" spy={true} smooth={true} offset={-80}>
        Contact Me
      </Contact>
    </StyledNav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
