
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AdminPanel from './screens/AdminPanel/AdminPanel';
import CreateNote from './screens/CreateNote/CreateNote';
import LandingPage from './screens/LandingPage/LandingPage';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import MyNotes from './screens/MyNotes/MyNotes';
import Success from './screens/Payments/complete';
import Payment from './screens/Payments/payment';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

const MainContent = () => {
  const location = useLocation();
  const showHeader = ['/mynotes', '/createnote','/profile','/admin'].includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/createnote" element={<CreateNote />} />
          <Route path="/mynotes" element={<MyNotes />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <MainContent />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
