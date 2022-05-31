import { useState, useEffect, useMemo } from "react";
import { Breadcrumb, Form } from "react-bootstrap";
import PaginationComp from "./Utility/PaginationComp";
import { Search, Filter } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { getCustomerRequests } from "../services/customerRequest-service";

export default function ViewAll() {
  const user = "arunkbr@godrej.com";
  const [PageSize, setPageSize] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [records, SetRecords] = useState([
    // {
    //   requestID: "CES/2022/12938987",
    //   requestType: "CES",
    //   description: "Tab Leakage",
    //   createdin: "CRA",
    //   craStatus: "Transferred to EAM",
    //   eamStatus: "Work Request",
    //   pendingWith: "CRA",
    //   createdBy: "arunkbr@godrej.com",
    // },
    // {
    //   requestID: "CES/2022/12972367",
    //   requestType: "CES",
    //   description: "Tab Leakage",
    //   createdin: "CRA",
    //   craStatus: "Pending for Approval",
    //   eamStatus: "Work Request",
    //   pendingWith: "EAM",
    //   createdBy: "arunkbr@godrej.com",
    // },
    // {
    //   requestID: "CES/2022/67236477",
    //   requestType: "CES",
    //   description: "Tab Leakage",
    //   createdin: "CRA",
    //   craStatus: "Approved",
    //   eamStatus: "Work Request",
    //   pendingWith: "CRA",
    //   createdBy: "sujit@godrej.com",
    // },
    // {
    //   requestID: "CES/2022/1872645",
    //   requestType: "CES",
    //   description: "Tab Leakage",
    //   createdin: "CRA",
    //   craStatus: "Closed in CRA",
    //   eamStatus: "Work Request",
    //   pendingWith: "CRA",
    //   createdBy: "arunkbr@godrej.com",
    // },
    // {
    //   requestID: "CES/2022/01831726",
    //   requestType: "CES",
    //   description: "Tab Leakage",
    //   createdin: "CRA",
    //   craStatus: "Pending for Approval",
    //   eamStatus: "Work Request",
    //   pendingWith: "CRA",
    //   createdBy: "shithij@godrej.com",
    // },
    // {
    //   requestID: "CES/2022/01831726",
    //   requestType: "CES",
    //   description: "Tab Leakage",
    //   createdin: "CRA",
    //   craStatus: "Pending for Approval",
    //   eamStatus: "Work Request",
    //   pendingWith: "CRA",
    //   createdBy: "shithij@godrej.com",
    // },
    // {
    //   requestID: "CES/2022/01831726",
    //   requestType: "CES",
    //   description: "Tab Leakage",
    //   createdin: "CRA",
    //   craStatus: "Pending for Approval",
    //   eamStatus: "Work Request",
    //   pendingWith: "CRA",
    //   createdBy: "shithij@godrej.com",
    // },
    // {
    //   requestID: "CES/2022/01831726",
    //   requestType: "CES",
    //   description: "Tab Leakage",
    //   createdin: "CRA",
    //   craStatus: "Pending for Approval",
    //   eamStatus: "Work Request",
    //   pendingWith: "CRA",
    //   createdBy: "sagargd@godrej.com",
    // },
    // {
    //   requestID: "CES/2022/01831726",
    //   requestType: "CES",
    //   description: "Tab Leakage",
    //   createdin: "CRA",
    //   craStatus: "Pending for Approval",
    //   eamStatus: "Work Request",
    //   pendingWith: "CRA",
    //   createdBy: "sagargd@godrej.com",
    // },
  ]);
  const [filteredResult, setFilteredResult] = useState([]);

  const fetchAllPending = async () => {
    let result = await getCustomerRequests().catch((err) => {
      console.log(err, "Error in Fetching Customer Requests");
    });
    SetRecords(result);
    setFilteredResult(records);
  };

  useEffect(() => {
    fetchAllPending();
  }, []);

  const handlePersonalReq = (e) => {
    if (e.target.checked) {
      let personalReq = filteredResult.filter((item) => {
        return item.createdBy === user;
      });
      setFilteredResult(personalReq);
    } else {
      setFilteredResult(records);
    }
  };

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
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/viewAll" }} active>
            All Requests
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="records-page">
        <div className="records-heading">
          <div className="records-header">
            <span className="dashboard-header">All Requests</span>
            <span className="dashboard-pending-note">
              {`${filteredResult.length} records`}
            </span>
          </div>
          <div className="records-header-end">
            <div className="records-search">
              <Search size={13} />
              <input
                type="text"
                placeholder="Search for CRA Request ID, Request ID"
                className="records-search-input"
                onChange={handleGlobalSearch}
              ></input>
            </div>
            <div className="records-filter-btn">
              <Filter size={20} />
              <span className="records-filter-span">Filters</span>
            </div>
            <div className="records-personal-pending">
              <Form.Group controlId="formCheckbox">
                <Form.Check type="checkbox" onChange={handlePersonalReq} />
              </Form.Group>
              <span className="records-personal-head">Personal Requests</span>
            </div>
          </div>
        </div>
        {currentTableData && (
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
              {currentTableData.map((item, index) => {
                let Statusclass = "";
                if (item.craStatus === "Transferred to EAM") {
                  Statusclass = "transferred-to-eam my-table-cell";
                } else if (item.craStatus === "Pending for Approval") {
                  Statusclass = "pending-for-approval my-table-cell";
                } else if (item.craStatus === "Approved") {
                  Statusclass = "approved my-table-cell";
                } else if (item.craStatus === "Closed in CRA") {
                  Statusclass = "closed-in-cra my-table-cell";
                } else {
                  Statusclass = "my-table-cell";
                }
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
                    <div className={Statusclass}>
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
        )}
        <div className="records-pagination-div">
          <span className="records-pagination-span">Items Per Page:</span>
          <input
            type="number"
            className="records-pagination-input"
            onChange={(e) => setPageSize(e.target.value)}
          ></input>

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
