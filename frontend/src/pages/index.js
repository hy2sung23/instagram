import React from "react"
import AppLayout from "../components/AppLayout";
import {Route, Switch} from 'react-router-dom'
import About from "./about";
import Home from "./Home";
import AccountsRoutes from "./accounts";

function Root() {
    return(
        <AppLayout>
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/about"} component={About}/>
            <Route path={"/account"} component={AccountsRoutes}/>
        </AppLayout>
    )
}
export default Root