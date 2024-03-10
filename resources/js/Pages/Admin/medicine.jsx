import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import PatientsModal from '@/components/Admin/patientsmodal';
import Swal from 'sweetalert2';
import { Link } from '@inertiajs/react';
const Medicine = ({ admin, medicineCategories, medicine }) => {

    const [modal, setModal] = useState(true)
    const [Patientsmodal, setPatientsmodal] = useState(true)
    const [Patientsdata, setPatientsdata] = useState([]);
    const [errors, setErrors] = useState({});
    const [formData, setformData] = useState({
        'admin_type': admin.type,
        'admin_id': admin.id,
        'name': '',
        'category_id': '',
        'company': '',
        'composition': '',
        'group': '',
        'photo': '',
        'units': '',
        'min_livel': '',
        're_order_livel': '',
        'tax': '',
        'allergies': '',
        'vat': '',
        'sale_price': '',
        'note': '',
        'unit': '',
    })

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setformData({
            ...formData,
            [name]: files ? files[0] : value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    }
    // Clear error message when user starts typing


    const fetchData = async () => {
        try {
            const response = await axios.get('/api/admin/patient-fetch');
            // console.log(data)
            setPatientsdata(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {
        fetchData();
        // AppoinmentfetchData();
        // DoctorfetchData();
        // DepartmentfetchData();
        // Fet(id);
    }, []);

    const createOpd = async (e) => {
        e.preventDefault();
        const validationErrors = {}
        // if (!formData.patient_id.trim()) {

        //     validationErrors.patient_id = 'Patients name is required';
        //     setErrors(validationErrors);
        // }
        // else if (!formData.Medicine_Category.trim()) {
        //     validationErrors.Medicine_Category = 'Medicine Category is required';
        //     setErrors(validationErrors);
        // } else if (!formData.Medicine_Name.trim()) {
        //     validationErrors.Medicine_Name = 'Medicine Name required';
        //     setErrors(validationErrors);
        // } else if (!formData.Batch_No.trim()) {
        //     validationErrors.Batch_No = 'Batch No is required';
        //     setErrors(validationErrors);
        // } else if (!formData.Expiry_Date.trim()) {
        //     validationErrors.Expiry_Date = 'Expiry Date is required';
        //     setErrors(validationErrors);
        // } else if (!formData.Quantity.trim()) {
        //     validationErrors.Quantity = 'Quantity is required';
        //     setErrors(validationErrors);
        // }
        // else if (!formData.Sale_Price.trim()) {
        //     validationErrors.Sale_Price = 'Sale Price is required';
        //     setErrors(validationErrors);
        // }

        // else {

        //     try {


        //         await axios.post('/api/admin/medicine-store', formData, {
        //             headers: {
        //                 'Content-Type': 'multipart/form-data'
        //             }
        //         });

        //         setformData({

        //             'name': '',
        //             'category_id': '',
        //             'company': '',
        //             'composition': '',
        //             'group': '',
        //             'photo': '',
        //             'units': '',
        //             'min_livel': '',
        //             're_order_livel': '',
        //             'tax': '',
        //             'allergies': '',
        //             'vat': '',
        //             'sale_price': '',
        //             'note': '',
        //             'unit': '',
        //         });
        //         // AppoinmentfetchData();
        //         Swal.fire({
        //             icon: 'success',
        //             title: 'Success!',
        //             text: 'Form submitted successfully!',
        //         });
        //     } catch (error) {
        //         console.log(error)

        //     }

        // }
        const formDataToSubmit = new FormData();
        formDataToSubmit.append('name', formData.name);
        formDataToSubmit.append('admin_type', formData.admin_type);
        formDataToSubmit.append('admin_id', formData.admin_id);
        formDataToSubmit.append('category_id', formData.category_id);
        formDataToSubmit.append('company', formData.company);
        formDataToSubmit.append('composition', formData.composition);
        formDataToSubmit.append('group', formData.group);
        formDataToSubmit.append('photo', formData.photo);
        formDataToSubmit.append('units', formData.units);
        formDataToSubmit.append('min_livel', formData.min_livel);
        formDataToSubmit.append('re_order_livel', formData.re_order_livel);
        formDataToSubmit.append('tax', formData.tax);
        formDataToSubmit.append('allergies', formData.allergies);
        formDataToSubmit.append('vat', formData.vat);
        formDataToSubmit.append('sale_price', formData.sale_price);
        formDataToSubmit.append('note', formData.note);
        formDataToSubmit.append('unit', formData.unit);
        try {


            await axios.post('/api/admin/medicine-store', formDataToSubmit, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setformData({

                'name': '',
                'category_id': '',
                'company': '',
                'composition': '',
                'group': '',
                // 'photo': '',
                'units': '',
                'min_livel': '',
                're_order_livel': '',
                'tax': '',
                'allergies': '',
                'vat': '',
                'sale_price': '',
                'note': '',
                'unit': '',
            });
            // AppoinmentfetchData();
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Form submitted successfully!',
            });
        } catch (error) {
            console.log(error)

        }
    };


    const handleClose = () => {
        // console.log('hello')
        setModal(!modal)
    }
    const handlePatients = () => {
        // console.log('hello')
        setPatientsmodal(!Patientsmodal)
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
                                <h1>Medicines Stock</h1>
                            </div>
                            <div className="flex space-x-3">
                                <button type='button' onClick={handleClose} className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                    <div className='grid place-items-center mt-1'>
                                        <FaPlus />
                                    </div>
                                    <h1>Add Medicine </h1>
                                </button>
                                <Link href='/admin/pharmacy/import-csv' type='button' className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                    <div className='grid place-items-center mt-1'>
                                        <FaPlus />
                                    </div>
                                    <h1>Import Medicine </h1>
                                </Link>
                                <Link href='/admin/pharmacy/medicine-list' type='button' className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                    <div className='grid place-items-center mt-1'>
                                        <FaPlus />
                                    </div>
                                    <h1>Purchase Medicine </h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Medicine Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Medicine Company
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Medicine Composition
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Medicine Category
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Medicine Group
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Unit
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Available Qty
                                    </th>

                                    {/* Add more table headers here as needed */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    medicine.map(md => (
                                        <tr>
                                            <td>{md.name}</td>
                                            <td>{md.company}</td>
                                            <td>{md.composition}</td>
                                            <td>{md.category_id}</td>
                                            <td>{md.group}</td>
                                            <td>{md.unit}</td>
                                            <td>{md.qty}</td>
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
                                <div className="modal-header grid grid-cols-2  bg-[#0E99F4] p-2">
                                    <h1 className='text-white text-[1.3rem] pl-4'> Add Medicine Details</h1>
                                    <div className="flex mt-[0.40rem]">

                                        <button onClick={handleClose} className="ml-auto text-[2rem] text-white">
                                            <RxCross1 />
                                        </button>
                                    </div>
                                </div>
                                <div className="modal-body">

                                    <div className="w-full grid grid-cols-4 gap-3 px-6 mt-10 relative">
                                        <div className="form-group w-full ">
                                            <label htmlFor> 	Medicine Name *</label>
                                            <input type="text" value={formData.name} onChange={handleChange} name='name' className="w-full border-gray-300" />
                                            {/* {errors.Medicine_Name && <span className='text-red-500'>{errors.Medicine_Name}</span>} */}
                                        </div>
                                        <div className="form-group w-full ">
                                            <label htmlFor> Medicine Category *</label>
                                            <select value={formData.category_id} onChange={handleChange} name='category_id' id className="w-full border-gray-300">
                                                <option value="">Select Medicine Category</option>
                                                {medicineCategories.map(categories => (

                                                    <option value={categories.id}>{categories.name}</option>
                                                ))}


                                            </select>
                                            {/* {errors.me && <span className='text-red-500'>{errors.me}</span>} */}
                                        </div>
                                        <input name="admin_type" value={formData.admin_type} onChange={handleChange} type="hidden" className=" border-gray-300 w-full" />
                                        <input name="admin_id" value={formData.admin_id} onChange={handleChange} type="text" className=" border-gray-300 w-full" />


                                        <div className="form-group w-full">
                                            <label htmlFor>Medicine Company *</label> <br />
                                            <input value={formData.company} onChange={handleChange} name='company' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Medicine Composition *</label> <br />
                                            <input value={formData.composition} onChange={handleChange} name='composition' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Medicine Group *</label> <br />
                                            <input value={formData.group} onChange={handleChange} name='group' type="text" className="w-full border-gray-300" />
                                        </div>
                                        {/* <div className="form-group w-full">
                                            <label htmlFor=""></label>
                                            <input value={formData.Discount} onChange={handleChange} type="text" className="w-full mt-6 border-gray-300" />
                                        </div> */}
                                        <div className="form-group w-full">
                                            <label htmlFor>Unit *</label> <br />
                                            <input value={formData.unit} onChange={handleChange} name='unit' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Min Level</label> <br />
                                            <input value={formData.min_livel} onChange={handleChange} name='min_livel' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Re-Order Level</label> <br />
                                            <input value={formData.re_order_livel} onChange={handleChange} name='re_order_livel' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Tax</label> <br />
                                            <input value={formData.tax} onChange={handleChange} name='tax' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Unit/Packing *</label> <br />
                                            <input value={formData.units} onChange={handleChange} name='units' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>VAT A/C</label> <br />
                                            <input value={formData.vat} onChange={handleChange} name='vat' type="text" className="w-full border-gray-300" />
                                        </div>

                                        {/* <div className="form-group w-full">
                                            <label htmlFor>Amount</label> <br />
                                            <input value={formData.Amount} onChange={handleChange} name='Amount' type="text" className="w-full border-gray-300" />
                                        </div> */}
                                    </div></div>
                                <div className="grid grid-cols-2 px-6 gap-3">
                                    <div>
                                        <div className="grid grid-cols-2 gap-3">

                                        </div>
                                        <div className="form-group  mt-4 w-full ">
                                            <label htmlFor>Note</label> <br />
                                            <textarea value={formData.note} onChange={handleChange} name='note' id rows={3} className="px-6 w-full border-gray-300" defaultValue={""} />
                                        </div>


                                    </div>
                                    <div className="content mt-4">
                                        <div class="flex items-center justify-center w-full">
                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col items-center justify-center mt-4">
                                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                    </svg>

                                                </div>
                                                <input onChange={handleChange} id="dropzone-file" name='photo' type="file" class="hidden" />
                                            </label>
                                            {/* <input type="file" onChange={handleFileChange} /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group   bottom-0  left-0 right-0 mt-10 py-4">
                                    <div className="flex justify-end px-5 p-3 space-x-3 w-full">
                                        {/* <button className="bg-gray-800 p-2 text-white w-[10%] ">
                                            Save &amp; print
                                        </button> */}
                                        <button onClick={createOpd} className="bg-gray-800 p-2 text-white w-[12%] ">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <PatientsModal Patientsmodal={Patientsmodal} handlePatients={handlePatients} fetchData={fetchData} />
                    </div>

                </div>
            </div>
        </div >

    );
}

export default Medicine;