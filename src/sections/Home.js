import React from "react"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"
import { Link } from "react-scroll"

const Title = styled(animated.h1)`
  font-weight: 300;
  margin: 0 auto;
  margin-bottom: 1rem;
  margin-top: 15rem;
  line-height: 1.3;
  font-size: 5rem;
  transition: color 0.2s ease-out;
`

const Subtitle = styled(animated.h2)`
  font-weight: 300;
  line-height: 1.3;
  font-size: 4rem;
  margin-left: 6.5rem;
  transition: color 0.2s ease-out;
`

const Heading = styled(animated.h3)`
  font-weight: 200;
  line-height: 1.3;
  font-size: 1.5rem;
  margin-left: 0.5rem;
`

const ScrollButton = styled(animated.button)`
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
  margin: 0rem;
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
  margin-bottom: 2rem;

  &:hover,
  :active {
    transform: translateY(-2px);
    box-shadow: 0px 10px 20px #000;
  }
`

const ButtonWrap = styled.div`
  display: grid;
  grid-template-rows: auto;
  margin-top: 20rem;
  margin-left: 20rem;
  margin-right: 20rem;
`

const Home = () => {
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
    <div style={{ margin: `auto`, width: 940 }}>
      <Title style={TitleSpring}>
        Hi there{" "}
        <span role="img" aria-label="and emoji">
          👋🏽
        </span>
      </Title>
      <Subtitle style={SubSpring}>I'm Justin,</Subtitle>
      <Heading style={HeadSpring}>A Self-Taught Front End Developer</Heading>
      <Link to="about-me" spy={true} smooth={true} offset={-80}>
        <ButtonWrap>
          <ScrollButton style={ButtonSpring}>About Me</ScrollButton>
        </ButtonWrap>
      </Link>
    </div>
  )
}

export default Home
