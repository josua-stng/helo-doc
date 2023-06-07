import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SeeDoctor from "./components/SeeDoctors";
import Market from "./components/Market";
import ChatDoctorPage from "./components/ChatDocter";
import CalculatorBMI from "./components/CalculatorBMI";
import SeeHospital from "./components/SeeHospital";
import Login from "./authentication/Login";
import SignUp from "./authentication/SignUp";
import ProtectRoute from "./authorization/ProtectRoute";
import NotFoundComponent from "./error/NotFoundPage";
import DoctorBooked from "./components/DoctorBooked";
import HospitalBooked from "./components/HospitalBooked";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />

        <Route
          path="/doctor-list"
          element={
            <ProtectRoute>
              <SeeDoctor />
            </ProtectRoute>
          }
        />
        <Route
          path="/chat-doctor"
          element={
            <ProtectRoute>
              <ChatDoctorPage />
            </ProtectRoute>
          }
        />
        <Route
          path="/booked-doctor"
          element={
            <ProtectRoute>
              <DoctorBooked />
            </ProtectRoute>
          }
        />
        <Route
        path="/booked-hospital"
        element={
          <ProtectRoute>
            <HospitalBooked/>
          </ProtectRoute>
        }
        />
        <Route 
        path="/see-hospital" 
        element={
          <ProtectRoute>
            <SeeHospital/>
          </ProtectRoute>
        } 
        />
        <Route path="/calculator-bmi" element={<CalculatorBMI />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </div>
  );
}

export default App;
