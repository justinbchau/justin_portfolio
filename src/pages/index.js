import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Home from "../sections/Home"
import Skills from "../sections/Skills"
import About from "../sections/About"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default IndexPage
