import React from 'react';
import './App.css';

import { Button, Table, Card } from 'components/atoms'

function App() {
  return (
    <div className="App">
      <Card width='480px' height='500px' padding="10px">
        <Button width='100px' height='30px'>Button</Button>
        <Table 
          width= '100%'
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
        />
      </Card>

    </div>
  );
}

export default App;
