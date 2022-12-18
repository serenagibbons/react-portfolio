import { Nav, Navbar, Container } from 'react-bootstrap';
import { Github, Linkedin } from 'react-bootstrap-icons';
import resume from '../assets/Resume_Serena_Gibbons.pdf';

function Navigation() {
  return (
    <Navbar expand="md" variant="dark" className="sticky-top bg-darkblue">
    <Container>
      <Navbar.Brand href="#home">Serena</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto nav-links">
          <Nav.Link href="#home" className='navbar-link'>Home</Nav.Link>
          <Nav.Link href="#skills" className='navbar-link'>Skills</Nav.Link>
          <Nav.Link href="#projects" className='navbar-link'>Projects</Nav.Link>
          <Nav.Link href={resume} target="_blank" className='navbar-link'>Resumé</Nav.Link>
        </Nav>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/serenagibbons/" target="_blank" rel="noreferrer"><Linkedin/></a>
          <a href="https://github.com/serenagibbons" target="_blank" rel="noreferrer"><Github/></a>
        </div>
        <a href="mailto:gibbons.serena@gmail.com" className="btn btn-lightgreen">Let's Connect</a>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
}

export default Navigation;