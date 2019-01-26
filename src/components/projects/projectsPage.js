import React from 'react'
import { Link } from 'gatsby'
import projects from './projectsInfo';

import style from './projectsPage.module.css';
import ProjectCard from './projectCard';

const ProjectsPage = () => (
    <div className={style.root}>
        {projects.map(project => {
            return <ProjectCard project={project} />
        })}
    </div>
)

export default ProjectsPage;