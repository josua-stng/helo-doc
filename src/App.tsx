import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SeeDoctor from "./components/SeeDoctors";
import Market from "./components/Market";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor-list" element={<SeeDoctor/>}/>
        <Route path="/market" element={<Market/>}/>
      </Routes>
    </div>
  );
}

export default App;
