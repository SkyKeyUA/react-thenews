/** @format */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
//import FullTheNews from './pages/FullTheNews';
import Home from './pages/Home';
import './scss/app.scss';

const FullTheNews = React.lazy(
  () => import(/* webpackChunkName: "FullTheNews" */ './pages/FullTheNews'),
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/react-thenews" element={<Home />} />
      </Route>
      <Route
        path="/react-thenews/thenews/:id"
        element={
          <React.Suspense fallback={<div className="wrapper">Loading...</div>}>
            <FullTheNews />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default App;
