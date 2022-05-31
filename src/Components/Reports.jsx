import { Button, Card, Col, Row } from 'react-bootstrap';


export default function Reports() {

    return(
        <div className="insideForm">
            <div className="report-header">Report</div><br></br>
                <Card className="Report-card">
                    <Card.Body>
                        <Row>
                            <Col>
                                <label>Request Type</label>
                                <input  className="input" type="text"  />
                            </Col>
                            <Col>
                                <label>Created On</label>
                                <input  className="input" type="text"  />
                            </Col>
                            <Col>
                                <label>Modified On</label>
                                <input  className="input" type="text"  />
                            </Col>
                            <Col>
                                <label>CRA Status</label>
                                <input  className="input" type="text"  />
                            </Col>
                            <Col>
                                <label>Status</label><br></br>
                                <input  className="input" type="text"  />
                            </Col>
                        </Row><br></br><br></br>
                            <Button className="cra-button"
                                 size="l">
                                    Download Excel
                            </Button>
                    </Card.Body>
                </Card>
        </div>
    );

}