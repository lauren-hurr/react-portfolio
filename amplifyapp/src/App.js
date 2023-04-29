import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import BigUsBank from './pages/BigUsBank';
import BiggerUsBank from './pages/BiggerUsBank';
import Golf from './pages/Golf';
import JobBoard from './pages/JobBoard';

import { Route, Routes } from 'react-router-dom';
import React from "react";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/bigusbank"} element={<BigUsBank/>}/>
                <Route path={"/biggerusbank"} element={<BiggerUsBank/>}/>
                <Route path={"/golf"} element={<Golf/>}/>
                <Route path={"/jobboard"} element={<JobBoard/>}/>
            </Routes>
        </>
    );

};

export default App;
