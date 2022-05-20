import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Header";
import MainComp from "./MainComp";
import SideBar from "./SideBar";



export default function Home() {


    return (
        <Container fluid className="rootcomp">
            <Router>
                <SideBar />
                <Container bsPrefix="app-container">
                    <Header />
                    <MainComp />
                </Container>
            </Router>
        </Container >
    );
}