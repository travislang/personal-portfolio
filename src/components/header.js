import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import Toggle from './Toggle'
import { FaGithub } from 'react-icons/fa'

import * as styles from './header.module.scss'

const Header = () => {
    const [ isMobile, setIsMobile ] = useState(false)

    useEffect(() => {
        console.log('window', window.innerWidth)
        if(window && window.innerWidth && window.innerWidth < 500) {
            setIsMobile(true)
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <h2 className={styles.logoContainer}>
                    <Link to='/' className={styles.logoLink}>
                        <span className={styles.logoMain}>{isMobile ? 'T' : 'Travis'}</span>
                        <span className={styles.logoSecondary}>{isMobile ? 'L' : 'Lang'}</span>
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
                <a
                    target='_blank'
                    rel='noreferrer'
                    className={styles.githubIcon}
                    href='https://github.com/travislang/personal-portfolio'
                >
                    <FaGithub />
                </a>
                <Toggle />
            </div>
        </div>
    )
}

export default Header
