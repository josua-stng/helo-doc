import { Link } from "react-router-dom";

const DoctorOptions = () => {
  return (
    <div className="grid justify-around grid-cols-3 gap-2 md:grid-cols-5 mt-4">
      <Link to='/doctor-list' className="m-2 p-1 drop-shadow-lg bg-slate-100 h-max-content md:h-11 hover:bg-slate-200 hover:drop-shadow-xl flex  justify-center items-center">
      See Doctors
      </Link>
      <button className="m-2 p-1 drop-shadow-lg bg-slate-100 h-max-content md:h-11 hover:bg-slate-200 hover:drop-shadow-xl">Market</button>
      <button className="m-2 p-1 drop-shadow-lg bg-slate-100 h-max-content md:h-11 hover:bg-slate-200 hover:drop-shadow-xl">Book Doctor</button>  
      <button className="m-2 p-1 drop-shadow-lg bg-slate-100 h-max-content md:h-11 hover:bg-slate-200 hover:drop-shadow-xl">See Hospital</button>
      <button className="m-2 p-1 drop-shadow-lg bg-slate-100 h-max-content md:h-11 hover:bg-slate-200 hover:drop-shadow-xl">Chat Doctor</button>
    </div>
  );
};

export default DoctorOptions;
