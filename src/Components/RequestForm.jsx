import { Button, Col, Container, Row ,Stack} from 'react-bootstrap';

export default function RequestForm() {

    return (

        <div className="insideForm" >
            {/* <div className="report-header">Request Form</div> */}
            <h5>Request Form</h5>
            <Container className="request-card">
                {/* <Card.Body> */}
                <Row>
                    <Col>
                        <label>Request Type</label><br></br>
                        <input type="text" />
                    </Col>
                    <Col>
                        <label>Organization</label><br></br>
                        <input type="text" />
                    </Col>
                    <Col>
                        <label>Discription</label><br></br>
                        <input type="text" />
                    </Col>
                    <Col>
                        <label>Equipments</label><br></br>
                        <input type="text" />
                    </Col>
                </Row><br></br>
                <Row>
                    <Col>
                        <label>Asset Location</label><br></br>
                        <input type="text" />
                    </Col>
                    <Col>
                        <label>Department</label><br></br>
                        <input type="text" />
                    </Col>
                    <Col>
                        <label>Type of Complaint</label><br></br>
                        <input type="text" />
                    </Col>
                    <Col>
                        <label>Class</label><br></br>
                        <input type="text" />
                    </Col>
                </Row><br></br>
                <Row>
                    <Col>
                        <label>Assign To</label><br></br>
                        <input type="text" />
                    </Col>
                    <Col>
                        <label>Created By</label><br></br>
                        <input type="text" className="label-left" />
                    </Col>
                    <Col>
                        <label>Created Remarks</label><br></br>
                        <input type="text" className="label-left" />
                    </Col>
                    <Col></Col>
                </Row><br></br>

                <div className="mb-3">

                    <label for="formFileMultiple" className="form-label">Documents Attached</label>

                    <input className="form-control" type="file" id="formFileMultiple" multiple></input>

                </div>
                <br></br>
                <Stack gap={2} direction="horizontal">
                <Button variant="outline-primary">Cancel</Button>
                <Button variant="primary">Save</Button>
                </Stack>
            </Container>
        </div>
    );

}