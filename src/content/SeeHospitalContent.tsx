import { useEffect, useState } from "react";
import listHospital from "../data/listHospital.json";
import Swal from "sweetalert2";

type Hospital = {
  id: number,
  hospitalName: string,
  hospitalImage: string,
  hospitalType: string,
  hospitalLocation: string,
  hospitalPromise: string
}

const SeeHospitalContent = () => {
  const [hospitalCart, setHospitalCart] = useState<Hospital[]>([]);
  const bookHospital = (id: number) => {
    listHospital.forEach((hospital) => {
      if (hospital.id === id) {
        const setHospital = {
          id: hospital.id,
          hospitalName: hospital.nama_rs,
          hospitalImage: hospital.image_rs,
          hospitalType: hospital.type_rs,
          hospitalLocation: hospital.location_rs,
          hospitalPromise: hospital.promise_rs
        }
        const getHospital = [...hospitalCart, setHospital];
        setHospitalCart(getHospital);
        localStorage.setItem("hospital", JSON.stringify(getHospital))
        Swal.fire("Success!", `You booked Hospital ${hospital.nama_rs}`, "success");
      }
    })
  }
  const handleDataHospital = () => {
    const storedHospital = localStorage.getItem("hospital");
    if (storedHospital) {
      setHospitalCart(JSON.parse(storedHospital))
    }
  }
  useEffect(() => {
    handleDataHospital();
  }, [])
  return (
    <div>
      <div className="mt-5 mx-10">
        <h1 className="text-2xl font-bold font-serif">
          Pilih Dokter di Faskes
        </h1>
        <p className="mt-2 font-extralight ">
          Berbagai pilihan spesialiasi dokter
        </p>
      </div>
      <div className="grid md:grid-cols-2 p-5 gap-2">
        {listHospital.map((hospital) => {
          return (
            <div
              key={hospital.id}
              className="sm:flex border-2 border-gray-200 p-5 items-end justify-between hover:shadow-lg cursor-pointer rounded-lg"
            >
              <div className="flex  items-center">
                <div>
                  <img
                    src={hospital.image_rs}
                    className="w-32 rounded-lg"
                    alt=""
                  />
                </div>

                <div className="ml-5 ">
                  <h2 className="font-bold tex w-full">{hospital.nama_rs}</h2>
                  <p>{hospital.type_rs}</p>
                  <p className="mt-5 text-sm  text-gray-500">
                    {hospital.location_rs}
                  </p>
                </div>
              </div>

              <button className="text-center mt-4 bg-red-200 rounded-lg p-2 md:w-32 hover:bg-red-400 cursor-pointer" onClick={() => bookHospital(hospital.id)}>{hospital.promise_rs}</button>

            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SeeHospitalContent;
