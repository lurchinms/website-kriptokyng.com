import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "../../src/context/TranslationContext";
export function Banner() {
  const {
    Support,
    SupportText,
    Security,
    SecurityText,
    Transparency,
    TransparencyText,
    MobileViewing,
    ViewingText,
  } = useTranslation();
  return (
    <div className="mx-auto banner px-3">
      <Row className="justify-content-md-center">
        <Col lg="2">
          <center>
            <i className="fa fa-support fa-3x"></i>
            <h4>{Support}</h4>
          </center>
          <sub>{SupportText}</sub>
        </Col>
        <Col lg="2">
          <center>
            <i className="fa fa-lock fa-3x"></i> <h4>{Security}</h4>
          </center>
          <sub>{SecurityText}</sub>
        </Col>
        <Col lg="2">
          <center>
            <i className="fa fa-eye fa-3x"></i>
            <h4>{Transparency}</h4>
          </center>
          <sub>{TransparencyText}</sub>
        </Col>
        <Col lg="2">
          <center>
            <i className="fa fa-mobile fa-3x"></i>
            <h4>{MobileViewing}</h4>
          </center>
          <sub>{ViewingText}</sub>
        </Col>
      </Row>
    </div>
  );
}
