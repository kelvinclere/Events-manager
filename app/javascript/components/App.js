import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Editor from './Editor';
import './App.css';

const App = () => (
  <>
    <Routes>
      <Route path="events/*" element={<Editor />} />
    </Routes>
    <Events/>
    <ToastContainer />
  </>
);

export default App;