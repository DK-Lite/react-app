import React from 'react';
import './App.css';

import { Button } from 'components/atoms/'

function App() {
  return (
    <div className="App">
      {/* <AdvanceTable 
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
        ]}
        options={{
          search: false,
          pagination: false,
        }}
      /> */}

      <Button width='100px' height='30px'>Button</Button>
    </div>
  );
}

export default App;
