import React from 'react'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-100 text-black">
                <h3 className="font-bold text-xl">Github</h3>

                <div>
                    <NavLink className="mr-2" to='/'>Home</NavLink>
                    <NavLink to='/favourites'>Favourites</NavLink>
                </div>
        </nav>
    )
}

export default Navigation