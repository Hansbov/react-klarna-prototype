import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../view/NavbarView"

/**
 * Layout of app to specifiy things on all pages, such as the navbar.
 * @returns 
 */
const Layout = () => {
    return (
        <div>
            <Navbar/>
            <main className="App">
                <Outlet />
            </main>
        </div>
    )
}
export default Layout