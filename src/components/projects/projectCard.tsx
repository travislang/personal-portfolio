import React, { useState, useContext, useEffect } from 'react'
import { ThemeContext } from '../ThemeContext'

import { Project } from './projectsInfo'

import ReactTooltip from 'react-tooltip'
import Img from 'gatsby-image'
import Video from './video'

import * as style from './projectCard.module.scss'

//icons
import { FaGithub } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaInfoCircle } from 'react-icons/fa'

import { FaNodeJs } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaDocker } from 'react-icons/fa'
import { FaAws } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { SiSocketdotio } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiReduxsaga } from 'react-icons/si'
import { SiMaterialui } from 'react-icons/si'

interface IProps {
    project: Project
    image?: any
    videoUrl?: string | undefined
}

const MORE_INFO_COLORS = {
    dark: '#5f5e5e',
    light: '#424242',
}

const ProjectCard = (props: IProps): JSX.Element => {
    const { project, image, videoUrl } = props

    const { colorMode } = useContext(ThemeContext)
    const [moreInfo, setMoreInfo] = useState<Boolean>(false)
    const [classNames, setClassNames] = useState([style.root])

    const handleClick = (): void => {
        // ADD LATER? card animation...
        // if (moreInfo) {
        //     setClassNames((arr) => arr.filter((c) => c !== style.flipAnimation))
        //     setClassNames((arr) => [...arr, style.flipAnimationBack])
        // } else {
        //     setClassNames((arr) => arr.filter((c) => c !== style.flipAnimationBack))
        //     setClassNames((arr) => [...arr, style.flipAnimation])
        // }
        setMoreInfo((s) => !s)
    }

    const backgroundStyle: React.CSSProperties = {}

    if (moreInfo) {
        if (colorMode) {
            backgroundStyle.backgroundColor = MORE_INFO_COLORS[colorMode]
        } else {
            backgroundStyle.backgroundColor = MORE_INFO_COLORS['light']
        }
    }

    return (
        <div className={classNames.join(' ')} style={backgroundStyle}>
            <div className={style.actions}>
                <a href={project.demo} target='_blank' rel='noreferrer'>
                    <FaExternalLinkAlt data-tip='View App' className={style.actionIcon} />
                </a>
                <a href={project.github} target='_blank' rel='noreferrer'>
                    <FaGithub data-tip='View Source on Github' className={style.actionIcon} />
                </a>
                <FaInfoCircle
                    data-tip='More Info'
                    onClick={handleClick}
                    className={style.actionIcon}
                />
            </div>
            {!moreInfo ? (
                <div>
                    <div className={image ? style.innerCard : style.innerCardVideo}>
                        {image ? (
                            <Img
                                imgStyle={{ maxHeight: 250, objectFit: 'contain' }}
                                className={style.imageContainer}
                                fluid={image}
                            />
                        ) : (
                            <Video videoSrc={videoUrl} videoTitle={'project demo'} />
                        )}
                    </div>
                    <div className={style.innerText}>
                        <h2 className={style.cardTitle}>{project.title}</h2>
                        <p className={style.cardDescription}>{project.description}</p>
                        <hr />
                        <h3 className={style.cardTitleSecondary}>Built Using</h3>
                        <div>
                            {project.technologies.length ? (
                                project.technologies.map((t) => {
                                    if (t === 'react') {
                                        return <FaReact className={style.cardLogo} />
                                    }
                                    if (t === 'docker') {
                                        return <FaDocker className={style.cardLogo} />
                                    }
                                    if (t === 'mongo') {
                                        return <SiMongodb className={style.cardLogo} />
                                    }
                                    if (t === 'sql') {
                                        return <SiPostgresql className={style.cardLogo} />
                                    }
                                    if (t === 'js') {
                                        return <FaJsSquare className={style.cardLogo} />
                                    }
                                    if (t === 'node') {
                                        return <FaNodeJs className={style.cardLogo} />
                                    }
                                    if (t === 'sockets') {
                                        return <SiSocketdotio className={style.cardLogo} />
                                    }
                                    if (t === 'saga') {
                                        return <SiReduxsaga className={style.cardLogo} />
                                    }
                                    if (t === 'material-ui') {
                                        return <SiMaterialui className={style.cardLogo} />
                                    }
                                    if (t === 'aws') {
                                        return <FaAws className={style.cardLogo} />
                                    }
                                })
                            ) : (
                                <>
                                    <FaNodeJs className={style.cardLogo} />
                                    <FaReact className={style.cardLogo} />
                                    <FaJsSquare className={style.cardLogo} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className={style.innerCard}>
                    <p style={{ color: '#eeeeee' }}>{project.appInfo1}</p>
                    <p style={{ color: '#eeeeee' }}>{project.appInfo2}</p>
                    <p style={{ color: '#eeeeee' }}>{project.appInfo3}</p>
                </div>
            )}
            <ReactTooltip className={style.tooltipStyles} place='top' type='dark' effect='solid' />
        </div>
    )
}

export default ProjectCard
