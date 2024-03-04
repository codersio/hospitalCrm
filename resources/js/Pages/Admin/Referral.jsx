import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState } from 'react'
import { FaPlus, FaUserSecret } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { IoIosFemale } from "react-icons/io";
import { MdBloodtype, MdEmail } from "react-icons/md";
import { DiMaterializecss } from "react-icons/di";
import { MdDateRange } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { Link } from '@inertiajs/react';
const Referral = () => {

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
                                <h1>Income List</h1>
                            </div>
                            <div className='flex space-x-3'>
                                <button type='button' onClick={handleClose} className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                    <div className='grid place-items-center mt-1'>
                                        <FaPlus />
                                    </div>
                                    <h1> Add Referral Payment</h1>
                                </button>
                                <Link href='/admin/referral-person' type='button' className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">

                                    <h1> Referral Person</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Patient Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Bill No
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Bill Amount (IDR)
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Commission Percentage (%)
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Commission Amount (IDR)
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
                                <div className="modal-header flex justify-between   bg-[#0E99F4] p-2">
                                    <div className="flex items-center border w-[50%] h-9 border-gray-500 bg-white rounded-md ">
                                        <input type="text" placeholder="Search By Patient Name" className="outline-none px-1 flex-grow  bg-transparent border-none" />
                                        <button className=" text-black px-4 py-1 rounded-md">
                                            <CiSearch />
                                        </button>
                                    </div>
                                    <button onClick={handleClose} className="ml-auto text-[2rem] text-white">
                                        <RxCross1 />
                                    </button>

                                </div>
                                <div className="modal-body flex space-x-4 px-5 ">
                                    <div className='patients-details w-[60%] flex justify-between'>
                                        <div className=" space-y-2">
                                            <h1 className='text-[2rem]'>John Marshall (2)</h1>
                                            <div className="flex space-x-2">
                                                <div className="icon grid place-items-center">
                                                    <FaUserSecret />
                                                </div>
                                                <span className='text-[#444444]'> Smith Marshall</span>
                                            </div>

                                            <div className='flex space-x-3 text-[13px] '>
                                                <div className="flex space-x-1">
                                                    <div className="icon grid place-items-center">
                                                        <IoIosFemale />
                                                    </div>
                                                    <span className='text-[#444444]'>Male</span>
                                                </div>
                                                <div className="flex space-x-1">
                                                    <div className="icon grid place-items-center">
                                                        <MdBloodtype />
                                                    </div>
                                                    <span className='text-[#444444]'> B+</span>
                                                </div>
                                                <div className="flex space-x-1">
                                                    <div className="icon grid place-items-center">
                                                        <DiMaterializecss />
                                                    </div>
                                                    <span className='text-[#444444]'> Married</span>
                                                </div>
                                            </div>
                                            <div className="flex space-x-2">
                                                <div className="icon grid place-items-center">
                                                    <MdDateRange />
                                                </div>
                                                <span className='text-[#444444]'>30 Year 4 Month 20 Days</span>
                                            </div>
                                            <div className="flex space-x-2">
                                                <div className="icon grid place-items-center">
                                                    <IoCall />
                                                </div>
                                                <span className='text-[#444444]'>9856475632</span>
                                            </div>
                                            <div className="flex space-x-2">
                                                <div className="icon grid place-items-center">
                                                    <MdEmail />
                                                </div>
                                                <span className='text-[#444444]'> john@gmail.com</span>
                                            </div>
                                            <div className="flex space-x-2">
                                                <div className="icon grid place-items-center">
                                                    <ImLocation />
                                                </div>
                                                <span className='text-[#444444]'>  Blackstone Park, Brooklyn North, CA</span>
                                            </div>
                                            <h1><strong>Any Known Allergies</strong> Fast food</h1>
                                            <h1><strong>Remarks </strong>Left Hand Mark</h1>
                                            <h1><strong>National Identification Number  </strong>45656345</h1>
                                            <h1><strong>TPA ID </strong>45656345</h1>
                                            <h1><strong>TPA Validity </strong>10/28/2021 </h1>
                                        </div>

                                        <div className="image mt-3 overflow-hidden w-[40%]">
                                            <img src="https://demo.smart-hospital.in/uploads/patient_images/no_image.png?1709533397" alt="" />
                                        </div>
                                    </div>


                                    <form action className="w-[40%] grid grid-cols-1 gap-5 px-6 mt-10 relative">
                                        <div className="form-group w-full ">
                                            <label htmlFor>Patient Type *</label>
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Bill No/Case Id *</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Payee *</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Commission Percentage (%) *</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Commission Amount (IDR) * </label> <br />

                                            <div class="flex items-center justify-center w-full">
                                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                    <input type="text" className="w-full border-gray-300" />
                                                </label>
                                            </div>

                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Amount (IDR) * </label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>

                                    </form>


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

                    {/* end referral payment modal */}




                </div>
            </div>
        </div >

    );
}

export default Referral;