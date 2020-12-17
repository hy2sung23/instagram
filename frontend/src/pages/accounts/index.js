import React from 'react'
import {Route} from 'react-router-dom'
import Profile from "./Profile";
import Login from "./Login";

function AccountsRoutes({match}) {
    return (
        <div>
            <Route exact path={match.url + "/profile"} component={Profile}/>
            <Route exact path={match.url + "/login"} component={Login}/>
        </div>
    )
} export default AccountsRoutes