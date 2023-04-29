import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
      <>
          <Navbar fixed={"top"} className={"header"} expand="xl">
              <Navbar.Brand href="/">Lauren Hurr</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                      <Nav.Link href="/">Work</Nav.Link>
                      <Nav.Link href="/about">About</Nav.Link>
                      <Nav.Link href="/Lauren Hurr Resume.pdf">Resume</Nav.Link>
                      <Nav.Link href="mailto:lauren.hurr0212@gmail.com">Contact</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
      </>

  );
}

export default NavBar;
