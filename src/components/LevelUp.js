import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const LevelUp = () => {
    return <>
        <Route path="/">
            {
                localStorage.getItem("lu_token") ?
                    <>
                        <NavBar />
                        <ApplicationViews />
                    </>
                    :
                    <Redirect to="/login" />
            }
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
}
