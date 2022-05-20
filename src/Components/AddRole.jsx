import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

export default function AddRole() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <Container fluid >
      <div class="row" >
        <div class="col-6 mb-2">
          <h2>Role and Role Authorization</h2>
        </div>
      </div>
      <div class="row" >
        <div class="col">
         
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header style={{background: "#d3d3d3"}}><b>Add Role</b></Modal.Header>
          <Modal.Body>
            <div className="row">

              <div className="col">
                <input class="control" type="text" placeholder="Admin" />
              </div>
              <div className="col">
                <input type="text" placeholder="Administrator" />
              </div>
              <div className="col"> <Form.Check
                type="switch"
                id="custom-switch"
                label="Active"
              /></div>
            </div>
            <br></br><br></br>
            <input id="agree" type="checkbox" style={{ width: "15px", height: "15px" }} />&nbsp;&nbsp;
            <label><b>Select All Menu Items</b></label><br></br>

            <input id="agree" type="checkbox" style={{ width: "15px", height: "15px" }} />&nbsp;&nbsp;
            <label>Dashboard</label>

            <input id="agree" type="checkbox" style={{ width: "15px", height: "15px" }} /> &nbsp;&nbsp;
            <label>Create Request</label>&nbsp;&nbsp;

            <input id="agree" type="checkbox" style={{ width: "15px", height: "15px" }} />&nbsp;&nbsp;
            <label>Reports</label>&nbsp;&nbsp;

            <hr class="solid"></hr>

            <input id="agree" type="checkbox" style={{ width: "15px", height: "15px" }} />&nbsp;&nbsp;
            <label>Maintenance</label><br></br>

            <input id="agree" type="checkbox" style={{ width: "15px", height: "15px" }} />&nbsp;&nbsp;
            <label>User Type</label>

            <input id="agree" type="checkbox" style={{ width: "15px", height: "15px" }} />&nbsp;&nbsp;
            <label>Role and Authorization Master</label><br></br>

            <input id="agree" type="checkbox" style={{ width: "15px", height: "15px" }} />&nbsp;&nbsp;
            <label>Approver Master</label>&nbsp;

            <input id="agree" type="checkbox" style={{ width: "15px", height: "15px" }} />&nbsp;&nbsp;
            <label>Type Of Complaint</label>&nbsp;

          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={handleClose}>
              Cancel
            </Button>
            <Button>
              Save
            </Button>
          </Modal.Footer>

        </Modal>
      </div>
    </Container>
  );
};

