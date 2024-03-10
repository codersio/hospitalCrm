import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import PatientsModal from '@/components/Admin/patientsmodal';
import Swal from 'sweetalert2';
const Opdpatients = ({ admin }) => {

  const [modal, setModal] = useState(true)
  const [Patientsmodal, setPatientsmodal] = useState(true)

  const [Patientsdata, setPatientsdata] = useState([]);
  const [formData, setformData] = useState(
    {
      Heigh: '',
      Weight: '',
      admin_type: '',
      admin_id: '',
      patient_id: '',
      BP: '',
      Pulse: '',
      Temperature: '',
      Respiration: '',
      Symptoms_Type: '',
      Symptoms_Title: '',
      Symptoms_Description: '',
      Note: '',
      Allergies: '',
      Previous_Medical_Issue: '',
      appoint_Date: '',
      Case: '',
      Casualty: '',
      Old_Patient: '',
      TPA: '',
      Reference: '',
      Doctor: '',
      Charge_Category: '',
      Charge: '',
      Applied_Charge: '',
      Tax: '',
      Standard_Charge: '',
      Amount: '',
      Payment_Mode: '',
      Paid_Amount: '',
      Live_Consultation: '',


    }
  )
  const [errors, setErrors] = useState({});
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

  const [opddata, setOpdData] = useState([])

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/admin/patient-fetch');
      // console.log(data)
      setPatientsdata(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const opdfetchData = async () => {
    try {
      const response = await axios.post('/api/admin/opd-fetch');
      setOpdData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // const Iser = () => {
  //   axios.post('/api/admin/me').then(rex => console.log(rex))
  // }

  // Call fetchData when the component mounts
  useEffect(() => {
    fetchData();
    opdfetchData();
  }, []);

  //call api create data

  const createOpd = async (e) => {
    e.preventDefault();
    const validationErrors = {}
    if (!formData.patient_id.trim()) {

      validationErrors.patient_id = 'Patients name is required';
      setErrors(validationErrors);
    }
    else if (!formData.appoint_Date.trim()) {
      validationErrors.appoint_Date = 'Appointment Datee is required';
      setErrors(validationErrors);
    } else if (!formData.Doctor.trim()) {
      validationErrors.Doctor = 'Doctor is required';
      setErrors(validationErrors);
    }
    else if (!formData.Applied_Charge.trim()) {
      validationErrors.Applied_Charge = 'Applied Charge is required';
      // setErrors('Bed Number is required');
      setErrors(validationErrors);
    } else if (!formData.Paid_Amount.trim()) {
      validationErrors.Paid_Amount = 'Paid Amount is required';
      // setErrors('Bed Number is required');
      setErrors(validationErrors);
    } else {
      try {


        await axios.post('/api/admin/opd-store', formData);

        // setHeight(''),

        opdfetchData();

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
        <div className="relative px-4">
          <div className="card mt-2">
            <div className="card-header flex justify-between px-[3rem] border py-3">
              <div className="grid place-items-center text-[18px]">
                <h1 key={admin.id}>OPD Patient- {admin.name}</h1>
              </div>
              <button type='button' onClick={handleClose} className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                <div className='grid place-items-center mt-1'>
                  <FaPlus />
                </div>
                <h1>  Add Patient</h1>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient Id
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Guardian Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gender
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Consultant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Visit
                  </th>

                  {/* Add more table headers here as needed */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 ">
                {
                  opddata.map(opds => (
                    <tr className='px-[3rem]'>
                      <td className='px-6 py-3 text-left'> {opds.name}</td>
                      <td className='px-6 py-3 text-left'> {opds.patient_id}</td>
                      <td className='px-6 py-3 text-left'> {opds.guardian_name}</td>
                      <td className='px-6 py-3 text-left'> {opds.gender}</td>
                      <td className='px-6 py-3 text-left'> {opds.phone}</td>
                      <td className='px-6 py-3 text-left'> {opds.Doctor}</td>
                      <td className='px-6 py-3 text-left'> {opds.appoint_Date}</td>

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
            <div className="back-model w-[80%] bg-white relative ">
              <div className="modal-content w-full">
                <div className="modal-header grid grid-cols-2  bg-[#0E99F4] p-2">
                  <div className="w-[80%] ">

                    <div className="w-[80%] flex space-x-2 px-4 mt-[0.29rem]">
                      <select value={formData.patient_id} onChange={handleChange} name='patient_id' id className="w-[100%] h-9">
                        <option value disabled>Select Patient</option>
                        {
                          Patientsdata.map(Patients => (
                            <option value={Patients.id} >{Patients.name}</option>

                          ))
                        }

                      </select>
                      <button onClick={handlePatients} className="bg-gray-700 w-[40%] h-9  text-white rounded-md"> <i className="fa-solid fa-plus" />
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

                  <div action className="w-full flex space-x-3 px-6 mt-10 relative">
                    <div>
                      <div className='grid grid-cols-6 gap-3'>
                        <div className="form-group w-full ">
                          <label htmlFor>Height</label>
                          <input value={formData.Height} onChange={handleChange} name='Height' type="text" className=" border-gray-300 w-full" />

                          {/* <div key={admin.id}> */}
                          {/* <input
                            onChange={(e) =>
                              setAdmin_type((prev) => {
                                return { : e.target.value };
                              })
                            } value={admin.type}
                          name='admin_type'
                          /> */}
                          <input

                            onChange={handleChange}
                            name='admin_type'
                            type="hidden"
                            className="border-gray-300 w-full"
                            value={formData.admin_type}
                          />
                          <input

                            onChange={handleChange}
                            name='admin_id'
                            type="hidden"
                            className="border-gray-300 w-full"
                            value={formData.admin_id}
                          />
                        </div>
                        <div className="form-group w-full">
                          <label htmlFor> Weight</label> <br />
                          <input value={formData.Weight} onChange={handleChange} name='Weight' type="text" className=" border-gray-300 w-full" />
                        </div>
                        <div className="form-group w-full">
                          <label htmlFor> BP</label> <br />
                          <input name='BP' value={formData.BP} onChange={handleChange} type="text" className=" border-gray-300 w-full" />
                        </div>
                        <div className="form-group w-full">
                          <label htmlFor>Pulse</label> <br />
                          <input name='Pulse' onChange={handleChange} value={formData.Pulse} type="text" className=" border-gray-300 w-full" />
                        </div>
                        <div className="form-group w-full">
                          <label htmlFor>Temperature</label> <br />
                          <input name='Temperature' onChange={handleChange} value={formData.Temperature} type="text" className=" border-gray-300 w-full" />
                        </div>
                        <div className="form-group w-full">
                          <label htmlFor>Respiration</label> <br />
                          <input name='Respiration' onChange={handleChange} value={formData.Respiration} type="text" className=" border-gray-300 w-full" />
                        </div>

                      </div>

                      <div className='grid grid-cols-3 gap-3'>
                        <div className="form-group">
                          <label htmlFor>Symptoms Type</label> <br />
                          <input name='Symptoms_Type' onChange={handleChange} value={formData.Symptoms_Type} type="text" className=" border-gray-300 w-full" />
                        </div>
                        <div className="form-group">
                          <label htmlFor>Symptoms Title</label> <br />
                          <input name='Symptoms_Title' onChange={handleChange} value={formData.Symptoms_Title} type="text" className=" border-gray-300 w-full" />
                        </div>
                        <div className="form-group   w-full  ">
                          <label htmlFor="">Symptoms Description</label>
                          <textarea name='Symptoms_Description' onChange={handleChange} value={formData.Symptoms_Description} id rows={3} className="px-6 w-full border-gray-300" defaultValue={""} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="form-group   w-full  ">
                          <label htmlFor="">Note</label>
                          <textarea name='Note' onChange={handleChange} value={formData.Note} id rows={3} className="px-6 w-full border-gray-300" defaultValue={""} />
                        </div>
                        <div className="form-group   w-full  ">
                          <label htmlFor="">Any Known Allergies</label>
                          <textarea name='Allergies' onChange={handleChange} value={formData.Allergies} id rows={3} className="px-6 w-full border-gray-300" defaultValue={""} />
                        </div>
                      </div>

                      <div className="form-group   w-full  ">
                        <label htmlFor="">Previous Medical Issue</label>
                        <textarea name='Previous_Medical_Issue' onChange={handleChange} value={formData.Previous_Medical_Issue} id rows={3} className="px-6 w-full border-gray-300" defaultValue={""} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 border p-3">
                      <div className="form-group w-full ">
                        <label htmlFor>Appointment Date *</label>
                        <input name='appoint_Date' onChange={handleChange} value={formData.appoint_Date} type="date" className=" border-gray-300 w-full" />
                        {errors.appoint_Date && <span className='text-red-500'>{errors.appoint_Date}</span>}
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor> Case</label> <br />
                        <input name='Case' onChange={handleChange} value={formData.Case} type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor> Casualty</label> <br />
                        <input name='Casualty' onChange={handleChange} value={formData.Casualty} type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor> Old Patient</label> <br />
                        <input name='Old_Patient' onChange={handleChange} value={formData.Old_Patient} type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>TPA</label> <br />
                        <input name='TPA' onChange={handleChange} value={formData.TPA} type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Reference</label> <br />
                        <input name='Reference' onChange={handleChange} value={formData.Reference} type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Consultant Doctor *</label> <br />
                        <select name='Doctor' onChange={handleChange} value={formData.Doctor} className=" border-gray-300 w-full">
                          <option disabled>Select doctor</option>
                          <option value="Amit Singh (9009)">	Amit Singh (9009)</option>
                          <option value="Amit Singh (9009)">	Reyan Jain (9011)</option>
                          {/* <option value="Debit Card">Debit Card</option> */}
                        </select>
                        {errors.Doctor && <span className='text-red-500'>{errors.Doctor}</span>}
                        {/* <input name='Doctor' onChange={(e) => setDoctor(e.target.value)} value={Doctor} type="text" className=" border-gray-300 w-full" /> */}
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Charge Category</label> <br />
                        <input name='Charge_Category' onChange={handleChange} value={formData.Charge_Category} type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Charge *</label> <br />
                        <input name='Charge' onChange={handleChange} value={formData.Charge} type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Tax</label> <br />
                        <input name='Tax' onChange={handleChange} value={formData.Tax} type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Standard Charge (IDR)</label> <br />
                        <input name='Standard_Charge' onChange={handleChange} value={formData.Standard_Charge} type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Applied Charge (IDR) *</label> <br />
                        <input name='Applied_Charge' onChange={handleChange} value={formData.Applied_Charge} type="text" className=" border-gray-300 w-full" />
                        {errors.Applied_Charge && <span className='text-red-500'>{errors.Applied_Charge}</span>}
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Amount (IDR) *</label> <br />
                        <input name='Amount' onChange={handleChange} value={formData.Amount} type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Payment Mode</label> <br />

                        <select name='Payment_Mode' onChange={handleChange} value={formData.Payment_Mode} className=" border-gray-300 w-full">
                          <option value="Cash">Cash</option>
                          <option value="Credit Card">Credit Card</option>
                          <option value="Debit Card">Debit Card</option>
                        </select>

                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Paid Amount (IDR) *</label> <br />
                        <input name='Paid_Amount' onChange={handleChange} value={formData.Paid_Amount} type="text" className=" border-gray-300 w-full" />
                        {errors.Paid_Amount && <span className='text-red-500'>{errors.Paid_Amount}</span>}


                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Live Consultation</label> <br />
                        {/* <input name='Live_Consultation' onChange={(e) => setLive_Consultation(e.target.value)} value={Live_Consultation} type="text" className=" border-gray-300 w-full" /> */}

                        <select name='Live_Consultation' onChange={handleChange} value={formData.Live_Consultation} className=" border-gray-300 w-full">
                          {/* <option value="Cash">Cash</option> */}
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="form-group   bottom-0  left-0 right-0 mt-10 py-4">
                  <div className="flex justify-end px-5 p-3 space-x-3 w-full">
                    {/* <button className="bg-gray-800 p-2 text-white w-[10%] ">
                      Save &amp; print
                    </button> */}
                    <button onClick={createOpd} className="bg-gray-800 p-2 text-white w-[5%] ">
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

export default Opdpatients;