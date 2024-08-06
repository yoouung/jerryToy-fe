import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './pages/login';
import Map from './pages/map';
import OutLetContainer from './pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />

        <Route element={<OutLetContainer />}>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/map" element={<Map />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
