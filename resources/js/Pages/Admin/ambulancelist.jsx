import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link } from '@inertiajs/react';
const Ambulancelist = ({ admin }) => {

    const [modal, setModal] = useState(true)
    const [ambulance, setAmbulance] = useState([])
    const [formData, setFormdata] = useState({
        'admin_type': admin.type,
        'admin_id': admin.id,
        'vehicle_no': '',
        'vehicle_model': '',
        'year': '',
        'd_name': '',
        'd_license': '',
        'd_contact': '',
        'vehicle_type': '',
        'note': '',
    })

    const fetchData = async () => {
        try {
            const response = await axios.post('/api/admin/ambulance-list');
            // console.log(data)
            setAmbulance(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
        // PharmacyBillfetchData();
        // DoctorfetchData();
        // DepartmentfetchData();
        // Fet(id);
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
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
        try {


            await axios.post('/api/admin/ambulance-list-store', formData);
            fetchData()
            setFormdata({


                'vehicle_no': '',
                'vehicle_model': '',
                'year': '',
                'd_name': '',
                'd_license': '',
                'd_contact': '',
                'vehicle_type': '',
                'note': '',
            });
            setAmbulance()
            // PharmacyBillfetchData();
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
                                <h1>Ambulance List</h1>
                            </div>
                            <div className='flex space-x-3'>
                                <button type='button' onClick={handleClose} className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                    <div className='grid place-items-center mt-1'>
                                        <FaPlus />
                                    </div>
                                    <h1> Add Ambulance</h1>
                                </button>

                            </div>

                        </div>
                    </div>
                    <div className="">
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                                        Vehicle Number
                                    </th>
                                    <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                                        Vehicle Model
                                    </th>
                                    <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                                        Year Made
                                    </th>
                                    <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                                        Driver Name
                                    </th>

                                    <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                                        Driver License
                                    </th>
                                    {/* <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                                        Driver Contact
                                    </th> */}
                                    <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                                        Driver Contact No
                                    </th>
                                    <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                                        Note
                                    </th>
                                    <th className="px-6 py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                                        Vehicle Type
                                    </th>

                                    {/* Add more table headers here as needed */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">

                                {ambulance.map(ambulances => (
                                    <tr>
                                        <td className='px-6 py-3 text-left'>
                                            {ambulances.vehicle_no}
                                        </td>

                                        <td className='px-6 py-3 text-left'>
                                            {ambulances.vehicle_model}
                                        </td>
                                        <td className='px-6 py-3 text-left'>
                                            {ambulances.year}
                                        </td>
                                        <td className='px-6 py-3 text-left'>
                                            {ambulances.d_name}
                                        </td>
                                        <td className='px-6 py-3 text-left'>
                                            {ambulances.d_license}
                                        </td>
                                        <td className='px-6 py-3 text-left'>
                                            {ambulances.d_contact}
                                        </td>
                                        <td className='px-6 py-3 text-left'>
                                            {ambulances.note}
                                        </td>
                                        <td className='px-6 py-3 text-left'>
                                            {ambulances.vehicle_type}
                                        </td>
                                    </tr>

                                ))}
                                {/* Table rows will be dynamically added here */}
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
                                    <div className="w-[80%] flex space-x-2 px-4 mt-[0.29rem]">
                                        <h1 className='text-[1.5rem] text-white'> Add Ambulance</h1>
                                    </div>
                                    <div className="flex mt-[0.40rem]">

                                        <button onClick={handleClose} className="ml-auto text-[2rem] text-white">
                                            <RxCross1 />
                                        </button>
                                    </div>
                                </div>
                                <div className="modal-body">
                                    <input name="admin_type" value={formData.admin_type} onChange={handleChange} type="hidden" className=" border-gray-300 w-full" />
                                    <input name="admin_id" value={formData.admin_id} onChange={handleChange} type="hidden" className=" border-gray-300 w-full" />
                                    <form action className="w-full grid grid-cols-3 gap-3 px-6 mt-10 relative">
                                        <div className="form-group w-full ">
                                            <label htmlFor>Vehicle Number *</label>
                                            <input onChange={handleChange} value={formData.vehicle_no} name='vehicle_no' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor> Vehicle Model *</label> <br />
                                            <input onChange={handleChange} value={formData.vehicle_model} name='vehicle_model' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Year Made</label> <br />
                                            <input onChange={handleChange} value={formData.year} name='year' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Driver Name </label> <br />
                                            <input onChange={handleChange} value={formData.d_name} name='d_name' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full border-gray-300">
                                            <label htmlFor>
                                                Driver License</label> <br />
                                            <input onChange={handleChange} value={formData.d_license} name='d_license' type="text" className="w-full border-gray-300" />
                                        </div>
                                        <div className="form-group w-full">
                                            <label htmlFor>Driver Contact</label> <br />
                                            <input onChange={handleChange} value={formData.d_contact} name='d_contact' type="text" className="w-full border-gray-300" />
                                        </div>
                                    </form></div>
                                <div className="grid grid-cols-2 px-6 gap-3">


                                    <div className="form-group  mt-4 w-full ">
                                        <label htmlFor="">Vehicle Type *</label> <br />
                                        <select onChange={handleChange} value={formData.vehicle_type} name='vehicle_type' id="" className="px-6 w-full border-gray-300">
                                            <option value="">select</option>
                                            <option value="Contractual">Contractual</option>
                                            <option value="owned">owned</option>
                                        </select>
                                    </div>
                                    <div className="form-group  mt-4 w-full ">
                                        <label htmlFor="">Note</label>
                                        <textarea onChange={handleChange} value={formData.note} name='note' id rows={3} className="px-6 w-full border-gray-300" defaultValue={""} />
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
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Ambulancelist;