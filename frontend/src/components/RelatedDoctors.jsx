import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/DoctorsContext"
import { useNavigate } from "react-router-dom";

export default function RelatedDoctors({docId, speciality}) {
    const {doctors} = useContext(AppContext);
    const [relDoc, setRelDoc] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if(doctors && doctors.length > 0 && speciality){
            const getRelatedDoctors = doctors.filter(relDoctor => relDoctor.speciality === speciality && relDoctor._id !== docId);
            setRelDoc(getRelatedDoctors);
        } 
    }, [doctors, docId, speciality])
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
    <h1 className="text-3xl font-medium">Related Doctors</h1>
    <div className="w-[80%] grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {
            relDoc.slice(0, 10).map((items, index) => (
                <div onClick={() => {navigate(`/appointment/${items._id}`); scrollTo(0,0)}} key={index} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer 
                   flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500">
                    <img className="bg-blue-50" src={items.image} alt="" />
                    <div  className="p-4">
                        <div className="flex items-center gap-2 text-sm text-center text-green-500">
                           <p className="w-2 h-2 bg-green-500 rounded-full"></p><p>Available</p>
                        </div>
                        <p className="text-gray-900 text-lg">{items.name}</p>
                        <p>{items.speciality}</p>
                    </div>
                </div>
            ))
        }
    </div>
   </div>
  )
}
