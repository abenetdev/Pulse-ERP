import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/DoctorsContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctors from "../components/RelatedDoctors";

export default function Appointment() {
const { docId } = useParams();
const { doctors, currency } = useContext(AppContext);
const [doctorInfo, setDoctorInfo] = useState([]);
const [docSlots, setDocSlots] = useState([]);
const [slotIndex, setSlotIndex] = useState(0);
const [slotTime, setSlotTime] = useState('');

const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI","SAT"];

const getAvailableSlots = async () => {
  setDocSlots([]); // Clear previous slots

  let today = new Date();
  let slots = [];

  for (let i = 0; i < 7; i++) {
    let currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    let endTime = new Date(currentDate);
    endTime.setHours(21, 0, 0, 0); // Set end time to 9 PM

    if (today.getDate() === currentDate.getDate()) {
      currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
      currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
    } else {
      currentDate.setHours(10);
      currentDate.setMinutes(0);
    }

    let timeSlots = [];
    while (currentDate < endTime) {
      let formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      timeSlots.push({
        datetime: new Date(currentDate),
        time: formattedTime,
      });

      currentDate.setMinutes(currentDate.getMinutes() + 30); // Increment by 30 minutes
    }

    slots.push(timeSlots); // Add daily slots to the array
  }

  setDocSlots(slots); // Update state once
};

  useEffect(() => {
    getAvailableSlots();
  }, [doctorInfo]);

  useEffect(() => {
    const docData = doctors.find(singleDocInfo => singleDocInfo._id === docId);
    if(docData){
      setDoctorInfo(docData);
    }
  }, [docId, doctors])

  return (
    <div>
      {/* Doctors detail */}
      <div className="flex flex-col  w-[90%] m-auto sm:flex-row gap-4">
        <div>
          <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={doctorInfo.image} alt="" />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          {/* Doc info */}
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {doctorInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>{doctorInfo.degree} - {doctorInfo.speciality}</p>
            <button className="py-0.5 px-2 border text-xs rounded-full" >{doctorInfo.experience}</button>
          </div>
          {/*>>>>>>>>>>>>>> Doctor About >>>>>>>>>>>>>> */}
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">{doctorInfo.about}</p>
          </div>
          <p className="font-semibold mt-4">Appointment fee: <span>{currency}{doctorInfo.fees}</span></p>
        </div>
      </div>
      {/* --------- Booking slots------------ */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {
            docSlots && docSlots.length && docSlots.map((items, index) => (
              <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : "border border-gray-200"}`} key={index}>
                <p>{items[0] && daysOfWeek[items[0].datetime.getDay()]}</p>
                <p>{items[0] && items[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>
        <div className="flex items-center gap-3 w-[70%] overflow-x-scroll mt-4">
          {docSlots.length && docSlots[slotIndex].map((items, index) => (
            <p onClick={() => setSlotTime(items.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${items.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-500'}`} key={index}>
              {items.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">Book an Appointment</button>
      </div>
      <RelatedDoctors docId={docId} speciality={doctorInfo.speciality}/>
    </div>
  );
}
