import React from 'react'
import * as style from './hero.module.scss'

import { FaLinkedin } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

const Hero = () => (
    <div className={style.root}>
        <div className={style.heroTextContainer}>
            <h1 className={style.heroText}>My name is Travis & I'm</h1>
            <h1 className={style.heroText}>a Full Stack Software Developer.</h1>
            <p className={style.heroPara}>
                I am passionate about solving interesting problems with code.
                <br/>
                Using modern development practices to produce maintainable and scalable software solutions. When I am not building things with software I enjoy golfing,
                being outdoors, camping and hiking.
            </p>
        </div>
        <div className={style.heroContactContainer}>
            <div className={`${style.asideText} ${style.noselect}`}>ABOUT</div>
            <h2 className={style.connectText}>Lets connect</h2>
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

export default Hero
