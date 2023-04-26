import React, { useState } from "react";
import ChatDoctor from "../content/ChatDoctorContent";
import Navbar from "./Navbar";
import doctorList from "../data/listDoctor.json";
import Footer from "./Footer";
import DoctorChatContent from "../content/DoctorContentChatDoctor";
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
              <DoctorChatContent
              doctorId={doctor.id}
              doctorName={doctor.name}
              doctorImage={doctor.doctorImage}
              doctorSpesialist={doctor.spesialist}
              doctorReviews={doctor.reviews}
              />
            );
          })}
      </div>
      <Footer/>
    </div>
  );
};
export default ChatDoctorPage;
