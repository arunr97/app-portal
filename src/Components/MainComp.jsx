import UserMaster from './UserMaster';
import Dashboard from "./Dashboard";
import RoleAuthorization from "./RoleAuthorization";
import ApprovalWorkFlow from "./ApprovalWorkflow";
import { Route, Routes } from 'react-router-dom';
import ViewAll from './ViewAll';

import RequestForm from './RequestForm';
import Reports from './Reports';
export default function MainComp() {

    return (<div className="main-container">
        <Routes>
            <Route exact path="/" element={<Dashboard />} ></Route>
            <Route exact path="/create" element={<RequestForm />}></Route>
            <Route exact path="/user" element={<UserMaster />}></Route>
            <Route exact path="/role" element={<RoleAuthorization />}></Route>
            <Route exact path="/approval" element={<ApprovalWorkFlow />}></Route>
            <Route exact path="/complaint" ></Route>
            <Route exact path="/viewAll" element={<ViewAll />}></Route>
            <Route exact path="/report" element={<Reports />}></Route>
        </Routes>
    </div>)
}