import { Modal, Button, Form } from "react-bootstrap";
import { useState, useRef } from "react";

export function Support(props) {
  const [emailBody, setEmailBody] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [validated, setValidated] = useState(false);
  const form = useRef();

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      const req = await fetch(
        `/api/send-support-email?email=${emailBody.email}&name=${emailBody.name}&message=${emailBody.message}`
      );
      setValidated(true);
      if (req.status === 200) {
        props.onHide();
      } else {
        alert("Server Error");
      }
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Contact Support
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          id="support-email"
          ref={form}
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name"
              value={emailBody.name}
              onChange={(e) => {
                setEmailBody({ ...emailBody, name: e.target.value });
              }}
              autoFocus
            />
            <Form.Control.Feedback type="invalid">
              Please provide a name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Your Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="name@example.com"
              value={emailBody.email}
              onChange={(e) => {
                setEmailBody({ ...emailBody, email: e.target.value });
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please input a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              required
              value={emailBody.message}
              onChange={(e) => {
                setEmailBody({ ...emailBody, message: e.target.value });
              }}
              as="textarea"
              rows={3}
            />
            <Form.Control.Feedback type="invalid">
              Please input a message.
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
        <Button type="submit" form="support-email">
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
}