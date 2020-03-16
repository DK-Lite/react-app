import React from 'react';
import './App.css';

import { Table } from 'components/atoms'

function App() {
  return (
    <div className="App">
      <Table 
        width= '1000px'
        colums={[
            {name: 'Day', tag : 'a'},
            {name: 'Area', tag : 'b'},
            {name: 'Price', tag : 'c'},
            {name: 'Etc', tag : 'd'},
        ]}
        datas={[
            {a: '1919.11.01', b: '84m', c: "10000", d: '-'},
            {a: '1919.11.01', b: '84m', c: "10000", d: '-'},
            {a: '1919.11.01', b: '84m', c: "10000", d: '-'},
            {a: '1919.11.01', b: '84m', c: "10000", d: '-'},
            {a: '1919.11.01', b: '84m', c: "10000", d: '-'},
            {a: '1919.11.01', b: '84m', c: "10000", d: '-'},
        ]}/>
    </div>
  );
}

export default App;
