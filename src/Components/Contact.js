import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
	return (
        <section id="contact" className="contact bg-dark text-white">
            <Container className="col-xxl-8 py-5">
                <h2 className="lead fw-bold heading  py-4">Let's Connect</h2>
                <Row className="text-center">
                    <Col>
                    <h3>Get In Touch</h3>
                    <p className="contact-text">
                        Thank you for checking out my portfolio. Feel free to get in touch with me. I am open to discussing new
                        projects or opportunities.
                    </p>
                    <a href="mailto:gibbons.serena@gmail.com" className="btn btn-light">Say Hello</a>
                    </Col>
                </Row>                
            </Container>
		</section>
	);
}

export default Contact;