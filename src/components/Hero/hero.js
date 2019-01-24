import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layout'
import Image from '../image'
import SEO from '../seo';
import Avatar from './Avatar';
import style from './hero.module.css';

import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

const Hero = () => (
    <div className={style.root}>
        <div className={style.heroText}>
            <h1 style={{textAlign: 'center'}}>My name is Travis</h1>
            <h1 style={{ textAlign: 'center' }}>I am a software developer</h1>
            <hr />
            <h2 style={{ color: '#616161', marginBottom: 0}}>
                Lets connect
            </h2>
            <div className={style.iconsContainer}>
                <a target='_blank' href='https://www.linkedin.com/in/travis-james-lang/'>
                    <FaLinkedin className={style.icon} />
                </a>
                <a target='_blank' href='https://github.com/travislang'>
                    <FaGithubSquare className={style.icon} />
                </a>
                
                <FaEnvelope className={style.icon}/>
                <FaMedium className={style.icon}/>
                
            </div>
        </div>
    </div>
)

export default Hero;