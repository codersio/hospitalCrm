import Header from '@/components/Admin/partials/Header';
import Sidebar from '@/components/Admin/partials/sidebar';

import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import SidebarSetup from './sidebar';



const radiologyUnit = ({ admin }) => {

    const [modal, setModal] = useState(true)
    const [admin_type, setAdmin_type] = useState(admin.type);
    const [admin_id, setAdminId] = useState(admin.id);
    const [data, setData] = useState([])
    const [updateModal, setupdateModal] = useState(null)

    const [formData, setFormData] = useState({
        radio_unit_name: '',
    });


    const fetchData = () => {
        axios.post('/api/admin/radiologyUnit-fetch').then(res => {
            console.log(res)
            setData(res.data)
        }).catch(error => console.log(error))

    }
    useEffect(() => {
        fetchData();
    }, [])

    const handleClose = () => {
        // console.log('hello')
        setModal(!modal)
    }
    const updatehandleClose = () => {
        // console.log('hello')
        setupdateModal(!updateModal)
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formSave = new FormData();
        formSave.append('radio_unit_name', formData.radio_unit_name)
        formSave.append('admin_id', admin_id)
        formSave.append('admin_type', admin_type)







        try {
            const response = await axios.post('/api/admin/radiologyUnit-store', formSave);

            fetchData();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const Updatedata = (e, id) => {
        e.preventDefault();
        const formSave = new FormData();
        formSave.append('radio_unit_name', formData.radio_unit_name)
        formSave.append('admin_id', admin_id)
        formSave.append('admin_type', admin_type)

        axios.post(`/api/admin/radiologyUnit-update/${id}`, formSave).then(res => fetchData()).catch(error => console.log(error))
    }
    const DeleteData = (e, id) => {
        e.preventDefault();

        axios.post(`/api/admin/radiologyUnit-delete/${id}`)
            .then(response => {

                fetchData();
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
                <div className="flex px-9 py-5 space-x-4 " >
                    <div className="sidebar w-[14%] shadow-sm">
                        <SidebarSetup />
                    </div>

                    <div className="w-[86%] shadow-sm">
                        <div className="relative">
                            <div className="card mt-2">
                                <div className="card-header flex justify-between px-[3rem] border py-3">
                                    <div className="grid place-items-center text-[22px]">
                                        <h1>Pathology Units List  </h1>
                                    </div>
                                    <button type='button' onClick={handleClose} className="bg-gray-700 p-1 px-2 text-white  flex space-x-2">
                                        <div className='grid place-items-center mt-1'>
                                            <FaPlus />
                                        </div>
                                        <h1> Add  Item </h1>
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-x-auto w-full">
                                <table className="table-auto min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr className='text-[#333] text-[14px] font-bold'>
                                            <th className="px-6 py-3 text-left  tracking-wider">
                                                Units Name
                                            </th> <th className="px-6 py-3  tracking-wider text-end">
                                                Action
                                            </th>




                                            {/* Add more table headers here as needed */}
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {
                                            data.map((datas, idx) => (
                                                <tr>
                                                    <td className='px-6 py-3 text-left text-xs'>{datas.radio_unit_name}</td>



                                                    <td td className='px-6 py-3  text-xs flex space-x-2 text-end justify-end' >
                                                        <a onClick={() => {
                                                            setFormData({

                                                                radio_unit_name: datas.radio_unit_name,

                                                                id: datas.id,






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

                                                                    <form action className="w-full grid grid-cols-1 gap-5 px-6 mt-10 relative">
                                                                        <div className="form-group w-full ">
                                                                            <label htmlFor>Units Name *</label>
                                                                            <input onChange={handleChange} name='radio_unit_name' value={formData.radio_unit_name} type="text" className="w-full border-gray-300" />
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
                                                <h1 className='text-white text-[1.5rem]'>Add Item</h1>
                                            </div>
                                            <button onClick={handleClose} className="ml-auto text-[2rem] text-white">
                                                <RxCross1 />
                                            </button>

                                        </div>
                                        <div className="modal-body">

                                            <form action className="w-full grid grid-cols-1 gap-5 px-6 mt-10 relative">


                                                <div className="form-group w-full">
                                                    <label htmlFor>Units Name *</label> <br />
                                                    <input onChange={handleChange} name='radio_unit_name' value={formData.radio_unit_name} type="text" className="w-full border-gray-300" />
                                                </div>


                                            </form>



                                        </div>

                                        <div className="form-group   bottom-0  left-0 right-0 mt-10 py-4">
                                            <div className="flex justify-end px-5 p-3 space-x-3 w-full">
                                                {/* <button className="bg-gray-800 p-2 text-white w-[10%] ">
                                            Save &amp; print
                                        </button> */}
                                                <button onClick={handleSubmit} className="bg-gray-800 p-2 text-white w-[12%] ">
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

            </div >
        </div >
    );
}

export default radiologyUnit;