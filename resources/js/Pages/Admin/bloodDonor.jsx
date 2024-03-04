import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Blooddoner = () => {

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
                                <h1>Donor Details</h1>
                            </div>
                            <button type='button' onClick={handleClose} className="bg-gray-700 p-1 px-2 text-white  flex space-x-2">
                                <div className='grid place-items-center mt-1'>
                                    <FaPlus />
                                </div>
                                <h1> Add Blood Donor</h1>
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr className='text-[#333] text-[14px] font-bold'>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Donor Name
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Date Of Birth
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Blood Group
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Gender
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Contact No
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Amount (IDR)
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Father Name
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Address
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
                                            <label htmlFor>Donor Name *</label>
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Date Of Birth * </label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Blood Group *</label> <br />
                                            <select name="" id="" className="w-full border-gray-300" >
                                                <option value="">Select</option></select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Gender *</label> <br />
                                            <select name="" id="" className="w-full border-gray-300" >
                                                <option value="">Select</option></select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Father Name</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>

                                        <div className="form-group w-full">
                                            <label htmlFor>Contact No </label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>

                                    </form>
                                    <div className="form-group w-full px-6 mt-3">
                                        <label htmlFor>Address</label> <br />
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

export default Blooddoner;