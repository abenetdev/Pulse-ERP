import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/DoctorsContext";
import { assets } from "../assets/assets_frontend/assets";
export default function Doctors() {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [filter, setFilter] = useState(false);
  console.log(filter);
  useEffect(() => {
    if (!doctors || doctors.length === 0) {
      return; // Ensure doctors data is available before applying the filter
    }

    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc([...doctors]); // Spread doctors array to force state update
    }
  }, [doctors, speciality]);

 

  return (
    <div className="ml-10">
      <div
        onClick={() => setFilter(prev => !prev)}
        className="flex cursor-pointer gap-3 border w-fit px-6 py-2 shadow-md rounded-full"
      >
        <p className="text-gray-600 text-lg">Filter specialist</p>
        {!filter?<img width={30} src={assets.filter} alt="" />:<img width={30} height={20} src={assets.close} alt="" />}
      </div>
      <div className="flex flex-col sm:flex-row gap-5 mt-5">
        <div
          className={`flex flex-col gap-4 text-sm text-gray-600 transition-all duration-700 overflow-hidden ${
            filter ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("")
                : navigate("/doctors/General physician")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 transition-all cursor-pointer ${
              speciality === "General physician"
                ? "bg-indigo-400 text-black"
                : ""
            }`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("")
                : navigate("/doctors/Gynecologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 transition-all cursor-pointer ${
              speciality === "Gynecologist" ? "bg-indigo-400 text-black" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("")
                : navigate("/doctors/Dermatologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 transition-all cursor-pointer ${
              speciality === "Dermatologist" ? "bg-indigo-400 text-black" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("")
                : navigate("/doctors/Pediatricians")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 transition-all cursor-pointer ${
              speciality === "Pediatricians" ? "bg-indigo-400 text-black" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("")
                : navigate("/doctors/Neurologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 transition-all cursor-pointer ${
              speciality === "Neurologist" ? "bg-indigo-400 text-black" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologists"
                ? navigate("")
                : navigate("/doctors/Gastroenterologists")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 transition-all cursor-pointer ${
              speciality === "Gastroenterologists"
                ? "bg-indigo-400 text-black"
                : ""
            }`}
          >
            Gastroenterologists
          </p>
        </div>

        <div className="w-[80%] m-auto grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((items, index) => (
            <div
              onClick={() => navigate(`/appointment/${items._id}`)}
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer 
                flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-blue-50" src={items.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg">{items.name}</p>
                <p>{items.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
