import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Navigate, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [craRequest, SetCraRequest] = useState([
    {
      requestID: "CES/2022/12938987",
      requestType: "CES",
      description: "Tab Leakage",
      createdin: "CRA",
      craStatus: "Pending for Approval",
      eamStatus: "Work Request",
      pendingWith: "CRA",
    },
    {
      requestID: "CES/2022/12972367",
      requestType: "CES",
      description: "Tab Leakage",
      createdin: "CRA",
      craStatus: "Pending for Approval",
      eamStatus: "Work Request",
      pendingWith: "EAM",
    },
    {
      requestID: "CES/2022/67236477",
      requestType: "CES",
      description: "Tab Leakage",
      createdin: "CRA",
      craStatus: "Pending for Approval",
      eamStatus: "Work Request",
      pendingWith: "CRA",
    },
    {
      requestID: "CES/2022/1872645",
      requestType: "CES",
      description: "Tab Leakage",
      createdin: "CRA",
      craStatus: "Pending for Approval",
      eamStatus: "Work Request",
      pendingWith: "CRA",
    },
    {
      requestID: "CES/2022/01831726",
      requestType: "CES",
      description: "Tab Leakage",
      createdin: "CRA",
      craStatus: "Pending for Approval",
      eamStatus: "Work Request",
      pendingWith: "CRA",
    },
  ]);

  const optionsDoughnut = {
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "rgba(0, 0, 0)",
        },
        position: "left",
        fullSize: true,
        title: {
          display: true,
          text: "Request Type",
          color: "rgba(black, 2)",
        },
      },
    },
    responsive: false,
    cutout: 50,
  };

  ChartJS.register(ArcElement, ChartTooltip, Legend);

  const data = {
    labels: ["CES", "HMS", "EES", "CRE L"],
    datasets: [
      {
        label: "Request Type",
        data: [60, 100, 150, 80],
        backgroundColor: [
          "purple",
          "orange",
          "rgba(12, 191, 166, 0.88)",
          "rgba(202, 226, 11, 0.88)",
        ],
      },
    ],
  };

  let navigate = useNavigate();

  const viewAll = () => {
    let path = "/viewAll";
    navigate(path);
  };

  return (
    <>
      <div className="dashboard-main">
        <span className="dashboard-header">Dashboard</span>
        <Row className="dashboard-card-row">
          <Col md={3}>
            <div className="dashboard-card-col">
              <span className="dashboard-span-header">Pending to Approve</span>
              <span className="dashboard-span-value">45</span>
            </div>
          </Col>
          <Col md={3}>
            <div className="dashboard-card-col">
              <span className="dashboard-span-header">
                Personal Pending Total
              </span>
              <span className="dashboard-span-value">150</span>
            </div>
          </Col>
          <Col md={3}>
            <div className="dashboard-card-col">
              <span className="dashboard-span-header">Pending in CRA</span>
              <span className="dashboard-span-value">40</span>
            </div>
          </Col>
          <Col md={3}>
            <div className="dashboard-card-col">
              <span className="dashboard-span-header">Pending for Review</span>
              <span className="dashboard-span-value">50</span>
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={9} className="pe-0">
            <div className="dashboard-doughnut">
              <Doughnut data={data} options={optionsDoughnut}></Doughnut>
            </div>
          </Col>
          <Col md={3} className="ps-0">
            <div className="dashboard-box box1">
              <span className="dashboard-box-head">Transferred to EAM</span>
              <span className="dashboard-box-value">40</span>
            </div>
            <div className="dashboard-box box2">
              <span className="dashboard-box-head">Delivered from EAM</span>
              <span className="dashboard-box-value">20</span>
            </div>
            <div className="dashboard-box box3">
              <span className="dashboard-box-head">Pending for Closure</span>
              <span className="dashboard-box-value">80</span>
            </div>
          </Col>
        </Row>

        <div className="dashboard-pending">
          <div>
            <span className="dashboard-pending-header">Pending Request</span>
            <br />
            <span className="dashboard-pending-note">Showing 5 records</span>
          </div>
          <div className="dashboard-viewall">
            <Button
              size="md"
              className="dashboard-viewall-btn"
              onClick={viewAll}
            >
              VIEW ALL
            </Button>
            <div className="dashboard-personal">
              <span className="dashboard-personal-header">
                Personal Requests
              </span>
              <Form.Group className="mb-3" controlId="formCheckbox">
                <Form.Check type="checkbox" />
              </Form.Group>
            </div>
          </div>
        </div>
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
          <div className="my-table-body">
            {craRequest.map((item, index) => {
              return (
                <div className="my-table-row" key={index}>
                  <div className="my-table-cell">
                    <span>{item.requestID}</span>
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
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
