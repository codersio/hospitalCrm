import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import PatientsModal from '@/components/Admin/patientsmodal';
import Swal from 'sweetalert2';
import { Link } from '@inertiajs/react';
const Patients = ({ admin, medicineCategories, medicine }) => {

    const [modal, setModal] = useState(true)
    const [Patientsmodal, setPatientsmodal] = useState(true)
    const [Patientsdata, setPatientsdata] = useState([]);
    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setformData({
            ...formData,
            [name]: files ? files[0] : value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    }
    // Clear error message when user starts typing


    const fetchData = async () => {
        try {
            const response = await axios.get('/api/admin/patient-fetch');
            // console.log(data)
            setPatientsdata(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    useEffect(() => {
        fetchData();

    }, []);


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
                                <h1>Patient List</h1>
                            </div>
                            <div className="flex space-x-3">
                                <button type='button' onClick={handlePatients} className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                    <div className='grid place-items-center mt-1'>
                                        <FaPlus />
                                    </div>
                                    <h1>  Add New Patient </h1>
                                </button>
                                <Link href='/admin/pharmacy/import-csv' type='button' className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                    <div className='grid place-items-center mt-1'>
                                        <FaPlus />
                                    </div>
                                    <h1>Import Patient </h1>
                                </Link>
                                <Link href='/admin/pharmacy/medicine-list' type='button' className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                    <div className='grid place-items-center mt-1'>
                                        <FaPlus />
                                    </div>
                                    <h1>Disable Patient </h1>
                                </Link>
                            </div>
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
                                        Age
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Gender
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Phone
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Guardian Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Address
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Dead
                                    </th>

                                    {/* Add more table headers here as needed */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    Patientsdata.map(md => (
                                        <tr>
                                            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{md.name}</td>
                                            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{md.guardian_name}</td>
                                            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{md.gender}</td>
                                            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{md.date_of_birth}</td>
                                            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{md.age}</td>
                                            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{md.blood_group}</td>
                                            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{md.marital_status}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <PatientsModal Patientsmodal={Patientsmodal} handlePatients={handlePatients} fetchData={fetchData} />

                </div>
            </div>
        </div >

    );
}

export default Patients;