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
        <div className="row">

          <div className="col">
            <lable>Type of Complaint</lable> &nbsp;&nbsp;
            <input type="text" className="mb-2" />
          </div>
        </div>
        {/* <label className="label">Approvers</label><br></br><br></br> */}
        <Row>
          <Col>
            <label >CES</label>
            <input type="text" className="mb-2" />
          </Col>
          <Col>
            <label>HMS</label>
            <input type="text" className="mb-2" />
          </Col>
        </Row><br></br>

        <Row>
          <Col>
            <label>EES</label>
            <input type="text" className="mb-2" />
          </Col>
          <Col>
            <label>CRE L</label>
            <input type="text" className="mb-2" />
          </Col>
        </Row> <br></br>
        <Row>
          <Col>
        <label>Type1</label>
        <input type="text" className="mb-2" />
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

