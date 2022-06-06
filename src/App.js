import React from 'react';
import Createlink from './components/Createlink';
import Linklist from './components/Linklist';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';

  const App = () => {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Routes>
            <Route path="/" element={<Linklist/>} />
            <Route
              path="/create"
              element={<Createlink/>}
            />
            <Route path="/login" element={<Login/>} />
   
          </Routes>
        </div>
      </div>
    );
  };

export default App;