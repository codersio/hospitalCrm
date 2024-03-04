import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState } from 'react'
import { FaPlus, FaUserSecret } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { Link } from '@inertiajs/react';




function Blood_Create() {
    const [modal, setModal] = useState(true)
    const [comoponent, setComponent] = useState(true)

    const handleBlood = () => {
        // console.log('hello')
        setModal(!modal)
    }

    return (
        <div className='blood-card'>
            <div className="card-header flex justify-between bg-[#D9EDF7] p-2">
                <h1 className='text-[#333] text-[18px] font-bold'>Blood</h1>
                <div className='flex space-x-3'>
                    <h1 className='text-[#333] text-[18px] font-bold'>10 Bags</h1>
                    <button type='button' onClick={handleBlood} className="bg-gray-700 p-2 text-white rounded-md ">
                        <div className='grid place-items-center '>
                            <FaPlus />
                        </div>

                    </button>
                </div>
            </div>
            <table className="table-auto min-w-full divide-y divide-gray-200">
                <thead className="bg-[#ECEFF4]">
                    <tr className='text-[#333] text-[13px] font-bold'>
                        <th className="px-6 py-3 text-left   tracking-wider">
                            Bags
                        </th>
                        <th className="px-6 py-3 text-left  tracking-wider">
                            Lot
                        </th>
                        <th className="px-6 py-3 text-left  tracking-wider">
                            Institution
                        </th>
                        <th className="px-6 py-3 text-left  tracking-wider">
                            Action
                        </th>


                        {/* Add more table headers here as needed */}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr className='text-[#333] text-[13px] font-bold'>
                        <td className="px-6 py-3 text-left   tracking-wider">
                            7563 (220 g/dl)
                        </td>
                        <td className="px-6 py-3 text-left  tracking-wider">
                            2
                        </td>
                        <td className="px-6 py-3 text-left  tracking-wider">

                        </td>
                        <td className="px-6 py-3 text-left  tracking-wider">
                            <button type='button' onClick={handleBlood} className="bg-[#012E48] p-2 text-white rounded-sm ">
                                <div className='grid place-items-center '>
                                    Issue
                                </div>

                            </button>
                        </td>


                        {/* Add more table headers here as needed */}
                    </tr>
                </tbody>
            </table>
            <div id="exampleModal" className={modal ? "  fixed h-screen transform  bg-black shadow-md rounded-md g  top-0 bottom-0 right-0 left-0 w-full hidden" : "fixed h-screen transform  bg-black bg-opacity-85 shadow-md rounded-md   top-0 bottom-0 right-0 left-0 w-full grid place-items-center"}>
                <div className="back-model w-[60%] bg-white relative ">
                    <div className="modal-content w-full">
                        <div className="modal-header grid grid-cols-2  bg-[#0E99F4] p-2">
                            <div className="w-[80%] flex space-x-2 px-4 mt-[0.29rem]">
                                <h1 className='text-white text-[22px] font-medium'> Blood Donor Details</h1>
                            </div>
                            <div className="flex mt-[0.40rem]">

                                <button onClick={handleBlood} className="ml-auto text-[2rem] text-white">
                                    <RxCross1 />
                                </button>
                            </div>
                        </div>
                        <div className="modal-body">

                            <form action className="w-full grid grid-cols-5 gap-3 px-6 mt-10 relative">
                                <div className="form-group w-full ">
                                    <label htmlFor>Blood Donor *</label>
                                    <input type="text" className="w-full border-gray-300" />
                                </div>
                                <div className="form-group w-full">
                                    <label htmlFor> Donate Date *</label> <br />
                                    <input type="text" className="w-full border-gray-300" />
                                </div>
                                <div className="form-group w-full">
                                    <label htmlFor>Bag *</label> <br />
                                    <input type="text" className="w-full border-gray-300" />
                                </div>
                                <div className="form-group w-full">
                                    <label htmlFor>Volume</label> <br />
                                    <input type="text" className="w-full border-gray-300" />
                                </div>
                                <div className="form-group w-full">
                                    <label htmlFor>Unit Type </label> <br />
                                    <select name="" id="" className="w-full border-gray-300">
                                        <option value="">select</option>
                                    </select>
                                </div>
                                <div className="form-group w-full">
                                    <label htmlFor>Lot </label> <br />
                                    <input type="text" className="w-full border-gray-300" />
                                </div>
                                <div className="form-group w-full">
                                    <label htmlFor>Charge Category *</label> <br />
                                    <select name="" id="" className="w-full border-gray-300">
                                        <option value="">select</option>
                                    </select>
                                </div>

                                <div className="form-group w-full">
                                    <label htmlFor>Charge Name *</label> <br />
                                    <select name="" id="" className="w-full border-gray-300">
                                        <option value="">select</option>
                                    </select>
                                </div>
                                <div className="form-group w-full">
                                    <label htmlFor>Standard Charge (IDR) *</label> <br />
                                    <input type="text" className="w-full border-gray-300" />
                                </div>
                            </form></div>
                        <div className="grid grid-cols-2 px-6 gap-3 mt-3">
                            <div>
                                <div className="form-group w-full">
                                    <label htmlFor>Doctor Name</label> <br />
                                    <input type="text" className="w-full border-gray-300" />
                                </div>
                                <div className="form-group  mt-4 w-full ">
                                    <textarea name id rows={3} className="px-6 w-full border-gray-300" defaultValue={""} />
                                </div>

                            </div>
                            <div className="content mt-4">
                                <div className="flex justify-between">
                                    <h1>
                                        Total (Rs.)</h1>
                                    <input type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                </div>
                                <div className="flex justify-between">
                                    <h1>
                                        Discount (Rs.)</h1>
                                    <input type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                </div>
                                <div className="flex justify-between">
                                    <h1>
                                        Tax (Rs.) </h1>
                                    <input type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                </div>
                                <div className="flex justify-between">
                                    <h1>
                                        Net Amount (Rs.)</h1>
                                    <input type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="form-group w-full border-gray-300">
                                        <label htmlFor>Payment Mode</label> <br />
                                        <select name="" id="" className="w-full border-gray-300">
                                            <option value="">select</option>
                                        </select>
                                    </div>
                                    <div className="form-group w-full">
                                        <label htmlFor>Amount (Rs.) *</label> <br />
                                        <input type="text" className="w-full border-gray-300" />
                                    </div>
                                </div>
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
    )
}

