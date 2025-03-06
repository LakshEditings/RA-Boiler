import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import StudentPage from './components/StudentPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ display: 'flex', backgroundColor: 'grey', minHeight: '100vh' }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Header />
          <Routes>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/student" element={<StudentPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
