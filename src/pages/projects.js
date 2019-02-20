import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectsPage from '../components/projects/projectsPage';

const Projects = ({data}) => (
  <Layout>
    <SEO title="Projects" />
        <div style={projectsTitle}>
            PROJECTS
        </div>
        <ProjectsPage images={data} />
  </Layout>
)

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "main-coindock.png" }) {
        childImageSharp {
            fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
            }
        }
    }
    image2: file(relativePath: { eq: "weather-app.png" }) {
        childImageSharp {
            fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
            }
        }
    }
    image3: file(relativePath: { eq: "todo-mockup.png" }) {
        childImageSharp {
            fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
            }
        }
    }
    image4: file(relativePath: { eq: "feedback-mockup.png" }) {
        childImageSharp {
            fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
            }
        }
    }
  }
`

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

export default Projects
