import React, { useState, useEffect } from 'react';
import YearTable from './components/YearTable';
import SortTable from './components/SortTable';
import MonthTable from './components/MonthTable';

// TODO:
// 1. Загрузите данные с помощью fetch: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json
// 2. Не забудьте вынести URL в переменные окружения (не хардкодьте их здесь)
// 3. Положите их в state

export default function App() {
  const [list, setList] = useState([]);

  const reloadData = async () => {
    const response = await fetch(import.meta.env.VITE_DATA_URL);
    
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setList(data);
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