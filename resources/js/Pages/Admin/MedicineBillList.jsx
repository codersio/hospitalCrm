import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import PatientsModal from '@/components/Admin/patientsmodal';
import Swal from 'sweetalert2';
const MedicinePurchase = ({ admin, medicineCategories, medicinebill }) => {

    const [modal, setModal] = useState(true)
    const [Patientsmodal, setPatientsmodal] = useState(true)
    const [Patientsdata, setPatientsdata] = useState([]);
    const [errors, setErrors] = useState({});
    const [admin_type, setadmin_type] = useState(admin.type);
    const [admin_id, setadmin_id] = useState(admin.id);
    const [supplier_id, setsupplier_id] = useState('');
    const [category_id, setcategory_id] = useState('');
    const [medicine_id, setmedicine_id] = useState('');
    const [Batch_No, setBatch_No] = useState('');
    const [Expiry_Date, setExpiry_Date] = useState('');
    const [Quantity, setQuantity] = useState('');
    const [Sale_Price, setSale_Price] = useState('');
    const [Tax, setTax] = useState('');
    const [bill_No, setbill_No] = useState('');
    const [Amount, setAmount] = useState('');
    const [paid_amount, setpaid_amount] = useState('');
    const [balance_amount, setbalance_amount] = useState('');
    const [Total, setTotal] = useState('');
    const [Payment_Amount, setPayment_Amount] = useState('');
    const [Discount, setDiscount] = useState('');
    const [Payment_mode, setPayment_mode] = useState('');
    const [paking_quantity, setpaking_quantity] = useState('');
    const [mrp, setmrp] = useState('');
    const [purchase_amount, setpurchase_amount] = useState('');
    const [files_attach, setfiles_attach] = useState('');


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


    useEffect(() => {
        fetchData();
        // AppoinmentfetchData();
        // DoctorfetchData();
        // DepartmentfetchData();
        // Fet(id);
    }, []);

    const createOpd = async (e) => {
        e.preventDefault();
        // const validationErrors = {}
        // if (!patient_id.trim()) {

        //     validationErrors.patient_id = 'Patients name is required';
        //     setErrors(validationErrors);
        // }
        // else if (!Medicine_Category.trim()) {
        //     validationErrors.Medicine_Category = 'Medicine Category is required';
        //     setErrors(validationErrors);
        // } else if (!Medicine_Name.trim()) {
        //     validationErrors.Medicine_Name = 'Medicine Name required';
        //     setErrors(validationErrors);
        // } else if (!Batch_No.trim()) {
        //     validationErrors.Batch_No = 'Batch No is required';
        //     setErrors(validationErrors);
        // } else if (!Expiry_Date.trim()) {
        //     validationErrors.Expiry_Date = 'Expiry Date is required';
        //     setErrors(validationErrors);
        // } else if (!Quantity.trim()) {
        //     validationErrors.Quantity = 'Quantity is required';
        //     setErrors(validationErrors);
        // }
        // else if (!Sale_Price.trim()) {
        //     validationErrors.Sale_Price = 'Sale Price is required';
        //     setErrors(validationErrors);
        // }

        // else {



        // }
        try {
            const BillForm = {

                admin_type,
                admin_id,
                // patient_id,
                category_id,
                medicine_id,
                Batch_No,
                Expiry_Date,
                Quantity,
                Sale_Price,
                Tax,
                Amount,
                paid_amount,
                balance_amount,
                // Doctor,
                Total,
                Discount,
                Payment_mode,
                Payment_Amount, files_attach
            };

            await axios.post('/api/admin/medicine-bill-store', BillForm, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // setformData({

            //     'admin_type': '',
            //     'admin_id': '',
            //     'patient_id': '',
            //     'Medicine_Category': '',
            //     'Medicine_Name': '',
            //     'Batch_No': '',
            //     'Expiry_Date': '',
            //     'Quantity': '',
            //     'Sale_Price': '',
            //     'Tax': '',
            //     'Amount': '',
            //     'paid_amount': '',
            //     'balance_amount': '',
            //     'Doctor': '',
            //     'Total': '',
            //     'Discount': '',
            //     'Payment_mode': '',
            //     'Payment_Amount': '',
            // });
            AppoinmentfetchData();
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
                                <h1>MedicinePurchase Bill</h1>
                            </div>
                            <button type='button' onClick={handleClose} className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                <div className='grid place-items-center mt-1'>
                                    <FaPlus />
                                </div>
                                <h1>Purchase Medicine </h1>
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Pharmacy Purchase No
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Purchase Date
                                    </th>


                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Bill No
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Supplier Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Total ($)
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Tax ($)
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Discount ($)
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Net Amount (Rs.)
                                    </th>
                                    {/* Add more table headers here as needed */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    medicinebill.map(md => (
                                        <tr>
                                            <td className='px-6 py-3 text-left'>{md.bill_no}</td>
                                            <td className='px-6 py-3 text-left'>{md.Batch_No}</td>
                                            <td className='px-6 py-3 text-left'>{md.supplier_id}</td>
                                            <td className='px-6 py-3 text-left'>{md.Total}</td>
                                            <td className='px-6 py-3 text-left'>{md.Tax}</td>
                                            <td className='px-6 py-3 text-left'>{md.Discount}</td>
                                            <td className='px-6 py-3 text-left'>{md.Amount}</td>
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
                                    <div className="w-[80%] ">

                                        <div className="w-[80%] flex space-x-2 px-4 mt-[0.29rem]">
                                            <select value={supplier_id} onChange={(e) => setsupplier_id(e.target.value)} name='supplier_id' id className="w-[100%] h-9">
                                                <option value="">Select Supplier</option>
                                                {
                                                    Patientsdata.map(Patients => (
                                                        <option value={Patients.id} >{Patients.name}</option>

                                                    ))
                                                }

                                            </select>
                                            {/* <button onClick={handlePatients} className="bg-gray-700 w-[100%] h-9  text-white rounded-md"> <i className="fa-solid fa-plus" />
                                                Add Patient</button> */}
                                        </div>


                                        {errors.supplier_id && <span className='text-red-500'>{errors.supplier_id}</span>}


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
                                            <select value={category_id} onChange={(e) => setcategory_id(e.target.value)} name='category_id' id className="w-full border-gray-300">
                                                <option value="">Select Medicine Category</option>
                                                {medicineCategories.map(categories => (

                                                    <option value={categories.id}>{categories.name}</option>
                                                ))}


                                            </select>
                                            {errors.Medicine_Category && <span className='text-red-500'>{errors.Medicine_Category}</span>}
                                        </div>
                                        <input name="admin_type" value={admin_type} onChange={(e) => setadmin_type(e.target.value)} type="hidden" className=" border-gray-300 w-full" />
                                        <input name="admin_id" value={admin_id} onChange={(e) => setadmin_id(e.target.value)} type="hidden" className=" border-gray-300 w-full" />
                                        <div className="form-group w-full ">
                                            <label htmlFor> 	Medicine Name *</label>
                                            <select value={medicine_id} onChange={(e) => setmedicine_id(e.target.value)} name='medicine_id' className="w-full border-gray-300">
                                                <option value="">Select Medicine Name</option>
                                                <option value="Alprovite">Alprovite</option>

                                            </select>
                                            {errors.Medicine_Name && <span className='text-red-500'>{errors.Medicine_Name}</span>}
                                        </div>
                                        <div className="form-group w-full ">
                                            <label htmlFor>	Batch No *</label>
                                            <select value={Batch_No} onChange={(e) => setBatch_No(e.target.value)} name='Batch_No' id className="w-full border-gray-300">
                                                <option value>Select Batch No</option>
                                                <option value="">34578</option>

                                            </select>
                                            {/* {errors.Batch_No && <span className='text-red-500'>{errors.Batch_No}</span>} */}
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>	Expiry Date *</label> <br />
                                            <input value={Expiry_Date} onChange={(e) => setExpiry_Date(e.target.value)} name='Expiry_Date' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Quantity * | Available Qty	</label> <br />
                                            <input value={Quantity} onChange={(e) => setQuantity(e.target.value)} name='Quantity' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Sale Price (IDR) *	</label> <br />
                                            <input value={Sale_Price} onChange={(e) => setSale_Price(e.target.value)} name='Sale_Price' type="text" className="w-full border-gray-300" />
                                        </div>
                                        {/* <div className="form-group w-full">
                                            <label htmlFor=""></label>
                                            <input value={Discount} onChange={handleChange} type="text" className="w-full mt-6 border-gray-300" />
                                        </div> */}
                                        <div className="form-group w-full">
                                            <label htmlFor>Tax	Amount (IDR) * </label> <br />
                                            <input value={Tax} onChange={(e) => setTax(e.target.value)} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full border-gray-300">
                                            <label htmlFor> Bill no</label> <br />
                                            <input value={bill_No} onChange={(e) => setbill_No(e.target.value)} name='bill_no' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Amount</label> <br />
                                            <input value={Amount} onChange={(e) => setAmount(e.target.value)} name='Amount' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Amount</label> <br />
                                            <input value={paid_amount} onChange={(e) => setpaid_amount(e.target.value)} name='paid_amount' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>MRP</label> <br />
                                            <input value={mrp} onChange={(e) => setmrp(e.target.value)} name='mrp' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Purchase Amount</label> <br />
                                            <input value={purchase_amount} onChange={(e) => setpurchase_amount(e.target.value)} name='purchase_amount' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Packageing Qty</label> <br />
                                            <input value={paking_quantity} onChange={(e) => setpaking_quantity} name='paking_quantity' type="text" className="w-full border-gray-300" />
                                        </div>
                                        {/* <div className="form-group w-full">
                                            <label htmlFor>Purchase Amount</label> <br />
                                            <input value={purchase_amount} onChange={handleChange} name='purchase_amount' type="text" className="w-full border-gray-300" />
                                        </div> */}
                                        <div className="form-group w-full">
                                            <label htmlFor>Attach Document</label> <br />
                                            <div class="flex items-center justify-center w-full">
                                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                    <div class="flex flex-col items-center justify-center mt-4">
                                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>

                                                    </div>
                                                    <input id="dropzone-file" name='files_attach' value={setfiles_attach} onChange={(e) => setfiles_attach(e.target.files[0])} type="file" class="hidden" />
                                                </label>
                                                {/* <input type="file" onChange={handleFileChange} /> */}
                                            </div>
                                        </div>
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
                                            <input value={Total} onChange={handleChange} name='Total' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                        </div>
                                        <div className="flex justify-between">
                                            <h1>
                                                Discount (Rs.)</h1>
                                            <input value={Discount} onChange={handleChange} name='Discount' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                        </div>
                                        <div className="flex justify-between">
                                            <h1>
                                                Tax (Rs.) </h1>
                                            <input value={Tax} onChange={handleChange} name='Tax' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                        </div>
                                        <div className="flex justify-between">
                                            <h1>
                                                Net Amount (Rs.)</h1>
                                            <input value={Amount} onChange={handleChange} name='Batch_No' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="form-group w-full border-gray-300 mt-6">
                                                <select name='Payment_mode' onChange={(e) => setPayment_mode(e.target.value)} value={Payment_mode} className=" border-gray-300 w-full">
                                                    <option value="">Select payment</option>
                                                    <option value="Cash">Cash</option>
                                                    <option value="Credit Card">Credit Card</option>
                                                    <option value="Debit Card">Debit Card</option>
                                                </select>
                                            </div>
                                            <div className="form-group w-full">
                                                <label htmlFor>Amount (Rs.) *</label> <br />
                                                <input value={Payment_Amount} onChange={(e) => setPayment_Amount(e.target.value)} name='Payment_Amount' type="text" className="w-full border-gray-300" />
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

export default MedicinePurchase;