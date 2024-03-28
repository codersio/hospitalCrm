import Header from '@/components/Admin/partials/Header';
import Sidebar from '@/components/Admin/partials/sidebar';

import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

// // import Sidebar from './sidebar';
import Sidebarsetup from './sidebar';

const hopitalCharge = ({ admin, chargetype }) => {

    const [modal, setModal] = useState(true)
    const [admin_type, setAdmin_type] = useState(admin.type);
    const [admin_id, setAdminId] = useState(admin.id);
    const [data, setData] = useState([])
    const [Hstype, setHstype] = useState([])
    const [updateModal, setupdateModal] = useState(null)
    const [charge_type_id, setcharge_type_id] = useState('')
    const [charge_category_id, setcharge_category_id] = useState('')
    const [categoryId, setCategory] = useState([])
    const [formData, setFormData] = useState({
        // 'charge_type_id': '',
        // 'charge_category_id': '',
        'unit_id': '',
        'charge_name': '',
        'charge_tax_id': '',
        'tax': '',
        'stander_charge': '',
        'description': '',
    });


    const fetchData = () => {
        axios.post('/api/admin/hospitalcharge-fetch').then(res => {
            // console.log(res)
            setData(res.data)
        }).catch(error => console.log(error))

    }
    const Hospitalfetchtype = () => {
        axios.post('/api/admin/hospitalchargetype-fetch').then(res => {
            console.log(res)
            setHstype(res.data)
        }).catch(error => console.log(error))

    }
    const handleCategoryChange = (event) => {
        const TypesID = event.target.value;
        setcharge_type_id(TypesID);
        // Fetch product types based on the selected category
        axios.post(`/api/admin/hospitalchargeCategory/${TypesID}`)
            // .then(response => response.json())
            .then(res => { setCategory(res.data); console.log(res) })
            .catch(error => console.error('Error fetching product types:', error));
    };
    const handleProductCateChange = (event) => {
        setcharge_category_id(event.target.value);
    };

    useEffect(() => {
        fetchData();
        Hospitalfetchtype();
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
        formSave.append('charge_type_id', charge_type_id)
        formSave.append('charge_category_id', charge_category_id)
        formSave.append('unit_id', formData.unit_id)
        formSave.append('charge_name', formData.charge_name)
        formSave.append('charge_tax_id', formData.charge_tax_id)
        formSave.append('tax', formData.tax)
        formSave.append('stander_charge', formData.stander_charge)
        formSave.append('description', formData.description)
        formSave.append('admin_id', admin_id)
        formSave.append('admin_type', admin_type)



        try {
            const response = await axios.post('/api/admin/hospitalcharge-store', formSave);

            fetchData();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const Updatedata = (e, id) => {
        e.preventDefault();
        const formSave = new FormData();
        formSave.append('charge_type_id', charge_type_id)
        formSave.append('charge_category_id', charge_category_id)
        formSave.append('unit_id', formData.unit_id)
        formSave.append('charge_name', formData.charge_name)
        formSave.append('charge_tax_id', formData.charge_tax_id)
        formSave.append('tax', formData.tax)
        formSave.append('stander_charge', formData.stander_charge)
        formSave.append('description', formData.description)
        formSave.append('admin_id', admin_id)
        formSave.append('admin_type', admin_type)

        axios.post(`/api/admin/hospitalcharge-update/${id}`, formSave).then(res => fetchData()).catch(error => console.log(error))
    }
    const DeleteData = (e, id) => {
        e.preventDefault();

        axios.post(`/api/admin/hospitalcharge-delete/${id}`)
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
                        <Sidebarsetup />
                    </div>

                    <div className="w-[86%] shadow-sm">
                        <div className="relative">
                            <div className="card mt-2">
                                <div className="card-header flex justify-between px-[3rem] border py-3">
                                    <div className="grid place-items-center text-[22px]">
                                        <h1>Charge Type List  </h1>
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
                                                Name
                                            </th>
                                            <th className="px-6 py-3 text-left  tracking-wider">
                                                Charge Type
                                            </th>
                                            <th className="px-6 py-3 text-left  tracking-wider">
                                                Description
                                            </th>
                                            <th className="px-6 py-3  tracking-wider text-end">
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
                                                    <td className='px-6 py-3 text-left text-xs'>{datas.type_id}</td>
                                                    <td className='px-6 py-3 text-left text-xs'>{datas.description}</td>




                                                    <td td className='px-6 py-3  text-xs flex space-x-2 text-end justify-end' >
                                                        <a onClick={() => {
                                                            setFormData({
                                                                'charge_type_id': datas.charge_type_id,
                                                                'charge_category_id': datas.charge_category_id,
                                                                'unit_id': datas.unit_id,
                                                                'charge_name': datas.name,
                                                                'charge_tax_id': datas.charge_tax_id,
                                                                'tax': datas.tax,
                                                                'stander_charge': datas.stander_charge,
                                                                'description': datas.description,







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


                                                                        <div className="grid grid-cols-2 gap-4">
                                                                            <div className="form-group w-full">
                                                                                <label htmlFor>Charge Type *</label> <br />
                                                                                <select onChange={handleCategoryChange} name='charge_type_id' value={charge_type_id} className="w-full border-gray-300" >
                                                                                    <option value="">Select</option>
                                                                                    {
                                                                                        Hstype.map(ty => (
                                                                                            <option key={ty.id} value={ty.id}>{ty.type_name}</option>
                                                                                        ))
                                                                                    }
                                                                                </select>

                                                                            </div>
                                                                            <div className="form-group w-full">
                                                                                <label htmlFor>Charge Category *</label> <br />
                                                                                <select onChange={handleProductCateChange} name='charge_category_id' value={charge_category_id} className="w-full border-gray-300" >
                                                                                    <option value="">Select</option>
                                                                                    {categoryId.length > 0 && categoryId.map(ty => (
                                                                                        <option key={ty.id} value={ty.id}>{ty.name}</option>
                                                                                    ))
                                                                                    }
                                                                                </select>

                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group w-full">
                                                                            <label htmlFor>Units type *</label> <br />
                                                                            <select onChange={handleChange} name='unit_id' value={formData.unit_id} className="w-full border-gray-300" >
                                                                                <option value="">Select</option>
                                                                                {
                                                                                    chargetype.map(ty => (
                                                                                        <option key={ty.id} value={ty.id}>{ty.type_name}</option>
                                                                                    ))
                                                                                }
                                                                            </select>

                                                                        </div>
                                                                        <div className="form-group w-full">
                                                                            <label htmlFor>Charge Name*</label> <br />
                                                                            <input type="text" onChange={handleChange} name='charge_name' value={formData.charge_name} cols="30" rows="5" className="w-full border-gray-300" />


                                                                        </div>
                                                                        <div className="grid grid-cols-2 gap-4">
                                                                            <div className="form-group w-full">
                                                                                <label htmlFor>Tax Category *</label> <br />
                                                                                <select onChange={handleChange} name='charge_tax_id' value={formData.charge_tax_id} className="w-full border-gray-300" >
                                                                                    <option value="">Select</option>
                                                                                    {
                                                                                        chargetype.map(ty => (
                                                                                            <option key={ty.id} value={ty.id}>{ty.type_name}</option>
                                                                                        ))
                                                                                    }
                                                                                </select>

                                                                            </div>
                                                                            <div className="form-group w-full">
                                                                                <label htmlFor>Tax</label> <br />
                                                                                <input type="text" onChange={handleChange} name='tax' value={formData.tax} cols="30" rows="5" className="w-full border-gray-300" />

                                                                            </div>
                                                                            <div className="form-group w-full">
                                                                                <label htmlFor>Standerd charge</label> <br />
                                                                                <input type="text" onChange={handleChange} name='stander_charge' value={formData.stander_charge} cols="30" rows="5" className="w-full border-gray-300" />

                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group w-full">
                                                                            <label htmlFor>Description</label> <br />
                                                                            <textarea onChange={handleChange} name='description' value={formData.description} cols="30" rows="5" className="w-full border-gray-300"></textarea>


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


                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Charge Type *</label> <br />
                                                        <select onChange={handleCategoryChange} name='charge_type_id' value={charge_type_id} className="w-full border-gray-300" >
                                                            <option value="">Select</option>
                                                            {
                                                                Hstype.map(ty => (
                                                                    <option key={ty.id} value={ty.id}>{ty.type_name}</option>
                                                                ))
                                                            }
                                                        </select>

                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Charge Category *</label> <br />
                                                        <select onChange={handleProductCateChange} name='charge_category_id' value={charge_category_id} className="w-full border-gray-300" >
                                                            <option value="">Select</option>
                                                            {categoryId.length > 0 && categoryId.map(ty => (
                                                                <option key={ty.id} value={ty.id}>{ty.name}</option>
                                                            ))
                                                            }
                                                        </select>

                                                    </div>
                                                </div>
                                                <div className="form-group w-full">
                                                    <label htmlFor>Units type *</label> <br />
                                                    <select onChange={handleChange} name='unit_id' value={formData.unit_id} className="w-full border-gray-300" >
                                                        <option value="">Select</option>
                                                        {
                                                            chargetype.map(ty => (
                                                                <option key={ty.id} value={ty.id}>{ty.type_name}</option>
                                                            ))
                                                        }
                                                    </select>

                                                </div>
                                                <div className="form-group w-full">
                                                    <label htmlFor>Charge Name*</label> <br />
                                                    <input type="text" onChange={handleChange} name='charge_name' value={formData.charge_name} cols="30" rows="5" className="w-full border-gray-300" />


                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Tax Category *</label> <br />
                                                        <select onChange={handleChange} name='charge_tax_id' value={formData.charge_tax_id} className="w-full border-gray-300" >
                                                            <option value="">Select</option>
                                                            {
                                                                chargetype.map(ty => (
                                                                    <option key={ty.id} value={ty.id}>{ty.type_name}</option>
                                                                ))
                                                            }
                                                        </select>

                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Tax</label> <br />
                                                        <input type="text" onChange={handleChange} name='tax' value={formData.tax} cols="30" rows="5" className="w-full border-gray-300" />

                                                    </div>
                                                    <div className="form-group w-full">
                                                        <label htmlFor>Standerd charge</label> <br />
                                                        <input type="text" onChange={handleChange} name='stander_charge' value={formData.stander_charge} cols="30" rows="5" className="w-full border-gray-300" />

                                                    </div>
                                                </div>
                                                <div className="form-group w-full">
                                                    <label htmlFor>Description</label> <br />
                                                    <textarea onChange={handleChange} name='description' value={formData.description} cols="30" rows="5" className="w-full border-gray-300"></textarea>


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

export default hopitalCharge;