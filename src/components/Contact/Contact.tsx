import React from 'react'
import * as style from './contact.module.scss'

import { FaLinkedin } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

const Contact = () => (
    <div className={style.root}>
        <div className={style.contactTextContainer}>
            <h1 className={style.contactText}>Interested in talking further?</h1>
            <p className={style.contactPara}>
                I am available by email or if you would prefer to connect on social media I would
                love that as well. Click whatever form of contact you prefer below and I look
                forward to chatting!
            </p>
        </div>
        <div className={style.contactContainer}>
            <div className={style.asideText}>CONTACT</div>
            <div className={style.iconsContainer}>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/travis-james-lang/'
                >
                    <FaLinkedin className={style.icon} />
                </a>
                <a target='_blank' rel='noreferrer' href='https://github.com/travislang'>
                    <FaGithubSquare className={style.icon} />
                </a>
                <a href='mailto:tlang505@gmail.com'>
                    <FaEnvelope className={style.icon} />
                </a>
            </div>
        </div>
    </div>
)

export default Contact
