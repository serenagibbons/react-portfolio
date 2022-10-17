import { Container, Row, Col } from "react-bootstrap"
import { Github, Linkedin } from 'react-bootstrap-icons';

function Footer() {
    return (
        <footer className="footer bg-dark text-white">
            <Container>
                <Row>
                    <Col sm={6} className="text-center text-sm-start">
                        <p>Copyright 2022 Serena Gibbons.</p>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/serenagibbons/" target="_blank" rel="noreferrer"><Linkedin/></a>
                        <a href="https://github.com/serenagibbons" target="_blank" rel="noreferrer"><Github/></a>
                    </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;