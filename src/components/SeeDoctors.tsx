import Navbar from "./Navbar";
import listDoctor from "../data/listDoctor.json";
import dasboardImage from "../Image/dashboard_page.png";
import Footer from "./Footer";
import layananDokter from "../Image/layanan_dokter.webp";
import covid19 from "../Image/covid-19-test.webp";
import diabetes from "../Image/diabetes-care.webp";
import gulaDarah from "../Image/mental-health-v2.webp";
import Swal from "sweetalert2";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const SeeDoctor = () => {
  const getId = (id: number) => {
    listDoctor.map((doctor) => {
      if (doctor.id === id) {
        Swal.fire({
            title: 'Pesan Dokter Ini?',
            text: "Apa kamu yakin?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya,Pesan!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Selamat!',
                `Kamu telah memesan dokter ${doctor.name}`,
                'success'
              )
            }
          })
      }
    });
  };
  return (
    <div>
      <Navbar />
      <div className="md:flex justify-around items-center md:mt-5 p-5">
        <img
          src={dasboardImage}
          alt=""
          className="drop-shadow-xl  mx-auto md:mx-0"
        />
        <div>
          <h2 className="text-center text-2xl font-bold font-serif mb-2 mt-5 md:mt-0 ">
            Layanan Khusus
          </h2>
          <div className="grid grid-cols-2 gap-5 ">
            <div className="p-5 bg-gray-200 flex flex-col justify-center items-center rounded-lg hover:bg-gray-100 cursor-pointer">
              <img src={layananDokter} alt="" className="w-14" />
              <p className="text-center mt-3">Layanan Dokter</p>
            </div>
            <div className="p-5 bg-gray-200 flex flex-col justify-center items-center rounded-lg hover:bg-gray-100 cursor-pointer">
              <img src={covid19} alt="" className="w-14" />
              <p className="text-center mt-3">Tes Covid - 19</p>
            </div>
            <div className="p-5 bg-gray-200 flex flex-col justify-center items-center rounded-lg hover:bg-gray-100 cursor-pointer">
              <img src={diabetes} alt="" className="w-14" />
              <p className="text-center mt-3">Perawatan Diabetes</p>
            </div>
            <div className="p-5 bg-gray-200 flex flex-col justify-center items-center rounded-lg hover:bg-gray-100 cursor-pointer">
              <img src={gulaDarah} alt="" className="w-14" />
              <p className="text-center mt-3">Cek Gula Darah</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center p-2 gap-3 mt-5 ">
        {listDoctor.map((doctors) => {
          return (
            <Tippy content="Pesan Dokter" className="text-base font-serif bg-red-500 rounded-lg"  key={doctors.id}>
              <div
                onClick={() => getId(doctors.id)}
                className="bg-gray-200 w-full m-auto flex justify-center items-center text-center rounded-lg cursor-pointer hover:bg-gray-100 pt-3 pb-3"
              >
                <div>
                  <img
                    src={doctors.doctorImage}
                    alt=""
                    className="mx-auto mt-3"
                  />
                  <p className="mt-4 font-bold font-serif">{doctors.name}</p>
                  <p className="text-sm font-light mt-1">
                    {doctors.spesialist}
                  </p>
                  <p className="mb-3 text-sm font-thin">{doctors.reviews}</p>
                </div>
              </div>
            </Tippy>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default SeeDoctor;
