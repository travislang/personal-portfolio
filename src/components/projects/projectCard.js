import React, { useState } from 'react'
import * as style from './projectCard.module.scss'
import ReactTooltip from 'react-tooltip'
import Img from 'gatsby-image'
import Video from './video'
//icons
import { FaGithub } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaInfoCircle } from 'react-icons/fa'

import { FaNodeJs } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'

const ProjectCard = (props) => {
    const { project, image, videoUrl } = props

    const [moreInfo, setMoreInfo] = useState(false)

    const handleClick = () => {
        setMoreInfo((s) => !s)
    }

    let backgroundColor
    moreInfo ? (backgroundColor = '#424242') : (backgroundColor = '#e0e0e0')

    return (
        <div className={style.root} style={{ backgroundColor: backgroundColor }}>
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
                            <div className='plyr__video-embed' id='player'>
                                <iframe
                                    src={videoUrl}
                                    allowFullScreen
                                    allowtransparency
                                    allow='autoplay'
                                />
                            </div>
                        )}
                    </div>
                    <div className={style.innerText}>
                        <h2 className={style.cardTitle}>{project.title}</h2>
                        <p className={style.cardDescription}>{project.description}</p>
                        <hr />
                        <h3 className={style.cardTitleSecondary}>Built Using</h3>
                        <div>
                            <FaNodeJs className={style.cardLogo} />
                            <FaReact className={style.cardLogo} />
                            <FaJsSquare className={style.cardLogo} />
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
