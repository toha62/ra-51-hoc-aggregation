import React, { useState, useEffect } from 'react';
import YearTable from './components/YearTable';
import SortTable from './components/SortTable';
import MonthTable from './components/MonthTable';
import WithSortedDate from './HOC/WithSortedDate';

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
    reloadData();
  }, []);

  const SortedMonthTable = WithSortedDate(MonthTable, 'monthNum');
  const SortedYearTable = WithSortedDate(YearTable, 'year');
  const SortedTable = WithSortedDate(SortTable, 'date');

  return (
    <div id="app">
      <SortedMonthTable list={list} />
      <SortedYearTable list={list} />
      <SortedTable list={list} />
    </div>
  );
}