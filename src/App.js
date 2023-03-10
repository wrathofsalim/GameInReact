import './App.css';
import { useState } from 'react';
import Enemies from './Components/Enemies';

function App() {
  return (
    <div className='container p-2 m-2 border border-3 border-secondary rounded text-light'>
        <h2>DPS MASTER</h2>
        <div className='col'>
          <Enemies id="1"/>
        </div>
    </div>
    );
}

export default App;
