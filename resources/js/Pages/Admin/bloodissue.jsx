import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const BloodIssue = () => {

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
                                <h1>Blood Issue Details</h1>
                            </div>
                            <button type='button' onClick={handleClose} className="bg-gray-700 p-1 px-2 text-white  flex space-x-2">
                                <div className='grid place-items-center mt-1'>
                                    <FaPlus />
                                </div>
                                <h1> Issue Blood </h1>
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50 overflow-x-auto">
                                <tr className='text-[#333] text-[14px] font-bold'>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Bill No
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Case ID
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Issue Date
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Received To
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Blood Group
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Gender
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Donor Name
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Bags
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Blood Qty
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Net Amount (IDR)
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Paid Amount (IDR)
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Balance Amount (IDR)
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
                                <div className="modal-header grid grid-cols-2  bg-[#0E99F4] p-2">
                                    <div className="w-[80%] flex space-x-2 px-4 mt-[0.29rem]">
                                        <h1 className='text-white text-[22px] font-medium'> Blood Donor Details</h1>
                                    </div>
                                    <div className="flex mt-[0.40rem]">

                                        <button onClick={handleClose} className="ml-auto text-[2rem] text-white">
                                            <RxCross1 />
                                        </button>
                                    </div>
                                </div>
                                <div className="modal-body">

                                    <form action className="w-full grid grid-cols-5 gap-3 px-6 mt-10 relative">
                                        <div className="form-group w-full ">
                                            <label htmlFor>Issue Date *</label>
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Hospital Doctor</label> <br />
                                            <select name="" id="" className="w-full border-gray-300">
                                                <option value="">select</option>
                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Reference Name *</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Technician</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Blood Group </label> <br />
                                            <select name="" id="" className="w-full border-gray-300">
                                                <option value="">select</option>
                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Bag * </label> <br />
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
                                            <label htmlFor>Blood Qty</label> <br />
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
            </div>
        </div>

    );
}

export default BloodIssue;