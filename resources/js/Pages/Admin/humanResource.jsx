import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaMinus } from "react-icons/fa";
const HumanResource = () => {

    const [modal, setModal] = useState(true)
    const [moreDetails, setmoreDetail] = useState(false)

    const handleClose = () => {
        // console.log('hello')
        setModal(!modal)
    }
    const handleMoreDetails = () => {
        // console.log('hello')
        setmoreDetail(!moreDetails)
    }
    return (

        <div className="flex h-screen">

            <div className="bg-gray-800 text-white w-[11%] flex-shrink-0">

                <Sidebar />
            </div>


            <div className="flex-grow bg-gray-100 ">
                <Header />
                <div className='px-5 relative'>
                    <div className="border  ">
                        <div className="relative ">
                            <div className="card mt-2">
                                <div className="card-header flex justify-between px-[3rem] border py-3">
                                    <div className="grid place-items-center text-[18px]">
                                        <h1>Staff Directory</h1>
                                    </div>
                                    <button type='button' onClick={handleClose} className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                        <div className='grid place-items-center mt-1'>
                                            <FaPlus />
                                        </div>
                                        <h1>Add Staff </h1>
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 p-3">
                                <div className="form-group">
                                    <label htmlFor="">Role *</label>
                                    <select name="" id="" className='w-full border-gray-300'>
                                        <option value="">select</option>
                                    </select>
                                    <div className='flex justify-end mt-4'>
                                        <button type='button' className="bg-gray-700 p-2 h-[28%]    flex text-white   space-x-2">
                                            <div className='grid place-items-center '>
                                                <CiSearch />
                                            </div>
                                            <h1 className='grid place-items-center mt-[-0.25rem]'>search </h1>
                                        </button>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Search By Keyword</label>
                                    <input type="text" className='w-full border-gray-300' placeholder='search by staff ID' />
                                    <div className='flex justify-end mt-4'>
                                        <button type='button' className="bg-gray-700 p-2 h-[28%]    flex text-white   space-x-2">
                                            <div className='grid place-items-center '>
                                                <CiSearch />
                                            </div>
                                            <h1 className='grid place-items-center mt-[-0.25rem]'>search </h1>
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="grid grid-cols-4 px-3 p-2" >
                                <div className="item flex space-x-3 border">
                                    <div className="image overflow-hidden w-[30%]">
                                        <img src="https://demo.smart-hospital.in/uploads/staff_images/no_image.png?1709528494" alt="" />
                                    </div>
                                    <div className="content mt-2">
                                        <h1 className='font-[600] text-[16px]'>Super Admin</h1>
                                        <div className='py-1'>
                                            <p className='text-[13px] text-[#444]'>9001</p>
                                            <p className='text-[13px] text-[#444]'>9687456874455</p>
                                        </div>
                                        <div className='bg-gray-300 p-1 text-center text-white text-[13px]'>Super Admin</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div id="exampleModal" className={modal ? "  fixed h-screen transform  bg-black shadow-md rounded-md g  top-0 bottom-0 right-0 left-0 w-full hidden" : "overflow-y-auto  fixed h-screen transform  bg-black bg-opacity-85 shadow-md rounded-md   top-0 bottom-0 right-0 left-0 w-full grid place-items-center"}>
                        <div className="back-model w-[60%] bg-white relative ">
                            <div className="modal-content w-full">
                                <div className="modal-header flex justify-between   bg-[#0E99F4] p-2">
                                    <div className="w-[80%]  px-4 mt-[0.29rem]">
                                        <h1 className='text-white text-[1.5rem]'>Basic Information</h1>
                                    </div>
                                    <button onClick={handleClose} className="ml-auto text-[2rem] text-white">
                                        <RxCross1 />
                                    </button>

                                </div>
                                <div className="modal-body ">

                                    <form action className="w-full grid grid-cols-4 gap-5 px-6 mt-10 relative">
                                        <div className="form-group w-full ">
                                            <label htmlFor>Staff ID *</label>
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Role *</label> <br />
                                            <select name="" id="" className="w-full border-gray-300">
                                                <option value="">Select</option>

                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Designation *</label> <br />
                                            <select name="" id="" className="w-full border-gray-300">
                                                <option value="">Select</option>

                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Department *</label> <br />
                                            <select name="" id="" className="w-full border-gray-300">
                                                <option value="">Select</option>

                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Specialist *</label> <br />
                                            <select name="" id="" className="w-full border-gray-300">
                                                <option value="">Select</option>

                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> First Name *</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Last Name</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Father Name</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Mother Name</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Gender *</label> <br />
                                            <select name="" id="" className="w-full border-gray-300">
                                                <option value="">Select</option>

                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Marital Status</label> <br />
                                            <select name="" id="" className="w-full border-gray-300">
                                                <option value="">Select</option>

                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Blood Group</label> <br />
                                            <select name="" id="" className="w-full border-gray-300">
                                                <option value="">Select</option>

                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Date Of Birth *</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Date Of Joining</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Phone</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Emergency Contact</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Email *</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Photo </label> <br />

                                            <div class="flex items-center justify-center w-full">
                                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                    <div class="flex flex-col items-center justify-center mt-4">
                                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>

                                                    </div>
                                                    <input id="dropzone-file" type="file" class="hidden" />
                                                </label>
                                            </div>

                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Current Address </label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>

                                    </form>
                                    <div className="form-group w-full px-6 mt-3">
                                        <label htmlFor>Permanent Address</label> <br />
                                        <textarea type="date" className="w-full border-gray-300" ></textarea>
                                    </div>
                                    <div className="form-group w-full px-6">
                                        <label htmlFor>Current Address </label> <br />
                                        <textarea type="date" className="w-full border-gray-300" ></textarea>
                                    </div>
                                    <div className="grid grid-cols-2 px-6 gap-4">
                                        <div className="form-group">
                                            <label htmlFor>Qualification</label> <br />
                                            <textarea type="date" className="w-full border-gray-300" ></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor>Work Experience</label> <br />
                                            <textarea type="date" className="w-full border-gray-300" ></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor>Specialization</label> <br />
                                            <textarea type="date" className="w-full border-gray-300" ></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor>Note</label> <br />
                                            <textarea type="date" className="w-full border-gray-300" ></textarea>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 px-6 gap-3">

                                        <div className="form-group w-full">
                                            <label htmlFor>Pan Number</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>National Identification Number</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Local Identification Number</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Reference Contact</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div>
                                    </div>
                                    <div>

                                        <div className="flex px-5 mt-5 border-b justify-between" onClick={handleMoreDetails}>
                                            <h1 className='text-[1.5rem]'>Add More Details</h1>
                                            <div className="icon grid place-items-center">
                                                {moreDetails ? <FaMinus /> : <FaPlus />}
                                            </div>
                                        </div>

                                        <div className={moreDetails ? "block" : "hidden"}>
                                            <div className="px-5 mt-5">


                                                <div >
                                                    <h1 className='text-[1.5rem]'>Payroll</h1>
                                                    <hr />
                                                </div>

                                                <div className="grid grid-cols-3  gap-3 mt-4">

                                                    <div className="form-group w-full">
                                                        <label htmlFor>EPF No</label> <br />
                                                        <input type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Basic Salary</label> <br />
                                                        <input type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Contract Type</label> <br />
                                                        <select name="" id="" className="w-full border-gray-300"></select>
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Work Shift</label> <br />
                                                        <input type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Work Location</label> <br />
                                                        <input type="text" className="w-full border-gray-300" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="px-5 mt-5">


                                                <div >
                                                    <h1 className='text-[1.5rem]'>Leaves</h1>
                                                    <hr />
                                                </div>

                                                <div className="grid grid-cols-3  gap-3 mt-4">

                                                    <div className="form-group w-full">
                                                        <label htmlFor>Casual Leave</label> <br />
                                                        <input type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Privilege Leave</label> <br />
                                                        <input type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Sick Leave</label> <br />
                                                        <select name="" id="" className="w-full border-gray-300"></select>
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Maternity Leave</label> <br />
                                                        <input type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Paternity Leave.</label> <br />
                                                        <input type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Fever Leave</label> <br />
                                                        <input type="text" className="w-full border-gray-300" />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="px-5 mt-5">


                                                <div >
                                                    <h1 className='text-[1.5rem]'>Bank Account Details
                                                    </h1>
                                                    <hr />
                                                </div>

                                                <div className="grid grid-cols-3  gap-3 mt-4">

                                                    <div className="form-group w-full">
                                                        <label htmlFor>Account Title</label> <br />
                                                        <input type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Bank Account No.</label> <br />
                                                        <input type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Bank Name</label> <br />
                                                        <select name="" id="" className="w-full border-gray-300"></select>
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>IFSC Code</label> <br />
                                                        <input type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Bank Branch Name</label> <br />
                                                        <input type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Fever Leave</label> <br />
                                                        <input type="text" className="w-full border-gray-300" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-5 mt-5">


                                                <div >
                                                    <h1 className='text-[1.5rem]'>Social Media Link
                                                    </h1>
                                                    <hr />
                                                </div>

                                                <div className="grid grid-cols-3  gap-3 mt-4">

                                                    <div className="form-group w-full">
                                                        <label htmlFor>Facebook URL</label> <br />
                                                        <input type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Twitter URL</label> <br />
                                                        <input type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Linkedin URL</label> <br />
                                                        <select name="" id="" className="w-full border-gray-300"></select>
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Instagram URL</label> <br />
                                                        <input type="text" className="w-full border-gray-300" />
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="px-5 mt-5">


                                                <div >
                                                    <h1 className='text-[1.5rem]'>Upload Documents
                                                    </h1>
                                                    <hr />
                                                </div>

                                                <div className="grid grid-cols-3  gap-3 mt-4">

                                                    <div className="form-group w-full">
                                                        <label htmlFor>Resume</label> <br />
                                                        <div class="flex items-center justify-center w-full">
                                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                                <div class="flex flex-col items-center justify-center mt-4">
                                                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                                    </svg>

                                                                </div>
                                                                <input id="dropzone-file" type="file" class="hidden" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Joining Letter</label> <br />
                                                        <div class="flex items-center justify-center w-full">
                                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                                <div class="flex flex-col items-center justify-center mt-4">
                                                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                                    </svg>

                                                                </div>
                                                                <input id="dropzone-file" type="file" class="hidden" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Other Documents</label> <br />
                                                        <div class="flex items-center justify-center w-full">
                                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                                <div class="flex flex-col items-center justify-center mt-4">
                                                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                                    </svg>

                                                                </div>
                                                                <input id="dropzone-file" type="file" class="hidden" />
                                                            </label>
                                                        </div>
                                                    </div>


                                                </div>
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

export default HumanResource;