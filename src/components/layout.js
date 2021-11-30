import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import '@fontsource/teko/600.css'
import './layout.css'
import * as style from './Hero/hero.module.scss'

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={(data) => (
            <>
                <Header />
                <div className={style.rootContainer}>
                    <div className={style.widthContainer}>{children}</div>
                </div>
                <Footer />
            </>
        )}
    />
)

export default Layout
