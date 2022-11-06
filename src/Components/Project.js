import { Row, Col } from 'react-bootstrap';
import { Github, BoxArrowUpRight } from 'react-bootstrap-icons';

function Project(props) {
    const tech = props.item.stack.map(technology => (
      <p>{technology}</p>
    ));

    return (
        <Row>
        <Col md={7}>
          <a href={props.item.url === "" ? props.item.source : props.item.url} target="_blank" rel="noreferrer">
            <img class="img-fluid rounded mb-3 mb-md-0" src={props.item.image} alt=""/>
          </a>
        </Col>
        <Col md={5}>
          <h3>{props.item.title}</h3>
          <p>{props.item.description}</p>
          <div className="tech-stack flex-row-reverse">
            {tech}
          </div>
          <div className="project-links text-end">
            <a href={props.item.source} target="_blank" rel="noreferrer"><Github /></a>
            {props.item.url === "" ? null : <a href={props.item.url} target="_blank" rel="noreferrer"><BoxArrowUpRight /></a>}
          </div>
        </Col>
      </Row>
    );
}

export default Project;