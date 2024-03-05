import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import PatientsModal from '@/components/Admin/patientsmodal';
const Opdpatients = () => {

  const [modal, setModal] = useState(true)
  const [Patientsmodal, setPatientsmodal] = useState(true)
  const [Patientsdata, setPatientsdata] = useState([]);
  // Function to fetch data from API
  const fetchData = async () => {
    try {
      const response = await axios.post('/api/admin/patient-fetch');
      setPatientsdata(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Call fetchData when the component mounts
  useEffect(() => {
    fetchData();
  }, []);
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
                <h1>OPD Patient</h1>
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
                  {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Priority
                 </th>
                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Live Consultant
                 </th>
                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Alternate Address
                 </th> */}
                  {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   Balance Amount (Rs.)
                 </th> */}
                  {/* Add more table headers here as needed */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Table rows will be dynamically added here */}
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
                  <div className="w-[80%] flex space-x-2 px-4 mt-[0.29rem]">
                    <select name id className="w-[100%] h-9">
                      <option value disabled>Select Patient</option>
                      {
                        Patientsdata.map(Patients => (
                          <option value >{Patients.id}</option>

                        ))
                      }

                    </select>
                    <button onClick={handlePatients} className="bg-gray-700 w-[40%] h-9  text-white rounded-md"> <i className="fa-solid fa-plus" />
                      Add Patient</button>
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
                          <input type="text" className=" border-gray-300 w-full" />
                        </div>
                        <div className="form-group w-full">
                          <label htmlFor> Weight</label> <br />
                          <input type="text" className=" border-gray-300 w-full" />
                        </div>
                        <div className="form-group w-full">
                          <label htmlFor> BP</label> <br />
                          <input type="text" className=" border-gray-300 w-full" />
                        </div>
                        <div className="form-group w-full">
                          <label htmlFor>Pulse</label> <br />
                          <input type="text" className=" border-gray-300 w-full" />
                        </div>
                        <div className="form-group w-full">
                          <label htmlFor>Temperature</label> <br />
                          <input type="text" className=" border-gray-300 w-full" />
                        </div>
                        <div className="form-group w-full">
                          <label htmlFor>Respiration</label> <br />
                          <input type="text" className=" border-gray-300 w-full" />
                        </div>

                      </div>

                      <div className='grid grid-cols-3 gap-3'>
                        <div className="form-group">
                          <label htmlFor>Symptoms Type</label> <br />
                          <input type="text" className=" border-gray-300 w-full" />
                        </div>
                        <div className="form-group">
                          <label htmlFor>Symptoms Title</label> <br />
                          <input type="text" className=" border-gray-300 w-full" />
                        </div>
                        <div className="form-group   w-full  ">
                          <label htmlFor="">Symptoms Description</label>
                          <textarea name id rows={3} className="px-6 w-full border-gray-300" defaultValue={""} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="form-group   w-full  ">
                          <label htmlFor="">Note</label>
                          <textarea name id rows={3} className="px-6 w-full border-gray-300" defaultValue={""} />
                        </div>
                        <div className="form-group   w-full  ">
                          <label htmlFor="">Any Known Allergies</label>
                          <textarea name id rows={3} className="px-6 w-full border-gray-300" defaultValue={""} />
                        </div>
                      </div>

                      <div className="form-group   w-full  ">
                        <label htmlFor="">Previous Medical Issue</label>
                        <textarea name id rows={3} className="px-6 w-full border-gray-300" defaultValue={""} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 border p-3">
                      <div className="form-group w-full ">
                        <label htmlFor>Appointment Date *</label>
                        <input type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor> Case</label> <br />
                        <input type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor> Casualty</label> <br />
                        <input type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor> Old Patient</label> <br />
                        <input type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>TPA</label> <br />
                        <input type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Reference</label> <br />
                        <input type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Consultant Doctor *</label> <br />
                        <input type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Charge Category</label> <br />
                        <input type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Charge *</label> <br />
                        <input type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Tax</label> <br />
                        <input type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Standard Charge (IDR)</label> <br />
                        <input type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Applied Charge (IDR) *</label> <br />
                        <input type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Amount (IDR) *</label> <br />
                        <input type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Payment Mode</label> <br />
                        <input type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Paid Amount (IDR) *</label> <br />
                        <input type="text" className=" border-gray-300 w-full" />
                      </div>
                      <div className="form-group w-full">
                        <label htmlFor>Live Consultation</label> <br />
                        <input type="text" className=" border-gray-300 w-full" />
                      </div>
                    </div>
                  </div>
                </div>



                <div className="form-group   bottom-0  left-0 right-0 mt-10 py-4">
                  <div className="flex justify-end px-5 p-3 space-x-3 w-full">
                    <button className="bg-gray-800 p-2 text-white w-[10%] ">
                      Save &amp; print
                    </button>
                    <button className="bg-gray-800 p-2 text-white w-[5%] ">
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