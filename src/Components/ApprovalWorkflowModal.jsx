import { Modal, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
//import { Container } from 'react-bootstrap';

export default function ApprovalWorkflow(props) {
  //const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (

    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton className="header"><b>Add Approval Flow</b></Modal.Header>
      {/* style={{ background: "#d3d3d3" }} */}
      <Modal.Body>
        <Row>

          <Col>
            <lable>Request Type</lable> &nbsp;&nbsp;
            <input  className="input" type="text" />
            </Col>
        </Row>
        <label  className="label">Approvers</label><br></br><br></br>
        <Row>
          <Col>
            <label >Approver 1</label>
            <input className="input" type="text" />
          </Col>
          <Col>
            <label>Approver 2</label>
            <input className="input" type="text" />
          </Col>
        </Row><br></br>

        <Row>
          <Col>
            <label>Approver 3</label>
            <input className="input" type="text"/>
          </Col>
          <Col>
            <label>Approver 4</label>
            <input className="input" type="text"/>
          </Col>
        </Row> <br></br>
        <Row>
          <Col>
        <label>Approver 5</label>
        <input className="input" type="text"/>
        </Col></Row>
        
        <label className="label">Receiver</label><br></br><br></br>
        <Row>
          <Col>
            <label>Receiver 1</label><br></br>
            <input className="input" type="text"/><br></br>
          </Col><Col>
            <label>Receiver 2</label><br></br>
            <input className="input" type="text"/><br></br>
          </Col></Row>
      </Modal.Body>
      <Modal.Footer>
        <Button className="cra-button">
          Save
        </Button>
      </Modal.Footer>
    </Modal>


  );
};

