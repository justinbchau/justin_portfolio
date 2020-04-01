import React from "react"
import styled from "styled-components"
import { device } from "../styles/media"

const NewFooter = styled.footer`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5rem;
  font-family: Fira Sans;

  @media ${device.mobile} {
  }
`

const Footer = () => {
  return <NewFooter>Copyright © {new Date().getFullYear()}, Justin</NewFooter>
}

export default Footer
