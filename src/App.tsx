import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SeeDoctor from "./components/SeeDoctors";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor-list" element={<SeeDoctor/>}/>
      </Routes>
    </div>
  );
}

export default App;
