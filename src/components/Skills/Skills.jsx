import React from 'react'
import { Link } from 'gatsby'
import ReactTooltip from 'react-tooltip'
import * as style from './skills.module.css'

import { FaJsSquare } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { FaGit } from 'react-icons/fa'
import { FaNpm } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { MdFormatListBulleted } from 'react-icons/md'

import ReduxLogo from './reduxLogo'

const Skills = () => (
    <div className={style.root}>
        <div className={style.skillsContainer}>
            <h1>Languages & Tools</h1>
            <div className={style.skillsContainer}>
                <FaJsSquare data-tip='JavaScript' className={style.skillIcon} />
                <FaReact data-tip='React' className={style.skillIcon} />
                <ReduxLogo data-tip='Redux' className={style.skillIcon} />
                <FaNodeJs data-tip='Node.js' className={style.skillIcon} />
                <FaGit data-tip='git / github' className={style.skillIcon} />
                <FaNpm data-tip='Node Package Manager' className={style.skillIcon} />
                <FaHtml5 data-tip='HTML5' className={style.skillIcon} />
                <FaCss3 data-tip='CSS3' className={style.skillIcon} />
                <MdFormatListBulleted data-tip data-for='moreSkills' className={style.skillIcon} />
            </div>
        </div>
        <div className={style.asideText}>SKILLS</div>
        <div>
            <h1 style={{ textAlign: 'end', marginBottom: 0 }}>Workflow & Processes</h1>
            <div className={style.listContainer}>
                <ul className={style.skillsList}>
                    <li>Agile Development & Scrum</li>
                    <li>Github development processes</li>
                    <li>Unit & Integration Testing</li>
                    <li>Functional Teams & frequent collaboration</li>
                </ul>
            </div>
        </div>
        <ReactTooltip className={style.tooltipStyles} place='bottom' type='dark' effect='solid' />
        <ReactTooltip
            id='moreSkills'
            className={style.tooltipStyles}
            place='bottom'
            type='dark'
            effect='solid'
        >
            <p style={{ textAlign: 'center' }}>More Skills:</p>
            <ul className={style.moreSkills}>
                <li>GraphQL</li>
                <li>React Native</li>
                <li>SQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Gatsby</li>
                <li>jQuery</li>
                <li>webSockets</li>
                <li>Bootstrap</li>
                <li>Material-UI</li>
            </ul>
        </ReactTooltip>
    </div>
)

export default Skills
