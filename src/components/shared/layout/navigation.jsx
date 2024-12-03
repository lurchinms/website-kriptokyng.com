import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export function Navigation() {
  return (
    <Navbar
      className="Navbar"
      sticky="top"
      collapseOnSelect
      expand="sm"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="../../logo-mini.png"
            width="28"
            height="28"
            className="d-inline-block align-top"
            alt="KriptoKyng logo"
          />{" "}
          KriptoKyng
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-md-end"
        >
          <Nav className="text-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pool">Pool</Nav.Link>
            <Nav.Link href="/wallet">Wallet</Nav.Link>
            <Nav.Link href="/cryptonews">CryptoNews</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
