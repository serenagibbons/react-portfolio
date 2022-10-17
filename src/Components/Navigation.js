import { Nav, Navbar, Container } from 'react-bootstrap';
import { Github, Linkedin } from 'react-bootstrap-icons';

function Navigation() {
  return (
    <Navbar expand="md" bg="dark" variant="dark" className="sticky-top">
    <Container>
      <Navbar.Brand href="#home">Serena</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto nav-links">
          <Nav.Link href="#home" className='navbar-link'>Home</Nav.Link>
          <Nav.Link href="#skills" className='navbar-link'>Skills</Nav.Link>
          <Nav.Link href="#projects" className='navbar-link'>Projects</Nav.Link>
          <Nav.Link href="" target="_blank" className='navbar-link'>Resumé</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/serenagibbons/" target="_blank" rel="noreferrer"><Linkedin/></a>
        <a href="https://github.com/serenagibbons" target="_blank" rel="noreferrer"><Github/></a>
      </div>
      <a href="mailto:gibbons.serena@gmail.com" className="btn btn-light">Let's Connect</a>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
    </Container>
  </Navbar>

  );
}

export default Navigation;