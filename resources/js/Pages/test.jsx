import React, { useState, useEffect } from 'react';

const Test = ({ appointmentId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');
  const [appoinment, setSetappoinment] = useState([]);
  const [formData, setFormData] = useState({
    // Initialize form data with empty values or default values
    status: '1',
    // description: '',
    // Add more fields as needed
  });
  const [isActive, setIsActive] = useState(1);
  const AppoinmentfetchData = async () => {
    try {
      const response = await axios.post('/api/admin/appoinment-fetch');
      console.log(response.data)
      setSetappoinment(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {

    AppoinmentfetchData();

    // Fet(id);
  }, []);
  const handleSubmit = (e, appointmentId) => {
    const newStatus = !isActive;
    e.preventDefault();
    axios.put(`appoinment-status-update/${appointmentId}`, formData)
      .then(response => {
        console.log(response)
        // setIsActive(isActive);
        // Handle success, such as showing a success message or updating state
      })
      .catch(error => {
        console.error('Error updating appointment:', error);
        // Handle error, such as displaying an error message
      });
  };



  return (
    <div>
      <table>

        <thead>
          <tr>
            <th>Patient id</th>
            <th>Patient id</th>

          </tr>
        </thead>
        <tbody>

          {appoinment.map(a => (
            <tr>
              <td>{a.id}</td>
              <td>
                <form >
                  <input type="text" name="status" value={formData.status} onChange={(e) => setIsActive(e.target.value)} placeholder="Title" />
                  {/* <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" /> */}
                  {/* Add more input fields for other attributes */}
                  {/* <button type="submit">Update Appointment</button> */}
                </form>
                <button onClick={(e) => handleSubmit(e, a.id)} value={isActive}>
                  sss
                </button>
              </td>

            </tr>
          ))}


        </tbody>

      </table>

    </div>
  );
};

export default Test;
