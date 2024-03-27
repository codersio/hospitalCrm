import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { Link } from '@inertiajs/react';
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
const Inventory = ({ admin }) => {

    const [modal, setModal] = useState(true)
    const [admin_type, setAdmin_type] = useState(admin.type);
    const [admin_id, setAdminId] = useState(admin.id);
    const [data, setData] = useState([])
    const [updateModal, setupdateModal] = useState(null)
    const [atach_file, setAtachfile] = useState('')
    const [formData, setFormData] = useState({
        admin_id: '',
        admin_type: '',
        inventory_category_id: '',
        inventory_category_name: '',
        supplier_id: '',
        store_id: '',
        qty: '',
        // atach_file: '',
        date: '',
        description: '',
        purchase_price: ''
    });


    const fetchData = () => {
        axios.post('/api/admin/inventory-fetch').then(res => {
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
    const handleFileUpload = (e) => {
        const { name, value, type, files } = e.target;
        if (files.length > 0) {
            setAtachfile(e.target.files[0])
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formSave = new FormData();
        formSave.append('admin_id', admin_id);
        formSave.append('admin_type', admin_type);
        formSave.append('inventory_category_id', formData.inventory_category_id);
        formSave.append('inventory_category_name', formData.inventory_category_name);
        formSave.append('supplier_id', formData.supplier_id);
        formSave.append('store_id', formData.store_id);
        formSave.append('qty', formData.qty);
        formSave.append('atach_file', atach_file);
        formSave.append('date', formData.date);
        formSave.append('description', formData.description);
        formSave.append('purchase_price', formData.purchase_price);


        try {
            const response = await axios.post('/api/admin/inventory-store', formSave);
            console.log(response.data); // Handle response from server

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const Updatedata = (e, id) => {
        e.preventDefault();
        const formSave = new FormData();
        formSave.append('admin_id', admin_id);
        formSave.append('admin_type', admin_type);
        formSave.append('inventory_category_id', formData.inventory_category_id);
        formSave.append('inventory_category_name', formData.inventory_category_name);
        formSave.append('supplier_id', formData.supplier_id);
        formSave.append('store_id', formData.store_id);
        formSave.append('qty', formData.qty);
        formSave.append('atach_file', atach_file);
        formSave.append('date', formData.date);
        formSave.append('description', formData.description);
        formSave.append('purchase_price', formData.purchase_price);
        axios.post(`/api/admin/inventory-update/${id}`, formSave).then(res => fetchData()).catch(error => console.log(error))
    }
    const DeleteData = (e, id) => {
        e.preventDefault();

        axios.post(`/api/admin/inventory-delete/${id}`)
            .then(response => {
                console.log(response)
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
                <div className="relative">
                    <div className="card mt-2">
                        <div className="card-header flex justify-between px-[3rem] border py-3">
                            <div className="grid place-items-center text-[22px]">
                                <h1>Item Stock List</h1>
                            </div>
                            <div className='flex space-x-3'>
                                <button type='button' onClick={handleClose} className="bg-gray-700 p-1 px-2 text-white rounded-sm flex space-x-2">
                                    <div className='grid place-items-center '>
                                        <FaPlus />
                                    </div>
                                    <h1> Add Item</h1>
                                </button>
                                <Link type='button' href='/admin/inventory/item-issue' className="bg-gray-700 p-1 px-2 text-white rounded-sm flex space-x-2">
                                    <div className='grid place-items-center '>
                                        <FaBars />
                                    </div>
                                    <h1>  issue item    </h1>
                                </Link>
                                <Link type='button' href='/admin/inventory/item-list' className="bg-gray-700 p-1 px-2 text-white rounded-sm flex space-x-2">
                                    <div className='grid place-items-center '>
                                        <FaBars />
                                    </div>
                                    <h1>  Item</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr className='text-[#333] text-[14px] font-bold'>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Category
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Supplier
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Store
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Description
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Total Quantity
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Purchase Price
                                    </th>
                                    <th className="px-6 py-3 text-left  tracking-wider">
                                        Action
                                    </th>


                                    {/* Add more table headers here as needed */}
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    data.map((datas, idx) => (
                                        <tr>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.inventory_category_name}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.inventory_category_id}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.supplier_id}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.store_id}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.date}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.description}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.qty}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.purchase_price}</td>
                                            {/* <td className='px-6 py-3 text-left text-xs'>{datas.cml_date}</td> */}
                                            <td className='px-6 py-3 text-left text-xs flex space-x-2'>
                                                <a onClick={() => {
                                                    setFormData({
                                                        // id: datas.id,
                                                        inventory_category_id: datas.inventory_category_id,
                                                        inventory_category_name: datas.inventory_category_name,
                                                        supplier_id: datas.supplier_id,
                                                        store_id: datas.store_id,
                                                        qty: datas.qty,
                                                        // atach_file: '',
                                                        date: datas.date,
                                                        description: datas.description,
                                                        purchase_price: datas.purchase_price

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
                                                                    <label htmlFor>Item Category *</label>
                                                                    <select onChange={handleChange} name="inventory_category_id" value={formData.inventory_category_id} id="" className="w-full border-gray-300" >
                                                                        <option value="">Select</option>
                                                                        <option value="0">Cotton Packs</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor> Item *</label> <br />
                                                                    <select onChange={handleChange} name="inventory_category_name" id="" value={formData.inventory_category_name} className="w-full border-gray-300" >
                                                                        <option value="">Select</option>
                                                                        <option value="0">Cotton Packs</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Supplier * </label> <br />
                                                                    <select onChange={handleChange} name="supplier_id" id="" value={formData.supplier_id} className="w-full border-gray-300" >
                                                                        <option value="">Select</option>
                                                                        <option value="0">Syringe</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Store</label> <br />
                                                                    <select onChange={handleChange} name="store_id" id="" value={formData.store_id} className="w-full border-gray-300">

                                                                        <option value="">Select</option>
                                                                        <option value="0">Syringe</option>



                                                                    </select>
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Quantity *</label> <br />
                                                                    <input onChange={handleChange} name="qty" id="" value={formData.qty} type="text" className="w-full border-gray-300" />
                                                                </div>

                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Purchase Price *</label> <br />
                                                                    <input onChange={handleChange} name="purchase_price" id="" value={formData.purchase_price} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Date</label> <br />
                                                                    <input type="date" onChange={handleChange} name="date" id="" value={formData.date} className="w-full border-gray-300" />
                                                                </div>


                                                            </form>
                                                            <div className="form-group w-full px-6 mt-3">
                                                                <label htmlFor>Description</label> <br />
                                                                <textarea onChange={handleChange} name="description" id="" value={formData.description} type="date" className="w-full border-gray-300" ></textarea>
                                                            </div>
                                                            <div className='px-6'>
                                                                <label htmlFor>Attach Document</label> <br />
                                                                <div class="flex items-center justify-center w-full">
                                                                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                                        <div class="flex flex-col items-center justify-center mt-4">
                                                                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                                            </svg>

                                                                        </div>
                                                                        <input id="dropzone-file" name='atach_file' onChange={handleFileUpload} type="file" class="hidden" />
                                                                    </label>
                                                                </div></div>


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
                                        <h1 className='text-white text-[1.5rem]'>Add Donor Details</h1>
                                    </div>
                                    <button onClick={handleClose} className="ml-auto text-[2rem] text-white">
                                        <RxCross1 />
                                    </button>

                                </div>
                                <div className="modal-body">

                                    <form action className="w-full grid grid-cols-2 gap-5 px-6 mt-10 relative">
                                        <div className="form-group w-full ">
                                            <label htmlFor>Item Category *</label>
                                            <select onChange={handleChange} name="inventory_category_id" value={formData.inventory_category_id} id="" className="w-full border-gray-300" >
                                                <option value="">Select</option>
                                                <option value="0">Cotton Packs</option>
                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Item *</label> <br />
                                            <select onChange={handleChange} name="inventory_category_name" id="" value={formData.inventory_category_name} className="w-full border-gray-300" >
                                                <option value="">Select</option>
                                                <option value="0">Cotton Packs</option>
                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Supplier * </label> <br />
                                            <select onChange={handleChange} name="supplier_id" id="" value={formData.supplier_id} className="w-full border-gray-300" >
                                                <option value="">Select</option>
                                                <option value="0">Syringe</option>
                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Store</label> <br />
                                            <select onChange={handleChange} name="store_id" id="" value={formData.store_id} className="w-full border-gray-300">

                                                <option value="">Select</option>
                                                <option value="0">Syringe</option>



                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Quantity *</label> <br />
                                            <input onChange={handleChange} name="qty" id="" value={formData.qty} type="text" className="w-full border-gray-300" />
                                        </div>

                                        <div className="form-group w-full">
                                            <label htmlFor>Purchase Price *</label> <br />
                                            <input onChange={handleChange} name="purchase_price" id="" value={formData.purchase_price} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Date</label> <br />
                                            <input type="date" onChange={handleChange} name="date" id="" value={formData.date} className="w-full border-gray-300" />
                                        </div>


                                    </form>
                                    <div className="form-group w-full px-6 mt-3">
                                        <label htmlFor>Description</label> <br />
                                        <textarea onChange={handleChange} name="description" id="" value={formData.description} type="date" className="w-full border-gray-300" ></textarea>
                                    </div>
                                    <div className='px-6'>
                                        <label htmlFor>Attach Document</label> <br />
                                        <div class="flex items-center justify-center w-full">
                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col items-center justify-center mt-4">
                                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                    </svg>

                                                </div>
                                                <input id="dropzone-file" name='atach_file' onChange={handleFileUpload} type="file" class="hidden" />
                                            </label>
                                        </div></div>


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

    );
}

export default Inventory;
