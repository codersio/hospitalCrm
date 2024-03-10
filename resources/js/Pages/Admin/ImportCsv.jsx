import Header from '@/components/Admin/partials/Header'
import Sidebar from '@/components/Admin/partials/sidebar'
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import PatientsModal from '@/components/Admin/patientsmodal';
import Swal from 'sweetalert2';

const CsvImport = ({ admin }) => {

    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [admin_type, setAdmin_type] = useState(admin.type);
    const [category_id, setCategoryId] = useState('');
    const [admin_id, setAdminId] = useState(admin.id);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleImport = () => {
        const formData = new FormData();
        formData.append('csv_file', file);
        formData.append('admin_type', admin_type);
        formData.append('admin_id', admin_id);
        formData.append('category_id', category_id);

        axios.post('/api/admin/medicine-store-csv', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: progressEvent => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setProgress(percentCompleted);
            }
        })
            .then(response => {
                console.log(response.data.message);
                setSuccessMessage('CSV data imported successfully');
                setErrorMessage('');
                setProgress(0);

            })
            .catch(error => {
                console.error('Error importing CSV:', error);
                // Handle error
            });
    };

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
                                <h1>CsvImport Bill</h1>
                            </div>
                            <button type='button' className="bg-gray-700 p-2 text-white rounded-md flex space-x-2">
                                <div className='grid place-items-center mt-1'>
                                    <FaPlus />
                                </div>
                                <h1>Import Sample Data download</h1>
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Medicine name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Company
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Group
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Unit
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Min Level
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ReOrder livel
                                    </th>

                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Tax
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Vat
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Sale Price
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        note
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        unit/Packages
                                    </th>
                                    {/* Add more table headers here as needed */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {/* Table rows will be dynamically added here */}
                            </tbody>
                        </table>


                        <div className="grid grid-cols-2 px-6 mt-4 gap-4" >
                            <div className="form-group">
                                <label htmlFor="">Medicine Category</label>
                                <br />
                                <select value={category_id} onChange={(e) => setCategoryId(e.target.value)} name='category_id' id="" className='border-gray-300 w-full'>
                                    <option value="">Select Category</option>
                                    <option value="1">Syrup</option>
                                </select>
                            </div>
                            {/* <input type="text" value={admin_type} onChange={(e) => setAdmin_type(e.target.value)} name='admin_type' /> */}
                            <div className="form-group w-full">
                                <label htmlFor>Select CSV File *</label> <br />
                                <div class="flex items-center justify-center w-full">
                                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[2.5rem] border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div class="flex flex-col items-center justify-center mt-4">
                                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>

                                        </div>
                                        <input onChange={handleFileChange} id="dropzone-file" name='csv_file' type="file" class="hidden" />
                                    </label>
                                    {/* <input type="file" onChange={handleFileChange} /> */}
                                </div>

                                <button onClick={handleImport} className="bg-gray-700 p-2 text-white rounded-md flex space-x-2 mt-3">Import</button>
                                {progress > 0 && <div>Progress: {progress}%</div>}
                                {successMessage && <div className="success-message text-green-700">{successMessage}</div>}
                                {errorMessage && <div className="error-message">{errorMessage}</div>}
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div >

    );
}

export default CsvImport;