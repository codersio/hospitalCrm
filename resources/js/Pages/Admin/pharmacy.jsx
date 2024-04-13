import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import PatientsModal from '@/components/Admin/patientsmodal';
import Swal from 'sweetalert2';
import { Link } from '@inertiajs/react';
const Pharmacy = ({ admin, medicineCategories, doctor }) => {

    const [modal, setModal] = useState(true)
    const [Patientsmodal, setPatientsmodal] = useState(true)
    const [Patientsdata, setPatientsdata] = useState([]);
    const [phamacybill, setPharmacyBill] = useState([]);
    const [Medicine_Category, setMedicine_Category] = useState('');
    const [Batch_No, setBatch_No] = useState('');
    const [Expiry_Date, setExpiry_Date] = useState('');
    const [Sale_Price, setSale_Price] = useState('');
    const [Tax, setTax] = useState('');
    const [Medicine_Name, setMedicine_Name] = useState('');
    const [paid_amount, setpaid_amount] = useState('');
    const [Total, setTotal] = useState('');
    const [Payment_Amount, setPayment_Amount] = useState('');
    const [Quantity, setQuantity] = useState('');
    const [Discount, setDiscount] = useState('');
    const [balance_amount, setbalance_amount] = useState('');
    const [admin_type, setadmin_type] = useState(admin.type);
    const [admin_id, setadmin_id] = useState(admin.id);
    const [categoryid, setcategoryId] = useState([]);
    const [batchid, setBatchid] = useState([]);
    const [errors, setErrors] = useState({});
    const [formData, setformData] = useState({

        'patient_id': '',

        'Amount': '',
        // 'paid_amount': '',
        // 'balance_amount': '',
        'Doctor': '',


        'Payment_mode': '',

    })


    const HandelQty = (event) => {
        const newQty = parseInt(event.target.value);
        setQuantity(newQty);
        calculateTotalAmount(newQty, Sale_Price, Tax, Discount);
    };

    const handelPurchase = (event) => {
        const newPrice = parseFloat(event.target.value);
        setSale_Price(newPrice);
        calculateTotalAmount(Quantity, newPrice, Tax, Discount);
    };

    const handleTaxChange = (event) => {
        const newTax = parseFloat(event.target.value);
        setTax(newTax);
        calculateTotalAmount(Quantity, Sale_Price, newTax, Discount);
    };

    const handleDiscountChange = (event) => {
        const newDiscount = parseFloat(event.target.value);
        setDiscount(newDiscount); // Update the discount state
        calculateTotalAmount(Quantity, Sale_Price, Tax, newDiscount); // Call calculateTotalAmount with updated discount value
    };

    const calculateTotalAmount = (qty, mrp, tax, discount) => {
        const subtotal = qty * mrp;

        // Initialize discount and tax amounts to 0
        let discountAmount = 0;
        let taxAmount = 0;

        // Calculate discount amount if discount is provided and not 0
        if (discount && discount !== 0) {
            discountAmount = subtotal * (discount / 100);
        }

        // Calculate total before tax
        let totalBeforeTax = subtotal - discountAmount;

        // Calculate tax amount if tax is provided and not 0
        if (tax && tax !== 0) {
            taxAmount = totalBeforeTax * (tax / 100);
        }

        // Calculate total amount after tax
        let total = totalBeforeTax + taxAmount;

        // Round the total amounts to two decimal places
        let totalp = parseFloat((subtotal + taxAmount).toFixed(2));
        total = parseFloat(total.toFixed(2));
        let balance = total - paid_amount;
        // Check if total is NaN, if so, set it to 0
        if (isNaN(total)) {
            total = 0;
        }

        // Update state variables
        setTotal(totalp);
        setpaid_amount(totalp);
        setPayment_Amount(total);
        setbalance_amount(balance);
    };


    const handleMedicineCategory = (event) => {
        const chargeTid = event.target.value
        setMedicine_Category(chargeTid)
        axios.post(`/api/admin/medicine-categoryid-name/${chargeTid}`)
            // .then(response => response.json())
            .then(res => {

                setcategoryId(res.data); // Set the tax value

                console.log(res.data); // Log the tax value
            })
            .catch(error => console.error('Error fetching product types:', error));

    }
    const handleMedicinename = (event) => {
        const chargeTid = event.target.value
        setMedicine_Name(chargeTid)
        axios.post(`/api/admin/medicine-bill-pharma/${chargeTid}`)
            // .then(response => response.json())
            .then(res => {

                setBatchid(res.data); // Set the tax value
                // setSale_Price(res.data); // Set the tax value
                // setExpiry_Date(res.data); // Set the tax value
                // setTax(res.data.Batch_No); // Set the tax value

                console.log(res.data); // Log the tax value
            })
            .catch(error => console.error('Error fetching product types:', error));

    }

    const HandelBatch = () => {
        const chargeTid = event.target.value
        setBatch_No(chargeTid)
        axios.post(`/api/admin/medicine-batch-w/${chargeTid}`)
            // .then(response => response.json())
            .then(res => {

                // setBatchid(res.data); // Set the tax value
                setSale_Price(res.data.Sale_Price); // Set the tax value
                setExpiry_Date(res.data.Expiry_Date); // Set the tax value
                setTax(res.data.Tax); // Set the tax value
                setQuantity(res.data.Quantity); // Set the tax value

                console.log(res.data.id); // Log the tax value
            })
            .catch(error => console.error('Error fetching product types:', error));
    }

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

        let formSave = new FormData()
        formSave.append('patient_id', formData.patient_id)
        // formSave.append('Amount', Amount)
        formSave.append('paid_amount', paid_amount)
        formSave.append('balance_amount', formData.balance_amount)

        formSave.append('Payment_mode', formData.Payment_mode)
        formSave.append('Medicine_Category', Medicine_Category)
        formSave.append('Medicine_Name', Medicine_Name)
        formSave.append('Batch_No', Batch_No)
        formSave.append('Expiry_Date', Expiry_Date)
        formSave.append('Sale_Price', Sale_Price)
        formSave.append('Tax', Tax)
        formSave.append('Quantity', Quantity)
        formSave.append('admin_type', admin_type)
        formSave.append('admin_id', admin_id)
        formSave.append('categoryid', categoryid)
        formSave.append('batchid', batchid)
        formSave.append('paid_amount', paid_amount)
        formSave.append('Total', Total)
        formSave.append('Payment_Amount', Payment_Amount)
        formSave.append('Quantity', Quantity)
        formSave.append('Discount', Discount)
        formSave.append('Doctor', formData.Doctor)
        // formSave.append('patient_id', formData.patient_id)



        try {


            await axios.post('/api/admin/pharmacy-store', formSave);


            PharmacyBillfetchData();
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
                                        Sale Price (Rs.)
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Net Amount (Rs.)
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Paid Amount (Rs.)
                                    </th>
                                    {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Balance Amount (Rs.)
                                    </th> */}
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
                                            {pharmacies.doctor_name}
                                        </td>
                                        <td className='px-6 py-3 text-left'>
                                            {pharmacies.name}
                                        </td>
                                        <td className='px-6 py-3 text-left'>
                                            {pharmacies.Discount}
                                        </td>
                                        <td className='px-6 py-3 text-left'>
                                            {pharmacies.Sale_Price}
                                        </td>
                                        <td className='px-6 py-3 text-left'>
                                            {pharmacies.Payment_Amount}
                                        </td>
                                        <td className='px-6 py-3 text-left'>
                                            {pharmacies.paid_amount}
                                        </td>
                                        {/* <td className='px-6 py-3 text-left'>
                                            {pharmacies.balance_amount}
                                        </td> */}
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
                                            <select value={formData.Medicine_Category} onChange={handleMedicineCategory} name='Medicine_Category' id className="w-full border-gray-300">
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
                                            <select value={formData.Medicine_Name} onChange={handleMedicinename} name='Medicine_Name' className="w-full border-gray-300">
                                                <option value="">Select Medicine Name</option>
                                                {
                                                    categoryid.map(cate => (

                                                        <option value={cate.id}>{cate.name}</option>
                                                    ))
                                                }


                                            </select>
                                            {errors.Medicine_Name && <span className='text-red-500'>{errors.Medicine_Name}</span>}
                                        </div>
                                        <div className="form-group w-full ">
                                            <label htmlFor>	Batch No *</label>
                                            <select value={formData.Batch_No} onChange={HandelBatch} name='Batch_No' id className="w-full border-gray-300">
                                                <option value>Select Batch No</option>
                                                {
                                                    batchid.map(bat => (

                                                        <option value={bat.id}>{bat.Batch_No}</option>

                                                    ))
                                                }

                                            </select>
                                            {errors.Batch_No && <span className='text-red-500'>{errors.Batch_No}</span>}
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>	Expiry Date *</label> <br />
                                            <input value={Expiry_Date} onChange={handleChange} name='Expiry_Date' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Quantity * | Available Qty	</label> <br />
                                            <div className='flex'>
                                                <input value={Quantity} onChange={HandelQty} name='Quantity' type="text" className="w-[80%] border-gray-300" /><div className='w-[20%] grid place-items-center border'>{Quantity}</div>
                                            </div>
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Sale Price (IDR) *	</label> <br />
                                            <input value={Sale_Price} onChange={handleChange} name='Sale_Price' type="text" className="w-full border-gray-300" />
                                        </div>
                                        {/* <div className="form-group w-full">
                                            <label htmlFor=""></label>
                                            <input value={formData.Discount} onChange={handleChange} type="text" className="w-full mt-6 border-gray-300" />
                                        </div> */}
                                        <div className="form-group w-full">
                                            <label htmlFor>Tax	Amount (IDR) * </label> <br />
                                            <input value={Tax} onChange={handleChange} name='Tax' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full border-gray-300">
                                            <label htmlFor> Doctor</label> <br />
                                            <select value={formData.Doctor} onChange={handleChange} name='Doctor' id className="w-full border-gray-300">
                                                <option value>Select Patient</option>
                                                {
                                                    doctor.map(doc => (

                                                        <option value={doc.id}>{doc.name}</option>
                                                    ))
                                                }

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
                                            <input value={Total} onChange={handleChange} name='Total' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                        </div>
                                        <div className="flex justify-between">
                                            <h1>
                                                Discount (Rs.)</h1>
                                            <input value={Discount} onChange={handleDiscountChange} name='Discount' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                                        </div>
                                        <div className="flex justify-between">
                                            <h1>
                                                Tax (Rs.) </h1>
                                            <input value={Tax} onChange={handleChange} name='Tax' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
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
                                                <input value={Payment_Amount} onChange={handleChange} name='Payment_Amount' type="text" className="w-full border-gray-300" />
                                            </div>
                                            {/* <div className="form-group w-full">
                                                <label htmlFor>Balance Amount (Rs.) *</label> <br />
                                                <input value={balance_amount} onChange={handleChange} name='Payment_Amount' type="text" className="w-full border-gray-300" />
                                            </div> */}
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