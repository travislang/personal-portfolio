import { Link } from 'gatsby'
import React from 'react'

import Toggle from './Toggle'
import * as styles from './header.module.css'

const Header = () => {
    return (
            <div
                className={styles.container}
            >
                <div
                    className={styles.innerContainer}
                >
                    <h2 className={styles.logoContainer}>
                        <Link to='/' className={styles.logoLink}>
                            <span className={styles.logoMain}>Travis</span>
                            <span className={styles.logoSecondary}>Lang</span>
                        </Link>
                    </h2>
                    <h4 className={styles.linkContainer}>
                        <Link to='/projects' className={styles.navLink}>
                            Projects
                        </Link>
                    </h4>
                    <h4 className={styles.linkContainer}>
                        <Link to='/skillsPage' className={styles.navLink}>
                            Skills
                        </Link>
                    </h4>
                    <h4 className={styles.linkContainer}>
                        <Link to='/contactPage' className={styles.navLink}>
                            Contact
                        </Link>
                    </h4>
                    <Toggle />
                </div>
            </div>
        )
}

export default Header
