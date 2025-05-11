import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { setTheme as setThemeRedux } from "../../../src/redux/themeSlice";
import { useTranslation } from "../../../src/context/TranslationContext";
import { setLanguage as setLanguageRedux } from "../../../src/redux/languageSlice";

export function Navigation({ theme, setTheme }) {
  const dispatch = useDispatch();
  const { home, pool, wallet, cryptonews } = useTranslation();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    dispatch(setThemeRedux(newTheme));
    document.body.className = newTheme; // Update body class for theme
  };

  const changeLanguage = (newLanguage) => {
    dispatch(setLanguageRedux(newLanguage));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Navbar
      className={`Navbar ${theme === "dark" ? "bg-dark" : "bg-light"}`}
      sticky="top"
      collapseOnSelect
      expand="sm"
      variant={theme === "dark" ? "dark" : "light"}
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
          <Nav
            className={`text-center ${
              theme === "dark" ? "text-white" : "text-dark"
            }`}
          >
            <Nav.Link
              className={theme === "dark" ? "text-white" : "text-dark"}
              href="/"
            >
              {home}
            </Nav.Link>
            <Nav.Link
              className={theme === "dark" ? "text-white" : "text-dark"}
              href="/pool"
            >
              {pool}
            </Nav.Link>
            <Nav.Link
              className={theme === "dark" ? "text-white" : "text-dark"}
              href="/wallet"
            >
              {wallet}
            </Nav.Link>
            <Nav.Link
              className={theme === "dark" ? "text-white" : "text-dark"}
              href="/cryptonews"
            >
              {cryptonews}
            </Nav.Link>
            <NavDropdown title="Lang" id="nav-dropdown">
              <NavDropdown.Item onClick={() => changeLanguage("english")}>
                English
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage("spanish")}>
                Spanish
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage("russian")}>
                Russian
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              onClick={toggleTheme}
              style={{ cursor: "pointer" }}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
