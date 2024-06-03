// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Toaster } from 'react-hot-toast';
import DashboardLayout from './layouts/DashboardLayout';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './components/Home/Home';
import LoginForm from './pages/App_PAges/LoginForm/LoginForm';
import Register from './pages/App_PAges/Register/Register';
import ContactUsForTest from './pages/App_PAges/ContactUs/ContactUsForTest';
import User from './pages/Dashboard_Pages/User/User'; // Create this component for /dash/user
import Dash_Home from './pages/Dashboard_Pages/Dash_Home/Dash_Home';
import Calendar from './pages/Dashboard_Pages/calendar/Calendar';
import ProfilePage from './pages/Dashboard_Pages/profile/ProfilePage ';
import UserDashboardLayout from './layouts/UserDashboardLayout';
import Formation from './pages/Dashboard_Pages/formation/Formation';
// Import other components for nested routes inside Dashboard
import Chat from './pages/Dashboard_Pages/chat/Chat'

import { useSelector } from 'react-redux';
import StreamPage from './pages/Dashboard_Pages/stream/SreamPage';
import ÂboutUsForTest from './pages/App_PAges/AboutUs/AboutUsForTest';
import Workplace from './pages/Dashboard_Pages/workplace/workplace';




const App = () => {
  const { t } = useTranslation();



  //@ts-ignore
  const { user } = useSelector(state => state.auth);
  



  const getRouteElement = () => {
    if (user === null) {
      return <DefaultLayout><Home /></DefaultLayout>;
    } else if (user.isAdmin) { // Vérifiez d'abord si user est défini avant d'accéder à user.idAdmin
      return <DashboardLayout  />;
    } else {
      return <UserDashboardLayout />;
    };
    
  };



  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={getRouteElement()} />
        <Route path="/login" element={ user && user._id ? <Navigate to="/" /> :  <DefaultLayout>< LoginForm/></DefaultLayout>} />
        <Route path="/home" element={getRouteElement()}/>
        <Route path="/contact" element={<DefaultLayout><ContactUsForTest /></DefaultLayout>} />
        <Route path="/register" element={<DefaultLayout><Register /></DefaultLayout>} />
        <Route path="/about" element={<DefaultLayout><ÂboutUsForTest /></DefaultLayout>} />


        <Route path="/" element={getRouteElement()} >
          <Route path="/chat" element={<Chat />} />
          <Route index element={<Dash_Home />} /> 
          <Route path="/user" element={<User />} /> 
          <Route path="/calendar" element={<Calendar />} /> 
          <Route path={`/profile/:userId`} element={<ProfilePage />} />
          <Route path="/stream" element={<StreamPage />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/workplace" element={<Workplace />} />
        </Route>

        <Route path="/" element={getRouteElement()} >
          <Route index element={<Dash_Home />} /> 
        </Route>        
      </Routes>
    </Router>
  );
};

export default App;

