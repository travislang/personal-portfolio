import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectsPage from '../components/projects/projectsPage';

const Projects = () => (
  <Layout>
    <SEO title="Page two" />
        <h3 style={{marginTop: '1em', textAlign: 'center'}}>Projects</h3>
        <ProjectsPage />
  </Layout>
)

export default Projects
