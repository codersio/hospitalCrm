import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { Link } from '@inertiajs/react';
const Inventory = () => {

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
                            <div className='flex space-x-3'>
                                <button type='button' onClick={handleClose} className="bg-gray-700 p-1 px-2 text-white rounded-sm flex space-x-2">
                                    <div className='grid place-items-center '>
                                        <FaPlus />
                                    </div>
                                    <h1> Add Item</h1>
                                </button>
                                <Link type='button' href='/admin/inventory/item-issue' className="bg-gray-700 p-1 px-2 text-white rounded-sm flex space-x-2">
                                    <div className='grid place-items-center '>
                                        <FaBars />
                                    </div>
                                    <h1>  issue item    </h1>
                                </Link>
                                <Link type='button' href='/admin/inventory/item-list' className="bg-gray-700 p-1 px-2 text-white rounded-sm flex space-x-2">
                                    <div className='grid place-items-center '>
                                        <FaBars />
                                    </div>
                                    <h1>  Item</h1>
                                </Link>
                            </div>
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
                                        Gaurav
                                    </td>
                                    <td className="px-6 py-3 text-left  tracking-wider">
                                        03/05/2010
                                    </td>
                                    <td className="px-6 py-3 text-left  tracking-wider">
                                        B+
                                    </td>
                                    <td className="px-6 py-3 text-left  tracking-wider">
                                        Male
                                    </td>
                                    <td className="px-6 py-3 text-left  tracking-wider">
                                        87979798967
                                    </td>
                                    <td className="px-6 py-3 text-left  tracking-wider">
                                        Lokesh Shah
                                    </td>
                                    <td className="px-6 py-3 text-left  tracking-wider">
                                        Father Name
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
                                            <label htmlFor>Item Category *</label>
                                            <select name="" id="" className="w-full border-gray-300" >
                                                <option value="">Select</option></select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Item *</label> <br />
                                            <select name="" id="" className="w-full border-gray-300" >
                                                <option value="">Select</option></select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Supplier * </label> <br />
                                            <select name="" id="" className="w-full border-gray-300" >
                                                <option value="">Select</option></select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Store</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Quantity *</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>

                                        <div className="form-group w-full">
                                            <label htmlFor>Purchase Price *</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Date</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>


                                    </form>
                                    <div className="form-group w-full px-6 mt-3">
                                        <label htmlFor>Description</label> <br />
                                        <textarea type="date" className="w-full border-gray-300" ></textarea>
                                    </div>
                                    <div className='px-6'>
                                        <label htmlFor>Attach Document</label> <br />
                                        <div class="flex items-center justify-center w-full">
                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col items-center justify-center mt-4">
                                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                    </svg>

                                                </div>
                                                <input id="dropzone-file" type="file" class="hidden" />
                                            </label>
                                        </div></div>


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

export default Inventory;