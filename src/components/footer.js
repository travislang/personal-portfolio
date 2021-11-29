import React from 'react'

import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

import * as styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div style={{ flexBasis: '30%' }}></div>
            <div className={styles.authorContainer}>&copy; Travis Lang 2022</div>
            <div className={styles.linkContainer}>
                <a
                    target='_blank'
                    rel='noreferrer'
                    className={styles.iconMargin}
                    href='https://www.linkedin.com/in/travis-james-lang/'
                >
                    <FaLinkedinIn />
                </a>
                <a
                    target='_blank'
                    rel='noreferrer'
                    className={styles.iconMargin}
                    href='https://github.com/travislang'
                >
                    <FaGithub />
                </a>
                <a href='mailto:tlang505@gmail.com' className={styles.iconMargin}>
                    <FaEnvelope />
                </a>
            </div>
        </footer>
    )
}

export default Footer
