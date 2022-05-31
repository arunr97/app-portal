// import React, { useEffect, useState, useRef } from "react";
// import {
//   Form,
//   InputGroup,
//   FormControl,
//   Button,
//   Stack,
//   Table,
//   OverlayTrigger,
//   Tooltip,
// } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import AddRoleModal from "./AddRoleModal";
// import { Pencil } from "react-bootstrap-icons";
// //import { getUsers } from '../services/user-services';

// const UserMaster = () => {
//   const searchInput = useRef("");
//   const [users, setUsers] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [currentRow, setCurrentRowRow] = useState(null);
//   const [filteredResult, setfilteredResult] = useState(false);
//   const [actions, setActions] = useState("");
//   const [actionTaken, setActionTaken] = useState(false);
//   const [isSwitchOn, setIsSwitchOn] = useState(false);
//   const [canPreviousPage, setcanPreviousPage] = useState(false);
//   const [canNextPage, setcanNextPage] = useState(false);
//   const [setPageSize, pageSize] = useState("0");
//   const [gotoPage, setgotoPage] = useState("0");
//   const [previousPage, setpreviousPage] = useState("0");
//   const [nextPage, setnextPage] = useState("0");
//   const [pageCount, setpageCount] = useState("0");
//   const [pageIndex, setpageIndex] = useState("0");
//   const [pageOptions, setpageOptions] = useState("0");

//   function callActionTaken() {
//     setActionTaken(!actionTaken);
//   }

//   const onSwitchAction = () => {
//     setIsSwitchOn(!isSwitchOn);
//   };

//   const fetchUserMaster = async () => {
//     //const result = []; await getUsers();
//     const result = [{
//       UserName: "ZYX",
//       SalaryCode: "12345",
//       Status: true,
//       UserId: "zyx@godrej.com",
//       Role: "User",
//     },
//     {
//       UserName: "ABC",
//       SalaryCode: "35666",
//       Status: true,
//       UserId: "abc@godrej.com",
//       Role: "Admin",
//     },
//     {
//       UserName: "Test",
//       SalaryCode: "937311",
//       Status: false,
//       UserId: "test@godrej.com",
//       Role: "User",
//     },
//     {
//       UserName: "YYY",
//       SalaryCode: "83771",
//       Status: false,
//       UserId: "yyy@godrej.com",
//       Role: "User",
//     },
//     {
//       UserName: "CCC",
//       SalaryCode: "13499",
//       Status: true,
//       UserId: "ccc@godrej.com",
//       Role: "User",
//     }];
//     setUsers(result);
//     setfilteredResult(result);
//   };

//   useEffect(() => {
//     fetchUserMaster();
//   }, [actionTaken]);

//   function handleSearch(searchText) {
//     if (searchText && searchText.length > 0) {
//       searchText = searchText.toUpperCase();
//       let filteredResult = users.filter(
//         (item) =>
//           item.userName.toUpperCase().indexOf(searchText) >= 0 ||
//           item.userName === searchText ||
//           item.emailid === searchText
//       );
//       setfilteredResult(filteredResult);
//     } else {
//       setfilteredResult(users);
//     }
//   }

//   const handleAction = (row, action) => {
//     setActions(action);
//     setShowForm(true);
//     setCurrentRowRow(row);
//   };

//   const actionsButtons = (cell, row, rowIndex, formatExtraData) => {
//     return (
//       <Stack direction="horizontal" gap={2}>
//         {
//           <OverlayTrigger
//             placement="right"
//             overlay={<Tooltip id="tooltip">Edit</Tooltip>}
//           >
//             <Pencil
//               color="blue"
//               onClick={() => {
//                 handleAction(row, "Update");
//               }}
//             />
//           </OverlayTrigger>
//         }
//       </Stack>
//     );
//   };

//   return (
//     filteredResult && (
//       <div className="insideForm">
//         <div className="bread-crumb">Maintain User</div>
//         <div className="sub-main">
//           <Table responsive className="myTable">
//             <thead className="my-table-head">
//               <tr className="my-table-row">
//                 <th className="my-table-cell">Status</th>
//                 <th className="my-table-cell">User ID</th>
//                 <th className="my-table-cell">Salary Code</th>
//                 <th className="my-table-cell">User Name</th>
//                 <th className="my-table-cell">Role ID</th>
//                 <th className="my-table-cell">Action</th>
//               </tr>
//             </thead>
//             <tbody className="my-table-body">
//               {filteredResult.map((users, index) =>
//                 <tr key={index} className="my-table-row">
//                   <td className="my-table-cell"> <Form.Switch
//                     onChange={onSwitchAction}
//                     id="activeSwitch"
//                     label="Active"
//                     checked={users.Status}
//                   // disabled // apply if you want the switch disabled
//                   /></td>
//                   <td className="my-table-cell">{users.UserId}</td>
//                   <td className="my-table-cell">{users.SalaryCode}</td>
//                   <td className="my-table-cell">{users.UserName}</td>
//                   <td className="my-table-cell">{users.Role}</td>
//                   <td className="my-table-cell">{<OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">edit</Tooltip>}>
//                     <Pencil color="blue" onClick={() => { setActions("Update"); setCurrentRowRow(null); setShowForm(true); }} /></OverlayTrigger>}
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </Table>
//           <div className="pagination" align="center">
//             <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//               {'<<'}
//             </button>{' '}
//             <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//               {'<'}
//             </button>{' '}
//             <button onClick={() => nextPage()} disabled={!canNextPage}>
//               {'>'}
//             </button>{' '}
//             <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
//               {'>>'}
//             </button>{' '}
//             <span>
//               Page{' '}
//               <strong>
//                 {pageIndex + 1} of {pageOptions.length}
//               </strong>{' '}
//             </span>
//             <span>
//               | Go to page:{' '}
//               <input
//                 type="number"
//                 defaultValue={pageIndex + 1}
//                 onChange={e => {
//                   const page = e.target.value ? Number(e.target.value) - 1 : 0
//                   gotoPage(page)
//                 }}
//                 style={{ width: '100px' }}
//               />
//             </span>{' '}
//             <select
//               value={pageSize}
//               onChange={e => {
//                 setPageSize(Number(e.target.value))
//               }}
//             >
//               {[10, 20, 30, 40, 50].map(pageSize => (
//                 <option key={pageSize} value={pageSize}>
//                   Show {pageSize}
//                 </option>
//               ))}
//             </select>
//           </div>
//           {showForm && (
//             <AddRoleModal
//               userModal={users}
//               callActionTaken={callActionTaken}
//               actions={actions}
//               show={showForm}
//               row={currentRow}
//               onHide={() => setShowForm(false)}
//             />
//           )}
//         </div>
//       </div>
//     )
//   );
// };

// export default UserMaster;
