/** @format */
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import FullTheNews from './pages/FullTheNews';
import Home from './pages/Home';
import './scss/app.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/thenews/:id" element={<FullTheNews />} />
    </Routes>
  );
}

export default App;
