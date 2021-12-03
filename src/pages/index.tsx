import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/Hero/hero';

const IndexPage = () => (
  <Layout>
    <SEO title="projects" keywords={[`travis`, `application`, `react`]} />
    <Hero />
  </Layout>
)

export default IndexPage
