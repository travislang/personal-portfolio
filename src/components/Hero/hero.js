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
        <div className={style.heroTextContainer}>
            <h1 className={style.heroText}>My name is Travis & I'm</h1>
            <h1 className={style.heroText}>a Full Stack Software Developer.</h1>
            <p className={style.heroPara}>I am passionate about efficient development processes and creating great team dynamics. I am always excited about finding ways to grow my development skills with creative projects.  When I am not building things with software I enjoy being outdoors, camping, hiking, and rock climbing.</p>
        </div>
        <div className={style.heroContactContainer}>
            <div className={style.asideText}>
                ABOUT
            </div>
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