import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import styled from "styled-components"
import { device } from "../styles/media"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Section = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media ${device.mobile} {
    display: block;
    margin: auto;
  }

  @media ${device.tablet} {
    flex: 1;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Section>{children}</Section>
      <Footer />
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
