import React from 'react'
import { Link } from 'gatsby'

import style from './skills.module.css';

import { FaJsSquare } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaGit } from 'react-icons/fa';
import { FaNpm } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';

const Skills = () => (
    <div className={style.root}>
        <div className={style.skillsContainer}>
            <h1>Languages & Tools</h1>
            <div className={style.skillsContainer}>
                <FaJsSquare className={style.skillIcon} />
                <FaReact className={style.skillIcon} />
                <FaNodeJs className={style.skillIcon} />
                <FaGit className={style.skillIcon} />
                <FaNpm className={style.skillIcon} />
                <FaHtml5 className={style.skillIcon} />
                <FaCss3 className={style.skillIcon} />
            </div>
        </div>
        <div className={style.asideText}>
            SKILLS
        </div>
        <div>
            <h1 style={{textAlign: 'end', marginBottom: 0}}>Workflow & Processes</h1>
            <div className={style.listContainer}>
                <ul>
                    <li>Agile Development & Scrum</li>
                    <li>Github development processes</li>
                    <li>Unit & Integration Testing</li>
                    <li>Functional Teams & frequent collaboration</li>
                </ul>
            </div>
            
        </div>
    </div>
)


export default Skills;