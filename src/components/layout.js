import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

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
    render={data => (
      <>
        <Header/>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
          }}
        >
          {children}
        </div>
        <footer style={{
            backgroundColor: '#424242',
            textAlign: 'center',
            color: 'white',
            padding: 5,
            fontSize: '0.85em'
            }}>
            &copy; Travis Lang 2019
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
