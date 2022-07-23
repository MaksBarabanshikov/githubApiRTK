import React from 'react'
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";

const MainLayout = () => {
    return (
        <>
            <Navigation/>
            <main className="container m-auto">
                <Outlet/>
            </main>
        </>

    )
}

export { MainLayout }