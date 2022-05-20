import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from 'chart.js';
import { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

    let navigate = useNavigate();
    const [craRequest, SetCraRequest] = useState([
        {
            requestID: "CES/2022/12938987",
            requestType: "CES",
            description: "Tab Leakage",
            createdin: "CRA",
            craStatus: "Pending for Approval",
            eamStatus: "Work Request",
            pendingWith: "CRA"
        },
        {
            requestID: "CES/2022/12972367",
            requestType: "CES",
            description: "Tab Leakage",
            createdin: "CRA",
            craStatus: "Pending for Approval",
            eamStatus: "Work Request",
            pendingWith: "EAM"
        },
        {
            requestID: "CES/2022/67236477",
            requestType: "CES",
            description: "Tab Leakage",
            createdin: "CRA",
            craStatus: "Pending for Approval",
            eamStatus: "Work Request",
            pendingWith: "CRA"
        },
        {
            requestID: "CES/2022/1872645",
            requestType: "CES",
            description: "Tab Leakage",
            createdin: "CRA",
            craStatus: "Pending for Approval",
            eamStatus: "Work Request",
            pendingWith: "CRA"
        },
        {
            requestID: "CES/2022/01831726",
            requestType: "CES",
            description: "Tab Leakage",
            createdin: "CRA",
            craStatus: "Pending for Approval",
            eamStatus: "Work Request",
            pendingWith: "CRA"
        }
    ])


    const optionsDoughnut = {
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: "rgba(75, 192, 192)",
                },
                position: "right",
                // align: "end",
                fullSize: true,
                title: {
                    display: true,
                    text: "attribute",
                    color: "rgba(75, 192, 192)",
                },

            },

        },
        responsive: false,


    };

    ChartJS.register(ArcElement, ChartTooltip, Legend);

    const data = {
        labels: ['Pending to Approve', 'Personal Pending', 'Transferred to EAM', 'Delivered from EAM'],
        datasets: [
            {
                label: '# of Votes',
                data: [60, 20, 150, 80],
                backgroundColor: [
                    'rgba(236, 14, 2, 0.88)',
                    'rgba(7, 139, 16, 0.88)',
                    'rgba(12, 191, 166, 0.88)',
                    'rgba(202, 226, 11, 0.88)',
                ],

            },
        ],
    };

    const viewAll = () => {
        let path = "/viewAll";
        navigate(path);
    }

    return (
        <div className="insideForm">
            <div className="bread-crumb">Dashboard</div>
            <div className="sub-main flexprop">
                <Card className="Dashboard-card">
                    <Card.Subtitle className="Dasboard-Header">Pending to Approve</Card.Subtitle>
                    <Card.Body className="Dashboard-cardBody">45</Card.Body>
                </Card>
                <Card className="Dashboard-card">
                    <Card.Subtitle className="Dasboard-Header">Personal Pending Total</Card.Subtitle>
                    <Card.Body className="Dashboard-cardBody">150</Card.Body>
                </Card>
                <Card className="Dashboard-card">
                    <Card.Subtitle className="Dasboard-Header">Delivered from EAM</Card.Subtitle>
                    <Card.Body className="Dashboard-cardBody">40</Card.Body>
                </Card>
                <Card className="Dashboard-card">
                    <Card.Subtitle className="Dasboard-Header">Pending for Closure</Card.Subtitle>
                    <Card.Body className="Dashboard-cardBody">50</Card.Body>
                </Card>
            </div>

            <Row>
                <Col xs={8} >
                    <Card ><Card.Body><Doughnut data={data} options={optionsDoughnut} ></Doughnut></Card.Body></Card>
                </Col>
                <Col xs={4} >
                    <Card ><Card.Subtitle>Pending in CRA</Card.Subtitle><Card.Body>60</Card.Body></Card>
                    <Card ><Card.Subtitle>Transferred to EAM</Card.Subtitle><Card.Body>20</Card.Body></Card>
                    <Card ><Card.Subtitle>Pending for Closure</Card.Subtitle><Card.Body>80</Card.Body></Card>
                </Col>
            </Row>
            {/* <Row>
                <Col>
                    <div className="bread-crumb">Pending Requests</div>
                    <div className="foot-note">Showing 2 Records</div>
                </Col>
                <Col>
                    <Button size="sm" className="float-end me-2 view-btn" onClick={viewAll}>
                        View All
                    </Button>
                </Col>
            </Row> */}
            <div className="sub-main">
                <div className="myTable">
                    <div className="my-table-head">
                        <div className="my-table-row">
                            <div className="my-table-cell">
                                <span>CRA Request ID</span>
                            </div>
                            <div className="my-table-cell">
                                <span>Request Type</span>
                            </div>
                            <div className="my-table-cell">
                                <span>Description</span>
                            </div>
                            <div className="my-table-cell">
                                <span>Created in CRA</span>
                            </div>
                            <div className="my-table-cell">
                                <span>CRA status</span>
                            </div>
                            <div className="my-table-cell">
                                <span>EAM status</span>
                            </div>
                            <div className="my-table-cell">
                                <span>Currently Pending with</span>
                            </div>
                        </div>
                    </div>
                    <div className="my-table-body table-body">
                        {craRequest.map((item, index) => {
                            return (
                                <div className="my-table-row" key={index}>
                                    <div className="my-table-cell">
                                        <span>{item.requestID}
                                        </span>
                                    </div>
                                    <div className="my-table-cell">
                                        <span>{item.requestType}</span>
                                    </div>
                                    <div className="my-table-cell">
                                        <span>{item.description}</span>
                                    </div>
                                    <div className="my-table-cell">
                                        <span>{item.createdin}</span>
                                    </div>
                                    <div className="my-table-cell">
                                        <span>{item.craStatus}</span>
                                    </div>
                                    <div className="my-table-cell">
                                        <span>{item.eamStatus}</span>
                                    </div>
                                    <div className="my-table-cell">
                                        <span>{item.pendingWith}</span>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>

        </div>
    )
}