function Component_Create() {
    const [comoponent, setComponent] = useState(true)

    const handleComponent = () => {
        // console.log('hello')
        setComponent(!comoponent)
    }

    return (
        <div className='blood-card'>
            <div className="card-header flex justify-between bg-[#D9EDF7] p-2">
                <h1 className='text-[#333] text-[18px] font-bold'>Components</h1>
                <div className='flex space-x-3'>
                    <h1 className='text-[#333] text-[18px] font-bold'>10 Bags</h1>
                    <button type='button' onClick={handleComponent} className="bg-gray-700 p-2 text-white rounded-md ">
                        <div className='grid place-items-center '>
                            <FaPlus />
                        </div>

                    </button>
                </div>
            </div>

            <table className="table-auto min-w-full divide-y divide-gray-200">
                <thead className="bg-[#ECEFF4]">
                    <tr className='text-[#333] text-[13px] font-bold'>
                        <th className="px-6 py-3 text-left   tracking-wider">
                            Bags
                        </th>
                        <th className="px-6 py-3 text-left  tracking-wider">
                            Lot
                        </th>
                        <th className="px-6 py-3 text-left  tracking-wider">
                            Institution
                        </th>
                        <th className="px-6 py-3 text-left  tracking-wider">
                            Action
                        </th>


                        {/* Add more table headers here as needed */}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr className='text-[#333] text-[13px] font-bold'>
                        <td className="px-6 py-3 text-left   tracking-wider">
                            7563 (220 g/dl)
                        </td>
                        <td className="px-6 py-3 text-left  tracking-wider">
                            2
                        </td>
                        <td className="px-6 py-3 text-left  tracking-wider">

                        </td>
                        <td className="px-6 py-3 text-left  tracking-wider">
                            <button type='button' className="bg-[#012E48] p-2 text-white rounded-sm ">
                                <div className='grid place-items-center '>
                                    Issue
                                </div>

                            </button>
                        </td>


                        {/* Add more table headers here as needed */}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
const Bloodbank = () => {

    const [modal, setModal] = useState(true)
    const [tabs, setTabs] = useState(true)

    const handleBlood = () => {
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
                            <div className="grid place-items-center ">
                                <h1 className='text-[22px]'>Blood Bank Status</h1>
                            </div>
                            <div className='flex space-x-3'>
                                <Link type='button' href='/admin/blood/blood-donor' className="bg-gray-700 p-1 px-2 text-white rounded-sm flex space-x-2">
                                    <div className='grid place-items-center '>
                                        <FaBars />
                                    </div>
                                    <h1> Donor Details</h1>
                                </Link>
                                <Link type='button' href='/admin/blood/blood-issue' className="bg-gray-700 p-1 px-2 text-white rounded-sm flex space-x-2">
                                    <div className='grid place-items-center '>
                                        <FaBars />
                                    </div>
                                    <h1>  Blood Issue Details</h1>
                                </Link>
                                <Link type='button' href='/admin/blood/component-issue' className="bg-gray-700 p-1 px-2 text-white rounded-sm flex space-x-2">
                                    <div className='grid place-items-center '>
                                        <FaBars />
                                    </div>
                                    <h1>  Component Issue Details</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto py-4">
                        <div className="flex blood-name px-3 space-x-7">
                            <div className="left-blood-component w-[5%] text-[14px] space-y-1 font-[600] text-[#012E48]">
                                <div className="item bg-[#ECEFF4] p-4 hover:bg-[#2196F3] hover:text-white">
                                    B+
                                </div>
                                <div className="item bg-[#ECEFF4] p-4">
                                    A+
                                </div>
                            </div>

                            <div className="item w-[47.5%] ">
                                <Blood_Create />
                            </div>
                            <div className="item w-[47.5%] ">
                                <Component_Create />
                            </div>
                        </div>
                    </div>
                    {/* Button to trigger modal */}
                    {/* Modal backdrop */}
                    {/* <div id="modalBackdrop" className="fixed inset-0 bg-gray-900 bg-opacity-50 hidden" /> */}
                    {/* Modal */}
                    <div id="exampleModal" className={modal ? "  fixed h-screen transform  bg-black shadow-md rounded-md g  top-0 bottom-0 right-0 left-0 w-full hidden" : "fixed h-screen transform  bg-black bg-opacity-85 shadow-md rounded-md   top-0 bottom-0 right-0 left-0 w-full grid place-items-center"}>
                        <div className="back-model w-[60%] bg-white relative ">
                            <div className="modal-content w-full">
                                <div className="modal-header grid grid-cols-2  bg-[#0E99F4] p-2">
                                    <div className="w-[80%] flex space-x-2 px-4 mt-[0.29rem]">
                                        <h1 className='text-[1.5rem] text-white'>Add Person</h1>

                                    </div>
                                    <div className="flex mt-[0.40rem]">

                                        <button onClick={handleBlood} className="ml-auto text-[2rem] text-white">
                                            <RxCross1 />
                                        </button>
                                    </div>
                                </div>
                                <div className="modal-body mt-4">

                                </div>
                                <div className="grid grid-cols-2 px-6 gap-3">
                                    <div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="form-group w-full border-gray-300">
                                                <label htmlFor>Referrer Name *</label> <br />
                                                <input type="text" className="w-full border-gray-300" />
                                            </div>
                                            <div className="form-group w-full">
                                                <label htmlFor>Referrer Contact</label> <br />
                                                <input type="text" className="w-full border-gray-300" />
                                            </div>
                                            <div className="form-group w-full">
                                                <label htmlFor>Contact Person Name</label> <br />
                                                <input type="text" className="w-full border-gray-300" />
                                            </div>
                                            <div className="form-group w-full">
                                                <label htmlFor>Contact Person Phone </label> <br />
                                                <input type="text" className="w-full border-gray-300" />
                                            </div>
                                            <div className="form-group w-full">
                                                <label htmlFor>Standard Commission (%) </label> <br />
                                                <input type="text" className="w-full border-gray-300" />
                                            </div>
                                            <div className="form-group w-full">
                                                <label htmlFor>Category * </label> <br />
                                                <select name="" id="" className="w-full border-gray-300">
                                                    <option value="">select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Address </label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>



                                    </div>
                                    <div className="content mt-4">
                                        <div className="flex justify-between">
                                            <h1>
                                                OPD</h1>
                                            <input type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                        </div>
                                        <div className="flex justify-between">
                                            <h1>
                                                IPD</h1>
                                            <input type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                        </div>
                                        <div className="flex justify-between">
                                            <h1>
                                                Pharmacy</h1>
                                            <input type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                        </div>
                                        <div className="flex justify-between">
                                            <h1>
                                                Pathology</h1>
                                            <input type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                        </div>
                                        <div className="flex justify-between">
                                            <h1>
                                                Radiology</h1>
                                            <input type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                        </div>
                                        <div className="flex justify-between">
                                            <h1>
                                                Blood Bank</h1>
                                            <input type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                        </div>
                                        <div className="flex justify-between">
                                            <h1>
                                                Ambulance</h1>
                                            <input type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                        </div>

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

export default Bloodbank;