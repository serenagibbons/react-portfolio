import { Container, Row, Col } from 'react-bootstrap';
import Skill from './Skill';

function Skills() {
    return (
        <section id="skills" className="bg-dark text-white">
            <Container className="col-xxl-8 py-5">
            <h2 className="lead fw-bold heading py-4">Skills</h2>
            <Row>
                <Col xs={12} md={6} lg={3} className="py-1">
                    <Skill />
                </Col>
                <Col xs={12} md={6} lg={3} className="py-1">
                    <Skill />
                </Col>
                <Col xs={12} md={6} lg={3} className="py-1">
                    <Skill />
                </Col>
                <Col xs={12} md={6} lg={3} className="py-1">
                    <Skill />
                </Col>
            </Row>
            </Container>
        </section>
    );
}

export default Skills;