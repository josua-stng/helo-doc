import { TextField } from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
const CalculatorBMIContent = () => {
  const [tinggi, setTinggi] = useState<number | null>(null);
  const [berat, setBerat] = useState<number | null>(null);
  const [resultBMI, setResultBMI] = useState<number | null>(null);

  const calculateBMI = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (tinggi === null && berat === null) {
      alert("Tinggi & Berat harus diisi");
    } else if (tinggi === null) {
      alert("Tinggi harus diisi");
    } else if (berat === null) {
      alert("berat harus diisi");
    } else if (tinggi && berat) {
      const result = berat / ((tinggi / 100) * (tinggi / 100));
      setResultBMI(result);
      if (result < 18.5) {
        Swal.fire(
          "Perbanyak Asupan Nutrisi",
          "Kamu masuk ke dalam kategori Kurus"
        );
      } else if (result > 18.5 && result < 24.9) {
        Swal.fire("Aman", "Kamu masuk ke dalam kategori Normal", "success");
      } else if (result > 25 && result < 29.9) {
        Swal.fire(
          "Oopss",
          "Kamu masuk ke dalam kategori Overweight",
          "warning"
        );
      } else if (result > 30 && result < 34.9) {
        Swal.fire(
          "Waduhh",
          "Kamu masuk ke dalam kategori Obesitas Kelas 1 nihh",
          "warning"
        );
      } else if (result > 35 && result < 39.9) {
        Swal.fire(
          "Waduhh",
          "Kamu masuk ke dalam kategori Obesitas Kelas 2 nihh",
          "warning"
        );
      } else {
        Swal.fire("Warning", "Segera berolahraga", "warning");
      }
    }
  };

  return (
    <div className="mb-10">
      <form
        onSubmit={calculateBMI}
        className="text-center mt-10 border-2 border-gray-300 rounded-lg p-5 w-10/12 sm:w-8/12 m-auto drop-shadow-lg"
      >
        <h1 className="mb-5 mt-5 font-bold text-2xl font-serif">
          Calculator BMI
        </h1>
        <div className="flex flex-col justify-center items-center gap-10">
          <TextField
            id="standard-basic"
            label="Tinggi (cm)"
            variant="standard"
            type="number"
            value={tinggi || ""}
            onChange={(event) => setTinggi(parseInt(event.target.value))}
            className="inputTinggi w-3/4 sm:w-4/12"
          />
          <TextField
            id="standard-basic"
            label="Berat (Kg)"
            variant="standard"
            value={berat || ""}
            onChange={(event) => setBerat(parseInt(event.target.value))}
            className="inputBerat w-3/4 sm:w-4/12 "
          />
          <p>
            {resultBMI === null ? (
              ""
            ) : (
              <p>
                BMI Kamu{" "}
                <span className="font-bold">{resultBMI?.toFixed(1)}</span>
              </p>
            )}
          </p>
          <button className="bg-blue-500 text-white p-2 h-21 w-56 rounded-lg mt-32 sm:mt-56">
            HITUNG BMI
          </button>
        </div>
      </form>
    </div>
  );
};

export default CalculatorBMIContent;
