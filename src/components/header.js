import { Link } from "react-scroll"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import styled from "styled-components"
import { device } from "../styles/media"

const StyledNav = styled.nav`
  background-color: #1b262c;
  box-shadow: 3px 3px 3px #204051;

  @media ${device.mobile} {
    width: 100%;
  }

  @media ${device.desktop} {
    display: flex;
    justify-content: space-between;
  }
`

const Icon = styled.li`
  list-style: none;
  grid-column: 1 / 4;
  width: 4rem;

  @media ${device.mobile} {
    margin: 0;
  }

  @media ${device.tablet} {
    margin: auto;
  }
`

const AboutMe = styled(Link)`
  cursor: pointer;
  color: white;
  text-decoration: none;
  transition: color 0.2s ease-out;

  :hover {
    color: #f3c623;
  }
`

const StyledUl = styled.ul`
  @media ${device.mobile} {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 10px;
    justify-content: center;
    justify-items: center;
  }
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 10px;
    justify-content: center;
    justify-items: center;
  }

  @media ${device.desktop} {
    display: flex;
    align-items: center;
  }
`

const ListItem = styled.li`
  list-style: none;

  @media ${device.mobile} {
  }

  @media ${device.desktop} {
    margin-right: 30px;
    &:last-child {
      margin-right: 5rem;
    }
  }
`

const Skills = styled(AboutMe)``

const Projects = styled(AboutMe)``

const Contact = styled(AboutMe)``

const Header = () => (
  <StyledNav>
    <Icon>
      <Image />
    </Icon>
    <StyledUl>
      <ListItem>
        <AboutMe to="about-me" spy={true} smooth={true} offset={-80}>
          About Me
        </AboutMe>
      </ListItem>

      {/* <ListItem>
        <Skills to="my-skills" spy={true} smooth={true} offset={-80}>
          Skills
        </Skills>
      </ListItem> */}

      <ListItem>
        <Projects to="my-projects" spy={true} smooth={true} offset={-80}>
          Projects
        </Projects>
      </ListItem>

      <ListItem>
        <Contact to="contact-me" spy={true} smooth={true} offset={-80}>
          Contact Me
        </Contact>
      </ListItem>
    </StyledUl>
  </StyledNav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
