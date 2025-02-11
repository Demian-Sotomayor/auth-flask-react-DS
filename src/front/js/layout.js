import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home.jsx";
import injectContext from "./store/appContext.js";
import Navbar from "./component/Navbar.jsx";
import Registro from "./pages/registro.jsx";
import LogIn from "./pages/logIn.jsx";
import Private from "./pages/private.jsx";
import PrivateRoute from "./component/PrivateRoute.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Registro />} path="/registro" />
                        <Route element={<LogIn />} path="/acceso" />
                        <Route element={
                        <PrivateRoute>
                            <Private />
                        </PrivateRoute>
                        } path="/private" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
