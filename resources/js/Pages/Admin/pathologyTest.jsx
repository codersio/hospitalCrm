import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import PatientsModal from '@/components/Admin/patientsmodal';
import Swal from 'sweetalert2';
import { Link } from '@inertiajs/react';
const PathologyTest = ({ admin, medicineCategories, medicine }) => {

    const [modal, setModal] = useState(true)
    const [Patientsmodal, setPatientsmodal] = useState(true)
    const [pathologyTest, setPathologyTest] = useState([]);
    const [errors, setErrors] = useState({});
    const [formData, setformData] = useState({
        'admin_type': admin.type,
        'admin_id': admin.id,


        'test_category_id': '',
        'charge_category_id': '',
        'name': '',
        'short_name': '',
        'test_type': '',
        'subcategory_name': '',
        'tax': '',
        'charge': '',
        'amount': '',
        'charge_name': '',
        'test_parameter_name': '',
        'range': '',
        'unit': '',
        'report_days': '',
    })

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setformData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    }
    // Clear error message when user starts typing



    const pathologyTestList = async () => {
        try {
            const response = await axios.post('/api/admin/pathology-test-list');
            console.log(response)
            setPathologyTest(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {

        pathologyTestList();
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

        try {


            await axios.post('/api/admin/pathology-test-store', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setformData({

                'test_category_id': '',
                'charge_category_id': '',
                'name': '',
                'short_name': '',
                'test_type': '',
                'subcategory_name': '',
                'tax': '',
                'charge': '',
                'amount': '',
                'charge_name': '',
                'test_parameter_name': '',
                'range': '',
                'unit': '',
                'report_days': '',
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
                                <h1>Pathology Test</h1>
                            </div>
                            <div className="flex space-x-3">
                                <button type='button' onClick={handleClose} className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                    <div className='grid place-items-center mt-1'>
                                        <FaPlus />
                                    </div>
                                    <h1>Add Pathology Test </h1>
                                </button>
                                {/* <Link href='/admin/pharmacy/import-csv' type='button' className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
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
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Test Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Short Name
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Test Type
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Category
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Sub Group
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Method
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Report Days
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Tax
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Charge
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Amount
                                    </th>

                                    {/* Add more table headers here as needed */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">

                                {

                                    pathologyTest.map(pt => (
                                        <tr>
                                            <td className='px-6 py-3 text-left text-xs'>{pt.name}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{pt.short_name}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{pt.type}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{pt.test_category_id}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{pt.subcategory_name}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{pt.report_days}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{pt.tax}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{pt.charge_name}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{pt.amount}</td>

                                        </tr>
                                    )
                                    )
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
                                            <label htmlFor> 	Test Name *</label>
                                            <input type="text" value={formData.name} onChange={handleChange} name='name' className="w-full border-gray-300" />
                                            {/* {errors.Medicine_Name && <span className='text-red-500'>{errors.Medicine_Name}</span>} */}
                                        </div>
                                        <div className="form-group w-full ">
                                            <label htmlFor> Short Name</label>
                                            <input type="text" value={formData.short_name} onChange={handleChange} name='short_name' className="w-full border-gray-300" />

                                        </div>
                                        <input name="admin_type" value={formData.admin_type} onChange={handleChange} type="hidden" className=" border-gray-300 w-full" />
                                        <input name="admin_id" value={formData.admin_id} onChange={handleChange} type="hidden" className=" border-gray-300 w-full" />


                                        <div className="form-group w-full">
                                            <label htmlFor>Test Type</label> <br />
                                            <input value={formData.test_type} onChange={handleChange} name='test_type' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Category Name *</label> <br />
                                            <select value={formData.test_category_id} onChange={handleChange} name='test_category_id' id="">
                                                <option value="">Select Category</option>
                                                <option value="1">dd</option>
                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Sub Category</label> <br />
                                            <input value={formData.subcategory_name} onChange={handleChange} name='subcategory_name' type="text" className="w-full border-gray-300" />
                                        </div>
                                        {/* <div className="form-group w-full">
                                            <label htmlFor=""></label>
                                            <input value={formData.Discount} onChange={handleChange} type="text" className="w-full mt-6 border-gray-300" />
                                        </div> */}
                                        <div className="form-group w-full">
                                            <label htmlFor>Method</label> <br />
                                            <input value={formData.method} onChange={handleChange} name='method' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Report Days</label> <br />
                                            <input value={formData.report_days} onChange={handleChange} name='report_days' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Charge Category  *</label> <br />
                                            <select value={formData.charge_category_id} onChange={handleChange} name='charge_category_id' id="">
                                                <option value="">Select Category</option>
                                                <option value="1">dd</option>
                                            </select>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Charge Name</label> <br />
                                            <input value={formData.charge_name} onChange={handleChange} name='charge_name' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Tax(%)</label> <br />
                                            <input value={formData.tax} onChange={handleChange} name='tax' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Amount</label> <br />
                                            <input value={formData.amount} onChange={handleChange} name='amount' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Test Parameter name</label> <br />
                                            <input value={formData.test_parameter_name} onChange={handleChange} name='test_parameter_name' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Reference Rang</label> <br />
                                            <input value={formData.range} onChange={handleChange} name='range' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Unit</label> <br />
                                            <input value={formData.unit} onChange={handleChange} name='unit' type="text" className="w-full border-gray-300" />
                                        </div>

                                        {/* <div className="form-group w-full">
                                            <label htmlFor>Amount</label> <br />
                                            <input value={formData.Amount} onChange={handleChange} name='Amount' type="text" className="w-full border-gray-300" />
                                        </div> */}
                                    </div></div>

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
                        {/* <PatientsModal Patientsmodal={Patientsmodal} handlePatients={handlePatients} fetchData={fetchData} /> */}
                    </div>

                </div>
            </div>
        </div >

    );
}

export default PathologyTest;