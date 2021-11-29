import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectsPage from '../components/projects/projectsPage'

import { projectsTitle } from './projects.module.scss'

const Projects = ({ data }) => (
    <Layout>
        <SEO title='Projects' />
        <div className={projectsTitle}>PROJECTS</div>
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
        image2: file(relativePath: { eq: "responsegen-mockup.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        image3: file(relativePath: { eq: "weather-app.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        image4: file(relativePath: { eq: "intelliflix-mockup.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default Projects
