import React from 'react'
import { Link } from 'gatsby'

import style from './projectsPage.module.css';
import ProjectCard from './projectCard';

const ProjectsPage = () => (
    <div className={style.root}
    >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
    </div>
)

export default ProjectsPage;