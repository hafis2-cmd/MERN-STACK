import React, { useState } from "react";
import './App.css';
const ConditionalRendering=()=>{
  const [isLoggedIn,setLoggedIn]=useState(false);
  const [userRole,setUserRole]=useState('');

  const handleLogin=(role)=>{
    setLoggedIn(true);
    setUserRole(role);
  };

  const handleLogout=()=>{ 
    setLoggedIn(false);
    setUserRole('');
  };

  return (
    <div>
      <h1>Conditional Rendering</h1>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {userRole ==='Admin' ? 'Admin' : 'user'}!</p>
          <p>Your role : {userRole}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please Log in</p>
          <button onClick={()=>handleLogin('Admin')}>Login as Admin</button>
          <button onClick={()=>handleLogin('User')}>Login as User</button>
        </div>
      )}
    </div>
  );
};

export default ConditionalRendering;