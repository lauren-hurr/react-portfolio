import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <>
            <Navbar bg={"white"} className={"footer"} expand="xl">
                <Navbar.Brand href="/" className={"footerBrand"}>Lauren Hurr</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="/">Back to Top</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link href="/">LinkedIn</Nav.Link>
                    <Nav.Link href="/">Get In Touch</Nav.Link>
                </Nav>
            </Navbar>
        </>

    );
}

export default Footer;
