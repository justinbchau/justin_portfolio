import React from "react"
import styled from "styled-components"
import {
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "@icons-pack/react-simple-icons"

import { device } from "../styles/media"

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  margin-bottom: 2rem;
`

const SocialButton = styled.a`
  display: flex;
  margin: 0 1.4rem;
  height: 4.5rem;
  width: 4.5rem;
  align-items: center;
  justify-content: center;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;

  &:hover,
  :focus,
  :active {
    transform: scale(1.1);
  }

  @media ${device.mobile} {
    width: 30%;
  }
`

const Socials = () => {
  return (
    <SocialWrapper>
      <SocialButton
        rel="noreferrer"
        href="https://instagram.com/chau_codes"
        target="blank"
      >
        <Instagram color="#E4405F" size={40} />
      </SocialButton>
      <SocialButton
        rel="noreferrer"
        href="https://twitter.com/chau_codes"
        target="blank"
      >
        <Twitter color="#1DA1F2" size={40} />
      </SocialButton>
      <SocialButton
        rel="noreferrer"
        href="https://www.youtube.com/channel/UCBCMR6JnwHua6NfN5UhAsfg"
        target="blank"
      >
        <Youtube color="#FF0000" size={40} />
      </SocialButton>
      <SocialButton
        rel="noreferrer"
        href="https://www.linkedin.com/in/justin-chau-3a806764/"
        target="blank"
      >
        <Linkedin color="#0077B5" size={40} />
      </SocialButton>
    </SocialWrapper>
  )
}

export default Socials
