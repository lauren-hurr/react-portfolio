import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
      <>
        <a id={"top"}></a>
          <Navbar fixed={"top"} className={"header"} expand="lg">
              <Navbar.Brand href="/">Lauren Hurr</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                      <NavLink className={({ isActive }) => "nav-link" + (isActive ? " underline" : "")} to="/" end>Work</NavLink>
                      <NavLink className={({ isActive }) => "nav-link" + (isActive ? " underline" : "")} to="/about" end>About</NavLink>
                      <Nav.Link className={"nav-link"} href="/lauren_hurr_resume.pdf" target={"_blank"}>Resume</Nav.Link>
                      <Nav.Link className={"nav-link"} href="mailto:lauren.hurr0212@gmail.com">Contact</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
      </>

  );
}

export default NavBar;
