import React, { useState } from "react";
import ChatDoctor from "../content/ChatDoctorContent";
import Navbar from "./Navbar";
import doctorList from "../data/listDoctor.json";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
import Footer from "./Footer";
const ChatDoctorPage = () => {
  const [Inputvalue, setInputValue] = useState("");

  const getValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const isSubmited = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <ChatDoctor
        Value={Inputvalue}
        onChange={getValueInput}
        onSubmit={isSubmited}
      />
      <div className="grid md:grid-cols-2 mt-5 gap-6 p-5">
        {doctorList
          .filter((doctor) => {
            if (Inputvalue === "") {
              return doctor;
            } else if (
              doctor.name.toLowerCase().includes(Inputvalue.toLowerCase())
            ) {
              return doctor;
            }
            return false;
          })
          .map((doctor) => {
            return (
              <div
                key={doctor.id}
                className="drop-shadow-xl border-2 border-gray-100 text-center w-full bg-slate-50 rounded-lg flex justify-around p-5 items-center cursor-pointer hover:bg-gray-200"
              >
                <div>
                  <img
                    src={doctor.doctorImage}
                    alt="doctor_image"
                    className="w-24"
                  />
                </div>
                <div>
                  <p className=" font-bold md:text-xl">{doctor.name}</p>
                  <p className="text-sm font-light">{doctor.spesialist}</p>
                  <p className="mt-5 text-sm md:text-base">{doctor.reviews}</p>
                </div>
                <div>
                  <ChatBubbleBottomCenterIcon className="w-6 text-gray-500 hover:text-gray-700" />
                </div>
              </div>
            );
          })}
      </div>
      <Footer/>
    </div>
  );
};
export default ChatDoctorPage;
