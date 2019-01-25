import React, {Component} from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import style from './projectCard.module.css';

//icons
import { FaGithub } from 'react-icons/fa';
import { MdExitToApp } from 'react-icons/md';
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
        let backgroundColor;
        this.state.moreInfo ? backgroundColor = '#424242' : backgroundColor = '#e0e0e0';
        return (
            <div className={style.root} style={{backgroundColor: backgroundColor}}>
                <div className={style.actions}>
                    <MdExitToApp className={style.actionIcon} />
                    <FaGithub className={style.actionIcon} />
                    <FaInfoCircle onClick={this.handleClick} className={style.actionIcon} />
                </div>
                {!this.state.moreInfo ?
                    <div>
                        <div className={style.innerCard}>
                            <Image />
                        </div>
                        <div className={style.innerText}>
                            <h2 className={style.cardTitle}>CoinDock</h2>
                            <p className={style.cardDescription}>A cross browser cryptocurrency tracking application with real time prices</p>
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
                            This application uses webSockets to stream real time cryptocurrency prices to the user with the ability to create/delete portfolios, add/remove cryptocurrencies, drag and drop to organize cryptocurrencies within portfolios, and set price alerts on specific cryptocurrencies.
                        </p>
                        <p style={{ color: '#eeeeee' }}>
                            Alerts are constantly monitored on the server and when required an alert will be sent using Push Notifications. This is accomplished utalizing the Push API and service workers.
                        </p>
                        <p style={{ color: '#eeeeee' }}>
                            Checkout the readme on Github to see a full list of all technologies used.
                        </p>
                    </div>
                }
            </div>
        )
    }
}

export default ProjectCard;