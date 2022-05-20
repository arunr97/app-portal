import { Button, Container, Row, Col } from "react-bootstrap";
import ApprovalWorkflow from "./ApprovalWorkflowModal";
import { useState } from "react";

export default function ApprovalWorkFlow() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Container fluid >
        <Row>
          <Col>
            <h2>Maintain Approval Work</h2>
          </Col>
        </Row>
      </Container>
      <Button className="cra-button pink-btn" onClick={() => setShow(true)}>+ Add New </Button>
      {show && <ApprovalWorkflow
        show={show}
        onHide={() => setShow(false)}
      />}
    </>
  );
};

