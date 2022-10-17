import { Row, Col } from 'react-bootstrap';
import { Github, BoxArrowUpRight } from 'react-bootstrap-icons';

function Project() {
    return (
        <Row>
        <Col md={7}>
          <a href="#">
            <img class="img-fluid rounded mb-3 mb-md-0" src="https://via.placeholder.com/700x300" alt=""/>
          </a>
        </Col>
        <Col md={5}>
          <h3>Project One</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
          <div className="tech-stack">

          </div>
          <div className="project-links text-end">
            <a href="#" target="_blank" rel="noreferrer"><Github /></a>
            <a href="#" target="_blank" rel="noreferrer"><BoxArrowUpRight /></a>
          </div>
        </Col>
      </Row>
    );
}

export default Project;