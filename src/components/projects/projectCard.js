import React, {Component} from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import style from './projectCard.module.css';
import ReactTooltip from 'react-tooltip'

//icons
import { FaGithub } from 'react-icons/fa';
import { MdExitToApp } from 'react-icons/md';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';

import { FaNodeJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';

import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const Image = () => {
    return (
        <StaticQuery
            query={graphql`
        query {
            placeholderImage: file(relativePath: { eq: "coindock-home.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
        `}
            render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
        />
    )
}



class ProjectCard extends Component {

    state = {
        moreInfo: false
    }

    handleClick = () => {
        this.setState({
            moreInfo: !this.state.moreInfo
        })
        console.log(this.state);
    }

    render() {
        const {project} = this.props;
        let backgroundColor;
        this.state.moreInfo ? backgroundColor = '#424242' : backgroundColor = '#e0e0e0';
        return (
            <div className={style.root} style={{backgroundColor: backgroundColor}}>
                <div className={style.actions}>
                    <a href={project.demo} target='_blank'>
                        <FaExternalLinkAlt data-tip="View App" className={style.actionIcon} />
                    </a>
                    <a href={project.github} target='_blank'>
                        <FaGithub data-tip="View Source on Github" className={style.actionIcon} />
                    </a>
                    <FaInfoCircle data-tip="More Info" onClick={this.handleClick} className={style.actionIcon} />
                </div>
                {!this.state.moreInfo ?
                    <div>
                        <div className={style.innerCard}>
                            <Image />
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
                    :
                    <div className={style.innerCard}>
                        <p style={{color: '#eeeeee'}}>
                            {project.appInfo1}
                        </p>
                        <p style={{ color: '#eeeeee' }}>
                            {project.appInfo2}
                        </p>
                        <p style={{ color: '#eeeeee' }}>
                            {project.appInfo3}
                        </p>
                    </div>
                }
                <ReactTooltip className={style.tooltipStyles} place="top" type="dark" effect="solid" />
            </div>
        )
    }
}


export default ProjectCard;