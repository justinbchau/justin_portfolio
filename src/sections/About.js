import React from "react"
import styled from "styled-components"
import { Container, Header } from "../styles/ui"
// import { graphql, useStaticQuery } from "gatsby"
import { device } from "../styles/media"

const ContentWrapper = styled.div`
  padding: 2rem;
  margin: 0 auto;
  font-size: 1.3rem;
  line-height: 1.8;
  font-weight: 400;
  width: 60%;

  @media ${device.mobile} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`
const StyledLink = styled.a`
  color: inherit;
  font-weight: 500;
`

const About = () => {
  // const data = useStaticQuery(graphql`
  //   query AboutMe {
  //     allMarkdownRemark {
  //       nodes {
  //         html
  //         excerpt
  //         htmlAst
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Container id="about-me">
        <Header>About Me</Header>
        <ContentWrapper>
          <span>
            I'm a 23 year old self-taught Front End Developer from San Jose, CA.
          </span>
          <br />
          <br />
          In August of 2019 I felt that I wasn't truly happy working as an IT
          Support Specialist. So I decided that I was going to pursue my true
          passion of becoming a frontend developer. I would quickly make a habit
          of waking up at 4am in the morning so that I could study and practice
          before I'd have to go into work.
          <br />
          <br />
          By September 2019, I thought it would be a good idea to start
          documenting my journey of becoming a developer to inspire others as
          well as keep myself acountable. So I started my{" "}
          <StyledLink target="_blank" href="https://instagram.com/chau_codes">
            Instagram
          </StyledLink>{" "}
          and posted daily, talking about the progress I was making and what
          concepts I was currently learning.
          <br />
          <br />I mainly learned from taking online courses on Udemy such as{" "}
          <StyledLink
            target="_blank"
            href="https://www.udemy.com/course/the-web-developer-bootcamp/"
          >
            The Web Developer Bootcamp
          </StyledLink>
          ,{" "}
          <StyledLink
            target="_blank"
            href="https://www.udemy.com/course/the-complete-javascript-course/"
          >
            {" "}
            The Complete JavaScript Course 2020
          </StyledLink>
          ,
          <StyledLink
            target="_blank"
            href="https://www.udemy.com/course/react-redux/"
          >
            {" "}
            Modern React with Redux
          </StyledLink>
          ,{" "}
          <StyledLink
            target="_blank"
            href="https://www.udemy.com/course/the-complete-react-native-and-redux-course/"
          >
            {" "}
            The Complete React Native + Hooks Course
          </StyledLink>{" "}
          plus many others!
          <br />
          <br />I am constantly pushing myself out of my comfort zone to learn
          more and make my dreams come true. All the while inspiring others to
          do the same and pursue what makes them truly happy!
        </ContentWrapper>
      </Container>
    </>
  )
}

export default About
