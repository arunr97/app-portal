import React, { useEffect, useState, useRef, useMemo } from "react";
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  Stack,
  Table,
  OverlayTrigger,
  Tooltip, Container, Row, Col, Breadcrumb
} from "react-bootstrap";
import { Link } from "react-router-dom";
import AddRoleModal from "./AddRoleModal";
import { Pencil, Search, Filter } from "react-bootstrap-icons";
import PaginationComp from "./Utility/PaginationComp";

const UserMaster = () => {
  const [PageSize, setPageSize] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const searchInput = useRef("");
  const [roles, setRoles] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [currentRow, setCurrentRowRow] = useState(null);
  const [actions, setActions] = useState("");
  const [actionTaken, setActionTaken] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [canPreviousPage, setcanPreviousPage] = useState(false);
  const [canNextPage, setcanNextPage] = useState(false);
  const [gotoPage, setgotoPage] = useState("0");
  const [previousPage, setpreviousPage] = useState("0");
  const [nextPage, setnextPage] = useState("0");
  const [pageCount, setpageCount] = useState("0");
  const [pageIndex, setpageIndex] = useState("0");
  const [pageOptions, setpageOptions] = useState("0");

  function callActionTaken() {
    setActionTaken(!actionTaken);
  }

  const onSwitchAction = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  
  const [records, SetRecords] = useState([
    {
      AuthorisedMenu: "Dashboard Role",
      Status: true,
      RoleID: "Admin",
      RoleDescription: "Administartor",
    },
    {
      AuthorisedMenu: "Autorization Master",
      Status: true,
      RoleID: "Admin",
      RoleDescription: "Administartor",
    },
    {
      AuthorisedMenu: "User",
      Status: false,
      RoleID: "Client",
      RoleDescription: "Testing",
    },
    {
      AuthorisedMenu: "Admin",
      Status: true,
      RoleID: "HR",
      RoleDescription: "Administration",
    },
  ]);

  const [filteredResult, setFilteredResult] = useState([]);

  const fetchAllPending = async () => {
    setFilteredResult(records);
  };


  useEffect(() => {
    fetchAllPending();
  }, []);

  const handleGlobalSearch = (e) => {
    let searchText = e.target.value.toLowerCase();
    if (searchText) {
      let result = records.filter((item) => {
        return (
          item.requestID.toLowerCase().indexOf(searchText) >= 0 ||
          item.requestType.toLowerCase().indexOf(searchText) >= 0
        );
      });
      setFilteredResult(result);
    } else {
      setFilteredResult(records);
    }
  };

  const handleAction = (row, action) => {
    setActions(action);
    setShowForm(true);
    setCurrentRowRow(row);
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredResult.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredResult, PageSize]);


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
    filteredResult && (
      <div className="insideForm">
        {/* <div className="bread-crumb">Role and Role Authorization</div> */}
        {/* <Container fluid >
          <Row>
            <Col>
              <h2>Maintain Approval Workflow</h2>
            </Col>
          </Row>
        </Container> */}
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/maintenance" }} active>
            Maintenance
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/approveflow" }} active>
            Role and Role Authorisation
          </Breadcrumb.Item>
        </Breadcrumb>
        <Button className=" cra-button pink-btn"
          onClick={() => setShowForm(true)}
          style={{ float: "left" }}
        >
          + Add Role
</Button>


        <div className="sub-main">
          <div className="records-header-end">
            <div className="records-search">
              <Search size={13} />
              <input
                type="text"
                placeholder="Search for Type of Complaint"
                className="records-search-input"
                onChange={handleGlobalSearch}
              ></input>
            </div>
            <div className="records-filter-btn">
              <Filter size={15} />
              <span className="records-filter-span">Filters</span>
            </div>
          </div>
          {currentTableData && (
            <div className="myTable">
              <div className="my-table-head">
                <div className="my-table-row">
                  <div className="my-table-cell">
                    <span>Status</span>
                  </div>
                  <div className="my-table-cell">
                    <span>Role ID</span>
                  </div>
                  <div className="my-table-cell">
                    <span>Role Description</span>
                  </div>
                  <div className="my-table-cell">
                    <span>Authorised Menu</span>
                  </div>
                  <div className="my-table-cell">
                    <span>Action</span>
                  </div>
                </div>
              </div>
              <div className="my-table-body">
                {currentTableData.map((item, index) => {
      
                  return (
                    <div className="my-table-row" key={index}>
                      <div className="my-table-cell">
                        <span><Form.Switch
                    onChange={onSwitchAction}
                    id="activeSwitch"
                    label="Active"
                    checked={item.Status}/></span>
                      </div>
                      <div className="my-table-cell">
                        <span>{item.RoleID}</span>
                      </div>
                      <div className="my-table-cell">
                        <span>{item.RoleDescription}</span>
                      </div>
                      <div className="my-table-cell">
                        <span>{item.AuthorisedMenu}</span>
                      </div>
                      <div className="my-table-cell">
                        <span>{<OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">edit</Tooltip>}>
                          <Pencil color="blue" onClick={() => { setActions("Update"); setCurrentRowRow(null); setShowForm(true); }} /></OverlayTrigger>}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="records-pagination-div">
            <span className="records-pagination-span">Items Per Page:</span>
            <input
              type="number"
              className="records-pagination-input"
              onChange={(e) => setPageSize(e.target.value)}
            ></input>

            {showForm && (
              <AddRoleModal
                userModal={roles}
                callActionTaken={callActionTaken}
                actions={actions}
                show={showForm}
                row={currentRow}
                currentPage={currentPage}
                onHide={() => setShowForm(false)}
              />
            )}

            <PaginationComp
              currentPage={currentPage}
              totalCount={filteredResult.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />

          </div>
        </div>
      </div>
    )
  );
};

export default UserMaster;
