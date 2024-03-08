

import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import PatientsModal from '@/components/Admin/patientsmodal';
import Swal from 'sweetalert2';
const Appoinment = ({ admin, id }) => {

  const [modal, setModal] = useState(true)
  const [Patientsmodal, setPatientsmodal] = useState(true)
  const [Patientsdata, setPatientsdata] = useState([]);
  const [appoinment, setSetappoinment] = useState([]);
  const [doctorlist, setDoctorList] = useState([]);
  const [departmentlist, setDepartment] = useState([]);

  const [formData, setformData] = useState({
    patient_id: '',
    admin_id: admin.id,
    admin_type: admin.type,
    shift: '',
    doctor: '',
    doctor_fees: '',
    appoinment_date: '',
    slot: '',
    appoinment_priority: '',
    payment_mode: '',
    status: '',
    message: '',
    address: '',
    live_consultant: '',
    department: '',

  })
  const [errors, setErrors] = useState({});
  // const [doctorName, setDoctorName] = useState('');
  const [status, setStatus] = useState(1);
  const [statuspending, setStatuspending] = useState('');

  let handleStatusChange = (e, id) => {
    // console.log("id", id)
    e.preventDefault()
    axios.post(`/api/admin/appoinment-status-update/${id}`, { status })
      .then(response => {
        console.log(response.data);
        AppoinmentfetchData();
      })
      .catch(error => {
        console.error('Error updating post:', error);
        // Handle error, such as displaying an error message
      });
  };

  let handleStatusChangePending = (e, id) => {
    // console.log("id", id)
    e.preventDefault()
    axios.post(`/api/admin/appoinment-status-update/${id}`, { statuspending })
      .then(response => {
        console.log(response.data);
        AppoinmentfetchData();
      })
      .catch(error => {
        console.error('Error updating post:', error);
        // Handle error, such as displaying an error message
      });
  };

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
  ///patients data fetch
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/admin/patient-fetch');
      // console.log(data)
      setPatientsdata(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const AppoinmentfetchData = async () => {
    try {
      const response = await axios.post('/api/admin/appoinment-fetch');
      console.log(response.data)
      setSetappoinment(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const DoctorfetchData = async () => {
    try {
      const response = await axios.post('/api/admin/doctor-fetch');
      console.log(response.data)
      setDoctorList(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const DepartmentfetchData = async () => {
    try {
      const response = await axios.post('/api/admin/departmentFetch');
      console.log(response.data)
      setDepartment(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    AppoinmentfetchData();
    DoctorfetchData();
    DepartmentfetchData();
    // Fet(id);
  }, []);


  const createOpd = async (e) => {
    e.preventDefault();
    const validationErrors = {}
    if (!formData.patient_id.trim()) {

      validationErrors.patient_id = 'Patients name is required';
      setErrors(validationErrors);
    }
    else if (!formData.doctor.trim()) {
      validationErrors.doctor = 'Doctor is required';
      setErrors(validationErrors);
    } else if (!formData.shift.trim()) {
      validationErrors.shift = 'Shift is required';
      setErrors(validationErrors);
    } else if (!formData.doctor_fees.trim()) {
      validationErrors.doctor_fees = 'Doctor Fees is required';
      setErrors(validationErrors);
    } else if (!formData.appoinment_date.trim()) {
      validationErrors.appoinment_date = 'Appointment Datee is required';
      setErrors(validationErrors);
    } else if (!formData.slot.trim()) {
      validationErrors.slot = 'Slot is required';
      setErrors(validationErrors);
    }

    else {

      try {


        await axios.post('/api/admin/appoinment-store', formData);

        setformData({

          patient_id: '',

          shift: '',
          doctor: '',
          doctor_fees: '',
          appoinment_date: '',
          slot: '',
          appoinment_priority: '',
          payment_mode: '',
          status: '',
          message: '',
          address: '',
          live_consultant: '',
          department: '',
        });
        AppoinmentfetchData();
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
                <h1>Appointment Details</h1>
              </div>
              <button type='button' onClick={handleClose} className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                <div className='grid place-items-center mt-1'>
                  <FaPlus />
                </div>
                <h1>Add Appointment</h1>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Appointment No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Appointment Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gender
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Doctor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Source
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Live Consultant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Alternate Address
                  </th><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   Balance Amount (Rs.)
                 </th> */}
                  {/* Add more table headers here as needed */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {
                  appoinment.map(appoinments => (
                    <tr className='px-6 py-3 '>
                      <td className='px-6 py-3 text-left'> {appoinments.name}</td>
                      <td className='px-6 py-3 text-left'> {appoinments.appoinment_no}</td>
                      <td className='px-6 py-3 text-left'> {appoinments.appoinment_date}</td>
                      <td className='px-6 py-3 text-left'> {appoinments.phone}</td>
                      <td className='px-6 py-3 text-left'> {appoinments.gender}</td>
                      <td className='px-6 py-3 text-left'> {appoinments.doctor}</td>
                      <td></td>
                      <td className='px-6 py-3 text-left'> {appoinments.appoinment_priority}</td>
                      <td className='px-6 py-3 text-left'> {appoinments.live_consultant}</td>
                      <td className='px-6 py-3 text-left'> {appoinments.address}</td>
                      <td className='px-6 py-3 text-left'>
                        {/* <input type="text" onClick={() => handleStatusChange} value="0" name='status' onChange={(e) => setStatus(e.target.value)} /> */}

                        <input type="hidden" name='status' value={status} onChange={e => setStatus(e.target.value)} placeholder="Title" />
                        <input type="hidden" name='status' value={statuspending} onChange={e => setStatuspending(e.target.value)} placeholder="Title" />

                        {
                          appoinments.status == null ? <button className='bg-yellow-500 p-1 rounded-sm text-white' type="button" onClick={(e) => handleStatusChange(e, appoinments.id)}>pending</button> : <button className='bg-green-500 p-1 rounded-sm text-white' type="button" onClick={(e) => handleStatusChangePending(e, appoinments.id)}>approved</button>
                        }


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
                        <option value="" >Select Patient</option>
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

                  <form action className="w-full grid grid-cols-4 gap-3 px-6 mt-10 relative">
                    <div className="form-group w-full ">
                      <label htmlFor>Doctor *</label>
                      <input name="admin_type" value={formData.admin_type} onChange={handleChange} type="hidden" className=" border-gray-300 w-full" />
                      <input name="admin_id" value={formData.admin_id} onChange={handleChange} type="hidden" className=" border-gray-300 w-full" />

                      <select name='doctor' onChange={handleChange} value={formData.doctor} className=" border-gray-300 w-full">
                        <option value="">Select doctor</option>
                        {doctorlist.map(doctors => (
                          <option value={doctors.name}>	{doctors.name}</option>

                        ))}

                        {/* <option value="Debit Card">Debit Card</option> */}
                      </select>
                      {errors.doctor && <span className='text-red-500'>{errors.doctor}</span>}

                    </div>
                    <div className="form-group w-full">
                      <label htmlFor>Doctor Fees *</label> <br />
                      <input name="doctor_fees" value={formData.doctor_fees} onChange={handleChange} type="text" className=" border-gray-300 w-full" />
                      {errors.doctor_fees && <span className='text-red-500'>{errors.doctor_fees}</span>}
                    </div>
                    <div className="form-group w-full">
                      <label htmlFor> Shift *</label> <br />
                      <input name="shift" value={formData.shift} onChange={handleChange} type="text" className=" border-gray-300 w-full" />
                      {errors.shift && <span className='text-red-500'>{errors.shift}</span>}
                    </div>
                    <div className="form-group w-full">
                      <label htmlFor>Appointment Date *</label> <br />
                      <input name="appoinment_date" value={formData.appoinment_date} onChange={handleChange} type="date" className=" border-gray-300 w-full" />
                      {errors.appoinment_date && <span className='text-red-500'>{errors.appoinment_date}</span>}
                    </div>
                    <div className="form-group w-full">
                      <label htmlFor>Slot * </label> <br />
                      <input name="slot" value={formData.slot} onChange={handleChange} type="text" className=" border-gray-300 w-full" />
                      {errors.slot && <span className='text-red-500'>{errors.slot}</span>}
                    </div>
                    <div className="form-group w-full">
                      <label htmlFor>Appointment Priority </label> <br />
                      <input name="appoinment_priority" value={formData.appoinment_priority} onChange={handleChange} type="text" className=" border-gray-300 w-full" />
                    </div>
                    <div className="form-group w-full">
                      <label htmlFor>Payment Mode</label> <br />
                      <input name="payment_mode" value={formData.payment_mode} onChange={handleChange} type="text" className=" border-gray-300 w-full" />
                    </div>

                    <div className="form-group w-full">
                      <label htmlFor>Status * </label> <br />
                      {/* <input name="status" value={formData.status} onChange={handleChange} type="text" className=" border-gray-300 w-full" /> */}
                      <select name="status" value={formData.status} onChange={handleChange} id className="w-full border-gray-300">
                        <option value>Select Status</option>
                        <option value="">pending</option>
                        <option value="1">approve</option>

                      </select>
                    </div>
                  </form></div>
                <div className="grid grid-cols-2 px-6 gap-3">
                  <div>
                    <div className="form-group w-full mt-4">
                      <label htmlFor>Department</label> <br />
                      {/* <input name="payment_mode" value={formData.payment_mode} onChange={handleChange} type="text" className=" border-gray-300 w-full" /> */}
                      <select name="department" value={formData.department} onChange={handleChange} className=" border-gray-300 w-full">
                        <option value="">Select Department</option>
                        {
                          departmentlist.map(departmentlists => (
                            <option value={departmentlists.name}>{departmentlists.name}</option>
                          ))
                        }
                      </select>
                    </div>

                  </div>
                  <div className="content mt-4">

                    <div className="">

                      <div className="form-group w-full">
                        <label htmlFor>Live Consultant (On Video Conference) *</label> <br />
                        <select name="live_consultant" value={formData.live_consultant} onChange={handleChange} id className="w-full border-gray-300">
                          <option value>Select Consultant</option>
                          <option value="yes">yes</option>
                          <option value="No">No</option>

                        </select>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="form-group  mt-4 w-full ">
                <div className="form-group  mt-4 w-full  px-6">
                  <label htmlFor>Message  </label> <br />
                  <textarea name="message" value={formData.message} onChange={handleChange} id rows={3} className="px-6 w-full border-gray-300" />
                </div>

                <div className="form-group  mt-4 w-full  px-6">
                  <label htmlFor>Address  </label> <br />
                  <textarea name="address" value={formData.address} onChange={handleChange} id rows={3} className="px-6 w-full border-gray-300" />
                </div>

                <div className="form-group   bottom-0  left-0 right-0 mt-10 py-4">
                  <div className="flex justify-end px-5 p-3 space-x-3 w-full">
                    {/* <button className="bg-gray-800 p-2 text-white w-[10%] ">
                      Save &amp; print
                    </button> */}
                    <button onClick={createOpd} className="bg-gray-800 p-2 text-white w-[20%] ">
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

export default Appoinment;