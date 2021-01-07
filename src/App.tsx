import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'pages/layout';
import Demo from 'pages/demo';
import Detail from 'pages/detail';
import Login from 'pages/login';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Demo />} />
        <Route path="/detail" element={<Detail />} />
      </Route>
    </Routes>
  );
};

export default App;
