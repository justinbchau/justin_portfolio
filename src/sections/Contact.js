import React from "react"
import { Container, Header } from "../styles/ui"
import Socials from "../components/social"
import styled from "styled-components"

import { device } from "../styles/media"

const Connect = styled.h1`
  font-size: 1.3rem;
  font-weight: 300;
  margin: 5rem auto;
  width: 40%;
  line-height: 1.6;

  @media ${device.mobile} {
    width: 95%;
  }

  @media ${device.tablet} {
    width: 95%;
  }
`

const Email = styled.a`
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: underline;
  margin-top: 10rem;
  color: inherit;
`

const Contact = () => {
  return (
    <Container id="contact-me">
      <Header>Contact Me</Header>
      <Connect>
        If you're hiring for a Frontend role, or have any questions, please
        don't hesitate to reach out!
      </Connect>
      <Email href="mailto:justin@chaucodes.com">justin@chaucodes.com</Email>
      <Socials />
    </Container>
  )
}

export default Contact
