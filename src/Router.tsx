import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/signUp';
import SignDone from './pages/signUpDone';
import LoginScreen from './pages/login';
import Map from './pages/map';
import OutLetContainer from './pages';
import PostCreatePage from './pages/post';

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
          <Route path="/post" element={<PostCreatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
