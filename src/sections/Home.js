import React from "react"
import styled, { css } from "styled-components"
import { useSpring, animated, config } from "react-spring"
import { Link } from "react-scroll"
import { device } from "../styles/media"

const size = {
  small: 400,
  medium: 960,
  large: 1140,
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `

  return acc
}, {})

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  width: 100%;
  height: 100%;

  @media ${device.mobile} {
    margin-top: -50px;
    margin-right: 0px;
    width: 90%;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`

const Title = styled(animated.h1)`
  font-weight: 300;
  margin-bottom: 1rem;
  margin-top: 15rem;
  line-height: 1.3;
  font-size: 4rem;
  transition: color 0.2s ease-out;

  @media ${device.mobile} {
    font-size: 3rem;
    margin-top: 13rem;
  }

  @media ${device.tablet} {
    margin-left: 3rem;
    margin-right: 0;
  }

  @media ${device.desktop} {
    margin-left: 25rem;
  }
`

const Subtitle = styled(animated.h2)`
  font-weight: 300;
  line-height: 1.3;
  font-size: 4rem;

  transition: color 0.2s ease-out;

  @media ${device.mobile} {
    font-size: 2.5rem;
    margin-left: 1rem;
  }

  @media ${device.tablet} {
    font-size: 3rem;
    margin-left: 3rem;
    margin-right: 3rem;
  }

  /* @media ${device.desktopS} {
    margin-left: 10rem;
  } */

  @media ${device.desktop} {
    margin-left: 27rem;
  }
`

const Heading = styled(animated.h3)`
  font-weight: 200;
  line-height: 1.3;
  font-size: 1.5rem;
  margin-left: 1rem;

  @media ${device.mobile} {
    font-size: 1rem;
    margin-right: 3rem;
  }

  @media ${device.tablet} {
    font-size: 1rem;
    margin-left: 6rem;
    margin-top: 2rem;
    margin-right: 0px;
    width: 60%;
  }

  @media ${device.desktop} {
    margin-top: 2rem;
    margin-left: 21.5rem;
  }
`

const ButtonWrap = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin-top: 10rem;
  margin-left: 20rem;
  margin-right: 20rem;

  @media ${device.mobile} {
    margin: 6rem auto;
    display: block;
  }

  @media ${device.tablet} {
    margin: 8rem auto;
  }

  @media ${device.desktop} {
    margin-bottom: 17rem;
  }
`

const ScrollButton = styled(animated.button)`
  display: grid;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
  margin: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px transparent;
  border-radius: 5rem;
  padding: 1.2rem;
  background: #1b262c;
  color: white;
  transition: all 0.2s ease-out;
  text-decoration: none;
  letter-spacing: 1.8px;
  box-shadow: 0px 2px 2px #000;

  &:hover,
  :active {
    transform: translateY(-2px);
    box-shadow: 0px 10px 20px #000;
  }
`

const HeadingWrap = styled.div`
  margin-top: 2rem;
  margin-left: 26rem;

  @media ${device.mobile} {
    margin: auto;
  }
`

const Home = () => {
  //Animations
  const TitleSpring = useSpring({
    config: config.wobbly,
    delay: 300,
    opacity: 1,
    transform: "translateX(0px)",
    from: { opacity: 0, transform: "translateX(40px)" },
  })

  const SubSpring = useSpring({
    config: config.wobbly,
    delay: 300,
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(50px)" },
  })

  const HeadSpring = useSpring({
    config: config.gentle,
    delay: 700,
    opacity: 1,
    from: { opacity: 0 },
  })

  const ButtonSpring = useSpring({
    config: config.stiff,
    delay: 600,
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <Wrapper>
      <Title style={TitleSpring}>
        Hi there{" "}
        <span role="img" aria-label="and emoji">
          👋🏽
        </span>
      </Title>
      <Subtitle style={SubSpring}>I'm Justin,</Subtitle>
      <Heading style={HeadSpring}>A Self-Taught Front End Developer</Heading>
      <ButtonWrap>
        <Link to="about-me" spy={true} smooth={true} offset={-80}>
          <ScrollButton style={ButtonSpring}>About Me</ScrollButton>
        </Link>
      </ButtonWrap>
    </Wrapper>
  )
}

export default Home
