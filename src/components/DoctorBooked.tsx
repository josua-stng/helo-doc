import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
type DoctorBookType = {
  id: string;
  name: string;
  doctorImage: string;
  spesialist: string;
};
const DoctorBooked = () => {
  const [doctorCart, setDoctorCart] = useState<DoctorBookType[]>([]);
  const getDoctorBook = localStorage.getItem("doctor");

  let DoctorBook: DoctorBookType[] | null = null;
  if (getDoctorBook !== null) {
    DoctorBook = JSON.parse(getDoctorBook);
  }

  useEffect(() => {
    if (DoctorBook !== null) {
      setDoctorCart(DoctorBook);
    }
  }, []);

  const cancelBookDoctor = (idDoctor: string) => {
    const updateCardDoctor = doctorCart.filter(
      (doctor) => doctor.id !== idDoctor
    );
    localStorage.setItem("doctor", JSON.stringify(updateCardDoctor));
    setDoctorCart(updateCardDoctor);
  };
  console.log(doctorCart);

  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-5 text-4xl font-bold font-mono">
        Booking Doctor
      </h1>
      {doctorCart.length === 0 ? (
        <div className="text-center  mt-24">
          <p className="mb-5 font-bold text-lg">doctor's orders are empty</p>
          <ExclamationCircleIcon className="w-44 m-auto text-red-500" />
        </div>
      ) : (
        ""
      )}
      <div className="grid md:grid-cols-2 gap-5 p-5">
        {doctorCart === null
          ? ""
          : doctorCart.map(
              (doctor: {
                id: string;
                name: string;
                spesialist: string;
                doctorImage: string;
              }) => {
                return (
                  <div
                    key={doctor.id}
                    className="flex border-2 border-gray-300 p-5 justify-between items-center rounded-lg cursor-pointer hover:shadow-lg "
                  >
                    <div className="flex items-center">
                      <div>
                        <img src={doctor.doctorImage} alt="" />
                      </div>
                      <div className="px-5 font-sans">
                        <p className="font-bold">{doctor.name}</p>
                        <p className="pt-5">{doctor.spesialist}</p>
                      </div>
                    </div>
                    <button
                      className="mt-24 bg-amber-600 px-5 py-2  rounded-lg text-white hover:bg-amber-700"
                      onClick={() => cancelBookDoctor(doctor.id)}
                    >
                      Cancel
                    </button>
                  </div>
                );
              }
            )}
      </div>
    </div>
  );
};
export default DoctorBooked;
