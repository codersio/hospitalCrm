import React from "react";
import Header from "@/components/Admin/partials/Header";

import Sidebar from "@/components/Admin/partials/sidebar";
import { FaStethoscope, FaProcedures, FaFlask, FaMicroscope, FaAmbulance } from "react-icons/fa";
import { MdLocalPharmacy, MdBloodtype } from "react-icons/md";
import { CiMoneyBill, CiDollar } from "react-icons/ci";

const Dashboard = () => {
    return (
        <div className="flex h-screen">

            <div className="bg-gray-800 text-white w-[11%] flex-shrink-0">

                <Sidebar />
            </div>


            <div className="flex-grow bg-gray-100 ">
                <Header />
                <div className=" grid grid-cols-5 px-6 py-9 gap-4">
                    <div className="item border flex  space-x-3 shadow-lg rounded-md overflow-hidden">
                        <div className="icon grid place-items-center w-[20%] bg-[#66AA18] p-3 text-white text-[22px]">
                            <FaStethoscope />
                        </div>

                        <div className="content space-y-1 py-2">
                            <h1 className="text-[14px]"> OPD Income </h1>
                            <h1 className="text-[16px] font-[600]"> IDR2,747.50 </h1>



                        </div>
                    </div>


                    <div className="item border flex  space-x-3 shadow-lg rounded-md overflow-hidden">
                        <div className="icon grid place-items-center w-[20%] bg-[#66AA18] p-3 text-white text-[22px]">
                            <FaProcedures />
                        </div>

                        <div className="content space-y-1 py-2">
                            <h1 className="text-[14px]"> IPD Income </h1>
                            <h1 className="text-[16px] font-[600]"> IDR2,747.50 </h1>



                        </div>
                    </div>
                    <div className="item border flex  space-x-3 shadow-lg rounded-md overflow-hidden">
                        <div className="icon grid place-items-center w-[20%] bg-[#66AA18] p-3 text-white text-[22px]">
                            <MdLocalPharmacy />
                        </div>

                        <div className="content space-y-1 py-2">
                            <h1 className="text-[14px]"> Pharmacy Income </h1>
                            <h1 className="text-[16px] font-[600]"> IDR2,747.50 </h1>



                        </div>
                    </div>
                    <div className="item border flex  space-x-3 shadow-lg rounded-md overflow-hidden">
                        <div className="icon grid place-items-center w-[20%] bg-[#66AA18] p-3 text-white text-[22px]">
                            <FaFlask />
                        </div>

                        <div className="content space-y-1 py-2">
                            <h1 className="text-[14px]"> Pathology Income </h1>
                            <h1 className="text-[16px] font-[600]"> IDR2,747.50 </h1>



                        </div>
                    </div>
                    <div className="item border flex  space-x-3 shadow-lg rounded-md overflow-hidden">
                        <div className="icon grid place-items-center w-[20%] bg-[#66AA18] p-3 text-white text-[22px]">
                            <FaMicroscope />
                        </div>

                        <div className="content space-y-1 py-2">
                            <h1 className="text-[14px]"> Radiology Income </h1>
                            <h1 className="text-[16px] font-[600]"> IDR2,747.50 </h1>



                        </div>
                    </div>
                    <div className="item border flex  space-x-3 shadow-lg rounded-md overflow-hidden">
                        <div className="icon grid place-items-center w-[20%] bg-[#66AA18] p-3 text-white text-[22px]">
                            <MdBloodtype />
                        </div>

                        <div className="content space-y-1 py-2">
                            <h1 className="text-[14px]">Blood Bank Income </h1>
                            <h1 className="text-[16px] font-[600]"> IDR2,747.50 </h1>



                        </div>
                    </div>
                    <div className="item border flex  space-x-3 shadow-lg rounded-md overflow-hidden">
                        <div className="icon grid place-items-center w-[20%] bg-[#66AA18] p-3 text-white text-[22px]">
                            <FaAmbulance />
                        </div>

                        <div className="content space-y-1 py-2">
                            <h1 className="text-[14px]">Ambulance Income </h1>
                            <h1 className="text-[16px] font-[600]"> IDR2,747.50 </h1>



                        </div>
                    </div>
                    <div className="item border flex  space-x-3 shadow-lg rounded-md overflow-hidden">
                        <div className="icon grid place-items-center w-[20%] bg-[#66AA18] p-3 text-white text-[22px]">
                            <CiMoneyBill />
                        </div>

                        <div className="content space-y-1 py-2">
                            <h1 className="text-[14px]">General Income</h1>
                            <h1 className="text-[16px] font-[600]"> IDR2,747.50 </h1>



                        </div>
                    </div>
                    <div className="item border flex  space-x-3 shadow-lg rounded-md overflow-hidden">
                        <div className="icon grid place-items-center w-[20%] bg-[#66AA18] p-3 text-white text-[22px]">
                            <CiDollar />
                        </div>

                        <div className="content space-y-1 py-2">
                            <h1 className="text-[14px]">Expenses</h1>
                            <h1 className="text-[16px] font-[600]"> IDR2,747.50 </h1>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;