import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
const FrontOffice = ({ admin }) => {
    const [modal, setModal] = useState(true)
    const [updateModal, setupdateModal] = useState(null)
    const [admin_type, setAdminType] = useState(admin.type)
    const [admin_id, setId] = useState(admin.id)
    const [atach_file, setatach_file] = useState('')
    const [formData, setFormdata] = useState({
        'visit_purpose_id': '',
        'name': '',
        'visitTo': '',
        'staff': '',
        'phone': '',
        'date': '',
        'intime': '',
        'outtime': '',
        'note': '',
        // 'atach_file': '',
        'id_card': '',
        'num_person': '',
        'related_to': '',

    })
    const [data, setdata] = useState([])
    const handleFormdata = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formData,
            [name]: value
        });
    }
    const fetchData = () => {
        axios.post('/api/admin/front-office-fetch-bill')
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
        formSave.append('visit_purpose_id', formData.visit_purpose_id)
        formSave.append(' admin_id', admin_id)
        formSave.append('admin_type', admin_type)
        formSave.append('name', formData.name)
        formSave.append('visitTo', formData.visitTo)
        formSave.append('staff', formData.staff)
        formSave.append('phone', formData.phone)
        formSave.append('date', formData.date)
        formSave.append('intime', formData.intime)
        formSave.append('outtime', formData.outtime)
        formSave.append('note', formData.note)
        formSave.append('id_card', formData.id_card)
        formSave.append('num_person', formData.num_person)
        formSave.append('related_to', formData.related_to)
        formSave.append('atach_file', atach_file)



        axios.post('/api/admin/front-office-store', formSave,)
            .then(response => {
                console.log(response)
                fetchData();
            })
            .catch(error => console.log(error))
    }
    const handleClose = () => {
        // console.log('hello')
        setModal(!modal)
    }


    const DeleteData = (e, id) => {
        e.preventDefault();

        axios.post(`/api/admin/front-office-delete/${id}`)
            .then(response => {
                console.log(response)
                fetchData();
            })
            .catch(error => console.log(error))
    }


    const Updatedata = (e, id) => {
        e.preventDefault();
        const formSave = new FormData()
        formSave.append('visit_purpose_id', formData.visit_purpose_id)
        formSave.append(' admin_id', admin_id)
        formSave.append('admin_type', admin_type)
        formSave.append('name', formData.name)
        formSave.append('visitTo', formData.visitTo)
        formSave.append('staff', formData.staff)
        formSave.append('phone', formData.phone)
        formSave.append('date', formData.date)
        formSave.append('intime', formData.intime)
        formSave.append('outtime', formData.outtime)
        formSave.append('note', formData.note)
        formSave.append('id_card', formData.id_card)
        formSave.append('num_person', formData.num_person)
        formSave.append('related_to', formData.related_to)
        formSave.append('atach_file', atach_file)
        axios.post(`/api/admin/recive-update/${id}`, formSave).then(res => fetchData()).catch(error => console.log(error))
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
                                <h1>Visitor List</h1>
                            </div>
                            <button type='button' onClick={handleClose} className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                <div className='grid place-items-center mt-1'>
                                    <FaPlus />
                                </div>
                                <h1>Add Visitor </h1>
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Purpose
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Visit To
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        IPD/OPD/Staff
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Phone
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        In Time
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Out Time
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Action
                                    </th>

                                    {/* Add more table headers here as needed */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    data.map(datas => (
                                        <tr>
                                            <td>{datas.visit_purpose_id}</td>
                                            <td>{datas.name}</td>
                                            <td>{datas.visitTo}</td>
                                            <td>{datas.staff}</td>
                                            <td>{datas.phone}</td>
                                            <td>{datas.date}</td>
                                            <td>{datas.intime}</td>
                                            <td>{datas.outtime}</td>
                                            <td className='px-6 py-3 text-left text-xs flex space-x-2'>
                                                <a onClick={() => {
                                                    setFormdata({
                                                        // id: datas.id,
                                                        visit_purpose_id: datas.visit_purpose_id,
                                                        name: datas.name,
                                                        visitTo: datas.visitTo,
                                                        staff: datas.staff,
                                                        phone: datas.phone,
                                                        date: datas.date,
                                                        intime: datas.intime,
                                                        outtime: datas.outtime,
                                                        note: datas.note,
                                                        id_card: datas.id_card,
                                                        num_person: datas.num_person,
                                                        related_to: datas.related_to,
                                                        atach_file: datas.atach_file,

                                                    }); setupdateModal(datas.id)
                                                }}><CiEdit className='text-[1.3rem] cursor-pointer' /></a>
                                                <a onClick={(e) =>

                                                    DeleteData(e, datas.id)
                                                }><FaRegTrashAlt className='text-[1.1rem] cursor-pointer' /></a>


                                            </td>
                                        </tr>
                                    ))
                                }
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
                                            <label htmlFor>Purpose  *</label>
                                            <select onChange={handleFormdata} name="visit_purpose_id" value={formData.visit_purpose_id} className="w-full border-gray-300">
                                                <option value>Select purpose</option>
                                                <option value="0">Seminar</option>
                                                <option value="1">Visit</option>

                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Name *</label> <br />
                                            <input onChange={handleFormdata} name='name' value={formData.name} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Phone *</label> <br />
                                            <input onChange={handleFormdata} name='phone' value={formData.phone} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>ID Card</label> <br />
                                            <input onChange={handleFormdata} value={formData.id_card} name='id_card' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Visit To </label> <br />
                                            <select onChange={handleFormdata} value={formData.visitTo} name="visitTo" id className="w-full border-gray-300">
                                                <option value>Select visit</option>
                                                <option value="staff">Staff</option>
                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>IPD/OPD/Staff </label> <br />
                                            <select onChange={handleFormdata} name="staff" value={formData.staff} id className="w-full border-gray-300">
                                                <option value>Select Patient</option>
                                                <option value />
                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Related To</label> <br />
                                            <input onChange={handleFormdata} name='related_to' value={formData.related_to} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Number Of Person</label> <br />
                                            <input onChange={handleFormdata} name='num_person' value={formData.num_person} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Date</label> <br />
                                            <input onChange={handleFormdata} name='date' value={formData.date} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>In Time</label> <br />
                                            <input onChange={handleFormdata} name='intime' value={formData.intime} type="date" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Out Time</label> <br />
                                            <input onChange={handleFormdata} name='outtime' value={formData.outtime} type="date" className="w-full border-gray-300" />
                                        </div>

                                    </form>
                                    <div className="form-group w-full px-6 mt-3">
                                        <label htmlFor>Note</label> <br />
                                        <textarea onChange={handleFormdata} name='note' value={formData.note} type="date" className="w-full border-gray-300" ></textarea>
                                    </div>
                                    <div className="form-group w-full px-6">
                                        <label htmlFor>atach file</label> <br />
                                        <input type="file" onChange={(e) => setatach_file(e.target.files[0])} className="w-full border-gray-300" />
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
            </div>
        </div>

    );
}

export default FrontOffice;