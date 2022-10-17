import { Container, Row, Col} from 'react-bootstrap';

function Home() {
    return (
        <section id="home" className="bg-dark text-white">
            <Container className="col-xxl-8 py-5">
                <Row className="flex-sm-row align-items-center g-5 py-5">
                    <Col>
                        <h1 className="display-1 fw-bold lh-1 mb-3">Hi, I'm Serena Gibbons.</h1>
                        <p className="lead display-5">Software Developer.</p>
                        <hr />
                        <p className="lead">Welcome to my portfolio.</p>
                        <a href="mailto:gibbons.serena@gmail.com" className="btn btn-light">Let's Connect</a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;