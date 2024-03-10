import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link } from '@inertiajs/react';
import PatientsModal from '@/components/Admin/patientsmodal';
const Ambulance = ({ admin, ambulanceLId }) => {

  const [modal, setModal] = useState(true)
  const [Patientsmodal, setPatientsmodal] = useState(true)
  const [Patientsdata, setPatientsdata] = useState([]);
  const [phamacybill, setPharmacyBill] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setformData] = useState({
    'admin_type': admin.type,
    'admin_id': admin.id,
    'patient_id': '',
    'vehicle_model_id': '',

    'driver_name': '',
    'date': '',
    'tax': '',
    'amount': '',
    'charge_name': '',
    'note': '',
    'ambulance_category_id': '',
    'discount': '',
    'net_amount': '',
    'payment_mode': '',
    'bill_no': '',
    'case_id': '',
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
  const AmbulanceBilldata = async () => {
    try {
      const response = await axios.post('/api/admin/ambulance-fetch-bill');
      console.log(response)
      setPharmacyBill(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    fetchData();
    AmbulanceBilldata();
    // DoctorfetchData();
    // DepartmentfetchData();
    // Fet(id);
  }, []);

  const createOpd = async (e) => {
    e.preventDefault();
    try {


      await axios.post('/api/admin/ambulance-store-bill', formData);

      setformData({

        'vehicle_model_id': '',

        'driver_name': '',
        'date': '',
        'tax': '',
        'amount': '',
        'charge_name': '',
        'note': '',
        'ambulance_category_id': '',
        'discount': '',
        'net_amount': '',
        'payment_mode': '',
        'bill_no': '',
        'case_id': '',
      });
      setPharmacyBill();
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
                <h1>Ambulance Call List</h1>
              </div>
              <div className='flex space-x-3'>
                <button type='button' onClick={handleClose} className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                  <div className='grid place-items-center mt-1'>
                    <FaPlus />
                  </div>
                  <h1> Add Ambulance Call</h1>
                </button>
                <Link href='/admin/ambulance-list' type='button' className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">

                  <h1>  Ambulance List</h1>
                </Link>
              </div>

            </div>
          </div>
          <div className="">
            <table className="table-auto min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                    Bill No
                  </th>
                  <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                    Case ID
                  </th>
                  <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                    Patient Name
                  </th>
                  <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                    Vehicle Number
                  </th>

                  <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                    Vehicle Model
                  </th>
                  <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                    Driver Name
                  </th>
                  <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                    Driver Contact No
                  </th>
                  <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                    Patient Address
                  </th>
                  <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                    Amount (Rs.)
                  </th>
                  <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                    Paid Amount (Rs.)
                  </th>
                  <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                    Balance Amount (Rs.)
                  </th>
                  {/* Add more table headers here as needed */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {phamacybill.map(phm =>
                  <tr>
                    <td>{phm.bill_no}</td>
                    <td></td>
                    <td>{phm.name}</td>
                    <td>{phm.vehicle_no}</td>
                    <td>{phm.vehicle_model}</td>
                    <td>{phm.d_name}</td>
                    <td>{phm.d_contact}</td>
                    <td>{phm.d_contact}</td>
                    <td>{phm.date}</td>
                    <td>{phm.amount}</td>
                  </tr>
                )}

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

                  <div className="w-full grid grid-cols-4 gap-3 px-6 mt-10 relative">
                    <div className="form-group w-full ">
                      <label htmlFor> Vehicle Model * *</label>
                      <select value={formData.vehicle_model_id} onChange={handleChange} name='vehicle_model_id' id className="w-full border-gray-300">
                        <option value="">Select Vehicle Model *</option>
                        {ambulanceLId.map(amid => <option value={amid.id}>{amid.vehicle_no}</option>)
                        }


                        {/* {medicineCategories.map(categories => (

                          <option value={categories.id}>{categories.name}</option>
                        ))} */}


                      </select>
                      {errors.Medicine_Category && <span className='text-red-500'>{errors.Medicine_Category}</span>}
                    </div>
                    <div className="form-group w-full">
                      <label htmlFor>	Driver Name</label> <br />
                      <input value={formData.driver_name} onChange={handleChange} name='driver_name' type="text" className="w-full border-gray-300" />
                    </div>
                    <div className="form-group w-full">
                      <label htmlFor>	Date</label> <br />
                      <input value={formData.date} onChange={handleChange} name='date' type="datetime-local" className="w-full border-gray-300" />
                    </div>
                    {/* <input name="admin_type" value={formData.admin_type} onChange={handleChange} type="hidden" className=" border-gray-300 w-full" />
                    <input name="admin_id" value={formData.admin_id} onChange={handleChange} type="hidden" className=" border-gray-300 w-full" /> */}
                    <div className="form-group w-full ">
                      <label htmlFor> Charge Category *</label>
                      <select value={formData.ambulance_category_id} onChange={handleChange} name='ambulance_category_id' className="w-full border-gray-300">
                        <option value="">Charge Category *</option>
                        <option value="1">private</option>

                      </select>
                      {errors.Medicine_Name && <span className='text-red-500'>{errors.Medicine_Name}</span>}
                    </div>
                    <div className="form-group w-full ">
                      <label htmlFor>	Charge Name *</label>
                      <select value={formData.charge_name} onChange={handleChange} name='charge_name' id className="w-full border-gray-300">
                        <option value>Select Charge Name</option>
                        <option value="ff">ddd</option>

                      </select>
                      {errors.Batch_No && <span className='text-red-500'>{errors.Batch_No}</span>}
                    </div>

                    <div className="form-group w-full">
                      <label htmlFor>Standard Charge ($) *</label> <br />
                      <input value={formData.net_amount} onChange={handleChange} name='net_amount' type="text" className="w-full border-gray-300" />
                    </div>


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
                    <div className="flex justify-between">
                      <h1>
                        Total (Rs.)</h1>
                      <input value={formData.Total} onChange={handleChange} name='Total' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                    </div>
                    <div className="flex justify-between">
                      <h1>
                        Discount (Rs.)</h1>
                      <input value={formData.discount} onChange={handleChange} name='discount' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                    </div>
                    <div className="flex justify-between">
                      <h1>
                        Tax (Rs.) </h1>
                      <input value={formData.tax} onChange={handleChange} name='tax' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                    </div>
                    <div className="flex justify-between">
                      <h1>
                        Net Amount (Rs.)</h1>
                      <input value={formData.amount} onChange={handleChange} name='amount' type="text" defaultValue={2000.00} className="border-t-0 border-l-0 border-r-0 border-gray-300" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="form-group w-full border-gray-300 mt-6">
                        <select name='payment_mode' onChange={handleChange} value={formData.payment_mode} className=" border-gray-300 w-full">
                          <option value="">Select payment</option>
                          <option value="Cash">Cash</option>
                          <option value="Credit Card">Credit Card</option>
                          <option value="Debit Card">Debit Card</option>
                        </select>
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Amount (Rs.) *</label> <br />
                        <input value={formData.net_amount} onChange={handleChange} name='net_amount' type="text" className="w-full border-gray-300" />
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
    </div>

  );
}

export default Ambulance;