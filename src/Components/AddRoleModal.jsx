import { Modal, Button ,Row,Col} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export default function AddRole(props) {

  return (
  <Modal {...props} size="lg" centered>
    <Modal.Header closeButton className="header"><b>Add Role</b></Modal.Header>
    <Modal.Body>
        <Row>

    <Col>
    <input className="control" type="text" placeholder="Admin" />
    </Col>
    <Col>
    <input className="control" type="text" placeholder="Administrator" />
    </Col>
  <Col> <Form.Check
    type="switch"
    id="custom-switch"
    label="Active"
  /></Col>
        </Row>
<br></br><br></br>
<input id="agree" type="checkbox"  />&nbsp;&nbsp;
<label className="label">Select All Menu Items</label><br></br>

<input id="agree" type="checkbox"  />&nbsp;&nbsp;
<label>Dashboard</label>

<input id="agree" type="checkbox"  /> &nbsp;&nbsp;
<label>Create Request</label>&nbsp;&nbsp;

<input id="agree" type="checkbox"  />&nbsp;&nbsp;
<label>Reports</label>&nbsp;&nbsp;

<hr className="solid"></hr>

<input id="agree" type="checkbox" />&nbsp;&nbsp;
<label>Maintenance</label><br></br>
{/* style={{ width: "15px", height: "15px" }}  */}

<input id="agree" type="checkbox"  />&nbsp;&nbsp;
<label>User Type</label>
{/* style={{ width: "15px", height: "15px" }} */}

<input id="agree" type="checkbox"  />&nbsp;&nbsp;
<label>Role and Authorization Master</label><br></br>

<input id="agree" type="checkbox"  />&nbsp;&nbsp;
<label>Approver Master</label>&nbsp;

<input id="agree" type="checkbox"  />&nbsp;&nbsp;
<label>Type Of Complaint</label>&nbsp;

</Modal.Body>
<Modal.Footer>
<Button className="cra-button">
  Save
</Button>
</Modal.Footer>
</Modal>
  );
};

