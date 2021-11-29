import React from 'react'
import projects from './projectsInfo'

import * as style from './projectsPage.module.css'
import ProjectCard from './projectCard'

const ProjectPage = ({ images }) => (
    <div className={style.root}>
        {projects.map((project, i) => {
            if (project.title === 'Ledger Log') {
                return <ProjectCard videoUrl={project.videoUrl} project={project} />
            } else {
                let imgData
                if (i === 1) {
                    imgData = images.image1.childImageSharp.fluid
                } else if (i === 2) {
                    imgData = images.image2.childImageSharp.fluid
                } else if (i === 3) {
                    imgData = images.image3.childImageSharp.fluid
                } else if (i === 4) {
                    imgData = images.image4.childImageSharp.fluid
                }
                return <ProjectCard image={imgData} project={project} />
            }
        })}
    </div>
)

export default ProjectPage
