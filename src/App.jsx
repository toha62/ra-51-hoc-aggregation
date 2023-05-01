import React, { useState, useEffect } from 'react';
import YearTable from './components/YearTable';
import SortTable from './components/SortTable';
import MonthTable from './components/MonthTable';

export default function App() {
  const [list, setList] = useState([]);

  const reloadData = async () => {
    const response = await fetch(import.meta.env.VITE_DATA_URL);
    
    if (response.ok) {
      const { list } = await response.json();
      
      setList(list);
    } else {
      throw new Error('Server load data error');
    }   
  };

  useEffect(() => {
    console.log('first load');
    reloadData();
  }, []);

  return (
    <div id="app">
      <MonthTable list={list} />
      <YearTable list={list} />
      <SortTable list={list} />
    </div>
  );
}