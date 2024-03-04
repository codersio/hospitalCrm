import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
const AddReferral = () => {

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
                            <div className="grid place-items-center text-[18px]">
                                <h1>Referral Person List</h1>
                            </div>
                            <button type='button' onClick={handleClose} className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                <div className='grid place-items-center mt-1'>
                                    <FaPlus />
                                </div>
                                <h1> Add Referral Person</h1>
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Referrer Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Category
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Commission
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Referrer Contact
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Contact Person Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Contact Person Phone
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Address
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Action
                                    </th>

                                    {/* Add more table headers here as needed */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {/* Table rows will be dynamically added here */}
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
                                        <h1 className='text-[1.5rem] text-white'>Add Person</h1>

                                    </div>
                                    <div className="flex mt-[0.40rem]">

                                        <button onClick={handleClose} className="ml-auto text-[2rem] text-white">
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

export default AddReferral;