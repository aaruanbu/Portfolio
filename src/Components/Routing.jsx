import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbars } from "./Nav";

export const Routings = () => {
    return (<>
        <BrowserRouter>
            <Navbars />
            <Routes>
                <Route></Route>
            </Routes>
        </BrowserRouter>
    </>)
}