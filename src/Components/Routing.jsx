import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbars } from "./Nav";
import { Home } from "./Portfolios";

export const Routings = () => {
    return (<>
        <BrowserRouter>
            <Navbars />
            <Routes>
                <Route path="Portfolio" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    </>)
}