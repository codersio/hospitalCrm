import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link } from '@inertiajs/react';
const Radiology = ({ admin, doctor }) => {

  const [modal, setModal] = useState(true)
  const [Patientsmodal, setPatientsmodal] = useState(true)
  const [Patientsdata, setPatientsdata] = useState([]);
  const [pathologyBill, setpathologyBill] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setformData] = useState({
    'admin_type': admin.type,
    'admin_id': admin.id,

    'patient_id': '',
    'pathology_category_id': '',

    'report_days': '',
    'report_date': '',
    'tax': '',
    'amount': '',
    'doctor': '',
    'note': '',
    'previous_value': '',
    'discount': '',
    'net_amount': '',
    'payment_mode': '',
    'date': '',
    'bill_no': '',
    'case_id': '',
  })
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/admin/patient-fetch');
      // console.log(data)
      setPatientsdata(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const pathologybillfetch = async () => {
    try {
      const response = await axios.post('/api/admin/radiology-fetch-bill');
      console.log(response)
      setpathologyBill(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    pathologybillfetch();

  }, []);
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
  const createOpd = async (e) => {
    e.preventDefault();
    // const validationErrors = {}
    // if (!formData.patient_id.trim()) {

    //   validationErrors.patient_id = 'Patients name is required';
    //   setErrors(validationErrors);
    // }
    // else if (!formData.Medicine_Category.trim()) {
    //   validationErrors.Medicine_Category = 'Medicine Category is required';
    //   setErrors(validationErrors);
    // } else if (!formData.Medicine_Name.trim()) {
    //   validationErrors.Medicine_Name = 'Medicine Name required';
    //   setErrors(validationErrors);
    // } else if (!formData.Batch_No.trim()) {
    //   validationErrors.Batch_No = 'Batch No is required';
    //   setErrors(validationErrors);
    // } else if (!formData.Expiry_Date.trim()) {
    //   validationErrors.Expiry_Date = 'Expiry Date is required';
    //   setErrors(validationErrors);
    // } else if (!formData.Quantity.trim()) {
    //   validationErrors.Quantity = 'Quantity is required';
    //   setErrors(validationErrors);
    // }
    // else if (!formData.Sale_Price.trim()) {
    //   validationErrors.Sale_Price = 'Sale Price is required';
    //   setErrors(validationErrors);
    // }

    // else {



    // }
    try {


      await axios.post('/api/admin/radiology-store-bill', formData);

      setformData({

        'admin_type': '',
        'admin_id': '',
        'pathology_category_id': '',

        'report_days': '',
        'report_date': '',
        'tax': '',
        'amount': '',
        'doctor': '',
        'note': '',
        'previous_value': '',
        'discount': '',
        'net_amount': '',
        'payment_mode': '',
        'date': '',
        'bill_no': '',
        'case_id': '',
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

  };


  const handlePatients = () => {
    // console.log('hello')
    setPatientsmodal(!Patientsmodal)
  }

  const handleClose = () => {
    // console.log('hello')
    setModal(!modal)
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
                <h1>Pathology Billing</h1>
              </div>
              .<div className='flex space-x-3'>
                <button type='button' onClick={handleClose} className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                  <div className='grid place-items-center mt-1'>
                    <FaPlus />
                  </div>
                  <h1>Generate Bill </h1>
                </button>
                <Link href='/admin/radiology/test' className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                  <div className='grid place-items-center mt-1'>
                    <FaPlus />
                  </div>
                  <h1>Radiology Test </h1>
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
                    Reporting Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Doctor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Previous Report Value
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
                {
                  pathologyBill.map((item, index) => (

                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.bill_no}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.case_id}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.report_date}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.doctor}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.previous_value}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.amount}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.net_amount}
                        </div>
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
                    <div className="flex items-center border w-[50%] h-9 border-gray-500 bg-white rounded-md ">
                      {/* <input onChange={handleChange} name='' value={ } type="text" placeholder="Search By Patient Name" className="outline-none px-1 flex-grow  bg-transparent border-none" /> */}
                      <button className=" text-black px-4 py-1 rounded-md">
                        <CiSearch />
                      </button>
                    </div>
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
                  <form action className="w-full grid grid-cols-5 gap-3 px-6 mt-10 relative">
                    <div className="form-group w-full ">
                      <label htmlFor>Test Name *</label>
                      <select name id className="w-full border-gray-300">
                        <option value>Select Patient</option>
                        <option value />
                      </select>
                    </div>
                    <div className="form-group w-full">
                      <label htmlFor> Report Days</label> <br />
                      <input onChange={handleChange} name='report_days' value={formData.report_days} type="text" className="w-full border-gray-300" />
                    </div>
                    <div className="form-group w-full">
                      <label htmlFor> Report Date *</label> <br />
                      <input onChange={handleChange} name='report_date' value={formData.report_date} type="datetime-local" className="w-full border-gray-300" />
                    </div>
                    <div className="form-group w-full">
                      <label htmlFor>Tax</label> <br />
                      <input onChange={handleChange} name='tax' value={formData.tax} type="text" className="w-full border-gray-300" />
                    </div>
                    <div className="form-group w-full">
                      <label htmlFor>Amount (Rs.) </label> <br />
                      <input onChange={handleChange} name='amount' value={formData.amount} type="text" className="w-full border-gray-300" />
                    </div>
                  </form></div>
                <div className="grid grid-cols-2 px-6 gap-3">
                  <div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="form-group w-full border-gray-300">
                        <label htmlFor> Doctor</label> <br />
                        <select name="doctor" onChange={handleChange} value={formData.doctor} id="">
                          <option value="">Select Doctor</option>
                          {
                            doctor.map(doctors => (
                              <option value={doctors.id} >{doctors.name}</option>
                            ))
                          }
                        </select>
                        {/* <input onChange={handleChange} name='' value={} type="text" className="w-full border-gray-300" /> */}
                      </div>

                    </div>
                    <div className="form-group  mt-4 w-full border">
                      <label htmlFor="">Notes</label>
                      <textarea name='note' value={formData.note} onChange={handleChange} id rows={3} className="px-6 w-full border-gray-300" defaultValue={""} />
                    </div>
                    <div className="form-group  mt-4 w-full border">
                      <label htmlFor="">Previouse Report value</label>
                      <textarea name='previous_value' value={formData.previous_value} onChange={handleChange} id rows={3} className="px-6 w-full border-gray-300" defaultValue={""} />
                    </div>


                  </div>
                  <div className="content mt-4">
                    <div className="flex justify-between">
                      <h1>
                        Total (Rs.)</h1>
                      <input onChange={handleChange} name='' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                    </div>
                    <div className="flex justify-between">
                      <h1>
                        Discount (Rs.)</h1>
                      <input onChange={handleChange} name='discount' value={formData.discount} type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                    </div>
                    <div className="flex justify-between">
                      <h1>
                        Tax (Rs.) </h1>
                      <input onChange={handleChange} name='' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                    </div>
                    <div className="flex justify-between">
                      <h1>
                        Net Amount (Rs.)</h1>
                      <input onChange={handleChange} name='net_amount' value={formData.net_amount} type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="form-group w-full border-gray-300">
                        <label htmlFor>Payment Mode</label> <br />
                        <div className="form-group w-full border-gray-300 mt-6">
                          <select name='payment_mode' onChange={handleChange} value={formData.payment_mode} className=" border-gray-300 w-full">
                            <option value="">Select payment</option>
                            <option value="Cash">Cash</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Amount (Rs.) *</label> <br />
                        <input onChange={handleChange} name='' type="text" className="w-full border-gray-300" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group  absolute bottom-0  left-0 right-0 mt-10 py-4">
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
          </div>

        </div>
      </div>
    </div>

  );
}

export default Radiology;