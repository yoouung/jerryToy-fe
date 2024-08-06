import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Map from './pages/index';
import SignIn from './pages/signIn';
import SignDone from './pages/signDone';
import OutLetContainer from './pages/index';
import LoginScreen from './pages/login';
import Map from './pages/map';
import OutLetContainer from './pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />

        <Route path="/" element={<OutLetContainer />}>
          <Route path="map" element={<Map />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-done" element={<SignDone />} />
          <Route path="/login" element={<LoginScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
