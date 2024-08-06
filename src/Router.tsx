import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Map from './pages/index';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/map" />} />

        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
