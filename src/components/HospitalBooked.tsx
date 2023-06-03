import { useEffect, useState } from 'react';
import Navbar from './Navbar';
type Hospital = {
  id: number,
  hospitalName: string,
  hospitalImage: string,
  hospitalType: string,
  hospitalLocation: string,
  hospitalPromise: string
}

const HospitalBooked = () => {
  const [hospitalCart, setHospitalCart] = useState<Hospital[]>([]);
  const getHospitalBooked = localStorage.getItem("hospital");

  let getHospitalBook: Hospital[] | null = null;
  if (getHospitalBooked !== null) {
    getHospitalBook = JSON.parse(getHospitalBooked)
  }

  const cancelHospital = (id: number) => {
    const filterHospital = hospitalCart.filter((hospital) => hospital.id !== id)
    localStorage.setItem('hospital',JSON.stringify(filterHospital))
    setHospitalCart(filterHospital);
  } 
  
  useEffect(() => {
    if (getHospitalBook !== null) {
      setHospitalCart(getHospitalBook);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="grid md:grid-cols-2 p-5 gap-2">
        {hospitalCart.map((hospital) => {
          return (
            <div
              key={hospital.id}
              className="sm:flex border-2 border-gray-200 p-5 items-end justify-between hover:shadow-lg cursor-pointer rounded-lg"
            >
              <div className="flex  items-center">
                <div>
                  <img
                    src={hospital.hospitalImage}
                    className="w-32 rounded-lg"
                    alt=""
                  />
                </div>

                <div className="ml-5 ">
                  <h2 className="font-bold tex w-full">{hospital.hospitalName}</h2>
                  <p>{hospital.hospitalType}</p>
                  <p className="mt-5 text-sm  text-gray-500">
                    {hospital.hospitalLocation}
                  </p>
                </div>
              </div>

              <button className="text-center mt-4 w-full sm:w-max sm:px-5  bg-red-200 rounded-lg p-2 md:w-32 hover:bg-red-400 cursor-pointer" onClick={() => cancelHospital(hospital.id)}>Cancel</button>
              {/* <div className="text-center mt-4 bg-red-200 rounded-lg p-2 md:w-32 hover:bg-red-400 cursor-pointer">
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HospitalBooked;
