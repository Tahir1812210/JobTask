import React, { useState, useEffect } from 'react';
import './style.css';

const Task = () => {
  const [data, setData] = useState([
    {
      id: 2048,
      title: 'フューチャーワークス',
      account_title_id: 1,
      detailed_id: 1,
      currency_id: 2,
    },
    {
      id: 2056,
      title: 'ああああああ',
      account_title_id: 1,
      detailed_id: 2,
      currency_id: 2,
    },
  ]);

  const [searchData, setSearchData] = useState('');
  const [newDataEntry, setNewDataEntry] = useState({
    id: '',
    title: '',
    account_title_id: 0,
    detailed_id: 0,
    currency_id: 0,
  });

  const handleSearch = () => {
    const filteredData = data.filter((item) =>
      item.id.toString().includes(searchData)
    );
    setData(filteredData);
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setNewDataEntry({ ...newDataEntry, [name]: value });
  };

  const handleAddData = () => {
    const newList = [...data, newDataEntry];
    setData(newList);
    setNewDataEntry({
      id: '',
      title: '',
      account_title_id: 0,
      detailed_id: 0,
      currency_id: 0,
    });
  };

  return (
    <div className="App">
      <h2>Job Task</h2>

      <div className="search-bar">
        <label htmlFor="searchInput">Search by ID:</label>
        <input
          type="text"
          id="searchInput"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>ID: {item.id}</p>
          <p>Account Title ID: {item.account_title_id}</p>
          <p>Detailed ID: {item.detailed_id}</p>
          <p>Currency ID: {item.currency_id}</p>
        </div>
      ))}

      <div className="add-new-data">
        <h2>Add New Data Entry</h2>
        <label htmlFor="newIdInput">ID:</label>
        <input
          type="text"
          id="newIdInput"
          name="id"
          value={newDataEntry.id}
          onChange={handleInput}
        />

        <label htmlFor="newTitleInput">Title:</label>
        <input
          type="text"
          id="newTitleInput"
          name="title"
          value={newDataEntry.title}
          onChange={handleInput}
        />

        <label htmlFor="newAccountTitleIdInput">Account Title ID:</label>
        <input
          type="number"
          id="newAccountTitleIdInput"
          name="account_title_id"
          value={newDataEntry.account_title_id}
          onChange={handleInput}
        />

        <label htmlFor="newDetailedIdInput">Detailed ID:</label>
        <input
          type="number"
          id="newDetailedIdInput"
          name="detailed_id"
          value={newDataEntry.detailed_id}
          onChange={handleInput}
        />

        <label htmlFor="newCurrencyIdInput">Currency ID:</label>
        <input
          type="number"
          id="newCurrencyIdInput"
          name="currency_id"
          value={newDataEntry.currency_id}
          onChange={handleInput}
        />

        <button onClick={handleAddData}>Add Data</button>
      </div>
    </div>
  );
};

export default Task;
