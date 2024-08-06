import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/signUp';
import LoginScreen from './pages/login';
import Map from './pages/map';
import OutLetContainer from './pages';
import SignUpDone from './pages/signUpDone';
import UserPage from './pages/user';
import ChatBody from './components/chat/chatBody';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/" element={<OutLetContainer />}>
          <Route path="login" element={<LoginScreen />} />
          <Route path="map" element={<Map />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signUpDone" element={<SignUpDone />} />
          <Route path="/userInfo" element={<UserPage />} />
          <Route path="/chatBody" element={<ChatBody />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
