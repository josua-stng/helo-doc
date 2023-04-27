import listHospital from "../data/listHospital.json";

const SeeHospitalContent = () => {
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

              <div className="text-center mt-4 bg-red-200 rounded-lg p-2 md:w-32 hover:bg-red-400 cursor-pointer">
                <p>{hospital.promise_rs}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SeeHospitalContent;
