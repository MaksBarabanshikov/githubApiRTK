import React, {Suspense} from 'react'
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "../components/Layout/MainLayout";

const HomePage = React.lazy(() => import('../pages/HomePage'))
const FavouritesPage = React.lazy(() => import('../pages/FavouritesPage'))

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={ <MainLayout/> }>
                <Route path="/" element={<Suspense fallback={<span>loading...</span>}>
                    <HomePage/>
                </Suspense>}/>
                <Route path="/favourites" element={<Suspense fallback={<span>loading...</span>}>
                    <FavouritesPage/>
                </Suspense>}/>
            </Route>
        </Routes>
    )
}


export default Routing