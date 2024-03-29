import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
const BirthRecord = ({ admin }) => {

    const [modal, setModal] = useState(true)
    const [updateModal, setupdateModal] = useState(null)
    const [admin_type, setAdminType] = useState(admin.type)
    const [admin_id, setId] = useState(admin.id)
    const [atach_file, setFileChange] = useState({
        'motherphoto': null,
        'child_photo': null,
        'father_photo': null,

        'document': null,
    })
    const [motherphoto, setMotherphoto] = useState('');
    const [Patientsdata, setPatientsdata] = useState([]);
    const [formData, setFormdata] = useState({

        'chilname': '',
        'date': '',

        'report': '',
        'mothername': '',
        'gender': '',
        'weight': '',
        'fathername': '',
        'phone': '',
        'caseid': '',
        'address': '',
        'report': ''


    })



    const [data, setdata] = useState([])
    const handleFormdata = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formData,
            [name]: value
        });
    }

    const fetchDataPatient = async () => {
        try {
            const response = await axios.get('/api/admin/patient-fetch');
            // console.log(data)
            setPatientsdata(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleClose = () => {
        // console.log('hello')
        setModal(!modal)
    }
    const updatehandleClose = () => {
        // console.log('hello')
        setupdateModal(!updateModal)
    }
    const handleFileUpload = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
            setFileChange({
                ...atach_file,
                [name]: files[0]
            });
        }
    }
    const fetchData = () => {
        axios.post('/api/admin/birthcertificate-fetch')
            .then(res => {
                console.log(res.data)
                setdata(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchData();
        fetchDataPatient();
        // Fet(id);
    }, []);
    const FormSubmit = (e) => {
        e.preventDefault();
        const formSave = new FormData()
        formSave.append('chilname', formData.chilname)
        formSave.append(' admin_id', admin_id)
        formSave.append('admin_type', admin_type)
        formSave.append('date', formData.date)
        formSave.append('mothername', formData.mothername)
        formSave.append('gender', formData.gender)
        formSave.append('phone', formData.phone)
        formSave.append('fathername', formData.fathername)
        formSave.append('report', formData.report)
        formSave.append('caseid', formData.caseid)
        formSave.append('address', formData.address)
        formSave.append('weight', formData.weight)
        formSave.append('motherphoto', motherphoto)
        formSave.append('child_photo', atach_file.child_photo)
        formSave.append('father_photo', atach_file.father_photo)

        formSave.append('document', atach_file.document)




        axios.post('/api/admin/birthcertificate-store', formSave,)
            .then(response => {
                console.log(response)
                fetchData();
            })
            .catch(error => console.log(error))
    }

    const DeleteData = (e, id) => {
        e.preventDefault();

        axios.post(`/api/admin/birthcertificate-delete/${id}`)
            .then(response => {
                console.log(response)
                fetchData();
            })
            .catch(error => console.log(error))
    }


    const Updatedata = (e, id) => {
        e.preventDefault();
        const formSave = new FormData()
        formSave.append('chilname', formData.chilname)
        formSave.append(' admin_id', admin_id)
        formSave.append('admin_type', admin_type)
        formSave.append('date', formData.date)
        formSave.append('mothername', formData.mothername)
        formSave.append('gender', formData.gender)
        formSave.append('phone', formData.phone)
        formSave.append('fathername', formData.fathername)
        formSave.append('report', formData.report)
        formSave.append('caseid', formData.caseid)
        formSave.append('address', formData.address)
        formSave.append('weight', formData.weight)
        formSave.append('motherphoto', motherphoto)
        formSave.append('child_photo', atach_file.child_photo)
        formSave.append('father_photo', atach_file.father_photo)

        formSave.append('document', atach_file.document)
        axios.post(`/api/admin/birthcertificate-update/${id}`, formSave).then(res => fetchData()).catch(error => console.log(error))
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
                                <h1>Birth Record List</h1>
                            </div>
                            <button type='button' onClick={handleClose} className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                <div className='grid place-items-center mt-1'>
                                    <FaPlus />
                                </div>
                                <h1>Add Birth Record </h1>
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Reference No
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Case ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Child Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Mother Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Father Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Gender
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Birth Date
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        report
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Action
                                    </th>

                                    {/* Add more table headers here as needed */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    data.map((datas, idx) => (
                                        <tr>
                                            {/* <td className='px-6 py-3 text-left text-xs'>{datas.recv_name}</td> */}
                                            <td className='px-6 py-3 text-left text-xs'>{datas.recv_ref_no}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.caseid}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.chilname}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.mothername}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.fathername}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.gender}</td>
                                            <td className='px-6 py-3 text-left text-xs'>{datas.date}</td>
                                            {/* <td className='px-6 py-3 text-left text-xs'>{datas.date}</td> */}
                                            <td className='px-6 py-3 text-left text-xs'>{datas.report}</td>
                                            {/* <td className='px-6 py-3 text-left text-xs'>{datas.cml_date}</td> */}
                                            <td className='px-6 py-3 text-left text-xs flex space-x-2'>
                                                <a onClick={() => {
                                                    setFormdata({
                                                        // id: datas.id,
                                                        chilname: datas.date,

                                                        date: datas.date,
                                                        mothername: datas.mothername,
                                                        gender: datas.gender,
                                                        phone: datas.phone,
                                                        fathername: datas.fathername,
                                                        report: datas.report,
                                                        caseid: datas.caseid,
                                                        address: datas.address,
                                                        weight: datas.weight,
                                                        motherphoto: datas.motherphoto,
                                                        child_photo: datas.child_photo,
                                                        father_photo: datas.father_photo,
                                                        document: datas.document,

                                                    }); setupdateModal(datas.id)
                                                }}><CiEdit className='text-[1.3rem] cursor-pointer' /></a>
                                                <a onClick={(e) =>

                                                    DeleteData(e, datas.id)
                                                }><FaRegTrashAlt className='text-[1.1rem] cursor-pointer' /></a>


                                            </td>

                                            {/* update model data  */}
                                            <div key={datas.id} id={`exampleModal-${datas.id}`} className={updateModal === datas.id ? "fixed h-screen transform  bg-black bg-opacity-85 shadow-md rounded-md   top-0 bottom-0 right-0 left-0 w-full grid place-items-center " : "fixed h-screen transform  bg-black bg-opacity-85 shadow-md rounded-md   top-0 bottom-0 right-0 left-0 w-full hidden place-items-center"}>
                                                <div className="back-model w-[60%] bg-white relative ">
                                                    <div className="modal-content w-full">
                                                        <div className="modal-header flex justify-between   bg-[#0E99F4] p-2">
                                                            <div className="w-[80%]  px-4 mt-[0.29rem]">
                                                                <h1 className='text-white text-[2rem]'>update Receive {datas.id}</h1>
                                                            </div>
                                                            <button onClick={updatehandleClose} className="ml-auto text-[2rem] text-white">
                                                                <RxCross1 />
                                                            </button>

                                                        </div>
                                                        <div className="modal-body">

                                                            <form action className="w-full grid grid-cols-3 gap-5 px-6 mt-10 relative">
                                                                <div className="form-group w-full ">
                                                                    <label htmlFor>Child Name *</label>
                                                                    <input onChange={handleFormdata} name='chilname' value={formData.chilname} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Mother Name * </label> <br />
                                                                    <input name='mothername' onChange={handleFormdata} value={formData.mothername} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Father Name </label> <br />
                                                                    <input onChange={handleFormdata} name='fathername' value={formData.fathername} type="text" className="w-full border-gray-300" />
                                                                </div>


                                                                <div className="form-group w-full">
                                                                    <label htmlFor> Gender </label> <br />
                                                                    <select onChange={handleFormdata} name='gender' value={formData.gender} id="" className="w-full border-gray-300">
                                                                        <option value="">Select Gender</option>
                                                                        <option value="male">Male</option>
                                                                        <option value="female">Female</option>
                                                                    </select>
                                                                </div>

                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Weight *</label> <br />
                                                                    <input onChange={handleFormdata} name='weight' value={formData.weight} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                {/* <div className="form-group w-full">
                                            <label htmlFor>Child Photo </label> <br />

                                            <div class="flex items-center justify-center w-full">
                                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                    <div class="flex flex-col items-center justify-center mt-4">
                                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>

                                                    </div>
                                                    <input onChange={handleFileUpload} name='child_photo' id="dropzone-file" type="file" class="hidden" />
                                                </label>
                                            </div>

                                        </div> */}
                                                                {/* <div className="form-group w-full">
                                            <label htmlFor>Mother Photo </label> <br />

                                            <div class="flex items-center justify-center w-full">
                                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                    <div class="flex flex-col items-center justify-center mt-4">
                                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>

                                                    </div>
                                                    <input onChange={(e) => setMotherphoto(e.target.files[0])} name='motherphoto' id="dropzone-file" type="file" class="hidden" />
                                                </label>
                                            </div>

                                        </div> */}
                                                                {/* <div className="form-group w-full">
                                            <label htmlFor>Father Photo </label> <br />

                                            <div class="flex items-center justify-center w-full">
                                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                    <div class="flex flex-col items-center justify-center mt-4">
                                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>

                                                    </div>
                                                    <input onChange={handleFileUpload} name='father_photo' id="dropzone-file" type="file" class="hidden" />
                                                </label>
                                            </div>

                                        </div> */}
                                                                {/* <div className="form-group w-full">
                                            <label htmlFor>Attach Document Photo</label> <br />

                                            <div class="flex items-center justify-center w-full">
                                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                    <div class="flex flex-col items-center justify-center mt-4">
                                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>

                                                    </div>
                                                    <input onChange={handleFileUpload} name='document' id="dropzone-file" type="file" class="hidden" />
                                                </label>
                                            </div>

                                        </div> */}
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Birth Date * </label> <br />
                                                                    <input onChange={handleFormdata} name='date' value={formData.date} type="text" className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Phone </label> <br />
                                                                    <input type="text" onChange={handleFormdata} name='phone' value={formData.phone} className="w-full border-gray-300" />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor>Case ID </label> <br />
                                                                    <input onChange={handleFormdata} name='caseid' value={formData.caseid} type="text" className="w-full border-gray-300" />
                                                                </div>

                                                                <div className="form-group w-full">
                                                                    <label htmlFor="child_photo">Child Photo</label> <br />
                                                                    <input
                                                                        onChange={handleFileUpload}
                                                                        name="child_photo"
                                                                        id="child_photo"
                                                                        type="file"
                                                                        className="w-full border-gray-300"
                                                                    />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor="mother_photo">Mother Photo</label> <br />
                                                                    <input
                                                                        onChange={handleFileUpload}
                                                                        name="motherphoto"
                                                                        id="mother_photo"
                                                                        type="file"
                                                                        className="w-full border-gray-300"
                                                                    />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor="father_photo">Father Photo</label> <br />
                                                                    <input
                                                                        onChange={handleFileUpload}
                                                                        name="father_photo"
                                                                        id="father_photo"
                                                                        type="file"
                                                                        className="w-full border-gray-300"
                                                                    />
                                                                </div>
                                                                <div className="form-group w-full">
                                                                    <label htmlFor="document">Document</label> <br />
                                                                    <input
                                                                        onChange={handleFileUpload}
                                                                        name="document"
                                                                        id="document"
                                                                        type="file"
                                                                        className="w-full border-gray-300"
                                                                    />
                                                                </div>
                                                            </form>
                                                            <div className="form-group w-full px-6 mt-3">
                                                                <label htmlFor>report</label> <br />
                                                                <textarea onChange={handleFormdata} name='report' value={formData.report} type="date" className="w-full border-gray-300" ></textarea>
                                                            </div>
                                                            <div className="form-group w-full px-6 mt-3">
                                                                <label htmlFor>Addres</label> <br />
                                                                <textarea onChange={handleFormdata} name='address' value={formData.address} type="date" className="w-full border-gray-300" ></textarea>
                                                            </div>

                                                        </div>

                                                        <div className="form-group   bottom-0  left-0 right-0 mt-10 py-4">
                                                            <div className="flex justify-end px-5 p-3 space-x-3 w-full">
                                                                {/* <button className="bg-gray-800 p-2 text-white w-[10%] ">
                                            Save &amp; print
                                        </button> */}
                                                                <button onClick={(e) => Updatedata(e, datas.id)} className="bg-gray-800 p-2 text-white w-[12%] ">
                                                                    Save
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                <div className="modal-header flex justify-between   bg-[#0E99F4] p-2">
                                    <div className="w-[80%]  px-4 mt-[0.29rem]">
                                        <h1 className='text-white text-[1.5rem]'>Add Birth Record</h1>
                                    </div>
                                    <button onClick={handleClose} className="ml-auto text-[2rem] text-white">
                                        <RxCross1 />
                                    </button>

                                </div>
                                <div className="modal-body">

                                    <form action className="w-full grid grid-cols-3 gap-5 px-6 mt-10 relative">
                                        <div className="form-group w-full ">
                                            <label htmlFor>Child Name *</label>
                                            <input onChange={handleFormdata} name='chilname' value={formData.chilname} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Mother Name * </label> <br />
                                            <input name='mothername' onChange={handleFormdata} value={formData.mothername} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Father Name </label> <br />
                                            <input onChange={handleFormdata} name='fathername' value={formData.fathername} type="text" className="w-full border-gray-300" />
                                        </div>


                                        <div className="form-group w-full">
                                            <label htmlFor> Gender </label> <br />
                                            <select onChange={handleFormdata} name='gender' value={formData.gender} id="" className="w-full border-gray-300">
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>

                                        <div className="form-group w-full">
                                            <label htmlFor>Weight *</label> <br />
                                            <input onChange={handleFormdata} name='weight' value={formData.weight} type="text" className="w-full border-gray-300" />
                                        </div>
                                        {/* <div className="form-group w-full">
                                            <label htmlFor>Child Photo </label> <br />

                                            <div class="flex items-center justify-center w-full">
                                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                    <div class="flex flex-col items-center justify-center mt-4">
                                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>

                                                    </div>
                                                    <input onChange={handleFileUpload} name='child_photo' id="dropzone-file" type="file" class="hidden" />
                                                </label>
                                            </div>

                                        </div> */}
                                        {/* <div className="form-group w-full">
                                            <label htmlFor>Mother Photo </label> <br />

                                            <div class="flex items-center justify-center w-full">
                                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                    <div class="flex flex-col items-center justify-center mt-4">
                                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>

                                                    </div>
                                                    <input onChange={(e) => setMotherphoto(e.target.files[0])} name='motherphoto' id="dropzone-file" type="file" class="hidden" />
                                                </label>
                                            </div>

                                        </div> */}
                                        {/* <div className="form-group w-full">
                                            <label htmlFor>Father Photo </label> <br />

                                            <div class="flex items-center justify-center w-full">
                                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                    <div class="flex flex-col items-center justify-center mt-4">
                                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>

                                                    </div>
                                                    <input onChange={handleFileUpload} name='father_photo' id="dropzone-file" type="file" class="hidden" />
                                                </label>
                                            </div>

                                        </div> */}
                                        {/* <div className="form-group w-full">
                                            <label htmlFor>Attach Document Photo</label> <br />

                                            <div class="flex items-center justify-center w-full">
                                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                    <div class="flex flex-col items-center justify-center mt-4">
                                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>

                                                    </div>
                                                    <input onChange={handleFileUpload} name='document' id="dropzone-file" type="file" class="hidden" />
                                                </label>
                                            </div>

                                        </div> */}
                                        <div className="form-group w-full">
                                            <label htmlFor>Birth Date * </label> <br />
                                            <input onChange={handleFormdata} name='date' value={formData.date} type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Phone </label> <br />
                                            <input type="text" onChange={handleFormdata} name='phone' value={formData.phone} className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Case ID </label> <br />
                                            <input onChange={handleFormdata} name='caseid' value={formData.caseid} type="text" className="w-full border-gray-300" />
                                        </div>

                                        <div className="form-group w-full">
                                            <label htmlFor="child_photo">Child Photo</label> <br />
                                            <input
                                                onChange={handleFileUpload}
                                                name="child_photo"
                                                id="child_photo"
                                                type="file"
                                                className="w-full border-gray-300"
                                            />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor="mother_photo">Mother Photo</label> <br />
                                            <input
                                                onChange={handleFileUpload}
                                                name="motherphoto"
                                                id="mother_photo"
                                                type="file"
                                                className="w-full border-gray-300"
                                            />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor="father_photo">Father Photo</label> <br />
                                            <input
                                                onChange={handleFileUpload}
                                                name="father_photo"
                                                id="father_photo"
                                                type="file"
                                                className="w-full border-gray-300"
                                            />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor="document">Document</label> <br />
                                            <input
                                                onChange={handleFileUpload}
                                                name="document"
                                                id="document"
                                                type="file"
                                                className="w-full border-gray-300"
                                            />
                                        </div>
                                    </form>
                                    <div className="form-group w-full px-6 mt-3">
                                        <label htmlFor>report</label> <br />
                                        <textarea onChange={handleFormdata} name='report' value={formData.report} type="date" className="w-full border-gray-300" ></textarea>
                                    </div>
                                    <div className="form-group w-full px-6 mt-3">
                                        <label htmlFor>Addres</label> <br />
                                        <textarea onChange={handleFormdata} name='address' value={formData.address} type="date" className="w-full border-gray-300" ></textarea>
                                    </div>

                                </div>

                                <div className="form-group   bottom-0  left-0 right-0 mt-10 py-4">
                                    <div className="flex justify-end px-5 p-3 space-x-3 w-full">

                                        <button onClick={FormSubmit} className="bg-gray-800 p-2 text-white w-[10%] ">
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

export default BirthRecord;