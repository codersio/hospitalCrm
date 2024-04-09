import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const YourComponent = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  const [updateModal, setUpdateModal] = useState(null);
  const [formData, setFormData] = useState(null); // State to hold form data
  const [datas, setDatas] = useState([]); // Define datas state

  // Fetch data function
  const fetchData = async () => {
    try {
      const response = await axios.post('/api/admin/appoinmentDoctorShift-fetch'); // Adjust the endpoint URL
      setDatas(response.data); // Update datas state with fetched data
    } catch (error) {
      console.error(error); // Log any errors
    }
  };

  // Load data on component mount
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to fetch data only once

  // Function to open the modal and populate form data
  const openUpdateModal = (data) => {
    setFormData(data); // Set form data
    setUpdateModal(data.id);
    setValue('shift_id', data.shift_id); // Populate form fields
    setValue('doctor_id', data.doctor_id);
  };

  // Function to close the modal
  const closeUpdateModal = () => {
    setUpdateModal(null);
    reset(); // Reset form fields
  };

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      if (formData && formData.id) {
        // If formData.id exists, it means we're updating existing data
        const updatedData = {
          shift_id: data.shift_id,
          doctor_id: data.doctor_id
        };

        const response = await axios.post(`/api/admin/appoinmentDoctorShift-update/${formData.id}`, updatedData);
        console.log(response.data); // Log the response

      } else {
        // Otherwise, we're creating new data
        await axios.post('/api/admin/appoinmentDoctorShift-store', data);

      }

      fetchData(); // Fetch updated data or refresh data list
      // reset(); // Clear form inputs after successful submission
    } catch (error) {

      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('shift_id')} />
        <input type="text" {...register('doctor_id')} />
        <input placeholder='te' type="text" {...register('admin_type')} />
        <input type="text" {...register('admin_id')} />
        <button type="submit">dd</button>
      </form>
      <table>
        <tbody>
          {datas.map((data) => (
            <tr key={data.id}>
              {/* Render table data */}
              <td>{data.shift_id}</td>
              <td>{data.doctor_id}</td>
              {/* Render edit button */}
              <td>
                <button onClick={() => openUpdateModal(data)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for updating data */}
      {updateModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeUpdateModal}>&times;</span>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" {...register('shift_id')} />
              <input type="text" {...register('doctor_id')} />
              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
