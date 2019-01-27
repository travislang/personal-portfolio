import React from 'react'
import { graphql } from 'gatsby'
import projects from './projectsInfo';

import style from './projectsPage.module.css';
import ProjectCard from './projectCard';


export default ({images}) => (
    <div className={style.root}>
        {projects.map((project, i) => {
           let imgData;
            if(i === 0) {
                imgData = images.image1.childImageSharp.fluid
            }
            else if(i === 1) {
                imgData = images.image2.childImageSharp.fluid
            }
            else if(i === 2) {
                imgData = images.image3.childImageSharp.fluid
            }
            else if(i === 3) {
                imgData = images.image4.childImageSharp.fluid
            }
            return <ProjectCard image={imgData} project={project} />
        })}
    </div>
)