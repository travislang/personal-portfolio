import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import style from './projectCard.module.css';

import { FaGithub } from 'react-icons/fa';
import { FaFolderOpen } from 'react-icons/fa';
import { MdExitToApp } from 'react-icons/md';
import { FaInfoCircle } from 'react-icons/fa';

const Image = () => (
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

const ProjectCard = () => (
    <div className={style.root}>
        <div className={style.actions}>
            <MdExitToApp className={style.actionIcon} />
            <FaGithub className={style.actionIcon} />
            <FaInfoCircle className={style.actionIcon} />
        </div>
        <div className={style.innerCard}>
            <Image />
        </div> 
    </div>
)

export default ProjectCard;