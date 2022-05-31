import React, { useEffect, useState, useRef } from "react";
//import BootstrapTable from "react-bootstrap-table-next";
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  Stack,
  Table,
  OverlayTrigger,
  Tooltip,Container,Row,Col
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ComplaintTypeModal from "./ComplaintTypeModal";
import { Pencil } from "react-bootstrap-icons";
//import{getRequestTypeOfComps} from '../services/ComplaintType';
import { getTypeOfComps } from '../services/ComplaintType-service';


const UserMaster = () => {
  
  const searchInput = useRef("");
  const [roles, setRoles] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [currentRow, setCurrentRowRow] = useState(null);
  const [filteredResult, setfilteredResult] = useState(false);
  const [actions, setActions] = useState("");
  const [actionTaken, setActionTaken] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [canPreviousPage, setcanPreviousPage] = useState(false);
  const [canNextPage, setcanNextPage] = useState(false);
  const [setPageSize, pageSize] = useState("0");
  const [gotoPage, setgotoPage] = useState("0");
  const [previousPage, setpreviousPage] = useState("0");
  const [nextPage, setnextPage] = useState("0");
  const [pageCount, setpageCount] = useState("0");
  const [pageIndex, setpageIndex] = useState("0");
  const [pageOptions, setpageOptions] = useState("0");
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    async function complaint() {
      let data = await getTypeOfComps().catch((err) =>
        console.log("Error in fetching data")
      );
      console.log("data",data);
      setRoles(data);
      setfilteredResult(data);
      console.log(roles);
    }
    complaint();
  }, []);

  function callActionTaken() {
    setActionTaken(!actionTaken);
  }

  const onSwitchAction = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  // const fetchUserMaster = async () => {
  //   //const result = []; await getroles();
  //   const result = [{
  //     TypeofComplaint: "DTG Project Work",
  //     Status: true,
  //     CES: "Yes",
  //     HMS: "Yes",
  //     EES: "Yes",
  //     CREL: "",
  //     Type1: "Yes",
  //   },
  //   {
  //     TypeofComplaint: "Project Work",
  //     Status: true,
  //     CES: "Yes",
  //     HMS: "Yes",
  //     EES: "Yes",
  //     CREL: "Yes",
  //     Type1: "Yes",
  //   },
  //   {
  //     TypeofComplaint: "Project Work",
  //     Status: true,
  //     CES: "Yes",
  //     HMS: "Yes",
  //     EES: "Yes",
  //     CREL: "Yes",
  //     Type1: "Yes",
  //   },
  //   {
  //     TypeofComplaint: "Special Project",
  //     Status: true,
  //     CES: "No",
  //     HMS: "Yes",
  //     EES: "",
  //     CREL: "",
  //     Type1: "",
  //   },
  //   {
  //     TypeofComplaint: "Project Work",
  //     Status: true,
  //     CES: "Yes",
  //     HMS: "Yes",
  //     EES: "Yes",
  //     CREL: "Yes",
  //     Type1: "Yes",
  //   }];
  //   setRoles(result);
  //   setfilteredResult(result);
  // };

  // useEffect(() => {
  //   fetchUserMaster();
  // }, [actionTaken]);

  function handleSearch(searchText) {
    if (searchText && searchText.length > 0) {
      searchText = searchText.toUpperCase();
      let filteredResult = roles.filter(
        (item) =>
          item.AuthorisedMenu.toUpperCase().indexOf(searchText) >= 0 ||
          item.AuthorisedMenu === searchText ||
          item.emailid === searchText
      );
      setfilteredResult(filteredResult);
    } else {
      setfilteredResult(roles);
    }
  }

  const handleAction = (row, action) => {
    setActions(action);
    setShowForm(true);
    setCurrentRowRow(row);
  };

  const actionsButtons = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Stack direction="horizontal" gap={2}>
        {
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip id="tooltip">Edit</Tooltip>}
          >
            <Pencil
              color="blue"
              onClick={() => {
                handleAction(row, "Update");
              }}
            />
          </OverlayTrigger>
        }
      </Stack>
    );
  };

  return (
    <>{
    filteredResult && (
      <div className="insideForm">
        {/* <div className="bread-crumb">Role and Role Authorization</div> */}
        <Container fluid >
      <Row>
        <Col>
          <h2>Maintain Type of Complaint</h2>
        </Col>
        </Row>
      </Container>
<Button className=" cra-button pink-btn"
onClick={()=>setShowForm(true)}
// style={{ float: "left" }}
>
+ Add New
</Button>
        <div className="sub-main">
          <Table responsive className="myTable">
            <thead className="my-table-head">
              <tr className="my-table-row">
                <th className="my-table-cell">Status</th>
                <th className="my-table-cell">Type of Complaint</th>
                <th className="my-table-cell">CES</th>
                <th className="my-table-cell">HMS</th>
                <th className="my-table-cell">EES</th>
                <th className="my-table-cell">CRE L</th>
                <th className="my-table-cell">Type 1</th>
                <th className="my-table-cell">Action</th>
              </tr>
            </thead>
            <tbody className="my-table-body">
              {filteredResult.map((roles, index) =>
                <tr key={index} className="my-table-row">
                  <td className="my-table-cell"> <Form.Switch
                    onChange={onSwitchAction}
                    id="activeSwitch"
                    label="Active"
                    checked={roles.Status}
                  // disabled // apply if you want the switch disabled
                  /></td>
                  <td className="my-table-cell">{roles.TypeOfComplaint}</td>
                  <td className="my-table-cell">{roles.CES}</td>
                  <td className="my-table-cell">{roles.HMS}</td>
                  <td className="my-table-cell">{roles.EES}</td>
                  <td className="my-table-cell">{roles.CREL}</td>
                  <td className="my-table-cell">{roles.Type1}</td>
                  <td className="my-table-cell">{<OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">edit</Tooltip>}>
                    <Pencil color="blue" onClick={() => { setActions("Update"); setCurrentRowRow(null); setShowForm(true); }} /></OverlayTrigger>}
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
          <div className="sub-main">
                {/* <Table responsive className="myTable">
          <tr className="my-table-row">
             <th className="my-table-cell">Request Type </th>
             <th className="my-table-cell">Complaint Active</th>
             <th className="my-table-cell">Type of Complaint</th>
             </tr>
             <tbody className="my-table-body">
             {roles.map((roles, index) =>
             <tr key={index}  className="my-table-row">
                <td className="my-table-cell">{roles.RequestType}</td>
                 <td className="my-table-cell">{roles.ComplaintActive}</td>
                 <td className="my-table-cell">{roles.TypeOfComplaint}</td>
                </tr>
             )}
                </tbody>    
          </Table> */}
          </div>
          <div className="pagination" align="center">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {'<<'}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {'<'}
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {'>'}
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              {'>>'}
            </button>{' '}
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            <span>
              | Go to page:{' '}
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(page)
                }}
                style={{ width: '100px' }}
              />
            </span>{' '}
            <select
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value))
              }}
            >
              {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
          {showForm && (
            <ComplaintTypeModal
              userModal={roles}
             callActionTaken={callActionTaken}
              actions={actions}
              show={showForm}
              row={currentRow}
              onHide={() => setShowForm(false)}
            />
          )}
        </div>
      </div>

    ) }
  
  </>
  );
  
};

export default UserMaster;
