import Header from '@/components/Admin/partials/Header';
import Sidebar from '@/components/Admin/partials/sidebar';

import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import SidebarSetup from './sidebar';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';


const SlotsBook = ({ admin, shift, doctor }) => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const [modal, setModal] = useState(true)
    const [admin_type, setAdmin_type] = useState(admin.type);
    const [admin_id, setAdminId] = useState(admin.id);
    const [datas, setData] = useState([])
    const [updateModal, setupdateModal] = useState(null)
    const [formData, setFormData] = useState(null)

    // const [id, setId] = useState(null); // Initialize id state


    const fetchData = () => {
        axios.post('/api/admin/appoinmentSlots-fetch').then(res => {
            console.log(res)
            setData(res.data)
        }).catch(error => console.log(error))

    }
    useEffect(() => {
        fetchData();
    }, [])

    const handleClose = () => {
        // console.log('hello')
        setModal(!modal)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const updatehandleClose = (data) => {
        setFormData(data); // Set form data
        setupdateModal(data.id);
        setValue('shift_id', data.shift_id); // Populate form fields
        setValue('doctor_id', data.doctor_id);
        setValue('charge_id', data.charge_id);
        setValue('charge_type_id', data.charge_type_id);
        setValue('amount', data.amount);
        setValue('cl_duration', data.cl_duration);



    }



    const onSubmit = async (data) => {
        try {
            if (formData && formData.id) {
                // If formData.id exists, it means we're updating existing data
                const updatedData = {
                    shift_id: data.shift_id,
                    doctor_id: data.doctor_id
                };

                const response = await axios.post(`/api/admin/appoinmentSlots-update/${formData.id}`, updatedData);
                console.log(response.data); // Log the response
                toast('Data updated')

            } else {
                // Otherwise, we're creating new data
                const response = await axios.post('/api/admin/appoinmentSlots-store', data);
                console.log(response.data); // Log the response
                toast('Data store successfull')

            }

            fetchData(); // Fetch updated data or refresh data list
            // reset(); // Clear form inputs after successful submission
        } catch (error) {
            console.error('Error:', error);
        }
    };




    // const onUpdate = (id, data) => {
    //     if (id) { // Make sure id is not null before updating
    //         Updatedata(data);
    //     } else {
    //         console.error("ID is not set");
    //     }
    // };
    const DeleteData = (e, id) => {
        e.preventDefault();

        axios.post(`/api/admin/appoinmentSlots-delete/${id}`)
            .then(response => {
                toast("Data successfully Deleted!")
                fetchData();
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="flex h-screen">
            <ToastContainer />
            <div className="bg-gray-800 text-white w-[11%] flex-shrink-0">

                <Sidebar />
            </div>


            <div className="flex-grow bg-gray-100 ">
                <Header />
                <div className="flex px-9 py-5 space-x-4 " >
                    <div className="sidebar w-[14%] shadow-sm">
                        <SidebarSetup />
                    </div>

                    <div className="w-[86%] shadow-sm">
                        <div className="relative">
                            <div className="card mt-2">
                                <div className="card-header flex justify-between px-[3rem] border py-3">
                                    <div className="grid place-items-center text-[22px]">
                                        <h1>Shift  </h1>
                                    </div>
                                    <button type='button' onClick={handleClose} className="bg-gray-700 p-1 px-2 text-white  flex space-x-2">
                                        <div className='grid place-items-center mt-1'>
                                            <FaPlus />
                                        </div>
                                        <h1> Add  Item </h1>
                                    </button>
                                    <div id="exampleModal" className={modal ? "  fixed h-screen transform  bg-black shadow-md rounded-md g  top-0 bottom-0 right-0 left-0 w-full hidden" : "fixed h-screen transform  bg-black bg-opacity-85 shadow-md rounded-md   top-0 bottom-0 right-0 left-0 w-full grid place-items-center"}>
                                        <div className="back-model w-[60%] bg-white relative ">
                                            <div className="modal-content w-full">
                                                <div className="modal-header flex justify-between   bg-[#0E99F4] p-2">
                                                    <div className="w-[80%]  px-4 mt-[0.29rem]">
                                                        <h1 className='text-white text-[1.5rem]'>Add Item</h1>
                                                    </div>
                                                    <button onClick={handleClose} className="ml-auto text-[2rem] text-white">
                                                        <RxCross1 />
                                                    </button>

                                                </div>
                                                <div className="modal-body">

                                                    <form onSubmit={handleSubmit(onSubmit)} className="w-full grid grid-cols-1 gap-5 px-6 mt-10 relative">

                                                        <div className="form-group">
                                                            <label htmlFor> Doctor</label> <br />

                                                            <select
                                                                {...register('doctor_id', { required: 'Doctor name is required' })}
                                                                className="w-full border-gray-300"
                                                            >
                                                                <option value="">Select</option>
                                                                {
                                                                    doctor.map(doctors =>
                                                                        <option key={doctors.id} value={doctors.id}>{doctors.name}</option>)
                                                                }
                                                            </select>
                                                            {errors.doctor_id && <p>{errors.doctor_id.message}</p>}
                                                        </div>

                                                        <div className="form-group w-full">
                                                            <label htmlFor> Shift *</label> <br />
                                                            <select  {...register('shift_id', { required: 'Shift  is required' })} id="" className="w-full border-gray-300">
                                                                <option value="">Select</option>
                                                                {
                                                                    shift.map(shifts => (
                                                                        <option value={shifts.id}>{shifts.shift_name}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                            {errors.shift_id && <p>{errors.shift_id.message}</p>}
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="">Consultation Duration *</label>
                                                            <input {...register('cl_duration', { required: 'Consultation Duration  is required' })} type="text" placeholder='' className="w-full border-gray-300" />
                                                            {errors.cl_duration && <p>{errors.cl_duration.message}</p>}
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="">Charge Category *</label>
                                                            <select  {...register('charge_id', { required: 'charge  is required' })} id="" className="w-full border-gray-300">
                                                                <option value="">Select</option>
                                                                {
                                                                    shift.map(shifts => (
                                                                        <option value={shifts.id}>{shifts.shift_name}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                            {errors.charge_id && <p>{errors.charge_id.message}</p>}
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="">Charge  *</label>
                                                            <select  {...register('charge_type_id', { required: 'charge  is required' })} id="" className="w-full border-gray-300">
                                                                <option value="">Select</option>
                                                                {
                                                                    shift.map(shifts => (
                                                                        <option value={shifts.id}>{shifts.shift_name}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                            {errors.charge_type_id && <p>{errors.charge_type_id.message}</p>}
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="">Amount  *</label>
                                                            <input {...register('amount', { required: 'Amount is required' })} type="text" placeholder='' className="w-full border-gray-300" />
                                                            {errors.amount && <p>{errors.amount.message}</p>}
                                                        </div>


                                                        <div className="form-group   bottom-0  left-0 right-0 mt-10 py-4">
                                                            <div className="flex justify-end px-5 p-3 space-x-3 w-full">

                                                                <button className="bg-gray-800 p-2 text-white w-[12%] ">
                                                                    Save
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>



                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-x-auto w-full">
                                <table className="table-auto min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr className='text-[#333] text-[14px] font-bold'>
                                            <th className="px-6 py-3 text-left  tracking-wider">

                                                Doctor Name
                                            </th>
                                            <th className="px-6 py-3 text-left  tracking-wider">
                                                Shift
                                            </th>
                                            <th className="px-6 py-3 text-left  tracking-wider">
                                                Charges
                                            </th>
                                            <th className="px-6 py-3 text-left  tracking-wider">
                                                Live Consulation
                                            </th>
                                            <th className="px-6 py-3 text-left  tracking-wider">
                                                Amount
                                            </th>
                                            {/* <th className="px-6 py-3 text-left  tracking-wider">
                                                Time To
                                            </th>
                                            <th className="px-6 py-3  tracking-wider text-end">
                                                Action
                                            </th> */}




                                            {/* Add more table headers here as needed */}
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {
                                            datas.map((datas, idx) => (
                                                <tr>
                                                    <td className='px-6 py-3 text-left text-xs'>{datas.doctorname}</td>
                                                    <td className='px-6 py-3 text-left text-xs'>{datas.shift_name}</td>
                                                    <td className='px-6 py-3 text-left text-xs'>{datas.categoriesname}</td>
                                                    <td className='px-6 py-3 text-left text-xs'>{datas.cl_duration}</td>
                                                    <td className='px-6 py-3 text-left text-xs'>{datas.amount}</td>
                                                    {/* <td className='px-6 py-3 text-left text-xs'>{datas.shift_time_from}</td> */}




                                                    <td className='px-6 py-3  text-xs flex space-x-2 text-end justify-end' >
                                                        <a onClick={() => updatehandleClose(datas)}
                                                        ><CiEdit className='text-[1.3rem] cursor-pointer' /></a>
                                                        <a onClick={(e) =>

                                                            DeleteData(e, datas.id)
                                                        }><FaRegTrashAlt className='text-[1.1rem] cursor-pointer' /></a>
                                                        {
                                                            updateModal &&

                                                            <div className="fixed h-screen transform  bg-black bg-opacity-85 shadow-md rounded-md   top-0 bottom-0 right-0 left-0 w-full grid place-items-center ">
                                                                <div className="back-model w-[60%] bg-white relative ">
                                                                    <div className="modal-content w-full">
                                                                        <div className="modal-header flex justify-between   bg-[#0E99F4] p-2">
                                                                            <div className="w-[80%]  px-4 mt-[0.29rem]">
                                                                                <h1 className='text-white text-[2rem]'>update Receive </h1>
                                                                            </div>
                                                                            <button onClick={updatehandleClose} className="ml-auto text-[2rem] text-white">
                                                                                <RxCross1 />
                                                                            </button>

                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <form onSubmit={handleSubmit(onSubmit)} className="w-full grid grid-cols-1 gap-5 px-6 mt-10 relative">

                                                                                <div className="form-group">
                                                                                    <label htmlFor> Doctor</label> <br />

                                                                                    <select
                                                                                        {...register('doctor_id', { required: 'Doctor name is required' })}
                                                                                        className="w-full border-gray-300"
                                                                                    >
                                                                                        <option value="">Select</option>
                                                                                        {
                                                                                            doctor.map(doctors =>
                                                                                                <option key={doctors.id} value={doctors.id}>{doctors.name}</option>)
                                                                                        }
                                                                                    </select>
                                                                                    {errors.doctor_id && <p>{errors.doctor_id.message}</p>}
                                                                                </div>

                                                                                <div className="form-group w-full">
                                                                                    <label htmlFor> Shift *</label> <br />
                                                                                    <select  {...register('shift_id', { required: 'Shift  is required' })} id="" className="w-full border-gray-300">
                                                                                        <option value="">Select</option>
                                                                                        {
                                                                                            shift.map(shifts => (
                                                                                                <option value={shifts.id}>{shifts.shift_name}</option>
                                                                                            ))
                                                                                        }
                                                                                    </select>
                                                                                    {errors.shift_id && <p>{errors.shift_id.message}</p>}
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label htmlFor="">Consultation Duration *</label>
                                                                                    <input {...register('cl_duration', { required: 'Consultation Duration  is required' })} type="text" placeholder='' className="w-full border-gray-300" />
                                                                                    {errors.cl_duration && <p>{errors.cl_duration.message}</p>}
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label htmlFor="">Charge Category *</label>
                                                                                    <select  {...register('charge_id', { required: 'charge  is required' })} id="" className="w-full border-gray-300">
                                                                                        <option value="">Select</option>
                                                                                        {
                                                                                            shift.map(shifts => (
                                                                                                <option value={shifts.id}>{shifts.shift_name}</option>
                                                                                            ))
                                                                                        }
                                                                                    </select>
                                                                                    {errors.charge_id && <p>{errors.charge_id.message}</p>}
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label htmlFor="">Charge  *</label>
                                                                                    <select  {...register('charge_type_id', { required: 'charge  is required' })} id="" className="w-full border-gray-300">
                                                                                        <option value="">Select</option>
                                                                                        {
                                                                                            shift.map(shifts => (
                                                                                                <option value={shifts.id}>{shifts.shift_name}</option>
                                                                                            ))
                                                                                        }
                                                                                    </select>
                                                                                    {errors.charge_type_id && <p>{errors.charge_type_id.message}</p>}
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label htmlFor="">Amount  *</label>
                                                                                    <input {...register('amount', { required: 'Amount is required' })} type="text" placeholder='' className="w-full border-gray-300" />
                                                                                    {errors.amount && <p>{errors.amount.message}</p>}
                                                                                </div>


                                                                                <div className="form-group   bottom-0  left-0 right-0 mt-10 py-4">
                                                                                    <div className="flex justify-end px-5 p-3 space-x-3 w-full">

                                                                                        <button className="bg-gray-800 p-2 text-white w-[12%] ">
                                                                                            Save
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </form>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    </td>

                                                    {/* update model data  */}

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


                        </div>
                    </div>
                </div>

            </div >
        </div >
    );
}

export default SlotsBook;