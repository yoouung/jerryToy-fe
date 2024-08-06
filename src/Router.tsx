import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Map from './pages/index';
import SignUp from './pages/signUp';
import SignDone from './pages/signUpDone';
import OutLetContainer from './pages/index';
import LoginScreen from './pages/login';
import LoginScreen from './pages/login';
import Map from './pages/map';
import OutLetContainer from './pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/" element={<OutLetContainer />}>
          <Route path="login" element={<LoginScreen />} />
          <Route path="map" element={<Map />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signDone" element={<SignDone />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
