import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState, useEffect } from 'react'
import { FaPlus, FaUserSecret } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { IoIosFemale } from "react-icons/io";
import { MdBloodtype, MdEmail } from "react-icons/md";
import { DiMaterializecss as DiMaterialness } from "react-icons/di";
import { MdDateRange } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from '@inertiajs/react';
const Referral = ({ admin }) => {
    const [Patientsdata, setPatientsdata] = useState([]);
    const [modal, setModal] = useState(true)
    const [updateModal, setupdateModal] = useState(null)
    const [admin_type, setAdminType] = useState(admin.type)
    const [admin_id, setId] = useState(admin.id)

    const [formData, setFormdata] = useState({

        'admin_id': '',
        'admin_type': '',
        'patient_id': '',
        'bill_no': '',
        'patient_bill_amount': '',
        'reffer_id': '',
        'commision_percenttage': '',
        'commision_amount': '',

        'patient_type': '',

    })

    const [data, setdata] = useState([])
    const handleFormdata = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formData,
            [name]: value
        });
    }
    const fetchDatapatient = async () => {
        try {
            const response = await axios.get('/api/admin/patient-fetch');
            // console.log(data)
            setPatientsdata(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleClose = () => {
        // console.log('hello')
        setModal(!modal)
    }
    const updatehandleClose = () => {
        // console.log('hello')
        setupdateModal(!updateModal)
    }
    const handleFileUpload = (e) => {
        const { name, value, type, files } = e.target;
        if (files.length > 0) {
            setatach_file(e.target.files[0])
        }
    }
    const fetchData = () => {
        axios.post('/api/admin/referrablnill-fetch')
            .then(res => {
                console.log(res.data)
                setdata(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchData();
        fetchDatapatient();

        // Fet(id);
    }, []);
    const FormSubmit = (e) => {
        e.preventDefault();
        const formSave = new FormData()

        formSave.append(' admin_id', admin_id)
        formSave.append('admin_type', admin_type)
        formSave.append('patient_id', formData.patient_id)
        formSave.append('bill_no', formData.bill_no)
        formSave.append('patient_bill_amount', formData.patient_bill_amount)
        formSave.append('reffer_id', formData.reffer_id)
        formSave.append('commision_percenttage', formData.commision_percenttage)
        formSave.append('commision_amount', formData.commision_amount)
        formSave.append('patient_type', formData.patient_type)





        axios.post('/api/admin/referrablnill-store', formSave,)
            .then(response => {
                console.log(response)
                fetchData();
            })
            .catch(error => console.log(error))
    }

    const DeleteData = (e, id) => {
        e.preventDefault();

        axios.post(`/api/referrablnill-delete/${id}`)
            .then(response => {
                console.log(response)
                fetchData();
            })
            .catch(error => console.log(error))
    }


    const Updatedata = (e, id) => {
        e.preventDefault();
        const formSave = new FormData()
        formSave.append('patient_id', formData.patient_id)
        formSave.append('bill_no', formData.bill_no)
        formSave.append('patient_bill_amount', formData.patient_bill_amount)
        formSave.append('reffer_id', formData.reffer_id)
        formSave.append('commision_percenttage', formData.commision_percenttage)
        formSave.append('commision_amount', formData.commision_amount)
        formSave.append('patient_type', formData.patient_type)
        axios.post(`/api/admin/referrablnill-update/${id}`, formSave).then(res => fetchData()).catch(error => console.log(error))
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
                                {
                                    data.map((datas, idx) => (
                                        <tr>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.name}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.expense_id}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.date}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.inv_number}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.description}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.amount}</td>
                                            {/* <td className='px-6 py-3 text-left text-xs'>{datas.cml_date}</td> */}
                                            <td className='px-6 py-3 text-left text-xs flex space-x-2'>
                                                <a onClick={() => {
                                                    setFormdata({
                                                        // id: datas.id,
                                                        patient_id: datas.patient_id,
                                                        bill_no: datas.bill_no,
                                                        patient_bill_amount: datas.patient_bill_amount,
                                                        reffer_id: datas.reffer_id,
                                                        commision_percenttage: datas.commision_percenttage,
                                                        commision_amount: datas.commision_amount,
                                                        patient_type: datas.patient_type,

                                                    }); setupdateModal(datas.id)
                                                }}><CiEdit className='text-[1.3rem] cursor-pointer' /></a>
                                                <a onClick={(e) =>

                                                    DeleteData(e, datas.id)
                                                }><FaRegTrashAlt className='text-[1.1rem] cursor-pointer' /></a>


                                            </td>

                                            {/* update model data  */}
                                            <div key={datas.id} id={`exampleModal-${datas.id}`} className={updateModal === datas.id ? "fixed h-screen transform  bg-black bg-opacity-85 shadow-md rounded-md   top-0 bottom-0 right-0 left-0 w-full grid place-items-center " : "fixed h-screen transform  bg-black bg-opacity-85 shadow-md rounded-md   top-0 bottom-0 right-0 left-0 w-full hidden place-items-center"}>
                                                <div className="back-model w-[60%] bg-white relative ">
                                                    <div className="modal-content w-full">
                                                        <div className="modal-header flex justify-between   bg-[#0E99F4] p-2">
                                                            <div className="w-[80%]  px-4 mt-[0.29rem]">
                                                                <select value={formData.patient_id} onChange={handleFormdata} name='patient_id' id className="w-[100%] h-9">
                                                                    <option value="">Select Patient</option>
                                                                    {
                                                                        Patientsdata.map(Patients => (
                                                                            <option value={Patients.id} >{Patients.name}</option>

                                                                        ))
                                                                    }

                                                                </select>
                                                            </div>
                                                            <button onClick={updatehandleClose} className="ml-auto text-[2rem] text-white">
                                                                <RxCross1 />
                                                            </button>

                                                        </div>
                                                        <div className="modal-body flex space-x-4 px-5 ">
                                                            {/* <div className='patients-details w-[60%] flex justify-between'>
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
                                                        <DiMaterialness />
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
                                    </div> */}


                                                            <form action className="w-[100%] grid grid-cols-2 gap-5 px-6 mt-10 relative">
                                                                <div className="form-group w-full ">
                                                                    <label htmlFor>Patient Type *</label>
                                                                    <input onChange={handleFormdata} name='patient_type' value={formData.patient_type} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor> Bill No/Case Id *</label> <br />
                                                                    <input onChange={handleFormdata} name='bill_no' value={formData.bill_no} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Payee *</label> <br />
                                                                    <input onChange={handleFormdata} name='reffer_id' value={formData.reffer_id} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Commission Percentage (%) *</label> <br />
                                                                    <input onChange={handleFormdata} name='commision_percenttage' value={formData.commision_percenttage} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Patient bill amount*</label> <br />
                                                                    <input onChange={handleFormdata} name='patient_bill_amount' value={formData.patient_bill_amount} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                {/* <div className="form-group w-full">
                                            <label htmlFor>Commission Amount (IDR) * </label> <br />

                                            <div class="flex items-center justify-center w-full">
                                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                   
                                                </label>
                                            </div>

                                        </div> */}
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Commission Amount (IDR) * </label> <br />
                                                                    <input onChange={handleFormdata} name='commision_amount' value={formData.commision_amount} type="text" className="w-full border-gray-300" />
                                                                </div>

                                                            </form>


                                                        </div>

                                                        <div className="form-group   bottom-0  left-0 right-0 mt-10 py-4">
                                                            <div className="flex justify-end px-5 p-3 space-x-3 w-full">
                                                                {/* <button className="bg-gray-800 p-2 text-white w-[10%] ">
                                            Save &amp; print
                                        </button> */}
                                                                <button onClick={(e) => Updatedata(e, datas.id)} className="bg-gray-800 p-2 text-white w-[12%] ">
                                                                    Save
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </tr>
                                    ))
                                }

                                <tr>
                                    <td></td>
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
                                    <select value={formData.patient_id} onChange={handleFormdata} name='patient_id' id className="w-[100%] h-9">
                                        <option value="">Select Patient</option>
                                        {
                                            Patientsdata.map(Patients => (
                                                <option value={Patients.id} >{Patients.name}</option>

                                            ))
                                        }

                                    </select>
                                    <button onClick={handleClose} className="ml-auto text-[2rem] text-white">
                                        <RxCross1 />
                                    </button>

                                </div>
                                <div className="modal-body flex space-x-4 px-5 ">
                                    {/* <div className='patients-details w-[60%] flex justify-between'>
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
                                                        <DiMaterialness />
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
                                    </div> */}


                                    <form action className="w-[100%] grid grid-cols-2 gap-5 px-6 mt-10 relative">
                                        <div className="form-group w-full ">
                                            <label htmlFor>Patient Type *</label>
                                            <input onChange={handleFormdata} name='patient_type' value={formData.patient_type} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Bill No/Case Id *</label> <br />
                                            <input onChange={handleFormdata} name='bill_no' value={formData.bill_no} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Payee *</label> <br />
                                            <input onChange={handleFormdata} name='reffer_id' value={formData.reffer_id} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Commission Percentage (%) *</label> <br />
                                            <input onChange={handleFormdata} name='commision_percenttage' value={formData.commision_percenttage} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Patient bill amount*</label> <br />
                                            <input onChange={handleFormdata} name='patient_bill_amount' value={formData.patient_bill_amount} type="text" className="w-full border-gray-300" />
                                        </div>
                                        {/* <div className="form-group w-full">
                                            <label htmlFor>Commission Amount (IDR) * </label> <br />

                                            <div class="flex items-center justify-center w-full">
                                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                   
                                                </label>
                                            </div>

                                        </div> */}
                                        <div className="form-group w-full">
                                            <label htmlFor>Commission Amount (IDR) * </label> <br />
                                            <input onChange={handleFormdata} name='commision_amount' value={formData.commision_amount} type="text" className="w-full border-gray-300" />
                                        </div>

                                    </form>


                                </div>

                                <div className="form-group   bottom-0  left-0 right-0 mt-10 py-4">
                                    <div className="flex justify-end px-5 p-3 space-x-3 w-full">
                                        <button className="bg-gray-800 p-2 text-white w-[10%] ">
                                            Save &amp; print
                                        </button>
                                        <button onClick={FormSubmit} className="bg-gray-800 p-2 text-white w-[5%] ">
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