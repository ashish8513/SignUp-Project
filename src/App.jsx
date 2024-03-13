import './App.css';
import { Routes, Route } from 'react-router-dom';

//components
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import ResetPassword from './Components/ResetPassword';
import ForgotPassword from './Components/ForgotPassword';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App  h-[100vh]  flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/reset-password/:resetPasswordToken"
          element={<ResetPassword />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
