import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Container from "../containers/App";

export default class AppRouter extends Component{
    render(){
        return(
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Container/>} />
                </Routes>
            </BrowserRouter>
        )
    }
}