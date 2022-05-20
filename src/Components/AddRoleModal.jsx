import { Modal, Button ,Row,Col} from "react-bootstrap";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

export default function AddRole(props) {

  //const handleClose = () => props.Show(false);

  return (
  <Modal {...props} size="lg" centered>
    <Modal.Header closeButton className="header"><b>Add Role</b></Modal.Header>
    <Modal.Body>
        <Row>

    <Col>
    <input className="control" type="text" placeholder="Admin" />
    </Col>
    <Col>
    <input type="text" placeholder="Administrator" />
    </Col>
  <Col> <Form.Check
    type="switch"
    id="custom-switch"
    label="Active"
  /></Col>
        </Row>
<br></br><br></br>
<input id="agree" type="checkbox"  />&nbsp;&nbsp;
<label><b>Select All Menu Items</b></label><br></br>
{/* style={{ width: "15px", height: "15px" }} */}

<input id="agree" type="checkbox"  />&nbsp;&nbsp;
<label>Dashboard</label>
{/* style={{ width: "15px", height: "15px" }} */}

<input id="agree" type="checkbox"  /> &nbsp;&nbsp;
<label>Create Request</label>&nbsp;&nbsp;
{/* style={{ width: "15px", height: "15px" }} */}

<input id="agree" type="checkbox"  />&nbsp;&nbsp;
<label>Reports</label>&nbsp;&nbsp;
{/* style={{ width: "15px", height: "15px" }} */}

<hr className="solid"></hr>

<input id="agree" type="checkbox" />&nbsp;&nbsp;
<label>Maintenance</label><br></br>
{/* style={{ width: "15px", height: "15px" }}  */}

<input id="agree" type="checkbox"  />&nbsp;&nbsp;
<label>User Type</label>
{/* style={{ width: "15px", height: "15px" }} */}

<input id="agree" type="checkbox"  />&nbsp;&nbsp;
<label>Role and Authorization Master</label><br></br>
{/* style={{ width: "15px", height: "15px" }} */}

<input id="agree" type="checkbox"  />&nbsp;&nbsp;
<label>Approver Master</label>&nbsp;
{/* style={{ width: "15px", height: "15px" }} */}

<input id="agree" type="checkbox"  />&nbsp;&nbsp;
<label>Type Of Complaint</label>&nbsp;
{/* style={{ width: "15px", height: "15px" }} */}
</Modal.Body>
<Modal.Footer>
<Button>
  Save
</Button>
</Modal.Footer>
</Modal>
  );
};

