import { Container, Row, Col} from 'react-bootstrap';
import avatar from '../images/Serena_Gibbons_Covatar.png';

function Home() {
    return (
        <section id="home" className="bg-darkblue text-white">
            <Container className="col-xxl-8 py-5">
                <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
                    <Col md={4} className="mb-5 px-5">
                        <img src={avatar} class="rounded d-block mx-lg-auto img-fluid" alt="home img"/>
                    </Col>
                    <Col md={8}>
                        <h1 className="display-3 fw-bold lh-1 mb-3">Hi, I'm Serena Gibbons.</h1>
                        <p className="lead display-5 subtitle">Software Developer.</p>
                        <hr />
                        <p className="lead home-text">Welcome to my portfolio.</p>
                        <a href="mailto:gibbons.serena@gmail.com" className="btn btn-lightgreen">Let's Connect</a>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}

export default Home;