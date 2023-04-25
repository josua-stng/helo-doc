import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SeeDoctor from "./components/SeeDoctors";
import Market from "./components/Market";
import ChatDoctorPage from "./components/ChatDocter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor-list" element={<SeeDoctor/>}/>
        <Route path="/market" element={<Market/>}/>
        <Route path="/chat-doctor" element={<ChatDoctorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
