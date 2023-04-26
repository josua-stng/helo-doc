import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
type doctorProps = {
  doctorId: number;
  doctorName: string;
  doctorImage: string;
  doctorSpesialist: string;
  doctorReviews: string;
};

const DoctorChatContent = ({
  doctorId,
  doctorName,
  doctorImage,
  doctorSpesialist,
  doctorReviews,
}: doctorProps) => {
  return (
    <div
      key={doctorId}
      className="drop-shadow-xl border-2 border-gray-100 text-center w-full bg-slate-50 rounded-lg flex justify-around p-5 items-center cursor-pointer hover:bg-gray-200"
    >
      <div>
        <img src={doctorImage} alt="doctor_image" className="w-24" />
      </div>
      <div>
        <p className=" font-bold md:text-xl">{doctorName}</p>
        <p className="text-sm font-light">{doctorSpesialist}</p>
        <p className="mt-5 text-sm md:text-base">{doctorReviews}</p>
      </div>
      <div>
        <ChatBubbleBottomCenterIcon className="w-6 text-gray-500 hover:text-gray-700" />
      </div>
    </div>
  );
};

export default DoctorChatContent;
