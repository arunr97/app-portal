import {  Button,Container,Row,Col } from "react-bootstrap";
import AddRole from "./AddRoleModal";
import { useEffect, useState } from "react";

export default function RoleAuthorization() {
const [showForm, setShowForm] = useState(false);  
//const handleShow = () => setShow(true);
useEffect(()=>{
  console.log(showForm);
},[showForm]);
    return(
        <>           
      <Container fluid >
      <Row>
        <Col>
          <h2>Role and Role Authorization</h2>
        </Col>
        </Row>
      </Container>
<Button className="pink-btn"
onClick={()=>setShowForm(true)}
// style={{ float: "left" }}
>
+ Add New
</Button>
{showForm && <AddRole
    show={showForm}
    onHide={() => setShowForm(false)}
  />}
  </>
    );
};

