import React from "react";
import Header from "../partials/Header";
import Sidebar from "../partials/sidebar";


const Dashboards=()=>{
    return  (
        <div className="flex h-screen">
      
        <div className="bg-gray-800 text-white w-[10%] flex-shrink-0">

            <Sidebar/>
        </div>


        <div className="flex-grow bg-gray-100 ">
           <Header/>
        </div>
    </div>
        )
}


export default Dashboards;