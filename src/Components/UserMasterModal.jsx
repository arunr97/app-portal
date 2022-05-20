import React, { useState } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";
//import { addNewUser, deleteUser, updateUser } from '../services/user-services';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserMasterModal(props) {
  const action = props.actions;
  let userModal = props.userModal;
  const [userName, setUserName] = useState(props.row ? props.row.userName : "");
  const [userId, setuserId] = useState(props.row ? props.row.userId : "");
  const [salaryCode, setsalaryCode] = useState(props.row ? props.row.salaryCode : "");
  const [status, setstatus] = useState(props.row ? props.row.status : "");
  const [accessRole, setAccessRole] = useState(props.row ? props.row.accessRole : "");
  const [errorMessage, setErrorMessage] = React.useState("");

  const options = [
    { value: true, label: 'Active' },
    { value: false, label: 'Inactive' }
  ]

  const roles = [
    { value: 'Admin', label: 'Admin' },
    { value: 'User', label: 'User' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();

    const UserData = {
      userId,
      userName,
      salaryCode,
      status,
      accessRole
    };

   if (action === "Update") {
      // updateUser(UserData, userId)
      //   .then((resp) => {
      //     if (resp.status === 200) {
      //       console.log(resp.data.message);
      //       toast.success(resp.data.message);
      //       props.onHide();
      //     }
      //   }).catch((error) => {
      //     console.log("Error in updating User in Master", error);
      //     toast.error(error.response.data.message)
      //   });
    }
    props.callActionTaken()
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
          {action} User
        </Modal.Title>
      </Modal.Header>
      <Form
        onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group className="mb-3 required" controlId="UserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  maxlength="255"
                  placeholder="Enter User Name"
                  value={userName}
                  onChange={(e) => { setUserName(e.target.value); }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 required" controlId="userId">
                <Form.Label>User Id</Form.Label>
                {action !== "Add" &&
                  <Form.Control
                    readOnly
                    type="email"
                    maxlength="255"
                    placeholder="Enter Email Id"
                    value={userId}
                    onChange={(e) => { setuserId(e.target.value); }}
                  />
                }
                {action === "Add" &&
                  <Form.Control
                    required
                    type="email"
                    maxlength="255"
                    placeholder="Enter Email Id"
                    value={userId}
                    onChange={(e) => { setuserId(e.target.value); }}
                  />
                }
                <div className="text-danger">{errorMessage}</div>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="salaryCode">
                <Form.Label>Salary Code</Form.Label>
                <Form.Control
                  type='number'
                  maxLength="10"
                  placeholder="Enter salary code"
                  value={salaryCode}
                  onChange={(e) => setsalaryCode(e.target.value.slice(0, 10))}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="status">
                <Form.Label>status</Form.Label>
                <Form.Select name="status"
                  value={status} onChange={(e) => setstatus(e.target.value)} >
                  <option value="">Select status</option>
                  {options.map((item, index) => {
                    return <option key={index} value={item.value}>{item.label}</option>
                  })}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 required" controlId="Role">
                <Form.Label>Role</Form.Label>
                <Form.Select name="Role"
                  required
                  value={accessRole} onChange={(e) => setAccessRole(e.target.value)} >
                  <option value="">Select Role</option>
                  {roles.map((item, index) => {
                    return <option key={index} value={item.value}>{item.label}</option>
                  })}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            {action === "Delete" ? "Delete" : action === "Update" ? "Update" : "Submit"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}


export default UserMasterModal;
