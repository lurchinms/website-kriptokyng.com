import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Banner() {
  return (
    <div className="mx-auto banner px-3">
      <Row className="justify-content-md-center">
        <Col lg="2">
          <center>
            <i className="fa fa-support fa-3x"></i>
            <h4>Support</h4>
          </center>
          <sub>
            We provide quick personal assistance to all of our miners, please
            use links below to contact us, should any issues arise.
          </sub>
        </Col>
        <Col lg="2">
          <center>
            <i className="fa fa-lock fa-3x"></i> <h4>Security</h4>
          </center>
          <sub>
            We provide security using several layers of protection, from
            hardware all the way to down to physical network security.
          </sub>
        </Col>
        <Col lg="2">
          <center>
            <i className="fa fa-eye fa-3x"></i>
            <h4>Transparency</h4>
          </center>
          <sub>
            While Bitcoin is built on transparency and trust, it is our aim to
            bring the same thing to our mining pools.
          </sub>
        </Col>
        <Col lg="2">
          <center>
            <i className="fa fa-mobile fa-3x"></i>
            <h4>Mobile Viewing</h4>
          </center>
          <sub>
            This pool has been design to be viewed on mobile devices, iPads and
            desktop.
          </sub>
        </Col>
      </Row>
    </div>
  );
}
