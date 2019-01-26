import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

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
            minHeight: 40,
            backgroundColor: '#424242',
            textAlign: 'center',
            color: 'white',
            padding: 5,
            fontSize: '0.85em',
            display: 'flex',
            }}>
            <div style={{flexBasis: '30%'}}>
            </div>
            <div style={{ flexGrow: 1, flexBasis: '30%'}}>
                &copy; Travis Lang 2019
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexBasis: '30%'}}>
                <a target='_blank' href='https://www.linkedin.com/in/travis-james-lang/'>
                    <FaLinkedinIn style={{ marginRight: 25 }} />
                </a>
                <a target='_blank' href='https://github.com/travislang'>
                    <FaGithub style={{ marginRight: 25 }} />
                </a>
                <a href="mailto:tlang505@gmail.com">
                    <FaEnvelope style={{ marginRight: 25 }} />
                </a>
            </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
