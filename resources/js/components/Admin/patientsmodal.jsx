import React, { useState, useEffect } from 'react'
import { RxCross1 } from "react-icons/rx";
import Swal from 'sweetalert2';
const PatientsModal = ({ Patientsmodal, handlePatients, fetchData }) => {
    const [name, setname] = useState('')
    const [guardian_name, setguardian_name] = useState('')
    const [gender, setgender] = useState('')
    const [date_of_birth, setdate_of_birth] = useState('')
    const [age, setage] = useState('')
    const [blood_group, setblood_group] = useState('')
    const [marital_status, setmarital_status] = useState('')
    const [patient_photo, setpatient_photo] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [address, setaddress] = useState('')
    const [remarks, setremarks] = useState('')
    const [allergies, setallergies] = useState('')
    const [Patientsdata, setPatientsdata] = useState([]);



    const createUser = async () => {
        try {
            const newpatients = { name, guardian_name, gender, date_of_birth, age, blood_group, marital_status, patient_photo, phone, email, address, remarks, allergies };
            await axios.post('/api/admin/patient-store', newpatients, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setname('');
            setguardian_name('');
            setgender('');
            setdate_of_birth('');
            setage('');
            setblood_group('');
            setmarital_status('');
            setpatient_photo('');
            setphone('');
            setemail('');
            setaddress('');
            setremarks('');
            setallergies('');
            fetchData();
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Form submitted successfully!',
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Please Fill carefully!',
                // text: 'Form submitted successfully!',
            });
        }
    };

    return (
        <div id="exampleModal" className={Patientsmodal ? "  fixed h-screen transform  bg-black shadow-md rounded-md g  top-0 bottom-0 right-0 left-0 w-full hidden" : "fixed h-screen transform  bg-black bg-opacity-85 shadow-md rounded-md   top-0 bottom-0 right-0 left-0 w-full grid place-items-center"}>
            <div className="back-model w-[60%] bg-white relative ">
                <div className="modal-content w-full">
                    <div className="modal-header grid grid-cols-2  bg-[#0E99F4] p-2">
                        <h1 className='text-white text-[1.5rem]'> Add Patients</h1>
                        <div className="flex mt-[0.40rem]">

                            <button onClick={handlePatients} className="ml-auto text-[2rem] text-white">
                                <RxCross1 />
                            </button>
                        </div>
                    </div>
                    <div className="modal-body">

                        <div action className="w-full flex space-x-3 px-6 mt-10 relative">
                            <div>
                                <div className='grid grid-cols-6 gap-3'>
                                    <div className="form-group w-full ">
                                        <label htmlFor>Name *</label>
                                        <input value={name} onChange={(e) => setname(e.target.value)} type="text" name='name' className=" border-gray-300 w-full" />
                                    </div>
                                    <div className="form-group w-full">
                                        <label htmlFor> Guardian Name</label> <br />
                                        <input value={guardian_name} onChange={(e) => setguardian_name(e.target.value)} type="text" name='guardian_name' className=" border-gray-300 w-full" />
                                    </div>
                                    <div className="form-group w-full">
                                        <label htmlFor> Gender</label> <br />
                                        <select name="gender" onChange={(e) => setgender(e.target.value)} id className="w-full border-gray-300">
                                            <option value>Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div className="form-group w-full">
                                        <label htmlFor>Date Of Birth</label> <br />
                                        <input value={date_of_birth} onChange={(e) => setdate_of_birth(e.target.value)} type="date" name='date_of_birth' className=" border-gray-300 w-full" />
                                    </div>
                                    <div className="form-group w-full">
                                        <label htmlFor>age</label> <br />
                                        <input value={age} onChange={(e) => setage(e.target.value)} type="text" name='age' placeholder='YY/DD/MMMM' className=" border-gray-300 w-full" />
                                    </div>
                                    <div className="form-group w-full">
                                        <label htmlFor>Blood Group</label> <br />
                                        <input value={blood_group} onChange={(e) => setblood_group(e.target.value)} type="text" name='blood_group' className=" border-gray-300 w-full" />
                                    </div>
                                    <div className="form-group w-full">
                                        <label htmlFor>Marital Status</label> <br />
                                        <select onChange={(e) => setmarital_status(e.target.value)} name="marital_status" id className="w-full border-gray-300">
                                            <option value>Select Marital Status</option>
                                            <option value="Single">Single</option>
                                            <option value="Married">Married</option>
                                        </select>
                                    </div>
                                    <div className="form-group w-full">
                                        <label htmlFor>Patients Photo</label> <br />
                                        <div class="flex items-center justify-center w-full">
                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col items-center justify-center mt-4">
                                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                    </svg>

                                                </div>
                                                <input value={setpatient_photo} name="patient_photo" onChange={(e) => setpatient_photo(e.target.files[0])} id="dropzone-file" type="file" class="hidden" />
                                            </label>
                                        </div>
                                    </div>

                                    <div className="form-group w-full">
                                        <label htmlFor>Phone</label> <br />
                                        <input value={phone} onChange={(e) => setphone(e.target.value)} type="text" name='phone' className=" border-gray-300 w-full" />
                                    </div>
                                    <div className="form-group w-full">
                                        <label htmlFor>Email</label> <br />
                                        <input value={email} onChange={(e) => setemail(e.target.value)} type="text" name='email' className=" border-gray-300 w-full" />
                                    </div>
                                    <div className="form-group w-full">
                                        <label htmlFor>Address</label> <br />
                                        <input value={address} onChange={(e) => setaddress(e.target.value)} type="text" name='address' className=" border-gray-300 w-full" />
                                    </div>


                                </div>
                                <div className="grid grid-cols-2 px-1 gap-4">
                                    <div className="form-group w-full">
                                        <label htmlFor>remarks</label> <br />
                                        <textarea value={remarks} name="remarks" onChange={(e) => setremarks(e.target.value)} id rows={3} className="px-6 w-full border-gray-300" defaultValue={""} />
                                    </div>
                                    <div className="form-group w-full">
                                        <label htmlFor>allergies</label> <br />
                                        <textarea value={allergies} name="allergies" onChange={(e) => setallergies(e.target.value)} id rows={3} className="px-6 w-full border-gray-300" defaultValue={""} />
                                    </div>
                                </div>



                                <div className="form-group   w-full  ">
                                    <label htmlFor="">Previous Medical Issue</label>
                                    <textarea name id rows={3} className="px-6 w-full border-gray-300" defaultValue={""} />
                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="form-group   bottom-0  left-0 right-0 mt-10 py-4">
                        <div className="flex justify-end px-5 p-3 space-x-3 w-full">
                            <button className="bg-gray-800 p-2 text-white w-[10%] ">
                                Save &amp; print
                            </button>
                            <button onClick={createUser} className="bg-gray-800 p-2 text-white w-[5%] ">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PatientsModal;