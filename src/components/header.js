import { Link } from 'gatsby'
import React from 'react'

import styles from './header.module.css'

class Header extends React.Component {
    render() {
        return (
            <div
                style={{
                    background: `#fafafa`,
                    minHeight: '40px'
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
                            to="/contactPage"
                            className={styles.navLink}
                    >
                        Contact
                        </Link>
                    </h4>
                </div>
            </div>
        )
    }
}

export default Header
