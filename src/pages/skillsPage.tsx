import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Skills from '../components/Skills/Skills';

const SkillsPage = () => (
    <Layout>
        <SEO title="skills" keywords={[`travis`, `application`, `react`]} />
        <Skills />
    </Layout>
)

export default SkillsPage