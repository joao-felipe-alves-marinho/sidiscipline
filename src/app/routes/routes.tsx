
import { Route, BrowserRouter, Routes as Switch, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

function Routes() {
    return (
        <BrowserRouter>
                <Switch>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/login"} element={<Login />} />

                    <Route path={"*"} element={<Navigate to="/" />} />
                </Switch>
        </BrowserRouter>
    );
}

export default Routes;
