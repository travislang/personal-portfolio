import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './header.module.css'

const Header = ({ siteTitle }) => (
    <div
        style={{
            background: `#fafafa`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0.5rem`,
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <h2 style={{ margin: 0, flexGrow: 1 }}>
                <Link
                    to="/"
                    style={{ textDecoration: 'none',
                    color: 'inherit'}}
                >
                    <span className={styles.logoMain}>Travis</span>
                    <span className={styles.logoSecondary}>Lang</span>
                </Link>
            </h2>
            <h4 style={{margin: 0}}>
                <Link
                    to="/projects"
                    className={styles.navLink}
                >
                    Projects
                </Link>
            </h4>
            <h4 style={{ margin: 0 }}>
                <Link
                    to="/skillsPage"
                    className={styles.navLink}
                >
                    Skills
                </Link>
            </h4>
            <h4 style={{ margin: 0 }}>
                <Link
                    to="/contact"
                    className={styles.navLink}
                >
                    Contact
                </Link>
            </h4>
        </div>
    </div>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
