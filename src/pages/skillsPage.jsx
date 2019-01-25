import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Skills from '../components/Skills/Skills';

const SkillsPage = () => (
    <Layout>
        <SEO title="skills" keywords={[`travis`, `application`, `react`]} />
        <Skills />
    </Layout>
)

export default SkillsPage