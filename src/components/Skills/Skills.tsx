import React from 'react'
import ReactTooltip from 'react-tooltip'
import * as style from './skills.module.scss'

import { FaJsSquare } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { FaDocker } from 'react-icons/fa'
import { FaGit } from 'react-icons/fa'
import { FaNpm } from 'react-icons/fa'
import { FaAws } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'

import { MdFormatListBulleted } from 'react-icons/md'

import ReduxLogo from './reduxLogo'

const Skills = () => (
    <div className={style.root}>
        <div>
            <h1 className={style.headerText}>Languages & Tools</h1>
            <div>
                <FaJsSquare data-tip='JavaScript' className={style.skillIcon} />
                <SiTypescript data-tip='TypeScript' className={style.skillIcon} />
                <FaReact data-tip='React' className={style.skillIcon} />
                <ReduxLogo data-tip='Redux' className={style.skillIcon} />
                <FaNodeJs data-tip='Node.js' className={style.skillIcon} />
                <FaDocker data-tip='Docker' className={style.skillIcon} />
                <SiMongodb data-tip='MongoDB' className={style.skillIcon} />
                <FaAws data-tip='AWS' className={style.skillIcon} />
                <FaGit data-tip='Git / Github' className={style.skillIcon} />
                <FaNpm data-tip='Node Package Manager' className={style.skillIcon} />
                <MdFormatListBulleted data-tip data-for='moreSkills' className={style.skillIcon} />
            </div>
        </div>
        <div className={style.asideText}>SKILLS</div>
        <div>
            <h1 className={style.text}>Workflow & Processes</h1>
            <div className={style.listContainer}>
                <ul>
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
                <li>MongoDB</li>
                <li>Gatsby</li>
                <li>jQuery</li>
                <li>webSockets</li>
                <li>Bootstrap</li>
                <li>Styling libraries</li>
            </ul>
        </ReactTooltip>
    </div>
)

export default Skills
