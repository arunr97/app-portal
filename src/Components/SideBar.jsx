import React, { useState } from "react";
import { Collapse, Nav } from "react-bootstrap";
import { List, Pencil, UiChecksGrid, ChevronDown, FileEarmarkExcel, LayoutTextWindowReverse, Window } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
import GodrejLogo from '../images/Godrej-logo.png';

export default function SideBar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [menu, setMenu] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
        setMenu(false);
    };

    return (
        <>
            <div id="Sidebar" className={showSidebar ? "side-bar open" : "side-bar closed"}>
                <div className="sidebar-head">
                    <img src={GodrejLogo} alt="CRA Logo" className="head-logo ms-2" onClick={toggleSidebar} />

                    <List className="head-logo" onClick={toggleSidebar} />
                    {/* <img
                        src={GodrejLogo}
                        alt="HeadLogo"
                        className="head-toggle"
                        onClick={toggleSidebar}
                    /> */}
                    <Window alt="HeadLogo" className="head-toggle" onClick={toggleSidebar} />
                </div>
                <div className="sidebar-body">
                    <span className="menu">Menu</span>
                    <Nav as="ul" bsPrefix="nav-list" defaultActiveKey={"Dashboard"} >
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="/" eventKey={"Dashboard"} bsPrefix="nav-list-item">
                                <LayoutTextWindowReverse size={25} className="menu-icon" />
                                <span className="menu-name">Dashboard</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="/create" eventKey={"New"} bsPrefix="nav-list-item">
                                <Pencil size={25} className="menu-icon" />
                                <span className="menu-name">Create Request</span>
                            </Nav.Link>
                        </Nav.Item>
                        <hr style={{ margin: "8px" }} />
                        <Nav.Item as="li" onClick={() => { setShowSidebar(true); setMenu(!menu); }}>
                            <Nav.Link eventKey={"Maintenance"} bsPrefix="nav-list-item">
                                <UiChecksGrid size={25} className="menu-icon" />
                                <span className="menu-name">
                                    Maintenance <ChevronDown size={25} />
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                        <Collapse in={menu}>
                            <div>
                                <ul className="nav-sub-menu">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey={"user"} as={Link} to="/user" bsPrefix="sub-menu-item">
                                            Maintain User
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey={"role"} as={Link} to="/role" bsPrefix="sub-menu-item">
                                            Maintain Role & Authorization
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey={"approval"} as={Link} to="/approval" bsPrefix="sub-menu-item">
                                            Maintain Approval Workflow
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey={"loc"} as={Link} to="/complaint" bsPrefix="sub-menu-item">
                                            Maintain Type of Complaint
                                        </Nav.Link>
                                    </Nav.Item>
                                </ul>
                            </div>
                        </Collapse>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="/report" eventKey={"Reports"} bsPrefix="nav-list-item">
                                <FileEarmarkExcel size={25} className="menu-icon" />
                                <span className="menu-name">Reports</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        </>
    );

}