import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../../src/redux/languageSlice";
export function Navigation() {
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  const handleLanguageChange = (language) => {
    console.log("first,", language);
    dispatch(setLanguage(language)); // Dispatch the selected language
  };
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
            <NavDropdown title="More" id="nav-dropdown">
              <NavDropdown.Item onClick={() => handleLanguageChange("spanish")}>
                Spanish
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLanguageChange("russian")}>
                Russian
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
