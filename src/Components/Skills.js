import { Container, Row, Col } from 'react-bootstrap';
import Skill from './Skill';
import skillsData from '../data/skills.js'

function Skills() {

    let id = 1;
    const skills = skillsData.map(skill => {
        return (
            <Col xs={12} md={6} lg={3} className="py-1">
                <Skill 
                    key={id++}
                    item={skill}
                />
            </Col>
        );
    })

    return (
        <section id="skills" className="bg-dark text-white">
            <Container className="col-xxl-8 py-5">
            <h2 className="lead fw-bold heading py-5">Skills</h2>
            <Row>
                { skills }
            </Row>
            </Container>
        </section>
    );
}

export default Skills;