import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test() {
  const [allItems, setAllItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.post('/api/admin/humanresource-fetch');
      setAllItems(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    try {
      let filteredResults = allItems;
      if (selectedOption) {
        filteredResults = allItems.filter(item => item.name === selectedOption);
      }
      setSearchResults(filteredResults);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {allItems.map(item => (
          <option key={item.id} value={item.name}>{item.name}</option>
        ))}
      </select>
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.length > 0 ? (
          searchResults.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))
        ) : (
          allItems.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Test;