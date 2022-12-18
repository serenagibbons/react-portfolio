import { Container } from 'react-bootstrap';
import Project from './Project';
import projectData from '../data/projects.js';

function Projects() {

    let id = 1;
    const projects = projectData.map(project => {
        return (
            <Project 
                key={id++}
                item={project}
            />
        );
    })

    return (
        <section id="projects" className="bg-darkblue text-white">
            <Container className="col-xxl-8 py-5">
                <h2 className="lead heading py-5">Featured Projects</h2>
                {projects}
            </Container>
        </section>
    );
}

export default Projects;