import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectsPage from '../components/projects/projectsPage';

const Projects = () => (
  <Layout>
    <SEO title="Page two" />
        <div style={projectsTitle}>
            PROJECTS
        </div>
        {/* <h3 style={{marginTop: '1em', textAlign: 'center'}}>Projects</h3>
        <hr /> */}
        <ProjectsPage />
  </Layout>
)

const projectsTitle = {
    fontSize: 'calc(12vmin + 0.5em',
    margin: '0.25em 0',
    lineHeight: '0.85em',
    fontWeight: 700,
    letterSpacing: '0.2em',
    paddingLeft: '0.2em',
    color: '#eeeeee',
    display: 'flex',
    justifyContent: 'center'

}

// font - size: calc(22vmin + 1em);
// /* font-size: 10em; */
// margin: 0;
// line - height: 0.85em;
// font - weight: 700;
// letter - spacing: 0.2em;
// padding - left: 0.2em;
// color: #eeeeee;
// display: flex;
// justify - content: center;

export default Projects
