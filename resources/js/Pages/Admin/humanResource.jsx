import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaMinus } from "react-icons/fa";
const HumanResource = () => {

    const [modal, setModal] = useState(true)
    const [moreDetails, setmoreDetail] = useState(false)
    // const [data, setdata] = useState([])




    const [allItems, setAllItems] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.post('/api/admin/humanresource-fetch');
            setAllItems(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = () => {
        try {
            let filteredResults = allItems;
            if (selectedOption) {
                filteredResults = allItems.filter(item => item.type === selectedOption);
            }
            setSearchResults(filteredResults);
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    const handleRoleChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const [fileUpload, setfileUpload] = useState({
        photo: null
    })
    const [formData, setFormdata] = useState({

        'account_title': '',
        'bankacct_no': '',
        'bank_name': '',
        'ifsc_code': '',
        'branch_name': '',
        'epr_roll': '',
        'salary': '',
        'contract_type': '',
        'work_shift': '',
        'work_location': '',
        'casual_leave': '',
        'privilege_leave': '',
        'sick_leave': '',
        'maternity_leave': '',
        'paternity_leave': '',
        'fever_leave': '',

        'staff_id': '',
        'designation_id': '',
        'department_id': '',
        'specialist_id': '',
        'fathername': '',
        'mothername': '',
        'gender': '',
        'marital_status': '',
        'blood': '',
        'dob': '',
        'joining_date': '',
        'phone': '',
        'emer_contact': '',
        'photo': '',
        'current_address': '',
        'permanent_addrerss': '',
        'qualification': '',
        'work_experience': '',
        'specialization': '',
        'note': '',
        'pan_number': '',
        'ni_number': '',
        'local_id_number': '',
        'ref_contact': '',
        'bank_holder': '',
    })

    const handleClose = () => {
        // console.log('hello')
        setModal(!modal)
    }
    const handleMoreDetails = () => {
        // console.log('hello')
        setmoreDetail(!moreDetails)
    }
    const handleFormdata = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formData,
            [name]: value
        });
    }

    const handleFileUpload = (e) => {
        const { name, value, type, files } = e.target;
        if (files.length > 0) {
            setfileUpload(e.target.files[0])
        }
    }

    const FormSubmit = (e) => {
        e.preventDefault();
        const formSave = new FormData()
        formSave.append('account_title', formData.account_title)
        formSave.append('bankacct_no', formData.bankacct_no)
        formSave.append('bank_name', formData.bank_name)
        formSave.append('ifsc_code', formData.ifsc_code)
        formSave.append('branch_name', formData.branch_name)
        formSave.append('epr_roll', formData.epr_roll)
        formSave.append('salary', formData.salary)
        formSave.append('contract_type', formData.contract_type)
        formSave.append('work_shift', formData.work_shift)
        formSave.append('work_location', formData.work_location)
        formSave.append('casual_leave', formData.casual_leave)
        formSave.append('privilege_leave', formData.privilege_leave)
        formSave.append('sick_leave', formData.sick_leave)
        formSave.append('maternity_leave', formData.maternity_leave)
        formSave.append('paternity_leave', formData.paternity_leave)
        formSave.append('fever_leave', formData.fever_leave)
        formSave.append('staff_id', formData.staff_id)
        formSave.append('designation_id', formData.designation_id)
        formSave.append('department_id', formData.department_id)
        formSave.append('specialist_id', formData.specialist_id)
        formSave.append('fathername', formData.fathername)
        formSave.append('mothername', formData.mothername)
        formSave.append('gender', formData.gender)
        formSave.append('marital_status', formData.marital_status)
        formSave.append('blood', formData.blood)
        formSave.append('dob', formData.dob)
        formSave.append('joining_date', formData.joining_date)
        formSave.append('phone', formData.phone)
        formSave.append('emer_contact', formData.emer_contact)
        formSave.append('photo', fileUpload.photo)
        formSave.append('current_address', formData.current_address)
        formSave.append('permanent_addrerss', formData.permanent_addrerss)
        formSave.append('qualification', formData.qualification)
        formSave.append('work_experience', formData.work_experience)
        formSave.append('specialization', formData.specialization)
        formSave.append('note', formData.note)
        formSave.append('pan_number', formData.pan_number)
        formSave.append('ni_number', formData.ni_number)
        formSave.append('local_id_number', formData.local_id_number)
        formSave.append('ref_contact', formData.ref_contact)
        formSave.append('bank_holder', formData.bank_holder)

        axios.post('/api/admin/humanresource-store', formSave,)
            .then(response => {
                console.log(response)
                // fetchData();
            })
            .catch(error => console.log(error))
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

                                    <select onChange={handleRoleChange} name="" value={selectedOption} id="" className='w-full border-gray-300'>
                                        <option value="">Select an option</option>
                                        {allItems.map(item => (
                                            <option key={item.id} value={item.type}>{item.type}</option>
                                        ))}
                                    </select>
                                    <div className='flex justify-end mt-4'>
                                        <button onClick={handleSearch} type='button' className="bg-gray-700 p-2 h-[28%]    flex text-white   space-x-2">
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

                            <div className="grid grid-cols-4 px-3 gap-3 p-2" >
                                {

                                    searchResults.length > 0 ? (
                                        searchResults.map(datas => (
                                            <div className="item flex space-x-3 border">
                                                <div className="image overflow-hidden w-[30%]">
                                                    <img src="https://demo.smart-hospital.in/uploads/staff_images/no_image.png?1709528494" alt="" />
                                                </div>
                                                <div className="content mt-2">
                                                    <h1 className='font-[600] text-[12px]'>{datas.name}</h1>
                                                    <div className='py-1'>
                                                        <p className='text-[13px] text-[#444]'>{datas.staff_id}</p>
                                                        <p className='text-[13px] text-[#444]'>{datas.phone}</p>

                                                    </div>
                                                    <div className='bg-gray-300  text-center text-white text-[12px]'>{datas.type}</div>
                                                </div>
                                            </div>
                                        ))) : (
                                        allItems.map(datas => (
                                            <div className="item flex space-x-3 border">
                                                <div className="image overflow-hidden w-[30%]">
                                                    <img src="https://demo.smart-hospital.in/uploads/staff_images/no_image.png?1709528494" alt="" />
                                                </div>
                                                <div className="content mt-2">
                                                    <h1 className='font-[600] text-[12px]'>{datas.name}</h1>
                                                    <div className='py-1'>
                                                        <p className='text-[13px] text-[#444]'>{datas.staff_id}</p>
                                                        <p className='text-[13px] text-[#444]'>{datas.phone}</p>

                                                    </div>
                                                    <div className='bg-gray-300  text-center text-white text-[12px]'>{datas.type}</div>
                                                </div>
                                            </div>
                                        )))

                                }

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
                                            <input value={formData.staff_id} onChange={handleFormdata} name='staff_id' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Role *</label> <br />
                                            <select value={formData.type} onChange={handleFormdata} name='type' name="" id="" className="w-full border-gray-300">
                                                <option value="">Select</option>

                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Designation *</label> <br />
                                            <select value={formData.designation_id} onChange={handleFormdata} name='designation_id' className="w-full border-gray-300">
                                                <option value="">Select</option>

                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Department *</label> <br />
                                            <select value={formData.department_id} onChange={handleFormdata} name='department_id' className="w-full border-gray-300">
                                                <option value="">Select</option>

                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Specialist *</label> <br />
                                            <select value={formData.specialist_id} onChange={handleFormdata} name='specialist_id' className="w-full border-gray-300">
                                                <option value="">Select</option>

                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> First Name *</label> <br />
                                            <input value={formData.name} onChange={handleFormdata} name='name' type="text" className="w-full border-gray-300" />
                                        </div>
                                        {/* <div className="form-group w-full">
                                            <label htmlFor>Last Name</label> <br />
                                            <input type="text" className="w-full border-gray-300" />
                                        </div> */}
                                        <div className="form-group w-full">
                                            <label htmlFor>Father Name</label> <br />
                                            <input value={formData.fathername} onChange={handleFormdata} name='fathername' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Mother Name</label> <br />
                                            <input value={formData.mothername} onChange={handleFormdata} name='mothername' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Gender *</label> <br />
                                            <select value={formData.gender} onChange={handleFormdata} name='gender' className="w-full border-gray-300">
                                                <option value="">Select</option>

                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Marital Status</label> <br />
                                            <select value={formData.marital_status} onChange={handleFormdata} name='marital_status' className="w-full border-gray-300">
                                                <option value="">Select</option>

                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Blood Group</label> <br />
                                            <select value={formData.blood} onChange={handleFormdata} name='blood' className="w-full border-gray-300">
                                                <option value="">Select</option>

                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Date Of Birth *</label> <br />
                                            <input value={formData.dob} onChange={handleFormdata} name='dob' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Date Of Joining</label> <br />
                                            <input value={formData.joining_date} onChange={handleFormdata} name='joining_date' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Phone</label> <br />
                                            <input value={formData.phone} onChange={handleFormdata} name='phone' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Emergency Contact</label> <br />
                                            <input value={formData.emer_contact} onChange={handleFormdata} name='emer_contact' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Email *</label> <br />
                                            <input value={formData.email} onChange={handleFormdata} name='email' type="text" className="w-full border-gray-300" />
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
                                                    <input onChange={handleFileUpload} name='photo' id="dropzone-file" type="file" class="hidden" />
                                                </label>
                                            </div>

                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Current Address </label> <br />
                                            <input value={formData.current_address} onChange={handleFormdata} name='current_address' type="text" className="w-full border-gray-300" />
                                        </div>

                                    </form>
                                    <div className="form-group w-full px-6 mt-3">
                                        <label htmlFor>Permanent Address</label> <br />
                                        <textarea value={formData.permanent_addrerss} onChange={handleFormdata} name='permanent_addrerss' type="date" className="w-full border-gray-300" ></textarea>
                                    </div>
                                    {/* <div className="form-group w-full px-6">
                                        <label htmlFor>Current Address </label> <br />
                                        <textarea type="date" className="w-full border-gray-300" ></textarea>
                                    </div> */}
                                    <div className="grid grid-cols-2 px-6 gap-4">
                                        <div className="form-group">
                                            <label htmlFor>Qualification</label> <br />
                                            <textarea value={formData.qualification} onChange={handleFormdata} name='qualification' type="date" className="w-full border-gray-300" ></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor>Work Experience</label> <br />
                                            <textarea value={formData.work_experience} onChange={handleFormdata} name='work_experience' type="date" className="w-full border-gray-300" ></textarea>
                                        </div>
                                        {/* <div className="form-group">
                                            <label htmlFor>Specialization</label> <br />
                                            <textarea value={formData.department_id} onChange={handleFormdata} name='department_id' type="date" className="w-full border-gray-300" ></textarea>
                                        </div> */}
                                        <div className="form-group">
                                            <label htmlFor>Note</label> <br />
                                            <textarea value={formData.note} onChange={handleFormdata} name='note' type="date" className="w-full border-gray-300" ></textarea>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 px-6 gap-3">

                                        <div className="form-group w-full">
                                            <label htmlFor>Pan Number</label> <br />
                                            <input value={formData.pan_number} onChange={handleFormdata} name='pan_number' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>National Identification Number</label> <br />
                                            <input value={formData.ni_number} onChange={handleFormdata} name='ni_number' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Local Identification Number</label> <br />
                                            <input value={formData.local_id_number} onChange={handleFormdata} name='local_id_number' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Reference Contact</label> <br />
                                            <input value={formData.ref_contact} onChange={handleFormdata} name='ref_contact' type="text" className="w-full border-gray-300" />
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
                                                        <input value={formData.epr_roll} onChange={handleFormdata} name='epr_roll' type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Basic Salary</label> <br />
                                                        <input value={formData.salary} onChange={handleFormdata} name='salary' type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Contract Type</label> <br />
                                                        <select value={formData.contract_type} onChange={handleFormdata} name='contract_type' className="w-full border-gray-300"></select>
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Work Shift</label> <br />
                                                        <input value={formData.work_shift} onChange={handleFormdata} name='work_shift' type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Work Location</label> <br />
                                                        <input value={formData.work_location} onChange={handleFormdata} name='work_location' type="text" className="w-full border-gray-300" />
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
                                                        <input value={formData.casual_leave} onChange={handleFormdata} name='casual_leave' type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Privilege Leave</label> <br />
                                                        <input value={formData.privilege_leave} onChange={handleFormdata} name='privilege_leave' type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Sick Leave</label> <br />
                                                        <select value={formData.sick_leave} onChange={handleFormdata} name='sick_leave' className="w-full border-gray-300"></select>
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Maternity Leave</label> <br />
                                                        <input value={formData.maternity_leave} onChange={handleFormdata} name='maternity_leave' type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Paternity Leave.</label> <br />
                                                        <input value={formData.paternity_leave} onChange={handleFormdata} name='paternity_leave' type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Fever Leave</label> <br />
                                                        <input value={formData.fever_leave} onChange={handleFormdata} name='fever_leave' type="text" className="w-full border-gray-300" />
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
                                                        <input value={formData.bank_holder} onChange={handleFormdata} name='bank_holder' type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Bank Account No.</label> <br />
                                                        <input value={formData.bankacct_no} onChange={handleFormdata} name='bankacct_no' type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Bank Name</label> <br />
                                                        <select value={formData.bank_name} onChange={handleFormdata} name='bank_name' name="" id="" className="w-full border-gray-300"></select>
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>IFSC Code</label> <br />
                                                        <input value={formData.ifsc_code} onChange={handleFormdata} name='ifsc_code' type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Bank Branch Name</label> <br />
                                                        <input value={formData.branch_name} onChange={handleFormdata} name='branch_name' type="text" className="w-full border-gray-300" />
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
                                        {/* <button className="bg-gray-800 p-2 text-white w-[10%] ">
                                            Save &amp; print
                                        </button> */}
                                        <button onClick={FormSubmit} className="bg-gray-800 p-2 text-white w-[15%] ">
                                            Saves
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