import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import PatientsModal from '@/components/Admin/patientsmodal';
import Swal from 'sweetalert2';
import { Link } from '@inertiajs/react';
const Pharmacy = ({ admin, medicineCategories, pharmacy }) => {

    const [modal, setModal] = useState(true)
    const [Patientsmodal, setPatientsmodal] = useState(true)
    const [Patientsdata, setPatientsdata] = useState([]);
    const [phamacybill, setPharmacyBill] = useState([]);
    const [errors, setErrors] = useState({});
    const [formData, setformData] = useState({
        'admin_type': admin.type,
        'admin_id': admin.id,
        'patient_id': '',
        'Medicine_Category': '',
        'Medicine_Name': '',
        'Batch_No': '',
        'Expiry_Date': '',
        'Quantity': '',
        'Sale_Price': '',
        'Tax': '',
        'Amount': '',
        'paid_amount': '',
        'balance_amount': '',
        'Doctor': '',
        'Total': '',
        'Discount': '',
        'Payment_mode': '',
        'Payment_Amount': '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        });
        // Clear error message when user starts typing
        setErrors({
            ...errors,
            [name]: ''
        });
    };
    const fetchData = async () => {
        try {
            const response = await axios.get('/api/admin/patient-fetch');
            // console.log(data)
            setPatientsdata(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const PharmacyBillfetchData = async () => {
        try {
            const response = await axios.post('/api/admin/pharmacy-fetch-bill');
            console.log(response)
            setPharmacyBill(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {
        fetchData();
        PharmacyBillfetchData();
        // DoctorfetchData();
        // DepartmentfetchData();
        // Fet(id);
    }, []);

    const createOpd = async (e) => {
        e.preventDefault();
        const validationErrors = {}
        if (!formData.patient_id.trim()) {

            validationErrors.patient_id = 'Patients name is required';
            setErrors(validationErrors);
        }
        else if (!formData.Medicine_Category.trim()) {
            validationErrors.Medicine_Category = 'Medicine Category is required';
            setErrors(validationErrors);
        } else if (!formData.Medicine_Name.trim()) {
            validationErrors.Medicine_Name = 'Medicine Name required';
            setErrors(validationErrors);
        } else if (!formData.Batch_No.trim()) {
            validationErrors.Batch_No = 'Batch No is required';
            setErrors(validationErrors);
        } else if (!formData.Expiry_Date.trim()) {
            validationErrors.Expiry_Date = 'Expiry Date is required';
            setErrors(validationErrors);
        } else if (!formData.Quantity.trim()) {
            validationErrors.Quantity = 'Quantity is required';
            setErrors(validationErrors);
        }
        else if (!formData.Sale_Price.trim()) {
            validationErrors.Sale_Price = 'Sale Price is required';
            setErrors(validationErrors);
        }

        else {

            try {


                await axios.post('/api/admin/pharmacy-store', formData);

                setformData({

                    'admin_type': '',
                    'admin_id': '',
                    'patient_id': '',
                    'Medicine_Category': '',
                    'Medicine_Name': '',
                    'Batch_No': '',
                    'Expiry_Date': '',
                    'Quantity': '',
                    'Sale_Price': '',
                    'Tax': '',
                    'Amount': '',
                    'paid_amount': '',
                    'balance_amount': '',
                    'Doctor': '',
                    'Total': '',
                    'Discount': '',
                    'Payment_mode': '',
                    'Payment_Amount': '',
                });
                PharmacyBillfetchData();
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Form submitted successfully!',
                });
            } catch (error) {
                console.log(error)

            }

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
                                <h1>Pharmacy Bill</h1>
                            </div>
                            <div className="flex space-x-3">
                                <button type='button' onClick={handleClose} className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                    <div className='grid place-items-center mt-1'>
                                        <FaPlus />
                                    </div>
                                    <h1> Generate Bill </h1>
                                </button>
                                <Link type='button' href='/admin/pharmacy/medicine' className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                    <div className='grid place-items-center mt-1'>
                                        <FaPlus />
                                    </div>
                                    <h1>  Medicines </h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Bill No
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Case ID
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Doctor Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Patient Name
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Discount (IDR)
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Amount (Rs.)
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Paid Amount (Rs.)
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Balance Amount (Rs.)
                                    </th>
                                    {/* Add more table headers here as needed */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {phamacybill.map(pharmacies => (
                                    <tr>
                                        <td className='px-6 py-3 text-left'>
                                            {pharmacies.Bill_No}
                                        </td>
                                        <td className='px-6 py-3 text-left'></td>
                                        <td className='px-6 py-3 text-left'>
                                            {pharmacies.Doctor}
                                        </td>
                                        <td className='px-6 py-3 text-left'>
                                            {pharmacies.name}
                                        </td>
                                        <td className='px-6 py-3 text-left'>
                                            {pharmacies.Discount}
                                        </td>
                                        <td className='px-6 py-3 text-left'>
                                            {pharmacies.Amount}
                                        </td>
                                        <td className='px-6 py-3 text-left'>
                                            {pharmacies.paid_amount}
                                        </td>
                                        <td className='px-6 py-3 text-left'>
                                            {pharmacies.balance_amount}
                                        </td>
                                    </tr>

                                ))}
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
                                    <div className="w-[80%] ">

                                        <div className="w-[80%] flex space-x-2 px-4 mt-[0.29rem]">
                                            <select value={formData.patient_id} onChange={handleChange} name='patient_id' id className="w-[100%] h-9">
                                                <option value="">Select Patient</option>
                                                {
                                                    Patientsdata.map(Patients => (
                                                        <option value={Patients.id} >{Patients.name}</option>

                                                    ))
                                                }

                                            </select>
                                            <button onClick={handlePatients} className="bg-gray-700 w-[100%] h-9  text-white rounded-md"> <i className="fa-solid fa-plus" />
                                                Add Patient</button>
                                        </div>


                                        {errors.patient_id && <span className='text-red-500'>{errors.patient_id}</span>}


                                    </div>
                                    <div className="flex mt-[0.40rem]">

                                        <button onClick={handleClose} className="ml-auto text-[2rem] text-white">
                                            <RxCross1 />
                                        </button>
                                    </div>
                                </div>
                                <div className="modal-body">
                                    <div className="flex justify-between w-[100%] border bg-slate-300 px-[2rem]">
                                        <div className="rowsd w-[30%] flex justify-between">
                                            <h1>Bill No PATHOB418
                                            </h1>
                                            <h1>Case ID
                                            </h1>
                                        </div>
                                        <div className="rowsd w-[40%] flex justify-end">
                                            <h1>Date
                                                03/01/2024 5:26 PM
                                            </h1>

                                        </div>
                                    </div>
                                    <div className="w-full grid grid-cols-4 gap-3 px-6 mt-10 relative">
                                        <div className="form-group w-full ">
                                            <label htmlFor> Medicine Category *</label>
                                            <select value={formData.Medicine_Category} onChange={handleChange} name='Medicine_Category' id className="w-full border-gray-300">
                                                <option value="">Select Medicine Category</option>
                                                {medicineCategories.map(categories => (

                                                    <option value={categories.id}>{categories.name}</option>
                                                ))}


                                            </select>
                                            {errors.Medicine_Category && <span className='text-red-500'>{errors.Medicine_Category}</span>}
                                        </div>
                                        <input name="admin_type" value={formData.admin_type} onChange={handleChange} type="hidden" className=" border-gray-300 w-full" />
                                        <input name="admin_id" value={formData.admin_id} onChange={handleChange} type="hidden" className=" border-gray-300 w-full" />
                                        <div className="form-group w-full ">
                                            <label htmlFor> 	Medicine Name *</label>
                                            <select value={formData.Medicine_Name} onChange={handleChange} name='Medicine_Name' className="w-full border-gray-300">
                                                <option value="">Select Medicine Name</option>
                                                <option value="Alprovite">Alprovite</option>

                                            </select>
                                            {errors.Medicine_Name && <span className='text-red-500'>{errors.Medicine_Name}</span>}
                                        </div>
                                        <div className="form-group w-full ">
                                            <label htmlFor>	Batch No *</label>
                                            <select value={formData.Batch_No} onChange={handleChange} name='Batch_No' id className="w-full border-gray-300">
                                                <option value>Select Batch No</option>
                                                <option value>34578</option>

                                            </select>
                                            {errors.Batch_No && <span className='text-red-500'>{errors.Batch_No}</span>}
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>	Expiry Date *</label> <br />
                                            <input value={formData.Expiry_Date} onChange={handleChange} name='Expiry_Date' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Quantity * | Available Qty	</label> <br />
                                            <input value={formData.Quantity} onChange={handleChange} name='Quantity' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Sale Price (IDR) *	</label> <br />
                                            <input value={formData.Sale_Price} onChange={handleChange} name='Sale_Price' type="text" className="w-full border-gray-300" />
                                        </div>
                                        {/* <div className="form-group w-full">
                                            <label htmlFor=""></label>
                                            <input value={formData.Discount} onChange={handleChange} type="text" className="w-full mt-6 border-gray-300" />
                                        </div> */}
                                        <div className="form-group w-full">
                                            <label htmlFor>Tax	Amount (IDR) * </label> <br />
                                            <input disabled onChange={handleChange} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full border-gray-300">
                                            <label htmlFor> Doctor</label> <br />
                                            <select value={formData.Doctor} onChange={handleChange} name='Doctor' id className="w-full border-gray-300">
                                                <option value>Select Patient</option>
                                                <option value="ss">ss</option>

                                            </select>
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
                                            <textarea name id rows={3} className="px-6 w-full border-gray-300" defaultValue={""} />
                                        </div>


                                    </div>
                                    <div className="content mt-4">
                                        <div className="flex justify-between">
                                            <h1>
                                                Total (Rs.)</h1>
                                            <input value={formData.Total} onChange={handleChange} name='Total' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                        </div>
                                        <div className="flex justify-between">
                                            <h1>
                                                Discount (Rs.)</h1>
                                            <input value={formData.Discount} onChange={handleChange} name='Discount' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                        </div>
                                        <div className="flex justify-between">
                                            <h1>
                                                Tax (Rs.) </h1>
                                            <input value={formData.Tax} onChange={handleChange} name='Tax' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                        </div>
                                        <div className="flex justify-between">
                                            <h1>
                                                Net Amount (Rs.)</h1>
                                            <input value={formData.Amount} onChange={handleChange} name='Batch_No' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="form-group w-full border-gray-300 mt-6">
                                                <select name='Payment_mode' onChange={handleChange} value={formData.Payment_mode} className=" border-gray-300 w-full">
                                                    <option value="">Select payment</option>
                                                    <option value="Cash">Cash</option>
                                                    <option value="Credit Card">Credit Card</option>
                                                    <option value="Debit Card">Debit Card</option>
                                                </select>
                                            </div>
                                            <div className="form-group w-full">
                                                <label htmlFor>Amount (Rs.) *</label> <br />
                                                <input value={formData.Payment_Amount} onChange={handleChange} name='Payment_Amount' type="text" className="w-full border-gray-300" />
                                            </div>
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

export default Pharmacy;