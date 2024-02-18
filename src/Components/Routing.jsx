import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbars } from "./Nav";
import { Portfolios } from "./Portfolios";

export const Routings = () => {
    return (<>
        <BrowserRouter>
            <Navbars />
            <Routes>
                <Route path="/" element={<Portfolios />}></Route>
            </Routes>
        </BrowserRouter>
    </>)
}