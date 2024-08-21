import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import CallBackend from './testsys/callBackend';
import Login from './auth/login';
import UserProfile from './users/userProfile';

function App() {
  const [token, setToken] = useState<string | null>(null);
  const handleLoginSuccess = (token: string) => {
    setToken(token);
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <>
    <div className="App">Hello World! This is frontend.</div>
    <CallBackend />

    <div>
      {!token ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <UserProfile token={token} onLogout={handleLogout} />
      )}
    </div>
    </>
  );
}

export default App;
