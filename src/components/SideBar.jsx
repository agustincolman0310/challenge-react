import React from "react";
import {Route, Routes} from "react-router-dom";
import LoginForm from "./LoginForm";
import Detail from "./Detail";
import Recipe from "./Recipe";
function SideBar(){
    return(
        <>
             <Routes>
        <Route path="/recipes" element={<Recipe/>}/>
        <Route path="/recipes/:id" element={<Detail/>}/>
        <Route path="/login" element={<LoginForm/>}/>

        {/* <Route path='/' exact/> */}
      </Routes>
        </>
    )
}

export default SideBar;