import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const InventoryIssue = () => {

    const [modal, setModal] = useState(true)

    const handleClose = () => {
        // console.log('hello')
        setModal(!modal)
    }
    return (

        <div className="flex h-screen">

            <div className="bg-gray-800 text-white w-[11%] flex-shrink-0">

                <Sidebar />
            </div>


            <div className="flex-grow bg-gray-100 ">
                <Header />
                <div className="relative">
                    <div className="card mt-2">
                        <div className="card-header flex justify-between px-[3rem] border py-3">
                            <div className="grid place-items-center text-[22px]">
                                <h1>Item Stock List</h1>
                            </div>
                            <button type='button' onClick={handleClose} className="bg-gray-700 p-1 px-2 text-white  flex space-x-2">
                                <div className='grid place-items-center mt-1'>
                                    <FaPlus />
                                </div>
                                <h1> Add Issue Item </h1>
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr className='text-[#333] text-[14px] font-bold'>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Category
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Issue - Return
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Issue To
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Issued By
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Quantity
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Action
                                    </th>


                                    {/* Add more table headers here as needed */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr className='text-[#333] text-[13px] '>
                                    <td className="px-6 py-3 text-left  tracking-wider">
                                        Bed Sheet
                                    </td>
                                    <td className="px-6 py-3 text-left  tracking-wider">
                                        Bed Sheets
                                    </td>
                                    <td className="px-6 py-3 text-left  tracking-wider">
                                        03/26/2024 - 03/31/2024
                                    </td>
                                    <td className="px-6 py-3 text-left  tracking-wider">
                                        Nurse Natasha Romanoff (9010)
                                    </td>
                                    <td className="px-6 py-3 text-left  tracking-wider">
                                        Jason Abbot
                                    </td>
                                    <td className="px-6 py-3 text-left  tracking-wider">
                                        4
                                    </td>
                                    <td className="px-6 py-3 text-left  tracking-wider">
                                        <span className='bg-[#E91E63] text-white p-2'>click to return</span>
                                    </td>
                                    <td className="px-6 py-3 text-left  tracking-wider">
                                        Address
                                    </td>


                                    {/* Add more table headers here as needed */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Button to trigger modal */}
                    {/* Modal backdrop */}
                    {/* <div id="modalBackdrop" className="fixed inset-0 bg-gray-900 bg-opacity-50 hidden" /> */}
                    {/* Modal */}
                    <div id="exampleModal" className={modal ? "  fixed h-screen transform  bg-black shadow-md rounded-md g  top-0 bottom-0 right-0 left-0 w-full hidden" : "fixed h-screen transform  bg-black bg-opacity-85 shadow-md rounded-md   top-0 bottom-0 right-0 left-0 w-full grid place-items-center"}>
                        <div className="back-model w-[60%] bg-white relative ">
                            <div className="modal-content w-full">
                                <div className="modal-header flex justify-between   bg-[#0E99F4] p-2">
                                    <div className="w-[80%]  px-4 mt-[0.29rem]">
                                        <h1 className='text-white text-[1.5rem]'>Add Donor Details</h1>
                                    </div>
                                    <button onClick={handleClose} className="ml-auto text-[2rem] text-white">
                                        <RxCross1 />
                                    </button>

                                </div>
                                <div className="modal-body">

                                    <form action className="w-full grid grid-cols-2 gap-5 px-6 mt-10 relative">
                                        <div className="form-group w-full ">
                                            <label htmlFor>User Type *</label>
                                            <select name="" id="" className="w-full border-gray-300" >
                                                <option value="">Select</option></select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Issue To *</label> <br />
                                            <select name="" id="" className="w-full border-gray-300" >
                                                <option value="">Select</option></select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Issued By * </label> <br />
                                            <select name="" id="" className="w-full border-gray-300" >
                                                <option value="">Select</option></select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Issue Date *</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Return Date</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>

                                        <div className="form-group w-full">
                                            <label htmlFor>Item Category *</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Item *</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Quantity *</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>

                                    </form>
                                    <div className="form-group w-full px-6 mt-3">
                                        <label htmlFor>Description</label> <br />
                                        <textarea type="date" className="w-full border-gray-300" ></textarea>
                                    </div>


                                </div>

                                <div className="form-group   bottom-0  left-0 right-0 mt-10 py-4">
                                    <div className="flex justify-end px-5 p-3 space-x-3 w-full">
                                        <button className="bg-gray-800 p-2 text-white w-[10%] ">
                                            Save &amp; print
                                        </button>
                                        <button className="bg-gray-800 p-2 text-white w-[5%] ">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default InventoryIssue;