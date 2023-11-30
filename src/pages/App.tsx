import React from 'react';

import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import Timer from '../components/Timer';

function App() {
  return (
    <div className={style.AppStyle}>      
      <Form />
      <Timer />
      <List />
    </div>
  );
}

export default App;
