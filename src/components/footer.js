import React from "react"
import styled from "styled-components"

const NewFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5rem;
  font-family: Fira Sans;
`

const Footer = () => {
  return <NewFooter>Copyright © {new Date().getFullYear()}, Justin</NewFooter>
}

export default Footer
