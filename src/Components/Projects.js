import { Container } from 'react-bootstrap';
import Project from './Project';

function Projects() {
    return (
        <section id="projects" className="bg-dark text-white">
            <Container className="col-xxl-8 py-5">
                <h2 className="lead fw-bold heading py-4">Featured Projects</h2>
                <Project />
            </Container>
        </section>
    );
}

export default Projects;