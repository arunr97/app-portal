import { useState, useEffect, useMemo } from "react";
import { Breadcrumb, Form,OverlayTrigger,Button,
  Tooltip } from "react-bootstrap";
import PaginationComp from "./Utility/PaginationComp";
import { Pencil, Search, Filter } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import UserMasterModal from "./UserMasterModal";


export default function ViewAll() {
  //let PageSize = 7;
  const [roles, setRoles] = useState(null);

  const [actions, setActions] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [currentRow, setCurrentRowRow] = useState(null);
  const [actionTaken, setActionTaken] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const [PageSize, setPageSize] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  function callActionTaken() {
    setActionTaken(!actionTaken);
  }

  const onSwitchAction = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const [records, SetRecords] = useState([
    {
      UserName: "ZYX",
      SalaryCode: "12345",
      Status: true,
      UserId: "zyx@godrej.com",
      Role: "User",
    },
    {
      UserName: "ABC",
      SalaryCode: "35666",
      Status: true,
      UserId: "abc@godrej.com",
      Role: "Admin",
    },
    {
      UserName: "Test",
      SalaryCode: "937311",
      Status: false,
      UserId: "test@godrej.com",
      Role: "User",
    },
    {
      UserName: "YYY",
      SalaryCode: "83771",
      Status: false,
      UserId: "yyy@godrej.com",
      Role: "User",
    },
    {
      UserName: "CCC",
      SalaryCode: "13499",
      Status: true,
      UserId: "ccc@godrej.com",
      Role: "User",
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
          item.UserId.toLowerCase().indexOf(searchText) >= 0 ||
          item.SalaryCode.toLowerCase().indexOf(searchText) >= 0
        );
      });
      setFilteredResult(result);
    } else {
      setFilteredResult(records);
    }
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredResult.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredResult, PageSize]);

  return (
    <>
      <div className="bread-crumb">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/maintenance" }} active>
            Maintenance
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/approveflow" }} active>
            Maintain User
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="records-page">
        <div className="records-heading">
          <div className="records-header">
            <span className="dashboard-header">Maintain User</span>
            <span className="dashboard-pending-note">
              {`${filteredResult.length} records`}
            </span>
          </div>
          <div className="records-header-end">
            <div className="records-search">
              <Search size={13} />
              <input
                type="text"
                placeholder="Search for User ID"
                className="records-search-input"
                onChange={handleGlobalSearch}
              ></input>
            </div>
            <div className="records-filter-btn">
              <Filter size={20} />
              <span className="records-filter-span">Filters</span>
            </div>
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
                  <span>User ID</span>
                </div>
                <div className="my-table-cell">
                  <span>Salary Code</span>
                </div>
                <div className="my-table-cell">
                  <span>User Name</span>
                </div>
                <div className="my-table-cell">
                  <span>Role ID</span>
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
                      <span>{item.UserId}</span>
                    </div>
                    <div className="my-table-cell">
                      <span>{item.SalaryCode}</span>
                    </div>
                    <div className="my-table-cell">
                      <span>{item.UserName}</span>
                    </div>
                    <div className="my-table-cell">
                      <span>{item.Role}</span>
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
              <UserMasterModal
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
    </>
  );
}
