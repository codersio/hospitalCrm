import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
const IncTpaManagement = ({ admin }) => {
    const [modal, setModal] = useState(true)
    const [updateModal, setupdateModal] = useState(null)
    const [admin_type, setAdminType] = useState(admin.type)
    const [admin_id, setId] = useState(admin.id)

    const [formData, setFormdata] = useState({


        'name': '',
        'code': '',
        'contact': '',
        'address': '',
        'contact_person_name': '',
        'contact_person_number': '',
        // 'recv_atach_file': '',

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

    const fetchData = () => {
        axios.post('/api/admin/tpamanagement-fetch')
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
        formSave.append('name', formData.name)
        formSave.append(' admin_id', admin_id)
        formSave.append('admin_type', admin_type)
        formSave.append('code', formData.code)
        formSave.append('contact', formData.contact)
        formSave.append('address', formData.address)
        formSave.append('contact_person_name', formData.contact_person_name)

        formSave.append('contact_person_number', formData.contact_person_number)



        axios.post('/api/admin/tpamanagement-store', formSave,)
            .then(response => {
                console.log(response)
                fetchData();
            })
            .catch(error => console.log(error))
    }

    const DeleteData = (e, id) => {
        e.preventDefault();

        axios.post(`/api/admin/tpamanagement-delete/${id}`)
            .then(response => {
                console.log(response)
                fetchData();
            })
            .catch(error => console.log(error))
    }


    const Updatedata = (e, id) => {
        e.preventDefault();
        const formSave = new FormData()
        formSave.append('name', formData.name)
        formSave.append(' admin_id', admin_id)
        formSave.append('admin_type', admin_type)
        formSave.append('code', formData.code)
        formSave.append('contact', formData.contact)
        formSave.append('address', formData.address)
        formSave.append('contact_person_name', formData.contact_person_name)

        formSave.append('contact_person_number', formData.contact_person_number)
        axios.post(`/api/admin/tpamanagement-update/${id}`, formSave).then(res => fetchData()).catch(error => console.log(error))
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
                                <h1>Receive List</h1>
                            </div>
                            <button type='button' onClick={handleClose} className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                <div className='grid place-items-center mt-1'>
                                    <FaPlus />
                                </div>
                                <h1>Add Receive </h1>
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        From Title
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Reference No
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        to Title                              </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Address
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Note
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
                                            <td className='px-6 py-3 text-left text-xs'>{datas.code}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.contact_person_number}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.contact_person_name}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.contact}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.address}</td>
                                            {/* <td className='px-6 py-3 text-left text-xs'>{datas.cml_date}</td> */}
                                            <td className='px-6 py-3 text-left text-xs flex space-x-2'>
                                                <a onClick={() => {
                                                    setFormdata({
                                                        // id: datas.id,
                                                        contact: datas.contact,
                                                        name: datas.name,

                                                        contact_person_number: datas.contact_person_number,
                                                        contact_person_name: datas.contact_person_name,
                                                        address: datas.address,
                                                        code: datas.code,

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
                                                                <h1 className='text-white text-[2rem]'>update Receive {datas.id}</h1>
                                                            </div>
                                                            <button onClick={updatehandleClose} className="ml-auto text-[2rem] text-white">
                                                                <RxCross1 />
                                                            </button>

                                                        </div>
                                                        <div className="modal-body">

                                                            <form action className="w-full grid grid-cols-2 gap-5 px-6 mt-10 relative">
                                                                <div className="form-group w-full ">
                                                                    <label htmlFor>name</label>
                                                                    <input onChange={handleFormdata} name='name' value={formData.name} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full ">
                                                                    <label htmlFor>Code</label>
                                                                    <input onChange={handleFormdata} name='code' value={formData.code} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full ">
                                                                    <label htmlFor>Contact No *</label>
                                                                    <input onChange={handleFormdata} name='contact' value={formData.contact} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Contact Person Name</label> <br />
                                                                    <input onChange={handleFormdata} name='contact_person_number' value={formData.contact_person_number} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Contact Person Phone</label> <br />
                                                                    <input onChange={handleFormdata} name='contact_person_name' value={formData.contact_person_name} type="text" className="w-full border-gray-300" />
                                                                </div>




                                                            </form>


                                                            <div className="form-group w-full px-6 mt-3">
                                                                <label htmlFor>Note</label> <br />
                                                                <textarea onChange={handleFormdata} value={formData.address} name='address' type="date" className="w-full border-gray-300" ></textarea>
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
                                        <h1 className='text-white text-[2rem]'>Add Receive</h1>
                                    </div>
                                    <button onClick={handleClose} className="ml-auto text-[2rem] text-white">
                                        <RxCross1 />
                                    </button>

                                </div>
                                <div className="modal-body">

                                    <form action className="w-full grid grid-cols-2 gap-5 px-6 mt-10 relative">
                                        <div className="form-group w-full ">
                                            <label htmlFor>name</label>
                                            <input onChange={handleFormdata} name='name' value={formData.name} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full ">
                                            <label htmlFor>Code</label>
                                            <input onChange={handleFormdata} name='code' value={formData.code} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full ">
                                            <label htmlFor>Contact No *</label>
                                            <input onChange={handleFormdata} name='contact' value={formData.contact} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Contact Person Name</label> <br />
                                            <input onChange={handleFormdata} name='contact_person_number' value={formData.contact_person_number} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Contact Person Phone</label> <br />
                                            <input onChange={handleFormdata} name='contact_person_name' value={formData.contact_person_name} type="text" className="w-full border-gray-300" />
                                        </div>




                                    </form>


                                    <div className="form-group w-full px-6 mt-3">
                                        <label htmlFor>Note</label> <br />
                                        <textarea onChange={handleFormdata} value={formData.address} name='address' type="date" className="w-full border-gray-300" ></textarea>
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

export default IncTpaManagement;