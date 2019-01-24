import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Hero from '../components/Hero/hero';

const IndexPage = () => (
  <Layout>
    <SEO title="projects" keywords={[`travis`, `application`, `react`]} />
    <Hero />
  </Layout>
)

export default IndexPage
