import React from 'react';
import Createlink from './components/Createlink';
import Linklist from './components/Linklist';
import Header from './components/Header';
import Login from './Login';
import Search from './Search';
import {Navigate, Route, Routes} from 'react-router-dom';


const App = () => (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to="/new/1" />}
          />
          <Route
            path="/create"
            element={<Createlink/>}
          />
          <Route path="/login" element={<Login/>}/>
          <Route path="/search"element={<Search/>}/>
          <Route path="/top" element={<Linklist/>} />
          <Route
            path="/new/:page"
            element={<Linklist/>}
          />
        </Routes>
      </div>
    </div>
  );

export default App;