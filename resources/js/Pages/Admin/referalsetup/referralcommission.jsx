import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import SidebarSetup from './sidebar';
const CommissionReferral = ({ admin, category }) => {

    const [modal, setModal] = useState(true)
    const [updateModal, setupdateModal] = useState(null)
    const [admin_type, setAdminType] = useState(admin.type)
    const [admin_id, setId] = useState(admin.id)

    const [formData, setFormdata] = useState({


        'category_id': '',
        'stander_charges': '',

        'opd': '',
        'ipd': '',
        'pharmacy': '',
        'pathology': '',
        'radiology': '',
        'blood_bank': '',
        'ambulance': '',

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
        axios.post('/api/admin/referralCommission-fetch')
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
        formSave.append('admin_id', admin_id)
        formSave.append('admin_type', admin_type)
        formSave.append('category_id', formData.category_id)
        formSave.append('stander_charges', formData.stander_charges)
        formSave.append('opd', formData.opd)
        formSave.append('ipd', formData.ipd)
        formSave.append('pharmacy', formData.pharmacy)
        formSave.append('pathology', formData.pathology)
        formSave.append('radiology', formData.radiology)
        formSave.append('blood_bank', formData.blood_bank)
        formSave.append('ambulance', formData.ambulance)




        axios.post('/api/admin/referralcommission-store', formSave,)
            .then(response => {
                console.log(response)
                fetchData();
            })
            .catch(error => console.log(error))
    }
    const DeleteData = (e, id) => {
        e.preventDefault();

        axios.post(`/api/admin/referralCommission-delete/${id}`)
            .then(response => {
                console.log(response)
                fetchData();
            })
            .catch(error => console.log(error))
    }

    const Updatedata = (e, id) => {
        e.preventDefault();
        const formSave = new FormData()
        formSave.append('reffer_name', formData.reffer_name)
        formSave.append('reffer_contact', formData.reffer_contact)
        formSave.append('reffer_person_name', formData.reffer_person_name)
        formSave.append('reffer_person_phone', formData.reffer_person_phone)
        formSave.append('category_id', formData.category_id)
        formSave.append('stander_charges', formData.stander_charges)
        formSave.append('reffer_address', formData.reffer_address)

        formSave.append('opd', formData.opd)
        formSave.append('ipd', formData.ipd)
        formSave.append('pharmacy', formData.pharmacy)

        formSave.append('pathology', formData.pathology)
        formSave.append('radiology', formData.radiology)
        formSave.append('blood_bank', formData.blood_bank)
        formSave.append('ambulance', formData.ambulance)

        axios.post(`/api/admin/referralCommission-update/${id}`, formSave).then(res => fetchData()).catch(error => console.log(error))
    }

    return (

        <div className="flex h-screen">

            <div className="bg-gray-800 text-white w-[11%] flex-shrink-0">

                <Sidebar />
            </div>


            <div className="flex-grow bg-gray-100 ">
                <Header />
                <div className="relative">
                    <div className="flex px-9 py-5 space-x-4 " >
                        <div className="sidebar w-[14%] shadow-sm">
                            <SidebarSetup />
                        </div>
                        <div className="w-[86%] shadow-sm">
                            <div className="card mt-2 ">
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

                                                Category
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Module - Commission
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
                                                    <td className='px-6 py-3 text-left text-xs'>{datas.referral_cate_name}</td>
                                                    <td className='px-6 py-3 text-left text-xs'>

                                                        OPD:{datas.opd}% <br />
                                                        IPD:{datas.ipd} %<br />
                                                        Pharmacy:{datas.pharmacy}% <br />
                                                        Radiology:{datas.radiology}% <br />
                                                        Ambulance:{datas.ambulance}% <br />
                                                        {/* OPD:{datas.opd} <br/>
                                                    OPD:{datas.opd} <br/> */}

                                                    </td>

                                                    {/* <td className='px-6 py-3 text-left text-xs'>{datas.cml_date}</td> */}
                                                    <td className='px-6 py-3 text-left text-xs flex space-x-2'>
                                                        <a onClick={() => {
                                                            setFormdata({
                                                                // id: datas.id,
                                                                reffer_name: datas.reffer_name,

                                                                reffer_contact: datas.reffer_contact,
                                                                reffer_person_name: datas.reffer_person_name,
                                                                reffer_person_phone: datas.reffer_person_phone,
                                                                category_id: datas.category_id,
                                                                stander_charges: datas.stander_charges,
                                                                reffer_address: datas.reffer_address,

                                                                opd: datas.opd,
                                                                ipd: datas.ipd,
                                                                pharmacy: datas.pharmacy,
                                                                pathology: datas.pathology,
                                                                radiology: datas.radiology,
                                                                blood_bank: datas.blood_bank,
                                                                ambulance: datas.ambulance

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
                                                                <div className="grid grid-cols-1 px-6 gap-3">
                                                                    <div>
                                                                        <div className="grid grid-cols-2 gap-3">

                                                                            <div className="form-group w-full">
                                                                                <label htmlFor>Standard Commission (%) </label> <br />
                                                                                <input onChange={handleFormdata} name='stander_charges' value={formData.stander_charges} type="text" className="w-full border-gray-300" />
                                                                            </div>
                                                                            <div className="form-group w-full">
                                                                                <label htmlFor>Category * </label> <br />
                                                                                <select name="category_id" value={formData.category_id} onChange={handleFormdata} id="" className="w-full border-gray-300">
                                                                                    <option value="">select</option>
                                                                                    {
                                                                                        category.map(cat => (
                                                                                            <option key={cat.id} value={cat.id}>{cat.referral_cate_name}</option>
                                                                                        ))
                                                                                    }
                                                                                    {/* <option value="1">OPD</option> */}
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        {/* <div className="form-group w-full">
                                                    <label htmlFor>Address </label> <br />
                                                    <input onChange={handleFormdata} value={formData.reffer_address} name='reffer_address' type="text" className="w-full border-gray-300" />
                                                </div> */}



                                                                    </div>
                                                                    <div className="content mt-4">
                                                                        <div className='flex justify-end'><button className='p-2 rounded-md bg-slate-600 text-white'>Apply All</button></div>
                                                                        <div className="flex justify-between">
                                                                            <h1>
                                                                                OPD</h1>
                                                                            <input onChange={handleFormdata} value={formData.opd} name='opd' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                                                        </div>
                                                                        <div className="flex justify-between">
                                                                            <h1>
                                                                                IPD</h1>
                                                                            <input onChange={handleFormdata} value={formData.ipd} name='ipd' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                                                        </div>
                                                                        <div className="flex justify-between">
                                                                            <h1>
                                                                                Pharmacy</h1>
                                                                            <input onChange={handleFormdata} value={formData.pharmacy} name='pharmacy' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                                                        </div>
                                                                        <div className="flex justify-between">
                                                                            <h1>
                                                                                Pathology</h1>
                                                                            <input onChange={handleFormdata} value={formData.pathology} name='pathology' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                                                        </div>
                                                                        <div className="flex justify-between">
                                                                            <h1>
                                                                                Radiology</h1>
                                                                            <input onChange={handleFormdata} value={formData.radiology} name='radiology' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                                                            {/* <input onChange={handleFormdata} value={formData.radiology} name='radiology' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" /> */}
                                                                        </div>
                                                                        <div className="flex justify-between">
                                                                            <h1>
                                                                                Blood Bank</h1>
                                                                            <input onChange={handleFormdata} value={formData.blood_bank} name='blood_bank' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                                                        </div>
                                                                        <div className="flex justify-between">
                                                                            <h1>
                                                                                ambulance</h1>
                                                                            <input onChange={handleFormdata} value={formData.ambulance} name='ambulance' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                                                        </div>

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
                                        <div className="grid grid-cols-1 px-6 gap-3">
                                            <div>
                                                <div className="grid grid-cols-2 gap-3">

                                                    <div className="form-group w-full">
                                                        <label htmlFor>Standard Commission (%) </label> <br />
                                                        <input onChange={handleFormdata} name='stander_charges' value={formData.stander_charges} type="text" className="w-full border-gray-300" />
                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Category * </label> <br />
                                                        <select name="category_id" value={formData.category_id} onChange={handleFormdata} id="" className="w-full border-gray-300">
                                                            <option value="">select</option>
                                                            {
                                                                category.map(cat => (
                                                                    <option key={cat.id} value={cat.id}>{cat.referral_cate_name}</option>
                                                                ))
                                                            }
                                                            {/* <option value="1">OPD</option> */}
                                                        </select>
                                                    </div>
                                                </div>
                                                {/* <div className="form-group w-full">
                                                    <label htmlFor>Address </label> <br />
                                                    <input onChange={handleFormdata} value={formData.reffer_address} name='reffer_address' type="text" className="w-full border-gray-300" />
                                                </div> */}



                                            </div>
                                            <div className="content mt-4">
                                                <div className='flex justify-end'><button className='p-2 rounded-md bg-slate-600 text-white'>Apply All</button></div>
                                                <div className="flex justify-between">
                                                    <h1>
                                                        OPD</h1>
                                                    <input onChange={handleFormdata} value={formData.opd} name='opd' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                                </div>
                                                <div className="flex justify-between">
                                                    <h1>
                                                        IPD</h1>
                                                    <input onChange={handleFormdata} value={formData.ipd} name='ipd' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                                </div>
                                                <div className="flex justify-between">
                                                    <h1>
                                                        Pharmacy</h1>
                                                    <input onChange={handleFormdata} value={formData.pharmacy} name='pharmacy' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                                </div>
                                                <div className="flex justify-between">
                                                    <h1>
                                                        Pathology</h1>
                                                    <input onChange={handleFormdata} value={formData.pathology} name='pathology' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                                </div>
                                                <div className="flex justify-between">
                                                    <h1>
                                                        Radiology</h1>
                                                    <input onChange={handleFormdata} value={formData.radiology} name='radiology' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                                    {/* <input onChange={handleFormdata} value={formData.radiology} name='radiology' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" /> */}
                                                </div>
                                                <div className="flex justify-between">
                                                    <h1>
                                                        Blood Bank</h1>
                                                    <input onChange={handleFormdata} value={formData.blood_bank} name='blood_bank' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                                </div>
                                                <div className="flex justify-between">
                                                    <h1>
                                                        ambulance</h1>
                                                    <input onChange={handleFormdata} value={formData.ambulance} name='ambulance' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="form-group   bottom-0  left-0 right-0 mt-10 py-4">
                                            <div className="flex justify-end px-5 p-3 space-x-3 w-full">
                                                {/* <button className="bg-gray-800 p-2 text-white w-[10%] ">
                                            Save &amp; print
                                        </button> */}
                                                <button onClick={FormSubmit} className="bg-gray-800 p-2 text-white w-[10%] ">
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
            </div>
        </div>

    );
}

export default CommissionReferral;