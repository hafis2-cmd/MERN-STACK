import './App.css';

import React from "react";
import Person from './person';

const App=()=>{
  return (
    <div>
      <h1>Person information</h1>
      <Person name="Rahul"/>
      <Person name="Raj"/>
    </div>
  );
};

export default App;