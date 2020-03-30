import React from "react"
import { Container, Header } from "../styles/ui"
import Socials from "../components/social"
import styled from "styled-components"

const Connect = styled.h1`
  font-size: 1.3rem;
  font-weight: 300;
  margin: 5rem auto;
  width: 40%;
  line-height: 1.6;
`

const Email = styled.a`
  font-size: 1.4rem;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: underline;
  margin-top: 10rem;
  color: inherit;
`

const Contact = () => {
  return (
    <Container id="contact-me">
      <Header>Contact Me</Header>
      <Connect>
        If your hiring for a Frontend role, or have any questions please don't
        hesitate to reach out!
      </Connect>
      <Email href="mailto:justin@chaucodes.com">justin@chaucodes.com</Email>
      <Socials />
    </Container>
  )
}

export default Contact
