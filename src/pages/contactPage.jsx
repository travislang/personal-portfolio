import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Contact from '../components/Contact/Contact'

const ContactPage = () => (
    <Layout>
        <SEO title='Contact' keywords={[`travis`, `application`, `react`, `travis lang`]} />
        <Contact />
    </Layout>
)

export default ContactPage
