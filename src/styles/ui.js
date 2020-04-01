import styled from "styled-components"
import { device } from "./media"

export const Container = styled.div`
  grid-template-rows: auto;
  justify-content: center;
  text-align: center;
  margin: 0;
  margin-top: 9rem;

  @media ${device.mobile} {
    margin-top: 3rem;
    display: block;
  }
`
export const Header = styled.h1`
  text-decoration: underline;
  font-weight: 400;
  font-size: 4rem;
  letter-spacing: 5px;

  @media ${device.mobile} {
    font-size: 2.5rem;
  }
`
