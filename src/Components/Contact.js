import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
	return (
        <section id="contact" className="contact bg-darkblue text-white">
            <Container className="col-xxl-8 py-5">
                <h2 className="lead heading py-5">Let's Connect</h2>
                <Row className="text-center py-5">
                    <Col>
                    <h3>Get In Touch</h3>
                    <p className="contact-text">
                        Thank you for checking out my portfolio. Feel free to get in touch with me.<br/>
                        I am open to discussing new projects or opportunities.
                    </p>
                    <a href="mailto:gibbons.serena@gmail.com" className="btn btn-lightgreen">Say Hello</a>
                    </Col>
                </Row>                
            </Container>
		</section>
	);
}

export default Contact;