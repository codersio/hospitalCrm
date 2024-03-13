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

        'pl_name': '',
        'pl_phone': '',
        'pl_date': '',
        'pl_description': '',
        'pl_next_follor_date': '',
        'pl_call_duration': '',
        'pl_call_tpe': '',
        'pl_note': '',

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
        axios.post('/api/admin/phone-logs-fetch')
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
        formSave.append('pl_name', formData.pl_name)
        formSave.append(' admin_id', admin_id)
        formSave.append('admin_type', admin_type)
        formSave.append('pl_next_follor_date', formData.pl_next_follor_date)
        formSave.append('pl_call_duration', formData.pl_call_duration)
        formSave.append('pl_phone', formData.pl_phone)
        formSave.append('pl_date', formData.pl_date)
        formSave.append('pl_description', formData.pl_description)
        formSave.append('pl_call_tpe', formData.pl_call_tpe)
        formSave.append('pl_note', formData.pl_note)


        axios.post('/api/admin/phone-logs-store', formSave,)
            .then(response => {
                console.log(response)
                fetchData();
            })
            .catch(error => console.log(error))
    }

    const DeleteData = (e, id) => {
        e.preventDefault();

        axios.post(`/api/admin/phone-logs-delete/${id}`)
            .then(response => {
                console.log(response)
                fetchData();
            })
            .catch(error => console.log(error))
    }


    const Updatedata = (e, id) => {
        e.preventDefault();
        const formSave = new FormData()
        formSave.append('pl_name', formData.pl_name)
        // formSave.append(' admin_id', formData.admin_id)
        // formSave.append('admin_type', formData.admin_type)
        formSave.append('pl_next_follor_date', formData.pl_next_follor_date)
        formSave.append('pl_call_duration', formData.pl_call_duration)
        formSave.append('pl_phone', formData.pl_phone)
        formSave.append('pl_date', formData.pl_date)
        formSave.append('pl_description', formData.pl_description)
        formSave.append('pl_call_tpe', formData.pl_call_tpe)
        formSave.append('pl_note', formData.pl_note)
        axios.post(`/api/admin/phone-logs-update/${id}`, formSave).then(res => fetchData()).catch(error => console.log(error))
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
                                <h1>Add Call Logs </h1>
                            </button>
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
                                        Phone
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Next Follow Up Date                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Call Type
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
                                            <td className='px-6 py-3 text-left text-xs'>{datas.pl_name}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.pl_phone}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.pl_date}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.pl_next_follor_date}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.pl_call_tpe}</td>
                                            {/* <td className='px-6 py-3 text-left text-xs'>{datas.cml_date}</td> */}
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
                                                                    <label htmlFor> Name</label>
                                                                    <input onChange={handleFormdata} name='pl_name' value={formData.pl_name} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full ">
                                                                    <label htmlFor>Phone</label>
                                                                    <input onChange={handleFormdata} name='pl_phone' value={formData.pl_phone} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor> Date</label> <br />
                                                                    <input onChange={handleFormdata} name='pl_date' value={formData.pl_date} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor> Next Follow Up DatePhone *</label> <br />
                                                                    <input onChange={handleFormdata} name='pl_next_follor_date' value={formData.pl_next_follor_date} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Call Duration</label> <br />
                                                                    <input type="text" onChange={handleFormdata} name='pl_call_duration' value={formData.pl_call_duration} className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Call Type</label> <br />
                                                                    <select className="w-full border-gray-300" onChange={handleFormdata} name='pl_call_tpe' value={formData.pl_call_tpe} id="">
                                                                        <option value="">Select call type</option>
                                                                        <option value="incoming">Incoming</option>
                                                                        <option value="outgoing">Outgoing</option>
                                                                    </select>
                                                                </div>


                                                            </form>
                                                            <div className="form-group w-full px-6 mt-3">
                                                                <label htmlFor>Description</label> <br />
                                                                <textarea onChange={handleFormdata} value={formData.pl_description} name='pl_description' type="date" className="w-full border-gray-300" ></textarea>
                                                            </div>
                                                            <div className="form-group w-full px-6 mt-3">
                                                                <label htmlFor>Note</label> <br />
                                                                <textarea onChange={handleFormdata} value={formData.pl_note} name='pl_note' type="date" className="w-full border-gray-300" ></textarea>
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
                                            <label htmlFor> Name</label>
                                            <input onChange={handleFormdata} name='pl_name' value={formData.pl_name} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full ">
                                            <label htmlFor>Phone</label>
                                            <input onChange={handleFormdata} name='pl_phone' value={formData.pl_phone} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Date</label> <br />
                                            <input onChange={handleFormdata} name='pl_date' value={formData.pl_date} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Next Follow Up DatePhone *</label> <br />
                                            <input onChange={handleFormdata} name='pl_next_follor_date' value={formData.pl_next_follor_date} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Call Duration</label> <br />
                                            <input type="text" onChange={handleFormdata} name='pl_call_duration' value={formData.pl_call_duration} className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Call Type</label> <br />
                                            <select className="w-full border-gray-300" onChange={handleFormdata} name='pl_call_tpe' value={formData.pl_call_tpe} id="">
                                                <option value="">Select call type</option>
                                                <option value="incoming">Incoming</option>
                                                <option value="outgoing">Outgoing</option>
                                            </select>
                                        </div>


                                    </form>
                                    <div className="form-group w-full px-6 mt-3">
                                        <label htmlFor>Description</label> <br />
                                        <textarea onChange={handleFormdata} value={formData.pl_description} name='pl_description' type="date" className="w-full border-gray-300" ></textarea>
                                    </div>
                                    <div className="form-group w-full px-6 mt-3">
                                        <label htmlFor>Note</label> <br />
                                        <textarea onChange={handleFormdata} value={formData.pl_note} name='pl_note' type="date" className="w-full border-gray-300" ></textarea>
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