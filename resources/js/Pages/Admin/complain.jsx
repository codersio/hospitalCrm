import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
const Complain = ({ admin }) => {

    const [modal, setModal] = useState(true)
    const [updateModal, setupdateModal] = useState(null)
    const [admin_type, setAdminType] = useState(admin.type)
    const [admin_id, setId] = useState(admin.id)
    const [cml_atach_file, setcml_atach_file] = useState('')
    const [formData, setFormdata] = useState({
        'cml_name': '',
        'cml_source': '',
        'cml_by': '',
        'cml_phone': '',
        'cml_date': '',
        'cml_description': '',
        'cml_token': '',
        'cml_assigned': '',
        'cml_note': '',

    })

    const [data, setdata] = useState([])
    const handleFormdata = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formData,
            [name]: value
        });
    }

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
            setcml_atach_file(e.target.files[0])
        }
    }
    const fetchData = () => {
        axios.post('/api/admin/complain-fetch')
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

        // Fet(id);
    }, []);
    const FormSubmit = (e) => {
        e.preventDefault();
        const formSave = new FormData()
        formSave.append('cml_name', formData.cml_name)
        formSave.append('cml_source', formData.cml_source)
        formSave.append('cml_by', formData.cml_by)
        formSave.append('cml_phone', formData.cml_phone)
        formSave.append('cml_date', formData.cml_date)
        formSave.append('cml_description', formData.cml_description)
        formSave.append('cml_token', formData.cml_token)
        formSave.append('cml_assigned', formData.cml_assigned)
        formSave.append('cml_note', formData.cml_note)
        formSave.append('cml_atach_file', cml_atach_file)
        formSave.append('admin_type', admin_type)
        formSave.append('admin_id', admin_id)

        axios.post('/api/admin/complain-store', formSave, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                // console.log(response)
                fetchData();
            })
            .catch(error => console.log(error))
    }

    const DeleteData = (e, id) => {
        e.preventDefault();

        axios.delete(`/api/admin/complain-delete/${id}`)
            .then(response => {
                console.log(response)
                fetchData();
            })
            .catch(error => console.log(error))
    }


    const Updatedata = (e, id) => {
        e.preventDefault();
        const formSave = new FormData()
        formSave.append('cml_name', formData.cml_name)
        formSave.append('cml_source', formData.cml_source)
        formSave.append('cml_by', formData.cml_by)
        formSave.append('cml_phone', formData.cml_phone)
        formSave.append('cml_date', formData.cml_date)
        formSave.append('cml_description', formData.cml_description)
        formSave.append('cml_token', formData.cml_token)
        formSave.append('cml_assigned', formData.cml_assigned)
        formSave.append('cml_note', formData.cml_note)
        formSave.append('cml_atach_file', cml_atach_file)
        formSave.append('admin_type', admin_type)
        formSave.append('admin_id', admin_id)
        axios.post(`/api/admin/complain-update/${id}`, formSave).then(res => fetchData()).catch(error => console.log(error))
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
                                <h1>Complain List</h1>
                            </div>
                            <button type='button' onClick={handleClose} className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                <div className='grid place-items-center mt-1'>
                                    <FaPlus />
                                </div>
                                <h1>Add Complain </h1>
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Complain #
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Complain Type
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Source
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Phone
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
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
                                            <td className='px-6 py-3 text-left text-xs'>{datas.cml_no}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.cml_name}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.cml_source}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.cml_name}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.cml_phone}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.cml_date}</td>
                                            <td className='px-6 py-3 text-left text-xs flex space-x-2'>
                                                <a onClick={() => {
                                                    setFormdata({
                                                        id: datas.id,
                                                        cml_phone: datas.cml_phone,
                                                        cml_name: datas.cml_name,
                                                        cml_source: datas.cml_source,
                                                        cml_by: datas.cml_by,
                                                        cml_phone: datas.cml_phone,
                                                        cml_date: datas.cml_date,
                                                        cml_description: datas.cml_description,
                                                        cml_token: datas.cml_token,
                                                        cml_assigned: datas.cml_assigned,
                                                        cml_note: datas.cml_note,
                                                        cml_atach_file: datas.cml_name,
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
                                                                <h1 className='text-white text-[2rem]'>update Complain {datas.id}</h1>
                                                            </div>
                                                            <button onClick={updatehandleClose} className="ml-auto text-[2rem] text-white">
                                                                <RxCross1 />
                                                            </button>

                                                        </div>
                                                        <div className="modal-body">

                                                            <form action className="w-full grid grid-cols-3 gap-5 px-6 mt-10 relative">
                                                                <div className="form-group w-full ">
                                                                    <label htmlFor>Complain Name</label>
                                                                    <select onChange={handleFormdata} name='cml_name' value={formData.cml_name} id className="w-full border-gray-300">
                                                                        <option value>Select complain</option>
                                                                        <option value="1">Food quality</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-group w-full ">
                                                                    <label htmlFor>Complain Type</label>
                                                                    <select onChange={handleFormdata} name='cml_source' value={formData.cml_source} id className="w-full border-gray-300">
                                                                        <option value>Select Source</option>
                                                                        <option value="1">Food quality</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor> Complain By *</label> <br />
                                                                    <input onChange={handleFormdata} name='cml_by' value={formData.cml_by} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor> Phone *</label> <br />
                                                                    <input onChange={handleFormdata} name='cml_phone' value={formData.cml_phone} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Date</label> <br />
                                                                    <input type="text" onChange={handleFormdata} name='cml_date' value={formData.cml_date} className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Action Taken </label> <br />
                                                                    <input type="text" onChange={handleFormdata} name='cml_token' value={formData.cml_token} className="w-full border-gray-300" />
                                                                </div>

                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Assigned</label> <br />
                                                                    <input type="text" onChange={handleFormdata} name='cml_assigned' value={formData.cml_assigned} className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Patients Photo</label> <br />
                                                                    <div class="flex items-center justify-center w-full">
                                                                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                                            <div class="flex flex-col items-center justify-center mt-4">
                                                                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                                                </svg>

                                                                            </div>
                                                                            <input name='cml_atach_file' onChange={handleFileUpload} id="dropzone-file" type="file" class="hidden" />
                                                                        </label>
                                                                    </div>
                                                                </div>

                                                            </form>
                                                            <div className="form-group w-full px-6 mt-3">
                                                                <label htmlFor>Description</label> <br />
                                                                <textarea onChange={handleFormdata} value={formData.cml_description} name='cml_description' type="date" className="w-full border-gray-300" ></textarea>
                                                            </div>
                                                            <div className="form-group w-full px-6 mt-3">
                                                                <label htmlFor>Note</label> <br />
                                                                <textarea onChange={handleFormdata} value={formData.cml_note} name='cml_note' type="date" className="w-full border-gray-300" ></textarea>
                                                            </div>

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
                                    <div className="w-[80%]  px-4 mt-[0.29rem]">
                                        <h1 className='text-white text-[2rem]'>Add Visitor</h1>
                                    </div>
                                    <button onClick={handleClose} className="ml-auto text-[2rem] text-white">
                                        <RxCross1 />
                                    </button>

                                </div>
                                <div className="modal-body">

                                    <form action className="w-full grid grid-cols-3 gap-5 px-6 mt-10 relative">
                                        <div className="form-group w-full ">
                                            <label htmlFor>Complain Name</label>
                                            <select onChange={handleFormdata} name='cml_name' value={formData.cml_name} id className="w-full border-gray-300">
                                                <option value>Select complain</option>
                                                <option value="1">Food quality</option>
                                            </select>
                                        </div>
                                        <div className="form-group w-full ">
                                            <label htmlFor>Complain Type</label>
                                            <select onChange={handleFormdata} name='cml_source' value={formData.cml_source} id className="w-full border-gray-300">
                                                <option value>Select Source</option>
                                                <option value="1">Food quality</option>
                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Complain By *</label> <br />
                                            <input onChange={handleFormdata} name='cml_by' value={formData.cml_by} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Phone *</label> <br />
                                            <input onChange={handleFormdata} name='cml_phone' value={formData.cml_phone} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Date</label> <br />
                                            <input type="text" onChange={handleFormdata} name='cml_date' value={formData.cml_date} className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Action Taken </label> <br />
                                            <input type="text" onChange={handleFormdata} name='cml_token' value={formData.cml_token} className="w-full border-gray-300" />
                                        </div>

                                        <div className="form-group w-full">
                                            <label htmlFor>Assigned</label> <br />
                                            <input type="text" onChange={handleFormdata} name='cml_assigned' value={formData.cml_assigned} className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Patients Photo</label> <br />
                                            <div class="flex items-center justify-center w-full">
                                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                    <div class="flex flex-col items-center justify-center mt-4">
                                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>

                                                    </div>
                                                    <input name='cml_atach_file' onChange={(e) => setcml_atach_file(e.target.files[0])} id="dropzone-file" type="file" class="hidden" />
                                                </label>
                                            </div>
                                        </div>

                                    </form>
                                    <div className="form-group w-full px-6 mt-3">
                                        <label htmlFor>Description</label> <br />
                                        <textarea onChange={handleFormdata} value={formData.cml_description} name='cml_description' type="date" className="w-full border-gray-300" ></textarea>
                                    </div>
                                    <div className="form-group w-full px-6 mt-3">
                                        <label htmlFor>Note</label> <br />
                                        <textarea onChange={handleFormdata} value={formData.cml_note} name='cml_note' type="date" className="w-full border-gray-300" ></textarea>
                                    </div>

                                </div>

                                <div className="form-group   bottom-0  left-0 right-0 mt-10 py-4">
                                    <div className="flex justify-end px-5 p-3 space-x-3 w-full">
                                        {/* <button className="bg-gray-800 p-2 text-white w-[10%] ">
                                            Save &amp; print
                                        </button> */}
                                        <button onClick={FormSubmit} className="bg-gray-800 p-2 text-white w-[12%] ">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div >
        </div >

    );
}

export default Complain;